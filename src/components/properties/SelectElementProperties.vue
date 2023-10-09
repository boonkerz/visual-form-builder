<script lang="ts" setup>
import SelectElement from '@/model/SelectElement';
import SelectElementOption from '@/model/SelectElementOption';
import { computed, reactive } from 'vue';

const props = defineProps({
    modelValue: SelectElement
})

let emit = defineEmits(['update:modelValue']);

const theModel = computed({ 
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
  });

const myObject = new SelectElementOption

const addItem = () => {
    const elm = new SelectElementOption
    elm.label = myObject.label
    elm.value = myObject.value
    theModel.value?.options.push(elm)
}

</script>

<template>
    <div class="form-group">
        <label>Heading Text</label>
        <input type="text" class="form-control form-control-sm" v-model="theModel!.label">
    </div>
    <div class="form-group">
        <label>Value</label>
        <input type="text" class="form-control form-control-sm" v-model="theModel!.value">
    </div>
    <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control form-control-sm" v-model="theModel!.name">
    </div>
    <div class="form-group">
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" v-model="theModel!.required">
            <label class="form-check-label" for="flexSwitchCheckDefault">Required</label>
        </div>
    </div>
    <h6>Options</h6>
    <ul>
        <li v-for="item in theModel?.options">
            {{ item.value }}: {{ item.label }}
        </li>
    </ul>
    <div class="row">
        <div class="col-6 form-group">
            <label>Value</label>
            <input type="text" class="form-control form-control-sm" v-model="myObject!.value">
        </div>
        <div class="col-5 form-group">
            <label>Label</label>
            <input type="text" class="form-control form-control-sm" v-model="myObject!.label">
        </div>
        <div class="col-1">
            <button type="button" v-on:click="addItem()">Add</button>
        </div>
    </div>
</template>