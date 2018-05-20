<template>
    <v-footer
          absolute="true"
          app
          class="footer">
      <span class="footerele">Nils Flaschel &copy; 2018</span>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="290">
        <a slot="activator" class="footerele">Impressum</a>
        <v-card>
          <v-card-title class="headline">Impressum</v-card-title>
          <v-card-text>
            Nils Flaschel<br />
            Kottwitzstraße 35<br />
            20253 Hamburg<br />
            dideldidu.hh@gmail.com
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-footer>
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
  height: 24px !important;
  padding-left: 10px;
  background-color: #dfe6e9;
  color: #2d3436;
}
.footerele {
  padding-left: 15px !important;
  padding-right: 15px !important;
  background-color: #dfe6e9 !important;
  color: #2d3436 !important;
}
</style>
