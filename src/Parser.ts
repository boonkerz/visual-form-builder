import type BaseElement from "./model/BaseElement"
import Column2Element from "./model/Column2Element"
import EMailElement from "./model/EMailElement"
import HeaderElement from "./model/HeaderElement"
import InputElement from "./model/InputElement"
import SelectElement from "./model/SelectElement"

export default class Parser {

    static getModelForType(type: Number) : BaseElement {
        switch(type) {
            case 10:
                return new Column2Element
            case 2:
                return new InputElement
            case 3:
                return new SelectElement
            case 4:
                return new EMailElement
            case 1:
            default:
                return new HeaderElement 
        }
    }
}