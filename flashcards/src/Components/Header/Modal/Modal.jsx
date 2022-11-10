import './Modal.css'


const Modal = ({title,onClose,children,show,noClose}) => {
    return show && noClose == null ?(
        <>
        <div className = "modal-bg">
            <div className='modal'>
                <div className="modal-header">
                    <h3>{title}</h3>
                    <span className='modal-close-btn' onClick ={onClose}>X</span>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
        </> 
     ) :show && noClose ? (
        <div className="modal-bg">
        <div className='modal'>
            <div className="modal-header">
                <h3>{title}</h3>
            </div>
            <div className="modal-body">
                {children}
            </div>
        </div>
    </div>
     ):null;
}
 
export default Modal;