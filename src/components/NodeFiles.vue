<template>
    <div>

    <FrameSection :title="'My Files'">
        <v-data-table
            :headers="headers"
            :items="myFiles"
            :loading="loadingFiles"
            class="elevation-1"
            width="100"
            light
        >
            <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
            <template v-slot:items="props">
            <td class="font-weight-bold">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.cid }}</td>
            <td class="text-xs-left"><v-chip small color="secondary" text-color="white">{{props.item.type}}</v-chip></td>
            <td class="text-xs-left">{{ props.item.size }}</td>
            <td class="text-xs-left">{{ props.item.peers }}</td>
            <td class="justify-center">
                <v-tooltip left>
                    <template v-slot:activator="{ on }">
                        <v-icon v-if="!amILoading(props.item.cid)"
                                :color="props.item.crypted ? 'accent' : ''"
                                @click="!props.item.crypted ? cryptFile(props.item.cid) : decryptFile(props.item.cid)"
                            >
                            {{props.item.crypted ? 'lock' : 'lock_open'}}
                        </v-icon>
                        <v-icon v-else id="loading"
                            >
                            refresh
                        </v-icon>                        
                    </template>
                    <span>Lock</span>
                </v-tooltip>
            </td>
            </template>
        </v-data-table>
        <v-layout wrap>
            <v-flex xs12 class="mt-1">
				<UploadButton
                    :fileChangedCallback="fileChanged" title="Upload New File"
                    >
                    <template slot="icon-left">
                        <v-icon left dark>add</v-icon>
                    </template>
                </UploadButton>
            </v-flex>
        </v-layout>
    </FrameSection>
    <InformationDialog :dialog="dialogInfo.show" :title="dialogInfo.title" :text="dialogInfo.text" @dialogClosed="dialogInfo.show = false"/>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import FrameSection from './common/FrameSection'
  import InformationDialog from './common/InformationDialog'
  import UploadButton from 'vuetify-upload-button';

  export default {
    components: {
      FrameSection,
      InformationDialog,
      UploadButton
    },
    data: () => ({
        dialogInfo: {
            show: false,
            title: null,
            text: null
        },
        loadingFiles: null,
        loadingCryptedFiles: [],
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Id', value: 'cid', sortable: true },
          { text: 'Type', value: 'type', sortable: true },
          { text: 'Size', value: 'size', sortable: true },
          { text: 'Peers', value: 'peers', sortable: true },
          { text: '', value: 'name', sortable: false }
        ]
    }),
    computed: {
        myFiles: function() {
            return this.files.filter(f => f.owner);
        },
        ...mapGetters({
            files: 'files/files',
        }),
    },
    methods: {
        cryptFile(id) {
            this.loadingCryptedFiles.push(id);
            this.$store.dispatch('files/cryptFile', id)
            .then((publicKey) => {
                this.dialogInfo.title = 'Public key';
                this.dialogInfo.text = `Please save the key to decrypt the file: ${publicKey}`;
                this.dialogInfo.show = true;
            })
            .finally(() => {
                this.loadingCryptedFiles = this.loadingCryptedFiles.filter(l => l !== id);
            })
        },
        decryptFile(id) {
                this.dialogInfo.title = 'Decrypt File';
                this.dialogInfo.text = `Please write the public Key to decrypt file`;
                this.dialogInfo.show = true;
                console.log(id);
        },
        amILoading(cid) {
            return this.loadingCryptedFiles.includes(cid);
        },
        fileChanged (file) {
            debugger;
            console.log(file);
            this.$store.dispatch('files/addFile', file);
        },
        addLogUpload(cid) {
            let log = {
                cid: cid,
                action: 'Uploaded',
                status: 'Completed'
            }
            this.$store.dispatch('logs/addLog', log);
        }
    },
    mounted() {
        this.loadingFiles = true;
        this.$store.dispatch('files/getFiles')
        .finally(() => {this.loadingFiles = false})
    }
}

</script>

<style lang="css">

    #loading {
		-webkit-animation: rotation 2s infinite linear;
    }
    @-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
    }
</style>