<template>
  <div class="repo-input-component">
    <form id="repo-form" @submit="checkForm">
      <input
        id="name"
        ref="name"
        v-model="message"
        v-on:blur="handleBlur"
        type="text"
        name="name"
        placeholder="owner/repo"
      />
    </form>
    <div class="error" v-if="error" :key="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { validGithubRepo, validGithubUser } from "../lib/validation";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RepoInput extends Vue {
  @Prop({ default: "" }) private value!: string;
  private message = this.value;
  private error = "";

  public mounted() {
    (this.$refs.name as any).focus();
  }

  public handleBlur() {
    this.$emit("blur");
  }

  public checkForm(e: any) {
    e.preventDefault();
    this.error = "";

    if (!this.message) {
      this.error = "Repo required.";
      return;
    }

    const parts = this.message.split("/");
    if (parts.length !== 2 || !parts[1]) {
      this.error = "Invalid repo format name";
    } else if (!validGithubUser(parts[0])) {
      this.error = "Invalid Github username";
    } else if (!validGithubRepo(parts[1])) {
      this.error = "Invalid Github repo name";
    }
    if (!this.error) {
      (this.$refs.name as any).blur();
      router.push({
        name: "Repo",
        params: { owner: parts[0], repo: parts[1] },
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#repo-form input {
  border-radius: 4px;
  border-style: solid;
  padding: 5px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 24pt;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}
.repo-input-component {
  position: relative;

  .error {
    padding-top: 5px;
    position: absolute;
    width: 100%;
    font-size: 14px;
    color: red;
  }
}
</style>
