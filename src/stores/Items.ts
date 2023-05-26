import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import BaseElement from '@/model/BaseElement';
import type Column2Element from '@/model/Column2Element';

export const useElementStore = defineStore('items', {
  state: () => ({
      count: 0,
      items: [] as BaseElement[],
      activeItem: {} as BaseElement | {},
      showProperties: false,
      sourceDragUuid: ""
  }),
  getters: {
    getCount: (state) => state.count,
    getItems: (state) => state.items,
    getActiveItem: (state) => state.activeItem as BaseElement,
    isShowPropierties: (state) => state.showProperties,
    getSourceDragUuid: (state) => state.sourceDragUuid
  },
  actions: {
    addElement(item: BaseElement) {
        this.items.push(item);
    },
    changeFocus(uuid: string) {
      this.items.forEach(element => {
        element.changeFocus(uuid);
      })
    },
    clearSelection() {
      this.items.forEach(element => {
        element.changeFocus("xx");
      })
      this.showProperties = false
    },
    setShowProperties(value: boolean) {
      this.showProperties = value;
    },
    setActiveItem(item: BaseElement) {
      this.activeItem = item;
    },
    moveItemToIndex(oldIndex: number, newIndex: number) {
      const item = this.items.splice(oldIndex, 1)[0];
      this.items.splice(newIndex, 0, item);
    },
    moveItemBefore(dragUuid: string, targetUuid: string): boolean {
      const item = this.cutItem(this.items, dragUuid);
      console.log("itemscount", this.items.length)
      return this.insertItem(this.items, item!, targetUuid)
    },
    setSourceDragUuid(uuid: string) {
      this.sourceDragUuid = uuid
    },
    cutItem(items: BaseElement[], existingUuid: string) {
      var item: BaseElement|null = null;
      items.forEach((element,indexArray) => {
          if(element.uuid === existingUuid) {
            item = items.splice(indexArray, 1)[0];
          }
          if(item === null) {
            item = element.cutItem(existingUuid)
          }
          
      });
      return item;
    },
    insertItem(items: BaseElement[], item: BaseElement, targetUuid: string): boolean {
      var inserted = false;
      for (let i = 0; i < items.length; ++i) {
        if(items[i].uuid === targetUuid) {
          items.splice(i, 0, item);
          inserted = true
          break;
        }
        if(!inserted) {
          inserted = items[i].insertItem(item, targetUuid)
        }
      }

      return inserted
    }
  }
})
