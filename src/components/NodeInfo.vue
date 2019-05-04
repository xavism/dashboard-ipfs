<template>
    <FrameSection :title="'Node Info'">
        <v-layout row wrap>
            <v-flex xs4 md2>
                <span class="text-uppercase font-weight-bold">Id</span>
            </v-flex>
            <v-flex xs8 md10>
                {{node.id}}
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs4 md2>
                <span class="text-uppercase font-weight-bold">Address</span>
            </v-flex>
            <v-flex xs8 md10>
                {{node.address}}
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs4 md2>
                <span class="text-uppercase font-weight-bold">Country</span>
            </v-flex>
            <v-flex xs8 md10>
                <flag :iso="node.country" />
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-chip :color="statusColor" text-color="white">{{node.online ? 'Online' : 'Offline'}}</v-chip>
            </v-flex>
        </v-layout>

    </FrameSection>
</template>

<script>
  import { mapGetters } from 'vuex';
  import FrameSection from './common/FrameSection'

  export default {
    components: {
      FrameSection
    },
    computed: {
        statusColor: function() {
            return this.node.online === true ? 'success' : 'error'
        },
        ...mapGetters({
            node: 'node/node'
        }),
        }
    }

</script>