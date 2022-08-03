import { addDoc, collection, doc, getDoc, writeBatch} from "firebase/firestore"
import { db } from "../firebase/config"

const orden = (cart, pedidoConfirmado, {closeModal1, setCart}) => {
    console.log("Guardar orden");
    console.log(cart);
    console.log(pedidoConfirmado);
    
    //Primer paso: abrir un batch
    const batch = writeBatch(db)
    
    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []
    
    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'productos', productoEnCart.id))
        .then(async (documentSnapshot) => {
            //Generamos los datos del producto en tiempo real. Obtenemos el stock justo antes de guardar.
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};
            //Hacemos un update en caso que el stock supere a la cantidad.
            

            if (producto.stock >= productoEnCart.cant) {
                batch.update(doc(db, 'productos', producto.id) ,{
                    stock: producto.stock - productoEnCart.cant
                })
            } else {
                outOfStock.push(producto)
            }
            console.log("Productos fuera de stock:");
            console.log(outOfStock);
    
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'ordenes'), pedidoConfirmado).then(({ id }) => {
                    //Recién hacemos el commit una vez que se genera la order
                    batch.commit().then(() => {
                        alert("Se genero la order con id: " + id)
                        closeModal1()
                        setCart([])
                      
                      
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
            //Si tenemos productos fuera de stock al momento de generar la order avisamos al usuario
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                alert(`Productos fuera de stock: ${mensaje}`)
            }
        })
    })
}

export default orden;