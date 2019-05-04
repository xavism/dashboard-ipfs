<template>
    <div>
      <v-layout row wrap class="ma-3">
        <v-flex xs12 class="pa-2">
          <NodeInfo />
        </v-flex>
        <v-flex xs12 class="pa-2">
          <NodeFiles />
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
  import NodeInfo from '../components/NodeInfo'
  import NodeFiles from '../components/NodeFiles'


  export default {
    components: {
      NodeInfo,
      NodeFiles
    }
  }
</script>