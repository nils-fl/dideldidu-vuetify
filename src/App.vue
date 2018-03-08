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
      </v-navigation-drawer>

    <v-toolbar
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

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      checkCategory: [],
      items: [{
        icon: 'location_city',
        title: 'Wo'
      },{
        icon: 'location_city',
        title: 'Was'
      }],
      cities: [{
        name: 'Hamburg',
        key: 'Hamburg',
        box: false
      },{
        name: 'Düsseldorf',
        key: 'Düsseldorf',
        box: false
      }],
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
      }],
      data: [{
        name: 'Der Test01',
        category: 'Spielplatz',
        city: 'Hamburg',
        morning: true,
        afternoon: true,
        evening: true
      },{
        name: 'Der Test02',
        category: 'Theater',
        city: 'Düsseldorf',
        morning: true,
        afternoon: true,
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

      return filterData
    }
  },
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
