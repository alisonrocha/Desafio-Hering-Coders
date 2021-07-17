import './style.css'

function Header() {
  return `
    <header id="header">
      <nav class="container"> 
        <div id="menu" class="menu">
          <ul class="grid">
            <li><a class="title" href="#home">Promoção</a></li>
            <li><a class="title" href="#about">Baixe o Regulamento</a></li>
            <li><a class="title" href="#services">Site para mais produtos</a></li>           
          </ul>
        </div>
        
        <div id="open" class="toggle icon-menu"></div>
        <div id="closeMenu" class="toggle icon-close"></div>
      </nav>
    </header>
  `
}

export default Header
