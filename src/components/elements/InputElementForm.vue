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
    <div class="col-12">
      <label>{{theModel?.label}}</label>
      <input type="text" :name="theModel?.name" :required="theModel?.required"  class="form-control" :placeholder="theModel?.placeholder" :value="theModel?.value">
    </div>
</template>
    
