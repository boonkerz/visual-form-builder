<script lang="ts" setup>
import Column2Element from '@/model/Column2Element';
import { computed, ref } from 'vue';
import RenderElements from '../RenderElements.vue';
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

const onDrop = (event: DragEvent, column: Number) => {
    const itemId = Number(event.dataTransfer?.getData('itemId'));


    if(column === 1) {
      theModel.value?.col1Items.push(Parser.getModelForType(itemId))
    }else{
      theModel.value?.col2Items.push(Parser.getModelForType(itemId))
    }
    event.stopImmediatePropagation()
    store.clearSelection()
}


    
</script>
<template>
  <div class="col-md-6" @drop="onDrop($event, 1)">
    <div class="p-1 border" >
        <RenderElements v-bind:items="theModel?.col1Items" />
    </div>
  </div>
  <div class="col-md-6" @drop="onDrop($event, 2)">
    <div class="ms-1 p-1 border">
        <RenderElements v-bind:items="theModel?.col2Items" />
    </div>
  </div>
</template>