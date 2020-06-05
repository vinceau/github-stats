<template>
  <div class="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueApexCharts from "vue-apexcharts";

@Component({
  components: {
    apexchart: VueApexCharts,
  },
})
export default class Chart extends Vue {
  @Prop() private id!: string;
  @Prop() private series!: any[];

  private chartOptions = {
    chart: {
      id: this.id,
    },
    xaxis: {
      type: "datetime",
    },
  };
}
</script>
