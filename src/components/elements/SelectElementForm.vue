<script lang="ts" setup>
import SelectElement from '@/model/SelectElement';
import { computed } from 'vue';

const props = defineProps({
    modelValue: SelectElement
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
      <select 
        :name="theModel?.name" 
        :required="theModel?.required"  
        class="form-control" >
        <option v-for="option in theModel!.options" :value="option" :selected="option.value == theModel?.value">{{option.label}}</option>
      </select>
    </div>
</template>
    
