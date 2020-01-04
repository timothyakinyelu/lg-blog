<style scoped>
    .container {
        width: 500px;
        position: relative;
        top: 120px;
    }

    .card-header {
        font-weight: bolder;
        color: #e3342f;
    }

    .form-control {
        width: 100%
    }

    .btn-info {
        font-weight: bolder;
    }
</style>

<template>
  <div class="container">
        <div class="card card-default">
            <div class="card-header">Admin Login</div>
            <div class="card-body">
                <form @submit.prevent="login" method="post">
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" 
                            id="email" 
                            class="form-control" 
                            placeholder="user@example.com" 
                            autocomplete="off" 
                            v-model="email" 
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" 
                            id="password" 
                            class="form-control" 
                            v-model="password" 
                            required
                        />
                    </div>
                    <button type="submit" class="btn btn-info">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
            console.log(this.email)
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
        },
    },
};
</script>