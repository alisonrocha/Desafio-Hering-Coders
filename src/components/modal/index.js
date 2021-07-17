import './style.css'

function Modal() {
  const name = localStorage.getItem('name')
  if (name !== null) {
    return `
    <div id="ismodal">
    <div class="modal">
      <div class="container title">  
        <div id="closeModal"  class="toggle icon-close"></div>        
        <p>Obrigadis, <span>${name}</span> ;) </br> Brevis receberá as melhores promis para tomar aquele mé</>
      </div>
    </div>  
    </div>
    `
  }
}

export default Modal
