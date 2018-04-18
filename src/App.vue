<template>
  <v-app>
<!-- left drawer containing the checkboxes to filter data -->
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app>
      <v-toolbar class="drawertitle">
        <v-list>
          <v-list-tile>
            <v-list-title class="drawertitle pl-4 pt-1">
              <h2>Filter</h2>
            </v-list-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-expansion-panel class="drawersub">
        <v-expansion-panel-content class="drawersub">
          <div slot="header" class="drawersub"><h3>Was</h3></div>
          <v-card class='drawersubsub'>
            <v-switch v-for="category in categories" :label="category" v-model="checkCategory" :value="category"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="drawersub">
        <v-expansion-panel-content class='drawersub'>
          <div slot="header"><h3>Wo</h3></div>
          <v-card class='drawersubsub'>
            <v-switch v-for="city in cities" :label="city" v-model="checkCity" :value="city"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="drawersub">
        <v-expansion-panel-content class='drawersub'>
          <div slot="header"><h3>Wann</h3></div>
          <v-card class='drawersubsub'>
            <v-switch label="Morgens" v-model="checkMorning" value="Ja"></v-switch>
            <v-switch label="Nachmittags" v-model="checkAfternoon" value="Ja"></v-switch>
            <v-switch label="Abends" v-model="checkEvening" value="Ja"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="drawersub">
        <v-expansion-panel-content class='drawersub'>
          <div slot="header"><h3>Welches Alter</h3></div>
          <v-card class='drawersubsub'>
            <v-switch label="Alle" v-model="checkAgeAll" value="Ja"></v-switch>
            <v-switch label="0 bis 1" v-model="checkAge0_1" value="Ja"></v-switch>
            <v-switch label="1 bis 3" v-model="checkAge1_3" value="Ja"></v-switch>
            <v-switch label="3 bis 6" v-model="checkAge3_6" value="Ja"></v-switch>
            <v-switch label="6 bis 10" v-model="checkAge6_10" value="Ja"></v-switch>
            <v-switch label="10 bis 15" v-model="checkAge10_15" value="Ja"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="drawersub">
        <v-expansion-panel-content class='drawersub'>
          <div slot="header"><h3>Kosten</h3></div>
          <v-card class='drawersubsub'>
            <v-switch label="Kostenlos" v-model="checkCosts" value="Ja"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-navigation-drawer>

<!-- Navbar -->
    <v-toolbar
      class="navbar"
      height="40"
      app
      :clipped-left="clipped">
      <v-toolbar-items>
        <v-btn class="navbt" flat @click.stop="drawer = !drawer">Filter</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title class="navbt" v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
<!-- Header with background image -->
      <MyHeader></MyHeader>

      <v-layout row justify-center>
        <v-flex xs12 lg10>
          <v-card class="tablesec">
          <v-card-title>
            <v-btn id="v-step-0" class="drawertitle" @click.stop="drawer = !drawer">Filter</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
            id="v-step-3"
            append-icon="search"
            label="Suchen"
            single-line
            hide-details
            v-model="search">
          </v-text-field>
        </v-card-title>

<!-- tabs bar here -->
        <v-tabs grow v-model="tab">
         <v-tabs-slider color="yellow"></v-tabs-slider>
         <v-tab id="v-step-1" key="table">Tabelle</v-tab>
         <v-tab id="v-step-4" key="map">Karte</v-tab>
        </v-tabs>

<!-- filter button and searchbar-->
        <v-tabs-items v-model="tab">
          <v-tab-item class="mytab" key="table">

<!-- data table -->
          <v-data-table
              class="mytable"
              :headers="headers"
              :items="filteredData"
              no-results-text="Keine Einträge gefunden"
              rows-per-page-text="Zeilen pro Seite"
              :search="search"
              item-key="name"
              >
            <template slot="items" slot-scope="props">
              <tr @click="props.expanded = !props.expanded" id="v-step-2">

                <td>{{ props.item.name }}</td>
                <td>{{ props.item.category }}</td>
                <td>{{ props.item.city }}</td>
              </tr>
              </template>

    <!-- expander row -->
              <template slot="expand" slot-scope="props">
               <v-card flat>
                 <v-layout row wrap>
                   <v-flex xs6>
                     <v-card-text><h4>Name:</h4> {{ props.item.name }}</v-card-text>
                     <v-card-text><h4>Kategorie:</h4> {{ props.item.category }}</v-card-text>
                     <v-card-text v-if="props.item.costs == 'Ja'"><h4>Kostelos</h4></v-card-text>
                   </v-flex>
                   <v-flex xs6>
                     <v-card-text><h4>Stadt:</h4> {{ props.item.city }}</v-card-text>
                     <v-card-text><h4>PLZ:</h4> {{ props.item.zip }}</v-card-text>
                   </v-flex>
                 </v-layout>
               </v-card>
             </template>

          </v-data-table>

          </v-tab-item>
          <v-tab-item class="mytab" key="map">
<!-- google map -->
            <template>
              <gmap-map
                id="v-step-5"
                :center="center"
                :zoom="mapZoom"
                style="width: 100%; height: 600px"
              >
              <gmap-info-window
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen=false"
                >
                {{ infoContent }}
              </gmap-info-window>
                <gmap-marker
                  :key="i"
                  v-for="(m, i) in filteredMarkers"
                  :position="m.position"
                  :clickable="true"
                  @click="toggleInfoWindow(m,i)"
                ></gmap-marker>
              </gmap-map>
            </template>
          </v-tab-item>
          </v-tabs-items>

        </v-card>
        </v-flex>
      </v-layout>

<!-- contact form -->
<v-layout row justify-center>
  <v-flex xs12 lg10>
    <v-card class="form">
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
    </v-card>
  </v-flex>
</v-layout>


<!-- footer -->
      <MyFooter></MyFooter>
      <!-- <v-tour name="myTour" :steps="steps">
        <template slot-scope="tour">
          <transition name="fade">
            <v-step
              v-if="tour.currentStep === index"
              v-for="(step, index) of tour.steps"
              :key="index"
              :step="step"
              :previous-step="tour.previousStep"
              :next-step="tour.nextStep"
              :stop="tour.stop"
              :isFirst="tour.isFirst"
              :isLast="tour.isLast"
            >
              <template v-if="tour.currentStep === 0">
                <div slot="actions">
                  <v-btn color="info" @click="tour.stop">schließen</v-btn>
                  <v-btn color="info" @click="tour.nextStep">weiter</v-btn>
                </div>
              </template>
              <template v-if="tour.currentStep !== 0 && tour.currentStep !== 5">
                <div slot="actions">
                  <v-btn color="info" @click="tour.previousStep">zurück</v-btn>
                  <v-btn color="info" @click="tour.nextStep">weiter</v-btn>
                </div>
              </template>
              <template v-if="tour.currentStep === 5">
                <div slot="actions">
                  <v-btn color="info" @click="tour.previousStep">zurück</v-btn>
                  <v-btn color="info" @click="tour.stop">schließen</v-btn>
                </div>
              </template>
            </v-step>
          </transition>
        </template>
      </v-tour> -->
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import json from './assets/data'

export default {
  name: 'my-tour',
  data () {
    return {
      title: 'Dideldidu',
      // Search
      textarea: '',
      name: '',
      // tour steps
      steps: [
        {
          target: '#v-step-0',  // We're using document.querySelector() under the hood
          content: `Klick hier, um die Veranstaltungen zu filtern.`
        },
        {
          target: '#v-step-1',
          content: 'Du befindest dich in der Tabellenansicht.'
        },
        {
          target: '#v-step-2',
          content: 'Klick auf eine Zeile, um mehr Informationen zu erhalten.'
        },
        {
          target: '#v-step-3',
          content: 'Hier kannst du auch Freitextfiltern.'
        },
        {
          target: '#v-step-4',
          content: 'Hier kannst du in die Karten Ansicht wechseln.'
        },
        {
          target: '#v-step-5',
          content: 'Klick auf die Marker, um zu sehen welche Veranstaltung dort ist.'
        }
      ],
      // g-map stuff
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      mapZoom: 10,
      center: {
        lat: 53.562978,
        lng: 10.005576
      },
      // tabs
      tab: null,
      // Searchbar
      search: '',
      // Drawer
      clipped: false,
      drawer: false,
      fixed: false,
      // checkboxes
      checkCity: [],
      checkCategory: [],
      checkMorning: [],
      checkAfternoon: [],
      checkEvening: [],
      checkAge0_1: [],
      checkAge1_3: [],
      checkAge3_6: [],
      checkAge6_10: [],
      checkAge10_15: [],
      checkAgeAll: [],
      checkCosts: [],
      cities: [
        "Hamburg",
        'Düsseldorf',
        'Köln',
        'Bielefeld'
      ],
      categories: [
        "Spielplatz",
        "Theater",
        "Festival",
        "Sport",
        "Konzert",
        "Museum"
      ],
      headers:[{
        text: 'Name',
        value: 'name'
      },{
        text: 'Was',
        value: 'category'
      },{
        text: 'Wo',
        value: 'city'
      }],
      data: json
    }
  },
  computed: {
    filteredMarkers: function(){
      var dataTemp = this.filteredData
      var filterPoints = []

        if(dataTemp.length>0) {

          for (var i = 0; i < dataTemp.length; i++) {
            var lat = dataTemp[i].lat
            var lng = dataTemp[i].lng
            var name = dataTemp[i].name

            filterPoints.push({
              'position':{
                'lat': lat,
                'lng': lng
              },
              'infoText': name
              }
            )}
          }
        else {
          return filterPoints = []
        }
      return filterPoints
    },
    filteredData: function(){
      let filterData = this.data

      // Filter vor categories
      if (this.checkCategory.length > 0){
        filterData = filterData.filter(data => {
          return this.checkCategory.includes(data.category)
        })
      }

      // Filter for cities
      if (this.checkCity.length > 0){
        filterData = filterData.filter(data => {
          return this.checkCity.includes(data.city)
        })
      }

      // Filter for morning
      if (this.checkMorning.length > 0){
        filterData = filterData.filter(data => {
          return this.checkMorning.includes(data.morning)
        })
      }

      // Filter for afternoon
      if (this.checkAfternoon.length > 0){
        filterData = filterData.filter(data => {
          return this.checkAfternoon.includes(data.afternoon)
        })
      }

      // Filter for evening
      if (this.checkEvening.length > 0){
        filterData = filterData.filter(data => {
          return this.checkEvening.includes(data.evening)
        })
      }

      //Filter for age 0-1
      if (this.checkAge0_1.length > 0){
        filterData = filterData.filter(data => {
          return this.checkAge0_1.includes(data.age0_1)
        })
      }

      //Filter for age 1-3
      if (this.checkAge1_3.length > 0){
        filterData = filterData.filter(data => {
          return this.checkAge1_3.includes(data.age1_3)
        })
      }

      //Filter for age 3-6
      if (this.checkAge3_6.length > 0){
        filterData = filterData.filter(data => {
          return this.checkAge3_6.includes(data.age3_6)
        })
      }

      //Filter for age 6-10
      if (this.checkAge6_10.length > 0){
        filterData = filterData.filter(data => {
          return this.checkAge6_10.includes(data.age6_10)
        })
      }

      //Filter for age 10-15
      if (this.checkAge10_15.length > 0){
        filterData = filterData.filter(data => {
          return this.checkAge10_15.includes(data.age10_15)
        })
      }

      //Filter for age all
      if (this.checkAgeAll.length > 0){
        filterData = filterData.filter(data => {
          return this.checkAgeAll.includes(data.ageAll)
        })
      }

      //Filter for costs
      if (this.checkCosts.length > 0){
        filterData = filterData.filter(data => {
          return this.checkCosts.includes(data.costs)
        })
      }

      return filterData
    }
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  },
  mounted: function () {
    this.$tours['myTour'].start()
  },
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style scoped>
.tablesec {
  margin-top: -400px;
}
.drawertitle {
  background-color: #eb3b5a !important;
  color: #fed330 !important;
}
.drawersub {
  background-color: #fed330 !important;
  color: #4b6584 !important;
}
.drawersubsub {
  background-color: #f7b731 !important;
  color: #4b6584 !important;
  padding-top: 5px;
  padding-left: 11px;
}
.mytable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.mytab {
  height: 600px;
}
.navbar {
  background: linear-gradient(to right, #eb3b5a, #fc5c65);
  background-color: #1e3799 !important;
  color: #fad390 !important;
}
.navbt {
  background-color: rgba(255, 255, 255,0.0) !important;
  color: #fed330 !important;
}
.form {
  padding-top: 0px;
}
</style>
