import BaseElement from "./BaseElement";

export default class SelectElement extends BaseElement  {
    value: string = ""
    label: string = "Label"
    required: boolean = false
    name: string = ""
    options: string = ""
    
    constructor() {
        super();
        this.type = 3
    }
}