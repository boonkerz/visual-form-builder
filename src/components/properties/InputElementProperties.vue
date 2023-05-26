<script lang="ts" setup>
import InputElement from '@/model/InputElement';
import { computed } from 'vue';

const props = defineProps({
    modelValue: InputElement
})

let emit = defineEmits(['update:modelValue']);

const theModel = computed({ 
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
  });

</script>

<template>
    <div class="form-group">
        <label>Heading Text</label>
        <input type="text" class="form-control form-control-sm" v-model="theModel!.label">
    </div>
    <div class="form-group">
        <label>Placeholder</label>
        <input type="text" class="form-control form-control-sm" v-model="theModel!.placeholder">
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
</template>