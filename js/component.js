class WelcomeElement extends HTMLElement {
    constructor(){
        super();
        
        this.attachShadow({mode:'open'})

    }

    connectedCallback(){
        const firstMessage = this.getAttribute('first-message');
        const lastMessage = this.getAttribute('last-message');
        const avatarUrl = this.getAttribute('avatar-url');

        this.shadowRoot.innerHTML = 
        `  <style>
            img {
                width: 200px;
                height: 200px;
                border-radius: 100px;
            }
            h2{
                color: gray;
                font-family:'Franklin Gothic Medium';
                font-size:40px;
                padding:0 10px;
                line-height:35px;
                
            }
            h3{
                color: #FFF;
                font-family:'Lucida sans-serif';
                font-size:25px;
                margin:0px;
                padding:0 10px;
            }

            </style>
            <img src = "${avatarUrl}">
            <h2>${firstMessage}</h2>
            <h3> ${lastMessage}</h3>
        `;
    }
}

window.customElements.define('welcom-user', WelcomeElement);