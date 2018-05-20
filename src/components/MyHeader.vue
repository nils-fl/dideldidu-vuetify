<template>
  <v-container fluid class="header">
    <v-layout row justify-center>
      <v-flex xs11 lg10>
          <h1>{{ titel }}</h1>
          <h2>{{ subtitel }}</h2>
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
  text-align: left;
  font-weight: bold;
  font-size: 12vw;
  color: #636e72;
}
h2 {
  font-weight: bold;
  text-align: left;
  font-size: 3.5vw;
  color: #636e72;
}
.header {
  background-color: #f5f6fa;
  /* background-image: url(../assets/header-bg.png) ; */
  background-position: center !important;
  background-size: cover !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: flex !important;
  height: 66vh !important;
  -webkit-flex-direction: column !important;
  -ms-flex-direction: column !important;
  -webkit-justify-content: center !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-pack: center !important;
  -webkit-box-pack: center !important;
}
</style>
