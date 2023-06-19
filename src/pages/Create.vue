<template>
    <div>
        <input v-model="writer" placeholder="글쓴이"/>
        <input v-model="title" placeholder="제목"/>
        <textarea v-model="content" placeholder="내용"/>
        <!--        <button @click="index !== undefined ? update() : write()">{{index !== undefined ? '수정' : '작성'}}</button>-->
        <button @click="write">작성</button>
    </div>
</template>
<script>
import data from  '@/data'

export default {
    name: 'Create',
    data() {
        const index = this.$route.params.contentId;
        return {
            data: data,
            index: index,
            writer : "",
            title : "",
            content : ""
        }
    },
    methods: {
        write() {
            this.data.push({
                writer: this.writer,
                title: this.title,
                content: this.content,
            })
            this.$router.push({
                path: '/Read'
            })
        },

    }
}
</script>
<style scoped>
. create-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}

. input-field,
. textarea-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
}

. textarea-field {
    height: 200px;
}

. submit-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>