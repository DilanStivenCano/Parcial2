import "./components/index"
import {getData} from './services/data'
import { AttributeCard } from './components/card/card';
import { ApiType } from './types/types';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback(){
        const data = await getData();
        this.render(data)
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        data.forEach((e: ApiType) => {
            const card = this.ownerDocument.createElement('app-card');
            card.setAttribute(AttributeCard.categories, e.categories);
            card.setAttribute(AttributeCard.btn_categorie,e.btn_categorie);
            this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-container', AppContainer)