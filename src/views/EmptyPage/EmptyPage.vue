<script setup lang="ts">
import type { EmptyPageProps } from './EmptyPage.props';

defineOptions({ name: 'EmptyPage' });
const props = defineProps<EmptyPageProps>();
</script>

<template>
  <div class="">
    {{ props }}
  </div>
</template>

<style scoped lang="scss"></style>
