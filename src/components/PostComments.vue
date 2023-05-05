<script setup lang="ts">
import type { PostCommentsInterface } from '@/types/PostCommentsInterface';

const props = defineProps<{
    comment: PostCommentsInterface
}>()
</script>

<template>
    <div class="comment-container">
        {{ comment }}
    </div>
</template>

<style></style>