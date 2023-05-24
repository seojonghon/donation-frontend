<template>
    <div>
        <input type="text" placeholder="글쓴이" v-model="writer" />
        <input type="text" placeholder="제목" v-model="title"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="내용" v-model="content"></textarea>
        <button @click="write">작성</button>
    </div>
</template>

<script>
import data from '@/data'
export default {
    name: 'Create',
    data() {
        return {
            data: data,
            writer: "",
            title: "",
            content: ""
        }
    },
    methods: {
        write() {
            this.data.push({
                writer: this.writer,
                title: this.title,
                content: this.content
            })
            this.$router.push({
                path:"/"
            })
        }
    }
}
</script>