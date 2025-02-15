import { l2_leaflet_map } from "../l2-leaflet-map.js"

export class l2_local_status extends HTMLElement {
    constructor() {
        super();
        document.addEventListener('l2-local-status-mbox', this.handle_mbox_message.bind(this), true);
    }

    handle_mbox_message(event){

    }

    connectedCallback() {
        this.innerHTML = this.template();
    }

    template() {
        return `
        ${this.html_constructor()}
        `;
    }

    html_constructor() {
        return `
        <l2-leaflet-map section='Local' sub-section='Status' view='Local Status' class='l2-local-status-map'></l2-leaflet-map>
        <svg class="l2-local-status-rings" version="1.1" viewBox="0 0 1119.2297 523.22966" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="559.61487" cy="261.61484" rx="275.82001" ry="93.360001" style="fill:none;opacity:.98000004;stroke-dasharray:15.11811024, 3.77952756, 1.88976378, 3.77952756;stroke-width:1.8897638;stroke:#969696"/>
        <ellipse cx="559.61487" cy="284.65485" rx="398.64001" ry="150.24001" style="fill:none;opacity:.98000004;stroke-dasharray:15.11811024, 3.77952756, 1.88976378, 3.77952756;stroke-width:1.8897638;stroke:#969696"/>
        <ellipse cx="559.61487" cy="317.19482" rx="558.66998" ry="205.09" style="fill:none;opacity:.98000004;stroke-dasharray:15.11811024, 3.77952756, 1.88976378, 3.77952756;stroke-width:1.8897638;stroke:#989898"/>
        </svg>
        `;
    }

}

customElements.define('l2-local-status', l2_local_status)
