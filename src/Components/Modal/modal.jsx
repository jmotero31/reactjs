import './styles.css'
import Button from 'react-bootstrap/Button';

const modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation()

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
            <Button className="modal-close" onClick={closeModal}>X</Button> 
            {children}

        </div>
    </article>
  )
}

export default modal