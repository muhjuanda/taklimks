<template>
  <div class="detailtaklim">
    <div class="md-layout-item">
      <md-card-area md-inset>
        <center>
        <div class="md-layout-item md-size-50">
        <md-card-media md-ratio="16:9">
          <img v-bind:src="detailtaklim.pamflet" /> 
        </md-card-media>
        </div>
        </center>
          <center>
          <hr>
          <br>
            <h2 class="taklim-name">{{detailtaklim.nama}}</h2>
            <p class="organization">by {{detailtaklim.pelaksana}}</p>
          </center>
        <md-card-content>
         <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"><p><span><md-icon>access_time</md-icon></span></p></div>
    <div class="md-layout-item md-size-2"><p><b>PUKUL</b><br> {{detailtaklim.pukul}} WITA</p></div>
  </div>
  <hr>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"><p><span><md-icon>calendar_today</md-icon></span></p></div>
    <div class="md-layout-item md-size-2"><p><b>TANGGAL</b><br> {{detailtaklim.tanggal}}</p></div>
  </div>
  <hr>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"><p><span><md-icon>location_on</md-icon></span></p></div>
    <div class="md-layout-item md-size-2"><p><b>LOKASI</b><br> {{detailtaklim.tempat}}<br> {{detailtaklim.alamat}}</p></div>
  </div>
  <hr>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"><p><span><md-icon>person</md-icon></span></p></div>
    <div class="md-layout-item md-size-2"><p><b>NAMA PEMATERI</b><br> {{detailtaklim.pemateri}}</p></div>
  </div>
  <hr>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"><p><span><md-icon>money</md-icon></span></p></div>
    <div class="md-layout-item md-size-2"><p><b>BIAYA REGISTRASI</b><br> {{detailtaklim.htm}}</p></div>
  </div>
  <hr>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"><p><span><md-icon>group</md-icon></span></p></div>
    <div class="md-layout-item md-size-2"><p><b>PESERTA</b><br> {{detailtaklim.peserta}}</p></div>
  </div>
  <hr>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"><p><span><md-icon>call</md-icon></span></p></div>
    <div class="md-layout-item md-size-2"><p><b>CONTACT PERSON</b><br> {{detailtaklim.cp}}</p></div>
    <div class="md-layout-item md-size-20">
      <p>
        <md-button class="md-icon-button md-raised md-primary"><md-icon>phone_forwarded</md-icon></md-button>
      </p>
    </div>
  </div>
  <hr>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"><p><span><md-icon>notes</md-icon></span></p></div>
    <div class="md-layout-item md-size-2"><p><b>KETERANGAN</b><br> {{detailtaklim.ket}}</p></div>
  </div>
  <hr>
  <!-- <div class="md-layout md-gutter">
      <p>
        <md-button class="md-raised md-primary" @click="simpan()">simpan</md-button>
      </p>
  </div> -->
        </md-card-content>
      </md-card-area>
    
  </div>
    </div>

</template>

<script>
export default {
  name: 'detailtaklim',
  data () {
    return {
      detailtaklim: '',
      taklims: [],
      n: 0
    }
  },
  methods: {
    dataup () {
      let id = this.$route.params.id
      this.$http.get('http://localhost/laravel/public/api/taklim?id=' + id).then(function ({body}) {
        console.log(body)
        this.detailtaklim = body
      })
    },
    simpan () {
      this.taklims = JSON.stringify(this.detailtaklim)
      localStorage.setItem('taklims', this.taklims)
    }
  },
  mounted () {
    this.dataup()
  }
}
</script>

<style scoped>
.md-app-content .md-card {
  margin:10px ;
}

.taklim-name {
  line-height: 20px 0;
}

.md-icon.md-theme-default.md-icon-font {
}

img {
  border-radius: 5px;
}

.organization {
  margin-top: -10px;
}
</style>
