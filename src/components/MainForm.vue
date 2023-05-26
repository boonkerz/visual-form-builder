<script lang="ts">
import RenderElements from './RenderElements.vue';
import { useElementStore } from '@/stores/Items'
import HeaderElementForm from './elements/HeaderElementForm.vue'
import Column2ElementForm from './elements/Column2ElementForm.vue'
import Parser from '@/Parser'


export default {
    setup() {
        const store = useElementStore()
        const onDrop = (event: DragEvent) => {
            if(event.dataTransfer?.getData('mode') == "insert") {
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
    <div class="w-100 p-2 border bg-light shadow-sm p-3 mb-5 bg-white rounded" @drop="onDrop($event)">
        <RenderElements v-bind:items="store.getItems" />
    </div>
</template>