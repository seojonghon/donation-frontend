<template>
    <div>
        <h1>Edit Board</h1>
        <form @submit.prevent="updateBoard">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" v-model="board.title" required><br>
            <label htmlFor="content">Content:</label>
            <textarea id="content" v-model="board.content" required></textarea><br>
            <button type="submit">Update</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            board: {
                title: '',
                content: ''
            }
        };
    },
    created() {
        // 게시글의 기존 내용을 가져오는 로직 (예: AJAX 요청 등)
        this.fetchBoardData();
    },
    methods: {
        fetchBoardData() {
            // AJAX 요청 등을 통해 백엔드에서 게시글 데이터를 가져옵니다.
            // 예시로 axios를 사용한 코드를 작성하였습니다.
            axios.get(`/api/boards/${this.board.id}`)
                .then(response => {
                    this.board = response.data;
                })
                .catch(error => {
                    console.error(error);
                    // 에러 처리를 수행합니다.
                });
        },
        updateBoard() {
            // AJAX 요청 등을 통해 백엔드에 게시글 수정 요청을 보냅니다.
            // 예시로 axios를 사용한 코드를 작성하였습니다.
            axios.patch(`/api/boards/${this.board.id}`, this.board)
                .then(response => {
                    console.log(response.data);
                    // 게시글 수정 후 필요한 처리를 수행합니다.
                })
                .catch(error => {
                    console.error(error);
                    // 에러 처리를 수행합니다.
                });
        }
    }
};
</script>
