<script setup lang="ts">
import ElementProperties from './components/ElementProperties.vue'
import TheSidebar from './components/TheSidebar.vue'
import MainForm from './components/MainForm.vue'
import { useElementStore } from './stores/Items';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

const store = useElementStore()

const clearSelection = () => {
  store.clearSelection()
  //store.setActiveItem(null)
}

</script>

<template>
  <splitpanes class="default-theme" horizontal :push-other-panes="false">
    <pane size="10">
1
    </pane>
    <pane>
      <splitpanes :push-other-panes="false">
        <pane>
            <div id="sidebar" class="collapse collapse-horizontal show border-end">
              <TheSidebar/>
            </div>
        </pane>
        <pane size="70" v-on:click="clearSelection()">
          <MainForm/>
        </pane>
        <pane>
          <div id="properties" class="collapse collapse-horizontal show border-start">
              <ElementProperties />
          </div>
        </pane>
      </splitpanes>
    </pane>
    <pane size="10">2
      
    </pane>
  </splitpanes>
  
</template>

<style scoped>

</style>
