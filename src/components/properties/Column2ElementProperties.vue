<script lang="ts" setup>
import Column2Element from '@/model/Column2Element';
import { computed } from 'vue';

const props = defineProps({
    modelValue: Column2Element
})

let emit = defineEmits(['update:modelValue']);

const theModel = computed({ 
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
  });

</script>

<template>
    <h6>Size Col 1 / Col 2</h6>
    <div class="row">
        
        <div class="col-6">
            <input type="text" class="form-control form-control-sm" v-model="theModel!.col1Size">
        </div>
        <div class="col-6">
            <input type="text" class="form-control form-control-sm" v-model="theModel!.col2Size">
        </div>
    </div>
</template>