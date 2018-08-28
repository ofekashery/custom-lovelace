class HebrewGreetingCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    setConfig(config) {
        if (!config.background) {
            throw new Error('Please define a background');
        }

        const root = this.shadowRoot;
        if (root.lastChild) root.removeChild(root.lastChild);
        const card = document.createElement('ha-card');
        const content = document.createElement('div');
        const style = document.createElement('style');
        content.id = 'container';
        style.textContent = `
            ha-card, #container {
                height: ${config.height ? config.height : 200}px;
            }
            .bgimg {
                background-image: url(${config.background});
                height: 100%;
                background-position: center;
                background-size: cover;
                position: relative;
                color: white;
                font-size: 20px;
            }
    
            .topleft {
                position: absolute;
                top: 0;
                left: 16px;
            }
            
            .topright {
                position: absolute;
                top: 0;
                right: 16px;
            }
            
            .middle {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                width: 100%;
            }
        `;

        content.innerHTML = `
            <div class="bgimg">
              <p id="time" class="topleft"></p>
              <p id="temperature" class="topright"></p>
              <div class="middle">
                <h1 id="name"></h1>
              </div>
            </div>
        `;


        card.appendChild(style);
        card.appendChild(content);
        root.appendChild(card);
        this._config = config;
    }

    set hass(hass) {
        const config = this._config;

        let greeting, hours = new Date().getHours(), time = new Date().getHours() + ":" + new Date().getMinutes();

        if (6 <= hours && hours < 12) {
            greeting = "בוקר טוב";
        } else if (12 <= hours && hours < 18) {
            greeting = "צהרים טובים"
        } else if (18 <= hours && hours < 22) {
            greeting = "ערב טוב"
        } else {
            greeting = "לילה טוב"
        }

        if (hass.user) {
            if (config[hass.user.id]) {
                greeting += " " + config[hass.user.id];
            } else {
                greeting += " " + hass.user.name;
            }
        }

        this.shadowRoot.getElementById('name').innerHTML = greeting;
        this.shadowRoot.getElementById('time').innerHTML = time;

        if (hass.states[config.weather] && hass.states[config.weather].attributes['temperature']) {
            let temperature = hass.states[config.weather].attributes['temperature'];
            this.shadowRoot.getElementById('temperature').innerHTML = temperature + "°";
        }
    }

    getCardSize() {
        return 1;
    }
}
customElements.define('hebrew-greeting-card', HebrewGreetingCard);