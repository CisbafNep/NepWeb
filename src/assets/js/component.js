class headSite extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <a href="index.html">
        <img class="logo" src="./assets/midia/BANNER_SITE_NOVA_LOGO.png" 
             onmouseover="this.style.transform='scale(1.2)'" 
             onmouseout="this.style.transform='scale(1)'" 
             style="transform: scale(1); transition: transform 0.3s;">
        </a>
        <div id="mainhead">
                <a href="index.html">Página Inicial</a>
                <a href="about.html">Sobre o NEP</a>                
               <a href="timeline.html">História do NEP</a>
               <a href="https://api.whatsapp.com/send/?phone=5521968843062&text&type=phone_number&app_absent=0" target="_blank">Fale conosco</a>
            <a href="https://plataforma.cisbaf.org.br/my/" ><button class="btnAcess">Entrar</button></a>
        </div>
    
        <!-- Ícone do menu hamburguer -->
        <div class="menu-icon" onclick="toggleMenu()">☰</div>
    </header>
        `
    }
}
customElements.define("site-header", headSite);

class menuSide extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="side-menu" id="sideMenu">
        <button class="close-btn" onclick="toggleMenu()">✖</button>
            <a href="index.html"><img class="logo" src="./assets/midia/BANNER_SITE_NOVA_LOGO.png" style="width: 200px;"></a>
            <a href="index.html">Página Inicial</a>
           <a href="about.html">Sobre o NEP</a>
                <a href="timeline.html">História do NEP</a>
            <a href="https://api.whatsapp.com/send/?phone=5521968843062" target="_blank">Fale conosco</a>
        <a href="https://plataforma.cisbaf.org.br/my/" ><button class="btnAcess">Entrar</button></a>
    </div>
        `
    }
}
customElements.define("side-menu", menuSide);

class Footers extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <a href="index.html"><img id="imgfoot" src="./assets/midia/BANNER_SITE_NOVA_LOGO.png" alt=""></a>
    <div class="icons">
        <a href="https://www.instagram.com/cisbaf?igsh=YjZ4YjBlNGhhdW9z" target="_blank"><img src="./assets/midia/instagram.png"  alt=""></a>
        <a href="https://api.whatsapp.com/send/?phone=5521968843062&text&type=phone_number&app_absent=0" target="_blank"><img src="./assets/midia/whatsapp.png" alt=""></a>
    </div>
    <p><b>Cisbaf - Nep © 2025 - Todos os direitos reservados</b></p>
   
</footer>
        `
    }
}
customElements.define("foot-main", Footers);

class Nepbot extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div>
        <button id="openChat" aria-label="Assistente NEP">
            <img src="/assets/midia/Robotnep.png" alt="Assistente NEP">
        </button>

        <div id="chatBox">
            <div id="chatHeader"><span><img src="/assets/midia/ICON.png" alt=""></span>CyberNep - Assistente Virtual</div>

            <div id="chatMessages"></div>

            <div id="chatInput">
                <input type="text" id="userInput" placeholder="Digite sua pergunta..." autocomplete="off">
                <button id="sendBtn">Enviar</button>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define("nep-bot", Nepbot);
