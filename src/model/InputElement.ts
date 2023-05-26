import BaseElement from "./BaseElement";

export default class InputElement extends BaseElement  {
    value: string = "Value"
    label: string = "Label"
    placeholder: string = "Placeholder"
    required: boolean = false
    name: string = ""
    
    constructor() {
        super();
        this.type = 2
    }
}