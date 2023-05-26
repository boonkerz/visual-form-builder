import BaseElement from "./BaseElement";

export default class HeaderElement extends BaseElement  {
    kind: string = "h1"
    label: String = Math.random().toString()
    subheader: String = "Subheader"
    
    constructor() {
        super();
    }
}