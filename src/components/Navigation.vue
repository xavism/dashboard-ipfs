<template>
    <div>
         <v-toolbar app class="white">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <v-avatar size="25">
                    <img src="/img/logo.png">
                </v-avatar>
                Guesser App
            </v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer
            class="white"
            app
            v-model="drawer">
            <v-list>
                <v-list-tile
                    active-class="primary--text"
                    v-for="item in items"
                    :key="item.title"
                    :to="item.path">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data: () => ({
        drawer: false,
        items: [
          { title: 'Node Info', icon: 'web', path:'/' },
          { title: 'Logs', icon: 'list', path: '/logs' }        ]
      })
  }
</script>