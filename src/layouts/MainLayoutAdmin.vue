<template>
    <div class="w-full h-screen flex">
        <TheSideBar :menu="menu"></TheSideBar>
        <div class="flex flex-col h-full w-full">
            <TheHeader></TheHeader>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import TheSideBar from '../components/headerAdmin/TheSideBar.vue';
import TheHeader from '../components/headerAdmin/TheHeader.vue';

const props = defineProps({
    menu: {
        type: Array
    }
})

</script>

<style scoped>

</style>