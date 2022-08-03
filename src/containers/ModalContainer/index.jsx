import { useModal } from '../../Components/Hooks/useModal'
import Modal from '../../Components/Modal/modal'
import ContactFrom from '../../contactForm/contactForm'



const ModalContainer = ({total}) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(true)
    // const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    
  
  return (
    <div>
        {/* <button onClick={openModal1}>Boton</button> */}
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            
            <ContactFrom total={total}></ContactFrom>

        </Modal>
    </div>
  )
}

export default ModalContainer