
<template>
  <div id="app">
      <div class="page-container">
    <md-app md-waterfall md-mode="fixed" style="height: 100vh;">
      <md-app-toolbar class="navbar md-primary">
        <span class="md-title">Taklim Makassar</span>
        <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>add</md-icon>
            </md-button>
          </div>
      </md-app-toolbar>
      <md-app-content>
      <router-view></router-view>
      </md-app-content>
    </md-app>
    <center>
    <div class="bottom-bar">
      <md-bottom-bar md-sync-route>
          <md-bottom-bar-item to="/" md-label="Beranda" md-icon="home"></md-bottom-bar-item>
          <md-bottom-bar-item to="/search" md-label="Pencarian" md-icon="search"></md-bottom-bar-item>
          <md-bottom-bar-item to="/mytaklim" md-label="Taklim Saya" md-icon="list"></md-bottom-bar-item>
          <md-bottom-bar-item to="/profile" md-label="Profil" md-icon="face"></md-bottom-bar-item>
        </md-bottom-bar>
      </div>
      </center>
  </div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}
.navbar {
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
}
.page-container {
  margin-top: 0;
}
.md-app {
    border: 1px solid rgba(#000, .12);
  }
.md-app-content {
  padding: 5px;
}
.phone-viewport {
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(#000, .26);
  background: rgba(#000, .06);
}
.md-bottom-bar {
  box-shadow: none;
  position: fixed;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
}
.md-content {
  margin-top: 60px;
  margin-bottom: 630px;
}
</style>