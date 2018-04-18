<template>
  <v-container fluid class="form">
    <v-layout row justify-center>
      <v-flex xs12 lg10>
          <v-card-title>
            <h3>Du möchtest eine Veranstaltung melden, kennst einen Ort für Kinder oder Eltern der hier noch nicht eingetragen ist, oder möchtest uns einfach so etwas sagen, dann schreibe uns gerne eine Nachricht.</h3>
          </v-card-title>
          <v-form action="https://formspree.io/didelidu.hh@gmail.com" method="POST">
            <v-card-text>
              <v-text-field
                name="input"
                placeholder="Dein Name"
                required
                v-model="name"
              ></v-text-field>
              <v-text-field
                name="input"
                placeholder="Deine Nachricht"
                auto-grow
                multi-line
                required
                v-model="textarea"
              ></v-text-field>
            </v-card-text>
            <v-btn class="drawertitle" type="submit" @click="submit">Senden</v-btn>
          </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',
      name: ''
    }
  }
}
</script>

<style scoped>
.form {
  /* padding-top: 70px;
  padding-bottom: 50px; */
}
.drawertitle {
  background-color: #1e3799 !important;
  color: #fad390 !important;
}
</style>
