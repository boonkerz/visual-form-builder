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
  
const splitStringByLine = (str: string) => {
      return str.split("\n");
    }

</script>

<template>
    <div class="col-12">
      <label>{{theModel?.label}}</label>
      <select 
        :name="theModel?.name" 
        :required="theModel?.required"  
        class="form-control" >
        <option v-for="option in splitStringByLine(theModel!.options)" :value="option" :selected="option == theModel?.value">{{option}}</option>
      </select>
    </div>
</template>
    
