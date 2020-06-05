<template>
  <div class="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueApexCharts from "vue-apexcharts";
import { ReleaseInformation } from "../lib/types";

@Component({
  components: {
    apexchart: VueApexCharts,
  },
})
export default class Chart extends Vue {
  @Prop() private id!: string;
  @Prop() private series!: ReleaseInformation[];

  private chartOptions = {
    markers: {
      size: 5,
    },
    chart: {
      id: this.id,
    },
    xaxis: {
      type: "datetime",
    },
  };
}
</script>

<style lang="scss">
.chart {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
</style>
