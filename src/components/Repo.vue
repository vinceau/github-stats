<template>
  <div class="repo-component">
    <h1>{{ owner }}/{{ repo }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Repo extends Vue {
  @Prop() private owner!: string;
  @Prop() private repo!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
