<script lang="ts" setup>
import BaseElement from '@/model/BaseElement';
import HeaderElementForm from './elements/HeaderElementForm.vue'
import InputElementForm from './elements/InputElementForm.vue'
import Column2ElementForm from './elements/Column2ElementForm.vue'
import Column2Element from '@/model/Column2Element';
import type InputElement from '@/model/InputElement';
import { useElementStore } from '@/stores/Items';
import type { PropType } from 'vue';
import { isTSMethodSignature, isTemplateElement } from '@babel/types';

const props = defineProps({
    items: Array as PropType<BaseElement[]>
})

const store = useElementStore()

var dragPrevIndex : number = 0;

var dragMode : string = "";

var dragUuid : string = "";

const elementFocus = (event: Event, item: BaseElement) => {
    store.changeFocus(item.uuid)
    event.stopImmediatePropagation()
}

const startDrag = (event: DragEvent, index: number, uuid: string) => { 
    console.log("startdrag")
    event.dataTransfer!.dropEffect = 'move';
    event.dataTransfer!.effectAllowed = 'move';
    event.dataTransfer?.setData('mode', "sort");
    dragMode = "sort"
    store.setSourceDragUuid(uuid)
    event.dataTransfer?.setData('prev-index', index.toString());
    
}

const dragEnter = (event: DragEvent,index: number, uuid: string) => {
    console.log("target", uuid)
    console.log("source", dragUuid)
    if(dragMode == "sort" && uuid != dragUuid) {
        store.moveItemBefore(dragUuid, uuid)
        //event.stopImmediatePropagation
    }
}

const stopDrag = (event: DragEvent, index: number) => {
    console.log("stopdrag")
    if(event.dataTransfer?.getData('mode') == "sort") {
        dragMode = ""
        event.stopImmediatePropagation()
    }
}

const editElementProperties = (item: BaseElement) => {
    store.setShowProperties(true)
    store.setActiveItem(item)
}
</script>

<template>
    <div class="row g-3">
        <div class="d-flex" @dragstart="startDrag($event, index, item.uuid)" @dragenter="dragEnter($event, index, item.uuid)" @drop="stopDrag($event, index)" draggable="true" v-on:click="elementFocus($event, item)" v-bind:class="{ 'border focused-element': item.isFocused === true }" v-for="(item, index) in items" :key="item.uuid">
            <div>{{ item.uuid }}</div>

            <HeaderElementForm
                v-if="item.type === 1"
                v-bind:field="item"
                >
                </HeaderElementForm>

            <InputElementForm
                v-if="item.type === 2"
                v-model="item as InputElement"
                >
                </InputElementForm>

            <Column2ElementForm
                v-if="item.type === 10"
                v-model="item as Column2Element"
                >
                </Column2ElementForm>

            <div class="action-circles" v-bind:class="{ invisible: item.isFocused === false }">
                <div v-on:click="editElementProperties(item)" class="action-circle properties-circle">
                    <span class="bi bi-gear"></span> <span class="properties-text">Properties</span>
                </div>
                <div class="action-circle delete-circle">
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
    right: -104px;
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