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
      sourceDragUuid: "",
      dragMode: "",
  }),
  getters: {
    getCount: (state) => state.count,
    getItems: (state) => state.items,
    getActiveItem: (state) => state.activeItem as BaseElement,
    isShowPropierties: (state) => state.showProperties,
    getSourceDragUuid: (state) => state.sourceDragUuid,
    getDragMode: (state) => state.dragMode
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
    deleteItem(item: BaseElement) {
      for (let i = 0; i < this.items.length; ++i) {
        if(this.items[i].uuid === item.uuid) {
          this.items.splice(i, 1);
          break;
        }
        this.items[i].deleteItem(item)
      }
    },
    moveSortItemToEmptyElement(targetUuid: string, column: Number) {
      const item = this.cutItem(this.items, this.sourceDragUuid);
      this.insertItemInEmptyColumn(this.items, item!, targetUuid, column)

    },
    moveItemBefore(dragUuid: string, targetUuid: string): boolean {
      const item = this.cutItem(this.items, dragUuid);
      return this.insertItem(this.items, item!, targetUuid)
    },
    addElementAfter(item: BaseElement, targetUuid: string) {
      this.insertItem(this.items, item!, targetUuid)
    },
    setSourceDragUuid(uuid: string) {
      this.sourceDragUuid = uuid
    },
    cutItem(items: BaseElement[], existingUuid: string) {
      let item: BaseElement|null = null;
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
      let inserted = false;
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
    },
    insertItemInEmptyColumn(items: BaseElement[], item: BaseElement, targetUuid: string, column: Number): boolean {
      let inserted = false;
      for (let i = 0; i < items.length; ++i) {
          inserted = items[i].insertItemInEmptyColumn(item, targetUuid, column)
      }

      return inserted
    },
    setDragMode(mode: string) {
      this.dragMode = mode
    }
  }
})
