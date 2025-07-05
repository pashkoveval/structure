<script setup lang="ts">
import EmptyPage from '@/views/EmptyPage/EmptyPage.vue';
import { useSlots } from 'vue';

defineOptions({ name: 'MainLayout' });
// const props = defineProps({});
const slots = useSlots();
</script>

<template>
  <div class="main-layout">
    <header v-if="slots.header" class="main-layout--header">
      <slot name="header" />
    </header>

    <body class="main-layout--body">
      <slot name="body">
        <EmptyPage title="Список пуст" />
      </slot>
    </body>

    <footer v-if="slots.footer" class="main-layout--footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped lang="scss"></style>
