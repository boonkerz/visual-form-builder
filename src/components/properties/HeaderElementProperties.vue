<script lang="ts" setup>
import HeaderElement from '@/model/HeaderElement';
import { computed } from 'vue';

const props = defineProps({
    modelValue: HeaderElement
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
        <label>Subheader Text</label>
        <input type="text" class="form-control form-control-sm" v-model="theModel!.subheader">
    </div>
    <div class="form-group">
        <label>Heading Size</label>
        <div class="radio-wrapper">
            <label v-bind:class="{ 'label-active': theModel!.kind === 'h1' }" class="radio-inline form-control-sm">
                <input type="radio" name="optradio" v-model="theModel!.kind" value="h1">H1
            </label>
            <label v-bind:class="{ 'label-active': theModel!.kind === 'h2' }" class="radio-inline form-control-sm">
                <input type="radio" name="optradio" v-model="theModel!.kind" value="h2">H2
            </label>
            <label v-bind:class="{ 'label-active': theModel!.kind === 'h3' }" class="radio-inline form-control-sm">
                <input type="radio" name="optradio" v-model="theModel!.kind" value="h3">H3
            </label>
            <label v-bind:class="{ 'label-active': theModel!.kind === 'h4' }" class="radio-inline form-control-sm">
                <input type="radio" name="optradio" v-model="theModel!.kind" value="h4">H4
            </label>
            <label v-bind:class="{ 'label-active': theModel!.kind === 'h5' }" class="radio-inline form-control-sm">
                <input type="radio" name="optradio" v-model="theModel!.kind" value="h5">H5
            </label>
            <label v-bind:class="{ 'label-active': theModel!.kind === 'h6' }" class="radio-inline form-control-sm">
                <input type="radio" name="optradio" v-model="theModel!.kind" value="h6">H6
            </label>
        </div>
    </div>
</template>