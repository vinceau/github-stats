<template>
  <div class="repo-component">
    <h1>{{ owner }}/{{ repo }}</h1>
    <div v-if="loading">
      Fetching data from Github. This could take a while...
    </div>
    <div v-if="!loading && data.length > 0 && data[selected]">
      File type:
      <select v-model="selected">
        <option v-for="option in options" :key="option.value" :value="option.value">
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
    this.loading = true;
    this.data = await fetchDownloadCounts(this.owner, this.repo);
    if (this.data.length > 0) {
      this.ext = this.data[0].extension;
      this.options = this.data.map((d, i) => ({
        text: d.extension,
        value: i,
      }));
    }
    this.loading = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
