<template>
  <div class="repo-component">
    <h1>{{ owner }}/{{ repo }}</h1>
    <div v-if="loading">
      Fetching data from Github. This could take a while...
    </div>
    <div v-if="!loading && data.length > 0 && data[selected]">
      Files:
      <select v-model="selected">
        <option
          v-for="option in options"
          v-bind:key="option.value"
          v-bind:value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <chart :id="data[selected].extension" :series="data[selected].stats" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchDownloadCounts } from "../lib/downloadCounts";
import { RepoRelease } from "@/lib/types";
import Chart from "./Chart.vue";

@Component({
  components: {
    chart: Chart,
  },
})
export default class Repo extends Vue {
  @Prop() private owner!: string;
  @Prop() private repo!: string;

  private selected = 0;
  private options: Array<{
    text: string;
    value: number;
  }> = [];
  private ext = "";
  private data: RepoRelease[] = [];
  private loading = false;
  private async mounted() {
    console.log("mounted  repo component");
    this.loading = true;
    this.data = await fetchDownloadCounts(this.owner, this.repo);
    console.log("got this data:");
    console.log(this.data);
    if (this.data.length > 0) {
      this.ext = this.data[0].extension;
      console.log(`starting ext: ${this.ext}`);
      this.options = this.data.map((ext, i) => ({
        text: ext.extension,
        value: i,
      }));
    }
    this.loading = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
