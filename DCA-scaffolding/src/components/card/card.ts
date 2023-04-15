import { AttributeButton } from "../button/button";

export enum AttributeCard {
    "categories" = "categories",
    "btn_categorie" = "btn_categorie",
}

export enum AttributeFigure {
    
}

export default class Card extends HTMLElement{
    categories: string = "";
    btn_categorie: string = "";

    static get observedAttributes(){
        const card: Record <AttributeCard,null> = {
            categories: null,
            btn_categorie: null,

        }
        return Object.keys(card);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            const container = this.ownerDocument.createElement('section');
            
            if(this.shadowRoot) this.shadowRoot.innerHTML = `
            <section class="container">
            <h1>${this.categories}</h1>
            </section>
        `;

            const button = this.ownerDocument.createElement('app-button');
            button.setAttribute(AttributeButton.btn_categorie, this.btn_categorie);

            container.appendChild(button);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-card', Card)