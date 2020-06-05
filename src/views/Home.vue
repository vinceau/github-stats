<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import VueApexCharts from "vue-apexcharts";
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
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          type: "datetime",
        },
      },
      series: downloadData,
    };
  },
};
</script>
