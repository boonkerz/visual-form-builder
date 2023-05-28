import BaseElement from "./BaseElement";

export default class HeaderElement extends BaseElement  {
    kind: string = "h1"
    label: String = "Header"
    subheader: String = "Subheader"
    
    constructor() {
        super();
    }
}