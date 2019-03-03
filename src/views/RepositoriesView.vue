<template>
    <div>
        <p>&copy; {{userName}}</p>
        <p>&copy; {{userRepositoryURL}}</p>
    </div>
</template>

<script>
export default {
    name: "RepositoriesView",
    data(){
        return{
            userName: '',
            userRepositoryURL: ''
        }
    },
    created(){
        this.userName = this.$route.params.userName;
        this.userRepositoryURL = `https://api.github.com/users/${this.userName}`;
    }
}
</script>
