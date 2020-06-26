<template>
  <div class="home">
    <h1>Github Release Stats</h1>
    <h2>Enter a Github repo below:</h2>
    <repo-input />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RepoInput from "@/components/RepoInput.vue";

export default Vue.extend({
  name: "Home",
  components: {
    RepoInput,
  },
});
</script>

<style lang="scss"></style>
