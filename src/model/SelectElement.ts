import BaseElement from "./BaseElement";
import type SelectElementOption from "./SelectElementOption";


export default class SelectElement extends BaseElement  {
    value: string = ""
    label: string = "Label"
    required: boolean = false
    name: string = ""
    options: SelectElementOption[] = []
    
    constructor() {
        super();
        this.type = 3
    }

    addOption(option: SelectElementOption) {
        this.options.push(option)
    }
}