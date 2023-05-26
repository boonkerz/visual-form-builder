import type BaseElement from "./model/BaseElement"
import Column2Element from "./model/Column2Element"
import HeaderElement from "./model/HeaderElement"
import InputElement from "./model/InputElement"

export default class Parser {

    static getModelForType(type: Number) : BaseElement {
        switch(type) {
            case 10:
                return new Column2Element
            case 2:
                return new InputElement
            case 1:
            default:
                return new HeaderElement 
        }
    }
}