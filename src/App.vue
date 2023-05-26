<script setup lang="ts">
import ElementProperties from './components/ElementProperties.vue'
import SidebarVue from './components/Sidebar.vue'
import MainForm from './components/MainForm.vue'
import { useElementStore } from './stores/Items';

const store = useElementStore()

const clearSelection = () => {
  store.clearSelection()
  //store.setActiveItem(null)
}

</script>

<template>
  <div class="d-flex">
    <div class="me-2" id="sidebar-wrapper">
        <div id="sidebar" class="collapse collapse-horizontal show border-end">
          <SidebarVue/>
        </div>
    </div>
    <main class="flex-fill ms-5 ps-5 me-5 pe-5" v-on:click="clearSelection()">
      <MainForm/>
    </main>
    <div class="ms-2" id="properties-wrapper">
      <div id="properties" class="collapse collapse-horizontal show border-start">
          <ElementProperties />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
