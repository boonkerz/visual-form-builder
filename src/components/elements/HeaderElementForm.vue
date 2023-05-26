<script lang="ts">
    
    export default {
      props: ["field"]
    }
    
</script>
<template>
  <div class="col-12">
    <h1 v-if="field.kind === 'h1'">
      {{field.label}}
      <small>{{field.subheader}}</small>
    </h1>
    <h2 v-if="field.kind === 'h2'">
      {{field.label}}
      <small>{{field.subheader}}</small>
    </h2>
    <h3 v-if="field.kind === 'h3'">
      {{field.label}}
      <small>{{field.subheader}}</small>
    </h3>
    <h4 v-if="field.kind === 'h4'">
      {{field.label}}
      <small>{{field.subheader}}</small>
    </h4>
    <h5 v-if="field.kind === 'h5'">
      {{field.label}}
      <small>{{field.subheader}}</small>
    </h5>
    <h6 v-if="field.kind === 'h6'">
      {{field.label}}
      <small>{{field.subheader}}</small>
    </h6>
  </div>
</template>