<script lang="ts" setup>
import HeaderElement from '@/model/HeaderElement';
import { useElementStore } from '@/stores/Items';
import HeaderElementProperties from './properties/HeaderElementProperties.vue';
import InputElement from '@/model/InputElement';
import InputElementProperties from './properties/InputElementProperties.vue';
import Column2ElementPropertiesVue from './properties/Column2ElementProperties.vue';
import Column2Element from '@/model/Column2Element';
import SelectElementProperties from './properties/SelectElementProperties.vue';
import SelectElement from '@/model/SelectElement';
import EMailElement from '@/model/EMailElement';
import EMailElementProperties from './properties/EMailElementProperties.vue';

    const store = useElementStore()


</script>

<template>
    <div v-bind:class="{ 'invisible': store.isShowPropierties === false }" class="border-0 rounded-0 text-sm-start p-1">
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

            <EMailElementProperties
            v-if="store.getActiveItem.type === 4"
            v-model="store.getActiveItem as EMailElement"
            >
            </EMailElementProperties>
            
            <SelectElementProperties
            v-if="store.getActiveItem.type === 3"
            v-model="store.getActiveItem as SelectElement"
            >
            </SelectElementProperties>

            <Column2ElementPropertiesVue
            v-if="store.getActiveItem.type === 10"
            v-model="store.getActiveItem as Column2Element"
            >
            </Column2ElementPropertiesVue>
    </div>
</template>