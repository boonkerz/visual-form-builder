<script lang="ts" setup>
import BaseElement from '@/model/BaseElement';
import HeaderElementForm from './elements/HeaderElementForm.vue'
import InputElementForm from './elements/InputElementForm.vue'
import Column2ElementForm from './elements/Column2ElementForm.vue'
import Column2Element from '@/model/Column2Element';
import InputElement from '@/model/InputElement';
import { useElementStore } from '@/stores/Items';
import type { PropType } from 'vue';
import SelectElement from '@/model/SelectElement';
import SelectElementForm from './elements/SelectElementForm.vue'
import EMailElement from '@/model/EMailElement';
import EMailElementForm from './elements/EMailElementForm.vue'
import Parser from '@/Parser';

const props = defineProps({
    items: Array as PropType<BaseElement[]>
})

const store = useElementStore()

const elementFocus = (event: Event, item: BaseElement) => {
    store.changeFocus(item.uuid)
    store.setShowProperties(true)
    store.setActiveItem(item)
    event.stopImmediatePropagation()
}

const startDrag = (event: DragEvent, uuid: string) => { 
    event.dataTransfer!.dropEffect = 'move';
    event.dataTransfer!.effectAllowed = 'move';
    event.dataTransfer?.setData('mode', "sort");
    store.setDragMode("sort")
    store.setSourceDragUuid(uuid)
    event.stopImmediatePropagation()
    
}

const dragEnter = (event: DragEvent, uuid: string) => {
    if(store.getDragMode == "sort" && uuid != store.getSourceDragUuid) {
        store.moveItemBefore(store.getSourceDragUuid, uuid)
        event.stopImmediatePropagation()
    }
}

const stopDrag = (event: DragEvent, uuid: string) => {
    if(event.dataTransfer?.getData('mode') == "sort") {
        store.setDragMode("")
        event.stopImmediatePropagation()
    }
    if(store.dragMode == "insert") {
        const itemType = Number(event.dataTransfer?.getData('itemId'));
                
        store.addElementAfter(Parser.getModelForType(itemType), uuid)
        store.clearSelection()
        event.stopImmediatePropagation()
    }
}

const deleteItem = (item: BaseElement) => {
    store.deleteItem(item)
}

const editElementProperties = (item: BaseElement) => {
    store.setShowProperties(true)
    store.setActiveItem(item)
}
</script>

<template>
    <div class="row g-3">
        <div class="d-flex flex-wrap" @dragenter="dragEnter($event, item.uuid)" @drop="stopDrag($event, item.uuid)" v-on:click="elementFocus($event, item)" v-bind:class="{ 'border focused-element': item.isFocused === true }" v-for="item in items" :key="item.uuid">
            <HeaderElementForm
                v-if="item.type === 1"
                v-bind:field="item"
                />

            <InputElementForm
                v-if="item.type === 2"
                v-model="item as InputElement"
                />

            <EMailElementForm
                v-if="item.type === 4"
                v-model="item as EMailElement"
                />
            
            <SelectElementForm
                v-if="item.type === 3"
                v-model="item as SelectElement"
                />

            <Column2ElementForm
                v-if="item.type === 10"
                v-model="item as Column2Element"
                />

            <div class="action-circles" v-bind:class="{ invisible: item.isFocused === false }">
                <div @dragstart="startDrag($event, item.uuid)" draggable="true" style="top: 80px;" class="action-circle properties-circle">
                    <span class="bi bi-arrows-move"></span> <span class="properties-text">Move</span>
                </div>
                <div v-on:click="editElementProperties(item)" class="action-circle properties-circle">
                    <span class="bi bi-gear"></span> <span class="properties-text">Properties</span>
                </div>
                <div v-on:click="deleteItem(item)" class="action-circle delete-circle">
                    <span class="bi bi-trash"></span> <span class="delete-text">Remove</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.action-circle {
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: flex;
    height: 36px;
    font-size: 17px;
    overflow: hidden;
    padding: 10px;
    padding-top: 6px;
    position: absolute;
    right: -40px;
    text-align: center;
    width: 36px;
}

.action-circle:hover {
    border-radius: 500px;
    right: -40px;
    text-align: left;
    width: 100px;
}

.action-circles {
    position: relative;
}

.properties-circle {
    background-color: #424242;
    top: 0px;
    transition-property: all;
    transition-duration: 100ms;
    -webkit-transition-duration: 100ms;
    transition-timing-function: ease;
}

.properties-circle:hover {
    background-color: #616161;
}

.delete-circle {
    background-color: #F44336;
    top: 40px;
    transition-property: all;
    transition-duration: 100ms;
    -webkit-transition-duration: 100ms;
    transition-timing-function: ease;
}

.delete-circle:hover {
    background-color: #E57373;
}

.properties-text {
    font-size: 12px;
    padding: 5px;
    padding-left: 10px;
}

.delete-text {
    font-size: 12px;
    padding: 5px;
    padding-left: 10px;
}

.focused-element {
    border-color: blue !important;
}

</style>