<template>
  <div class="profile">
   <div class="card">
    <md-button class="md-primary" @click="logout()">Log out</md-button>
    <img v-bind:src="user.body.foto" style="width:100%; margin-top: 20px;" /> 
  <h1 style="margin-top: 20px;">{{ user.body.name }}</h1>
  <p class="title">{{ user.body.email }}</p>
</div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    dataup () {
      console.log('ini' + this.user)
      if (localStorage.getItem('user') === null) {
        this.$router.push('/login')
      }
      this.user = JSON.parse(localStorage.user)
    },
    logout () {
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  },
  mounted () {
    this.dataup()
  }
}
</script>

<style scope>
.md-app-content .md-card {
  margin:10px ;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
}

.title {
    color: grey;
    font-size: 18px;
}

button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}

button:hover, a:hover {
    opacity: 0.7;
}


</style>
