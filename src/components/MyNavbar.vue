<template>
  <v-toolbar
    height="40"
    app
    :clipped-left="clipped">
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
     <v-toolbar-title v-text="title"></v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      title: 'Dideldidu'
    }
  }
}
</script>
