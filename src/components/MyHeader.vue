<template>
  <v-container fluid class="header">
    <v-layout row justify-center>
      <v-flex xs12 lg10>
        <v-flex xs12>
          <h1>{{ titel }}</h1>
          <h2>{{ subtitel }}</h2>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
        titel: 'Dideldidu',
        subtitel: 'Kinderprogramm in deiner Stadt'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 5rem;
  color: #eb3b5a;
}
h2 {
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  color: #fa8231;
}
.header {
  background-image: url(../assets/header-bg.png) ;
  background-position: center !important;
  background-size: cover !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: flex !important;
  justify-content: center !important;
  text-align: center !important;
  height: 700px !important;
  -webkit-flex-direction: column !important;
  -ms-flex-direction: column !important;
  -webkit-justify-content: center !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-pack: center !important;
  -webkit-box-pack: center !important;
}
</style>
