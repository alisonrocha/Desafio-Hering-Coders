import './style.css'

function Modal() {
  if (localStorage.getItem('name') !== null) {
    const name = localStorage.getItem('name')
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
