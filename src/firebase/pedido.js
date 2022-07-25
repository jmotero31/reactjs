const pedido = (nombre,apellido, domicilio, correo, cel, cart, total) => {
  return {
    buyer: {
        nombre: nombre,
        apellido: apellido,
        domicilio: domicilio,
        correo: correo,
        cel: cel
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleDateString()
  }

}
export default pedido