<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <chart :id="chartId" :series="series" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Chart from "@/components/Chart.vue";

import releaseData from "../data.json";

const downloadData = releaseData[0].releaseAssets.nodes.map(r => {
  return {
    name: r.name,
    data: r.downloadCountHistory.map(d => [d.tstz, d.downloads]),
  };
});

console.log(downloadData);

export default {
  name: "Home",
  components: {
    HelloWorld,
    chart: Chart,
  },
  data() {
    return {
      chartId: "vuechart-example",
      series: downloadData,
    };
  },
};
</script>
