<script setup lang="ts">
import { isReactive, onMounted, ref } from 'vue';
import axios from 'axios';
import PostCard from '@/components/PostCard.vue'
import type { PostByUser } from '@/types/PostByUser'

const posts = ref([])

const retrievePosts = await fetch('/api/posts', {
    method: 'GET'
}).then(r => r.json())

const retrieveUserInformations = async (userId: number) => {
    return await fetch(`/api/users/${userId}`, {
        method: 'GET'
    }).then(r => r.json())
}


onMounted(() => {
    posts.value = retrievePosts
    posts.value.forEach((post: PostByUser) => {
        retrieveUserInformations(post.userId).then(userInformationsRes => {
            post.userInformations = {
                userName: userInformationsRes.name,
                email: userInformationsRes.email,
                website: userInformationsRes.website,
            }
        });
    })
})
</script>

<template>
    <main>
        <div class="cards">
            <PostCard v-for="post in posts" :post="post" />
        </div>

    </main>
</template>

<style>
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
}
</style>