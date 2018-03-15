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
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-title>
              Filter
            </v-list-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header">Was</div>
          <v-card>
            <v-switch class='myswitch' v-for="category in categories" :label="category" v-model="checkCategory" :value="category"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header">Wo</div>
          <v-card>
            <v-switch class='myswitch' v-for="city in cities" :label="city" v-model="checkCity" :value="city"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header">Wann</div>
          <v-card>
            <v-switch class='myswitch' label="Morgens" v-model="checkMorning" value="Ja"></v-switch>
            <v-switch class='myswitch' label="Nachmittags" v-model="checkAfternoon" value="Ja"></v-switch>
            <v-switch class='myswitch' label="Abends" v-model="checkEvening" value="Ja"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header">Welches Alter</div>
          <v-card>
            <v-switch class='myswitch' label="Alle" v-model="checkAgeAll" value="Ja"></v-switch>
            <v-switch class='myswitch' label="0 bis 1" v-model="checkAge0_1" value="Ja"></v-switch>
            <v-switch class='myswitch' label="1 bis 3" v-model="checkAge1_3" value="Ja"></v-switch>
            <v-switch class='myswitch' label="3 bis 6" v-model="checkAge3_6" value="Ja"></v-switch>
            <v-switch class='myswitch' label="6 bis 10" v-model="checkAge6_10" value="Ja"></v-switch>
            <v-switch class='myswitch' label="10 bis 15" v-model="checkAge10_15" value="Ja"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header">Kosten</div>
          <v-card>
            <v-switch class='myswitch' label="Kostenlos" v-model="checkCosts" value="Ja"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-navigation-drawer>

<!-- Navbar -->
    <MyNavbar></MyNavbar>

    <v-content>
<!-- Header with background image -->
      <MyHeader></MyHeader>

      <v-layout row justify-center>
        <v-flex xs12 lg10>

<!-- tabs bar here -->
        <v-tabs grow v-model="tab">
         <v-tabs-slider color="yellow"></v-tabs-slider>
         <v-tab key="table">Tabelle</v-tab>
         <v-tab key="map">Karte</v-tab>
        </v-tabs>

<!-- filter button and searchbar-->
        <v-tabs-items v-model="tab">
          <v-tab-item class="mytab" key="table">
          <v-card-title>
            <v-btn color="success" @click.stop="drawer = !drawer">Filter</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
                append-icon="search"
                label="Suchen"
                single-line
                hide-details
                v-model="search">
            </v-text-field>
          </v-card-title>

<!-- data table -->
          <v-data-table
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
          </v-tab-item>
          </v-tabs-items>

        </v-flex>
      </v-layout>

<!-- contact form -->
      <MyForm></MyForm>
<!-- footer -->
      <MyFooter></MyFooter>

    </v-content>
  </v-app>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyForm from './components/MyForm'
import MyNavbar from './components/MyNavbar'
import json from './assets/data'

export default {
  data () {
    return {
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
      items: [{
        icon: 'location_city',
        title: 'Wo'
      },{
        icon: 'location_city',
        title: 'Was'
      }],
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
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyForm,
    MyNavbar
  }
}
</script>

<style scoped>
.mytab {
  height: 500px;
}
.myswitch {
  margin-left: 11px;
}
</style>
