<script lang="ts">
import { useElementStore } from '@/stores/Items';

export default {
    setup() {

        const store = useElementStore()

        const startDrag = (event: DragEvent, item: string) => {
            event.dataTransfer!.dropEffect = 'move';
            event.dataTransfer!.effectAllowed = 'move';
            event.dataTransfer?.setData('itemId', item);
            store.setDragMode("insert")
        }

        return {
            startDrag
        }
    },
    data() {
        return {
            showAddForm: true,
            addFormElements() {
        
            },
            removeFormElements() {
                
            },
            
        }
    }

}
</script>

<template>
    <div class="list-group border-0 rounded-0 text-sm-start min-vh-100 p-1 bg-dark">

        <div id="header" class="list-group-item border-end-0 d-inline-block text-truncate" draggable="true" @dragstart="startDrag($event, '1')" @dragenter.prevent @dragover.prevent
    >
            <div class="element-icon">
                <span class="glyphicon glyphicon-header"></span>
            </div>
            <div class="element-text">
                Header
            </div>
        </div>

        <div id="input" class="list-group-item border-end-0 d-inline-block text-truncate" draggable="true" @dragstart="startDrag($event, '2')" @dragenter.prevent @dragover.prevent>
            <div class="element-icon">
                <span class="glyphicon glyphicon-header"></span>
            </div>
            <div class="element-text">
                Input
            </div>
        </div>

        <div id="email" class="list-group-item border-end-0 d-inline-block text-truncate" draggable="true" @dragstart="startDrag($event, '4')" @dragenter.prevent @dragover.prevent>
            <div class="element-icon">
                <span class="glyphicon glyphicon-header"></span>
            </div>
            <div class="element-text">
                Email
            </div>
        </div>

        <div id="select" class="list-group-item border-end-0 d-inline-block text-truncate" draggable="true" @dragstart="startDrag($event, '3')" @dragenter.prevent @dragover.prevent>
            <div class="element-icon">
                <span class="glyphicon glyphicon-header"></span>
            </div>
            <div class="element-text">
                Select
            </div>
        </div>

        <div id="column2" class="list-group-item border-end-0 d-inline-block text-truncate" draggable="true" @dragstart="startDrag($event, '10')" @dragenter.prevent @dragover.prevent>
            <div class="element-icon">
                <span class="glyphicon glyphicon-header"></span>
            </div>
            <div class="element-text">
                2 Column Container
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>