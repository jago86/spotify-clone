<template>
    <div class="absolute z-10 w-64 flex flex-col p-1 text-sm bg-dark-light rounded shadow">

        <button
            v-for="item in items"
            class="group relative flex justify-between items-center p-3 text-left hover:bg-dark-lighter rounded"
        >
            <div>{{ item.title }}</div>
            <div>
                <ArrowTopRightOnSquare v-if="item.icon == 'ArrowTopRightOnSquare'"></ArrowTopRightOnSquare>
                <ChevronRight v-if="item.icon == 'ChevronRight'"></ChevronRight>
            </div>

            <div class="absolute hidden group-hover:block left-[100%] top-0">
                <Dropdown
                    v-if="item.items != null"
                    :items="item.items"
                ></Dropdown>
            </div>
        </button>

    </div>
</template>

<script setup>
import ArrowTopRightOnSquare from './Icons/ArrowTopRightOnSquare.vue';
import ChevronRight from './Icons/ChevronRight.vue';

defineProps({
    items: Array,
});
</script>
