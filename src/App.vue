<template>
  <v-app>
<!-- left drawer containing the checkboxes to filter data -->
    <v-navigation-drawer
      class="drawerfull"
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      flat
      app>
      <v-toolbar class="drawertitle" flat>
        <v-list>
          <v-list-tile>
            <v-list-title class="drawertitle pl-4 pt-1">
              <h2>Filter</h2>
            </v-list-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-expansion-panel class="drawersub" flat>
        <v-expansion-panel-content class="drawersub">
          <div slot="header" class="drawersub"><h3>Was</h3></div>
          <v-card class='drawersubsub'>
            <v-switch v-for="category in categories" :label="category" v-model="checkCategory" :value="category"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="drawersub" flat>
        <v-expansion-panel-content class='drawersub'>
          <div slot="header"><h3>Wo</h3></div>
          <v-card class='drawersubsub'>
            <v-switch v-for="city in cities" :label="city" v-model="checkCity" :value="city"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="drawersub" flat>
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
        <v-btn class="tablebtn" flat @click.stop="drawer = !drawer">Filter</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="290">
        <v-btn flat slot="activator" class="tablebtn">Über</v-btn>
        <v-card>
          <v-card-title class="headline">Über Dideldidu</v-card-title>
          <v-card-text>
            Dies soll eine kleine praktische Seite für Eltern werden, die schnell Veranstaltungen wie Flohmärkte oder Kinderkonzerte in ihrer Gegend finden möchten. Diese Seite ist nicht kommerziell!<br />
            Die Motivation für diese Seite kommt besonders daher, dass ich als Vater zweier Mädels nicht ständig auf der gleichen Seite mit den gleichen veralteten Tipps landen wollte. Ziel ist es, mit praktischen Filtern und einer Karte schnell alles im Blick zu haben.
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-toolbar-title class="navbt" v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
<!-- Header with background image -->
      <MyHeader></MyHeader>

      <v-layout row justify-center class="middle">
        <v-flex xs12 lg10>
          <v-card class="tablesec">
          <v-card-title>
            <v-btn class="drawertitle" @click.stop="drawer = !drawer">Filter</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
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
         <v-tab key="table" class="tabs">Tabelle</v-tab>
         <v-tab key="map" class="tabs">Karte</v-tab>
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
              <tr @click="props.expanded = !props.expanded">

                <td>{{ props.item.name }}</td>
                <td>{{ props.item.category }}</td>
                <td>{{ props.item.street }}</td>
              </tr>
              </template>

    <!-- expander row -->
              <template slot="expand" slot-scope="props">
               <v-card flat>
                 <v-layout row wrap>
                   <v-flex xs6>
                     <v-card-text><h4>Name:</h4> {{ props.item.name }}</v-card-text>
                     <v-card-text><h4>Kategorie:</h4> {{ props.item.category }}</v-card-text>
                     <v-card-text><h4>Extras:</h4> {{ props.item.extra }}</v-card-text>
                     <v-card-text v-if="props.item.free == 'Ja'"><h4>Kostelos</h4></v-card-text>
                   </v-flex>
                   <v-flex xs6>
                     <v-card-text><h4>Straße:</h4> {{ props.item.street }}</v-card-text>
                     <v-card-text><h4>Uhrzeit:</h4> {{ props.item.time }}</v-card-text>
                     <v-card-text><h4>Stadt:</h4> {{ props.item.city }}</v-card-text>
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
<v-layout row justify-center class="end">
  <v-flex xs12 lg10>
    <v-card class="form">
      <v-card-title>
        <h3>Du möchtest eine Veranstaltung melden, kennst einen Ort für Kinder oder Eltern der hier noch nicht eingetragen ist, oder möchtest mir einfach so etwas sagen? Dann schreibe mir gerne eine Nachricht.<br /> Für Veranstaltungen bitte Name, Ort, Datum, Uhrzeit und am besten einen Link angeben falls möglich.</h3>
      </v-card-title>
      <v-form action="https://formspree.io/dideldidu.hh@gmail.com" method="POST">
        <v-card-text>
          <v-text-field
            name="name"
            type="text"
            placeholder="Dein Name"
            v-model="name"
          ></v-text-field>
          <v-text-field
            name="email"
            type="text"
            placeholder="Deine E-Mail Adresse (freiwillig, nur für eventuelle Rückfragen)"
            v-model="name"
          ></v-text-field>
          <v-text-field
            name="nachricht"
            type="text"
            label=""
            placeholder="Deine Nachricht"
            auto-grow
            multi-line
            v-model="textarea"
          ></v-text-field>
        </v-card-text>
        <v-btn class="formbtn" type="submit" @click="submit">Senden</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</v-layout>


<!-- footer -->
      <MyFooter></MyFooter>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import json from './assets/data'

export default {
  data () {
    return {
      title: 'Dideldidu',
      // Search
      textarea: '',
      name: '',
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
      mapZoom: 13,
      center: {
        lat: 53.567,
        lng: 10.00
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
      checkCosts: [],
      cities: [
        "Hamburg"
      ],
      categories: [
        "Flohmarkt",
        "Theater",
        "Fest",
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
        text: 'Straße',
        value: 'street'
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

      //Filter for costs
      if (this.checkCosts.length > 0){
        filterData = filterData.filter(data => {
          return this.checkCosts.includes(data.free)
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
  margin-top: 5%;
  padding-left: 10px;
  padding-right: 10px;
}
.drawerfull {
  background-color: #dfe6e9 !important;
}
.drawertitle {
  background-color: #dfe6e9 !important;
  color: #20bf6b !important;
}
.drawersub {
  background-color: #dfe6e9 !important;
  color: #20bf6b !important;
}
.drawersubsub {
  background-color: #dfe6e9 !important;
  color: #20bf6b !important;
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
.tabs {
  background-color: #dfe6e9;
  -webkit-transition: background-color 0.6s;
  -moz-transition:    background-color 0.6s;
  -ms-transition:     background-color 0.6s;
  -o-transition:      background-color 0.6s;
  transition:         background-color 0.6s;
}
.tabs:hover {
  background-color: #b2bec3;
}
.navbar {
  background-color: #dfe6e9 !important;
  color: #20bf6b !important;
}
.navbt {
  background-color: #dfe6e9 !important;
  color: #20bf6b !important;
}
.tablebtn {
  background-color: #dfe6e9 !important;
  color: #20bf6b !important;
}
.formbtn {
  background-color: #dfe6e9 !important;
  color: #20bf6b !important;
}
.form {
  text-align: left;
  margin-top: 10%;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
}
.middle {
  background-color: #f5f6fa;
  background-position: center !important;
  background-size: cover !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: flex !important;
  justify-content: center !important;
  text-align: center !important;
  height: 900px !important;
  -webkit-flex-direction: column !important;
  -ms-flex-direction: column !important;
  -webkit-justify-content: center !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-pack: center !important;
  -webkit-box-pack: center !important;
}
.end {
  background-color: #f5f6fa;
  background-position: center !important;
  background-size: cover !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: flex !important;
  justify-content: center !important;
  text-align: center !important;
  height: 800px !important;
  -webkit-flex-direction: column !important;
  -ms-flex-direction: column !important;
  -webkit-justify-content: center !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-pack: center !important;
  -webkit-box-pack: center !important;
}
</style>
