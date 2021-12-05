import './modal-style.css'
import PropTypes from 'prop-types'

const EmptyModal = ({ showModal, title, content }) => {
     const closeBody = (e) => {
          if (e.target.className === 'modal')
               showModal.current.style.display = 'none'
     }

     const closeModal = () => {
          showModal.current.style.display = 'none'
     }

     return (
          <div
               ref={showModal}
               onClick={(e) => closeBody(e)}
               id="myModal"
               className="modal"
          >
               <div className="modal-content">
                    <header className="modal-header">
                         {title ? title : 'Book Title'}
                         <span onClick={closeModal} className="close">
                              &times;
                         </span>
                    </header>

                    <div className="modal-props">
                         <p>{content}</p>
                    </div>
               </div>
          </div>
     )
}

EmptyModal.propTypes = {
     showModal: PropTypes.object,
     title: PropTypes.string,
     content: PropTypes.string,
}

export default EmptyModal
