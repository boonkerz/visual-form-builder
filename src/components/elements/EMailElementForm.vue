<script lang="ts" setup>
import EMailElement from '@/model/EMailElement';
import { computed } from 'vue';

const props = defineProps({
    modelValue: EMailElement
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
      <input :type="theModel?.htmlType" :name="theModel?.name" :required="theModel?.required"  class="form-control" :placeholder="theModel?.placeholder" :value="theModel?.value">
    </div>
</template>
    
