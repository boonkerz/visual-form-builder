import BaseElement from "./BaseElement";

export default class Column2Element extends BaseElement  {
    
    col1Items: BaseElement[] = [];
    col2Items: BaseElement[] = [];

    constructor() {
        super();
        this.type = 10
    }

    changeFocus(uuid: string): void {
        this.col1Items.forEach(element => {
            element.changeFocus(uuid)
        });
        this.col2Items.forEach(element => {
            element.changeFocus(uuid)
        });
    }
    cutItem(existingUuid: string) {
        var item: BaseElement|null = null;
        this.col1Items.forEach((element,indexArray) => {
            if(element.uuid === existingUuid) {
                item = this.col1Items.splice(indexArray, 1)[0]
            }
            if(item === null) {
                item = element.cutItem(existingUuid)
            }
        });
        this.col2Items.forEach((element,indexArray) => {
            if(element.uuid === existingUuid) {
                item = this.col2Items.splice(indexArray, 1)[0]
            }
            if(item === null) {
                item = element.cutItem(existingUuid)
            }
        });
        return item
    }

    insertItem(item: BaseElement, targetUuid: string): boolean {
        var inserted = false;
        for (let i = 0; i < this.col1Items.length; ++i) {
            if(this.col1Items[i].uuid === targetUuid) {
                this.col1Items.splice(i, 0, item);
                inserted = true;
                return false
            }
            if(!inserted) {
                this.col1Items[i].insertItem(item, targetUuid)
            }
        }
        
        for (let i = 0; i < this.col2Items.length; ++i) {
            if(this.col2Items[i].uuid === targetUuid) {
                this.col2Items.splice(i, 0, item);
                inserted = true;
                return false
            }
            if(!inserted) {
                this.col2Items[i].insertItem(item, targetUuid)
            }
        }

        return inserted
    }
}