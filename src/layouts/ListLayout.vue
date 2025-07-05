<script setup lang="ts">
import EmptyPage from '@/views/EmptyPage/EmptyPage.vue';
import { useSlots } from 'vue';

defineOptions({ name: 'ListLayout' });
// const props = defineProps({});
const slots = useSlots();
</script>

<template>
  <div class="list-layout">
    <header v-if="slots.header" class="list-layout--header">
      <slot name="header" />
    </header>

    <body class="list-layout--body">
      <slot name="body">
        <EmptyPage title="Список пуст" />
      </slot>
    </body>

    <footer v-if="slots.footer" class="list-layout--footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped lang="scss"></style>
