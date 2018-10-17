<template>
  <div class="resultTaklim">
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Filter Pencarian</md-dialog-title>
        <div class="md-layout-item" style="margin:auto 20px;">
          <md-field>
            <label for="nama-taklim">Masukkan Nama Taklim</label>
            <md-input name="nama-taklim" id="nama-taklim" autocomplete="given-name" v-model="datataklim.nama" :disabled="sending" />
          </md-field>
          <md-field>
            <md-select v-model="datataklim.tanggal" name="tanggal" id="tanggal" placeholder="Jadwal Taklim">
              <md-option value="today">Hari Ini</md-option>
              <md-option value="tomorrow">Besok</md-option>
              <md-option value="this_month">Bulan ini</md-option>
            </md-select>
          </md-field>
        </div>
        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Batal</md-button>
          <md-button class="md-primary" @click="dataup()">Cari</md-button>
        </md-dialog-actions>
      </md-dialog>
      <!-- Dialog -->

      <center>
        <md-button class="md-primary md-raised" @click="showDialog = true">Ubah <md-icon>edit</md-icon></md-button>
      </center>
      <md-card class="md-card-example">
        <md-card-area md-inset>
        <md-card-header>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <h4>Menampilkan Hasil Semua Taklim pada Hari ini </h4>
            </div>
          </div>
        </md-card-header>
        </md-card-area>
      </md-card>
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
    </div>
  </template>

<script>
export default {
  name: 'resultTaklim',
  data () {
    return {
      showDialog: false,
      taklim: '',
      datataklim: {
        nama: '',
        tanggal: 'today'
      }
    }
  },
  methods: {
    dataup () {
      this.showDialog = false
      let nama = this.datataklim.nama
      let tanggal = this.datataklim.tanggal
      this.$http.get('http://localhost/laravel/public/api/taklim?nama=' + nama + '&tanggal=' + tanggal).then(function ({body}) {
        console.log(body)
        this.taklim = body
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

.md-app-content .md-card {
  margin:10px ;
}

.search {
  margin:auto 40px;
}
</style>
