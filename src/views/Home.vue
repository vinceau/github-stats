<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="!loading && data.length > 0">
      <chart v-for="d in data" :key="d.name" :id="d.name" :series="d.data" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Chart from "@/components/Chart.vue";

import { fetchDownloadCounts } from "../lib/downloadCounts";

export default {
  name: "Home",
  components: {
    HelloWorld,
    chart: Chart,
  },
  async mounted() {
    this.loading = true;
    try {
      const downloadsMap = await fetchDownloadCounts(
        "vinceau",
        "project-clippi"
      );
      this.data = Array.from(downloadsMap.entries()).map(([ext, data]) => ({
        name: ext,
        data,
      }));
      console.log("got this data:");
      console.log(JSON.stringify(this.data, undefined, 2));
    } catch (errr) {
      console.error("Failed to load data");
    } finally {
      this.loading = false;
    }
  },
  data() {
    return {
      data: [],
      loading: false,
    };
  },
};
</script>
