<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
        <v-toolbar color="filter" flat>
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
                <v-card color="accent">
                  <v-switch v-for="category in categories" :label="category" v-model="checkCategory" :value="category"></v-switch>
                </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout>
          <v-expansion-panel-content>
              <div slot="header">Wo</div>
                <v-card color="accent">
                  <v-switch v-for="city in cities" :label="city" v-model="checkCity" :value="city"></v-switch>
                </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-navigation-drawer>

    <v-toolbar
      color="navbar"
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
       <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <!-- <v-card>
      <p>Test:</p>
      <p>{{ filteredData }}</p>
      </v-card> -->
      <v-data-table
        :headers="headers"
        :items="filteredData"
        hide-actions
        class="elevation-1"
      >
      <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.category }}</td>
      <td>{{ props.item.city }}</td>
      </template>
    </v-data-table>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import colors from 'vuetify/es5/util/colors'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    navbar: colors.lime.lighten1,
    filter: colors.lime.lighten3,
    accent: colors.lime.lighten5
  }
})

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      checkCity: [],
      checkCategory: [],
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
        "Musik",
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
      data: [{
        name: 'Der Test 01',
        category: 'Spielplatz',
        city: 'Hamburg',
        morning: true,
        afternoon: true,
        evening: true
      },{
        name: 'Der Test 02',
        category: 'Theater',
        city: 'Düsseldorf',
        morning: true,
        afternoon: true,
        evening: true
      },{
        name: 'Der Test 03',
        category: 'Festival',
        city: 'Bielefeld',
        morning: false,
        afternoon: true,
        evening: true
      },{
        name: 'Der Test 04',
        category: 'Konzert',
        city: 'Hamburg',
        morning: false,
        afternoon: false,
        evening: true
      }],
      title: 'Didelidu'
    }
  },
  computed: {
    filteredData: function(){
      let filterData = this.data

      if (this.checkCategory.length > 0){
        filterData = filterData.filter(data => {
          return this.checkCategory.includes(data.category)
        })
      }

      if (this.checkCity.length > 0){
        filterData = filterData.filter(data => {
          return this.checkCity.includes(data.city)
        })
      }

      return filterData
    }
  },
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
