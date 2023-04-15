export enum AttributeButton {
    "btn_categorie" = "btn_categorie"
}

export default class Button extends HTMLElement {
    btn_categorie?: string;

    static get observedAttributes(){
        const button: Record <AttributeButton, null> = {
            btn_categorie: null,
        }
        return Object.keys(button);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const button = this.ownerDocument.createElement('button');

        })
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-button',Button);