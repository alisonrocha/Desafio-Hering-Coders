import './style.css'

function Header() {
  return `
    <header id="header">
      <nav class="container"> 
        <div class="menu">
          <ul class="grid">
            <li><a class="title" href="#home">Promoção</a></li>
            <li><a class="title" href="#about">Baixe o Regulamento</a></li>
            <li><a class="title" href="#services">Site para mais produtos</a></li>           
          </ul>
        </div>
        
        <div class="toggle icon-menu"></div>
        <div class="toggle icon-close"></div>
      </nav>
    </header>
  `
}

export default Header