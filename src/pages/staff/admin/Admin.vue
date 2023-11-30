<template>
    <div class="h-full">
        <MainLayout :menu="adminMenu">
            <router-view></router-view>
        </MainLayout>
    </div>
</template>

<script setup lang="ts">
import MainLayout from '../../../layouts/MainLayoutAdmin.vue';
//@ts-ignore
import { adminMenu } from '../../../components/menu/adminMenu'

</script>

<style scoped>

</style>