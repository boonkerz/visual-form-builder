<script lang="ts" setup>
import type HeaderElement from '@/model/HeaderElement';
import { useElementStore } from '@/stores/Items';
import HeaderElementProperties from './properties/HeaderElementProperties.vue';
import type InputElement from '@/model/InputElement';
import InputElementProperties from './properties/InputElementProperties.vue';

    const store = useElementStore()


</script>

<template>
    <div v-bind:class="{ 'invisible': store.isShowPropierties === false }" class="border-0 rounded-0 text-sm-start min-vh-100 p-1">
        <HeaderElementProperties
            v-if="store.getActiveItem.type === 1"
            v-model="store.getActiveItem as HeaderElement"
            >
            </HeaderElementProperties>

            <InputElementProperties
            v-if="store.getActiveItem.type === 2"
            v-model="store.getActiveItem as InputElement"
            >
            </InputElementProperties>
    </div>
</template>