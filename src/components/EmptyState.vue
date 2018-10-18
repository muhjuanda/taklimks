<template>
  <div class="emptystate">
   <md-empty-state
      md-icon="add_to_home_screen"
      md-label="Oopss.."
      md-description="Kamu belum mengupload satu pun taklim.">
      <md-button class="md-primary md-raised" to="/addtaklim">Upload Taklim</md-button>
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: 'emptystate',
  data () {
    return {
    }
  }
}
</script>
</style>
