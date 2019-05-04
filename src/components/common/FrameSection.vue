<template>
    <v-card>
      <v-card-title class="primary white--text">
      <span class="text-uppercase">{{title}}</span>
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
    </v-card>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style>

</style>
