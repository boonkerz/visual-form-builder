import {v4 as uuidv4} from 'uuid';

export enum ElementType {
    HeaderElement = 1,
    InputElement = 2,
    SelectElement = 3,
    EMailElement = 4,
    Column2Element = 10
}

export default class BaseElement {
    uuid: string = "";
    type: ElementType = 1;
    isFocused: boolean = false;

    constructor() {
        this.uuid = uuidv4();
    }

    changeFocus(uuid: string) {
        if(this.uuid == uuid) {
            this.isFocused = true
        }else{
            this.isFocused = false
        }
    }

    insertItem(item: BaseElement, targetUuid: string) {
        return false
    }

    insertItemInEmptyColumn(item: BaseElement, targetUuid: string, column: Number) {
        return false
    }

    cutItem(existingUuid: string) {
        return null
    }

    deleteItem(item: BaseElement) {
        
    }
}
