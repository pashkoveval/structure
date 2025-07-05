<script setup lang="ts">
import EmptyPage from '@/views/EmptyPage/EmptyPage.vue';
import { useSlots } from 'vue';

defineOptions({ name: 'ObjectLayout' });
// const props = defineProps({});
const slots = useSlots();
</script>

<template>
  <div class="object-layout">
    <header v-if="slots.header" class="object-layout--header">
      <slot name="header" />
    </header>

    <body class="object-layout--body">
      <slot name="body">
        <EmptyPage title="Объект пуст" />
      </slot>
    </body>

    <footer v-if="slots.footer" class="object-layout--footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped lang="scss"></style>
