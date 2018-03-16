<template>
  <div>
    <div id="v-step-0"></div>
    <div id="v-step-1"></div>
    <div id="v-step-2"></div>
    <div id="v-step-2"></div>

    <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<script>
  export default {
    name: 'my-tour',
    data () {
      return {
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            content: `Klick hier, um die Veranstaltungen zu filtern.`
          },
          {
            target: '#v-step-1',
            content: 'Hier findest du einen Haufen Filter, um etwas passendes für dich zu finden.'
          },
          {
            target: '#v-step-2',
            content: 'Wechsel zwischen der Tabelle und der Karte, um zu sehen wo welche Veranstaltung ist.'
          },
          {
            target: '#v-step-3',
            content: 'Klick auf eine Zeile, um mehr Informationen zu erhalten.'
          }
        ]
      }
    },
    mounted: function () {
      this.$tours['myTour'].start()
    }
  }
</script>
