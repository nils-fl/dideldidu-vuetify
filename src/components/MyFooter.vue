<template>
  <v-container fluid>
    <v-footer
          :fixed="fixed"
          app
          class="footer"
          >
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
  background-color: #535c68;
  color: white;
}
</style>
