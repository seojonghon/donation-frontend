<template>
    <div>
        <h1>회원 가입</h1>
        <form @submit.prevent="createBoard">
            <label htmlFor="title">ID:</label>
            <input type="text" id="title" v-model="board.email" required><br>
            <label htmlFor="content">PassWord:</label>
            <textarea id="content" v-model="board.password" required></textarea><br>
            <textarea id="good" v-model="board.good" required></textarea><br>
            <button type="submit">가입 하기</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            board: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        createBoard() {
            // AJAX 요청 등을 통해 백엔드에 게시글 생성 요청을 보냅니다.
            // 예시로 axios를 사용한 코드를 작성하였습니다.
            axios.post('/api/boards', this.board)
                .then(response => {
                    console.log(response.data);
                    // 게시글 생성 후 필요한 처리를 수행합니다.
                })
                .catch(error => {
                    console.error(error);
                    // 에러 처리를 수행합니다.
                });
        },



    }
};
</script>
