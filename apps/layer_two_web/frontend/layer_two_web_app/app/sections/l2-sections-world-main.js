import { l2_world_nav } from "./world/l2-world-nav.js"
import { l2_world_stage } from "./world/l2-world-stage.js"


export class l2_sections_world_main extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.setAttribute("render-template", "false");
        this.setAttribute("show-template", "false");
        this.addEventListener("l2-world-nav Assemblies", this.show_world_view_assemblies);
        this.addEventListener("l2-world-nav Events", this.show_world_view_events);
        this.addEventListener("l2-world-nav Goals", this.show_world_view_goals);
        this.addEventListener("l2-world-nav Problems", this.show_world_view_problems);
        this.addEventListener("l2-world-nav Projects", this.show_world_view_projects);
        this.addEventListener("l2-world-nav Status", this.show_world_view_status);
    }

    static get observedAttributes() {
        return ['render-template', 'show-template'];
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = this.template();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'render-template' && oldValue === 'false' && newValue === 'true'){
            this.render_template();
            window.dispatchEvent(new Event('resize'));
        }
        if(name === 'show-template' && oldValue === 'false' && newValue === 'true'){
            this.show_template();
            window.dispatchEvent(new Event('resize'));
        }
        if(name === 'show-template' && oldValue === 'true' && newValue === 'false'){
            this.hide_template();
        }
    }

    
    show_world_view_assemblies() {
        this.shadowRoot.querySelector("l2-world-stage").setAttribute( "display-view", "Assemblies");
    }

    show_world_view_events() {
        this.shadowRoot.querySelector("l2-world-stage").setAttribute( "display-view", "Events");
    }

    show_world_view_goals() {
        this.shadowRoot.querySelector("l2-world-stage").setAttribute( "display-view", "Goals");
    }

    show_world_view_problems() {
        this.shadowRoot.querySelector("l2-world-stage").setAttribute( "display-view", "Problems");
    }

    show_world_view_projects() {
        this.shadowRoot.querySelector("l2-world-stage").setAttribute( "display-view", "Projects");
    }

    show_world_view_status() {
        this.shadowRoot.querySelector("l2-world-stage").setAttribute( "display-view", "Status");
    }
    

    render_template(){
        let content = document.importNode(this.shadowRoot.querySelector("#l2-sections-world-stage-template").content, true);
        this.shadowRoot.appendChild(content);
        this.shadowRoot.querySelector("style").innerHTML = this.l2_sections_world_main_style_show();
    }

    hide_template(){
        this.shadowRoot.querySelector("style").innerHTML = this.l2_sections_world_main_style_hide();
    }

    show_template(){
        this.shadowRoot.querySelector("style").innerHTML = this.l2_sections_world_main_style_show();
    }

    l2_sections_world_main_style_hide(){
        return `
        :host {
            display: none;
            background: white;
        }
        `;
    }

    l2_sections_world_main_style_show(){
        return `
        :host {
            display: grid;
            grid-template-columns: min-content auto;
            height: 100%;
            background: white;
        }`;
    }

    template() {
        return `<template id="l2-sections-world-stage-template">
        <style>${this.l2_sections_world_main_style_show()}</style>
        <l2-world-nav></l2-world-nav>
        <l2-world-stage></l2-world-stage>
        </template>
        `;
    }

}

customElements.define('l2-sections-world-main', l2_sections_world_main)