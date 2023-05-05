<script setup lang="ts">
import type { PostByUser } from '@/types/PostByUser';
import { onMounted, ref, type PropType } from 'vue';
import PostComments from './PostComments.vue';
import type { PostCommentsInterface } from '@/types/PostCommentsInterface';

const props = defineProps<{
    post: PostByUser
}>()

const comments = ref([])
let seeCommentsActive = ref(false)

const retrieveCommentsFromPost = await fetch(`/api/posts/${props.post.id}/comments`, {
    method: 'GET'
}).then(r => r.json())

const seeComments = () => {
    seeCommentsActive.value = !seeCommentsActive.value
}

onMounted(() => {
    comments.value = retrieveCommentsFromPost
})

</script>

<template>
    <div class="card">
        <div class="card-header">
            {{ post.id }} - {{ post.title }}
        </div>
        <div class="card-content">
            <div class="content">
                {{ post.body }}
            </div>
            <div class="comments">
                <span>
                    <font-awesome-icon icon="fas fa-comment-dots" size="xl" />
                    Comments({{ comments.length }})</span>
                <button class="see-comments" @click="seeComments">
                    <span v-if="!seeCommentsActive">See comments...</span>
                    <span v-else>Hide comments!</span>
                </button>
                <div v-if="seeCommentsActive" class="see-more-section">
                    <PostComments v-for="comment in comments" :comment="comment" />
                </div>
            </div>
        </div>
        <div class="card-footer">
            {{ post.userId }} - {{ post?.userInformations?.userName }} - {{ post?.userInformations?.email }} - {{
                post?.userInformations?.website }}
        </div>
    </div>
</template>

<style>
.card {
    background-color: #41b883;
    color: #34495e;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}

.card-header {
    font-weight: bold;
    border-bottom: 1px solid #34495e;
    min-height: 75px;
}

.card-content {
    font-style: italic;
    padding: 15px;
    border-bottom: 1px solid #34495e;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
}

.see-comments {
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #34495e;
    background-color: #34495e;
    color: #b3b3b3;
}

.see-comments>span {
    font-weight: bold;
    font-style: italic;
}

.comments {
    font-size: 12px;
    text-align: end;
}

.card-footer {
    padding-top: 10px;
    font-style: italic;
}
</style>