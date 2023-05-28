import InputElement from "./InputElement";

export default class EMailElement extends InputElement  {
    htmlType: string = "email"
    
    constructor() {
        super();
        this.type = 4
    }
}