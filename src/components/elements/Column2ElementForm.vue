<script lang="ts" setup>
import Column2Element from '@/model/Column2Element';
import { computed } from 'vue';
import RenderElements from '../RenderElements.vue';
import EmptyElementForm from './EmptyElementForm.vue'
import Parser from '@/Parser';
import { useElementStore } from '@/stores/Items';

const props = defineProps({
    modelValue: Column2Element
})

const store = useElementStore();

let emit = defineEmits(['update:modelValue']);

const theModel = computed({  // Use computed to wrap the object
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
  });

const onDrop = (event: DragEvent, targetUuid: string, column: Number) => {
    if(store.getDragMode == "insert") {
      const itemId = Number(event.dataTransfer?.getData('itemId'));

      if(column === 1) {
        theModel.value?.col1Items.push(Parser.getModelForType(itemId))
      }else{
        theModel.value?.col2Items.push(Parser.getModelForType(itemId))
      }
      
      store.setDragMode("")
      event.stopImmediatePropagation()
    }
}

const dragEnterEmpty = (event: DragEvent, targetUuid: string, column: Number) => {
  if(store.getDragMode == "sort") {
    store.moveSortItemToEmptyElement(targetUuid, column)
    event.stopImmediatePropagation()
  }
}


    
</script>
<template>
  <div :class="'col-' + theModel?.col1Size">
    <div class="p-1 rounded-3 border">
        <RenderElements 
          @drop="onDrop($event, theModel!.uuid, 1)"
          v-if="theModel!.col1Items.length > 0"
          v-bind:items="theModel?.col1Items"/>

         <EmptyElementForm
         @drop="onDrop($event, theModel!.uuid, 1)" @dragenter="dragEnterEmpty($event, theModel!.uuid, 1)"
         v-if="theModel!.col1Items.length == 0" />
    </div>
  </div>
  <div :class="'col-' + theModel?.col2Size">
    <div class="ms-1 p-1 rounded-3 border">
        <RenderElements 
        @drop="onDrop($event, theModel!.uuid, 2)"
        v-if="theModel!.col2Items.length > 0"
        v-bind:items="theModel?.col2Items" />

        <EmptyElementForm 
        @drop="onDrop($event, theModel!.uuid, 2)" @dragenter="dragEnterEmpty($event, theModel!.uuid, 2)"
        v-if="theModel!.col2Items.length == 0"/>
    </div>
  </div>
</template>