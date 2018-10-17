<template>
  <div class="mytaklim">
    <md-card v-for="data in taklimSaya">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{data.nama}}</div>
          <div class="md-subhead">{{data.tanggal}}</div>
        </md-card-header-text>
        <md-card-media>
          <img v-bind:src="data.pamflet" /> 
        </md-card-media>
      </md-card-header>
      <md-card-expand>
        <md-card-actions md-alignment="space-between">
        <md-button :to="{ name: 'Detail Taklim', params: { id:  data.id }}" class="md-primary">Detail Taklim</md-button>
            <div>
            <md-button class="md-icon-button md-raised" :to="{ name: 'Edit Taklim', params: { id:  data.id }}"><md-icon>edit</md-icon></md-button>
        <md-button class="md-icon-button md-raised md-accent" @click="hapus(data.id)"><md-icon>delete</md-icon></md-button>
          </div>
        </md-card-actions>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'mytaklim',
  data () {
    return {
      taklimSaya: ''
    }
  },
  methods: {
    dataup () {
      if (localStorage.getItem('user') === null) {
        this.$router.push('/login')
      }
      this.user = JSON.parse(localStorage.user)
      let idUser = this.user.body.id
      this.$http.get('http://localhost/laravel/public/api/taklim/mytaklim?id_user=' + idUser).then(function ({body}) {
        console.log(body)
        if (body.length === 0) {
          this.$router.push('/emptystate')
        }
        this.taklimSaya = body
      })
    },

    hapus (id) {
      this.$http.get('http://localhost/laravel/public/api/taklim/delete?id=' + id).then(function (body) { console.log(body) })
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
</style>
