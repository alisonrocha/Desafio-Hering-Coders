import './style.css'

function Forms() {
  return `
  <div class="section-forms">
    <div class="container">          
      <div class="image-mussum">
        <img src="./../assets/images/img-mussum.png" alt="imagem do comediante mussum">
      </div>
      <div class="forms-rigth">      
        <div class="text-spotlight">
          <p>
            preencha seus dados para ganhar brindes e um vale de 20 bufunfis para gastar no site
          </p>        
        </div>
        <div>
          <form id="form">
            <div>
              <input type="text" id="nome" placeholder="Nome:" />
            </div>
            <div>
              <input type="email" id="email" placeholder="E-mail"/>
            </div>
            <div class="button">
              <button class="button-black" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>  
  `
}

export default Forms
