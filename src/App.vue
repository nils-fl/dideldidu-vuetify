<template>
  <v-app>
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
            <v-switch v-for="category in categories" :label="category" v-model="checkCategory" :value="category"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header">Wo</div>
          <v-card>
            <v-switch v-for="city in cities" :label="city" v-model="checkCity" :value="city"></v-switch>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-navigation-drawer>

    <v-toolbar
      height="40"
      color="navbar"
      app
      :clipped-left="clipped"
      class="nav">
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
       <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <MyHeader></MyHeader>

      <v-layout row justify-center>
        <v-flex xs12 lg10>
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
          <v-data-table
              :headers="headers"
              :items="filteredData"
              no-results-text="Keine Einträge gefunden"
              rows-per-page-text="Zeilen pro Seite"
              :search="search"
              >
            <template slot="items" slot-scope="props">
              <tr @click="props.expanded = !props.expanded">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.category }}</td>
                <td>{{ props.item.city }}</td>
                <td class="text-xs-center">
                  <v-btn color="primary" dark @click.stop="details = true">Details</v-btn>
                  <v-dialog v-model="details" max-width="500px">
                    <v-card>
                      <v-card-title>
                        <span>Details</span>
                        <v-spacer></v-spacer>
                        <v-menu bottom left>
                          <v-list>
                            <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                          </v-list>
                        </v-menu>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn color="primary" flat @click.stop="details=false">Schließen</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>

      <MyForm></MyForm>
      <MyFooter></MyFooter>
    </v-content>
  </v-app>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyForm from './components/MyForm'

export default {
  data () {
    return {
      search: '',
      clipped: false,
      drawer: false,
      fixed: false,
      details: false,
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
      },{
        text: 'Mehr',
        value: 'mehr',
        align: 'center'
      }],
      data: [{
        name: 'Der Test 01',
        category: 'Spielplatz',
        city: 'Hamburg'
      },{
        name: 'Der Test 02',
        category: 'Theater',
        city: 'Düsseldorf'
      },{
        name: 'Der Test 03',
        category: 'Festival',
        city: 'Bielefeld'
      },{
        name: 'Der Test 04',
        category: 'Konzert',
        city: 'Hamburg'
      }],
      title: 'Dideldidu'
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
    MyHeader,
    MyFooter,
    MyForm
  }
}
</script>

<style scoped>
.nav {
  background-color: #c7ecee;
  color: #eb4d4b;
}
</style>
