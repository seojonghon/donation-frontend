<template>
    <div>
        <h1>Delete Board</h1>
        <p>Are you sure you want to delete this board?</p>
        <button @click="deleteBoard">Delete</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    deleteBoard() {
        const id = this.$route.params.id; // Retrieve the ID from the route params
        axios.delete(`/api/boards/${id}`).then(response => {
            console.log(response.data);
        })
            .catch(error => {
                console.error(error);
            });
    }}
        //
        // deleteBoard() {
        //     // AJAX 요청 등을 통해 백엔드에 게시글 삭제 요청을 보냅니다.
        //     // 예시로 axios를 사용한 코드를 작성하였습니다.
        //     axios.delete(`/api/boards/${this.$route.params.id}`)
        //         .then(response => {
        //             console.log(response.data);
        //             // 게시글 삭제 후 필요한 처리를 수행합니다.
        //         })
        //         .catch(error => {
        //             console.error(error);
        //             // 에러 처리를 수행합니다.
        //         });

</script>
