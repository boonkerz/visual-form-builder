import BaseElement from "./BaseElement";

export default class InputElement extends BaseElement  {
    value: string = ""
    label: string = "Label"
    placeholder: string = "Placeholder"
    required: boolean = false
    name: string = ""
    htmlType: string = "text"
    
    constructor() {
        super();
        this.type = 2
    }
}