<template>
  <div class="repo-component">
    <div class="header">
      <h1 v-if="!editing" v-on:click="editing = !editing">{{ owner }}/{{ repo }}</h1>
      <repo-input v-if="editing" v-bind:value="`${owner}/${repo}`" @blur="editing = false" />
    </div>

    <div v-if="loading">
      Fetching data from Github. This could take a while...
    </div>
    <div v-if="!loading && data.length > 0 && data[selected]">
      <div>
        File type:
        <select v-model="selected">
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <chart :id="data[selected].extension" :series="data[selected].stats" />
      <div class="github-logo">
        <a
          v-bind:href="`https://github.com/${owner}/${repo}`"
          title="Show in Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Github logo" src="../assets/github-logo.svg" />
        </a>
      </div>
    </div>
    <div v-if="!loading && error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchDownloadCounts } from "../lib/downloadCounts";
import { RepoRelease } from "@/lib/types";
import Chart from "./Chart.vue";
import RepoInput from "./RepoInput.vue";

@Component({
  components: {
    Chart,
    RepoInput,
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
  private editing = false;
  private error = "";
  private data: RepoRelease[] = [];
  private loading = false;
  private async mounted() {
    this.loading = true;
    try {
      this.data = await fetchDownloadCounts(this.owner, this.repo);
      if (this.data.length > 0) {
        this.options = this.data.map((d, i) => ({
          text: d.extension,
          value: i,
        }));
      } else {
        this.error = "No release information available";
      }
    } catch (err) {
      console.error(err);
      this.error = "Failed to fetch repo information from Github";
    }
    this.loading = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error-message {
  color: red;
}

.header {
  margin: 0;
  margin-top: 20px;
  margin-bottom: 40px;
  h1 {
    margin: 0;
    padding: 5px 0;
    border: solid 2px transparent;
  }
}

.github-logo {
  margin-top: 50px;
  img {
    width: 64px;
  }
}
</style>
