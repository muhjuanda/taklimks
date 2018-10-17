<template>
  <div class="offline">
    <md-card class="md-card-example" v-for="data in taklim">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img v-bind:src="data.pamflet" /> 
        </md-card-media>
        <md-card-header>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-20 date">
              <h3>{{ data.tanggal | moment("dd") }}</h3>
              <h1>{{ data.tanggal | moment("DD") }}</h1>
              <h3>{{ data.tanggal | moment("MMM") }}</h3>
            </div>
            <div class="md-layout-item md-size-2">
              <router-link :to="{ name: 'Detail Taklim', params: { id:  data.id }}">{{ data.nama }}</router-link>
              <div class="md-subhead">
                <span>{{data.tempat}}, {{data.alamat}}</span>
              </div>
            </div>
          </div>
        </md-card-header>
      </md-card-area>
    </md-card>
    <md-button class="md-fab md-primary" to="/addTaklim">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'offline',
  data () {
    return {
      taklims: [],
      taklim: null
    }
  },
  methods: {
    dataup () {
      this.$http.get('http://localhost/laravel/public/api/taklim').then(function ({body}) {
        console.log(body)
        this.taklim = body
        // let taklim = JSON.stringify(this.taklim)
        // localStorage.setItem('taklims', taklim)
      })
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

.date h3,h1 {
  margin: 2px auto;
  text-align: center;

}

.date h3 {
   font-weight: normal;
}

.md-fab {
  position: fixed;
  z-index: 4;
  bottom: 70px;
}
</style>
