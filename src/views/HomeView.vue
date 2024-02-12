<template>
  <div>
    <header>
      <Header />
    </header>
    <Sidebar @mousedown="navbar.userInfo = false" />
    <main
      @mousedown="
        sidebar.sidebar = true;
        navbar.userInfo = false;
      "
      class="bg-gray-200 pt-14 px-2 sm:ml-64 pb-4 overflow-y-auto max-h-[93vh] overflow-hidden min-h-screen"
      :class="{ 'bg-white': navbar.userNav }"
    >
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Sidebar from '../components/Sidebar.vue'
import { useNavStore } from "../stores/toggle";
import { useSidebarStore } from "../stores/sidebar.js";

const sidebar = useSidebarStore();
const navbar = useNavStore();
</script>

<style lang="scss" scoped></style>
