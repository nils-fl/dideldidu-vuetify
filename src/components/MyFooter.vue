<template>
  <v-container fluid>
    <v-footer
          absolute="true"
          app
          class="footer">
      <span>Nils Flaschel &copy; 2018</span>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
        titel: 'Dideldidu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  padding-left: 10px;
  background-color: rgba(209, 216, 224,0.7);
  color: white;
}
</style>
