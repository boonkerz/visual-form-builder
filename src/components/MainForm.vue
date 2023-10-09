<script lang="ts">
import RenderElements from './RenderElements.vue';
import { useElementStore } from '@/stores/Items'
import Parser from '@/Parser'
export default {
    setup() {
        const store = useElementStore()
        const onDrop = (event: DragEvent) => {
            if(store.dragMode == "insert") {
                const itemType = Number(event.dataTransfer?.getData('itemId'));
                
                store.addElement(Parser.getModelForType(itemType))
                store.clearSelection()
            }
        }

        return {
            onDrop,
            store
        }
    },
    components: {
        RenderElements
    }
}
</script>
<template>
    <div class="border bg-light shadow-sm p-5 bg-white m-2" @drop="onDrop($event)" @dragover.prevent>
        <RenderElements v-bind:items="store.getItems" />
    </div>
</template>