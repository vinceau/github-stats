<template>
  <div class="home">
    <h1>Github Release Stats</h1>
    <h2>Enter a Github repo below:</h2>
    <form id="repo-form" @submit="checkForm">
      <input id="name" v-model="message" type="text" name="name" placeholder="owner/repo" />
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import router from "@/router";

const validGithubUser = (user: string): boolean => {
  const re = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  return re.test(user);
};

const validGithubRepo = (repo: string): boolean => {
  const re = /\s/;
  return !re.test(repo);
};

export default Vue.extend({
  name: "Home",
  data() {
    return {
      errors: [] as string[],
      message: "",
    };
  },
  methods: {
    checkForm: function(e: any) {
      e.preventDefault();
      this.errors = [];

      if (!this.message) {
        this.errors.push("Repo required.");
        return;
      }

      const parts = this.message.split("/");
      if (parts.length !== 2) {
        this.errors.push("Invalid repo format name");
      } else if (!validGithubUser(parts[0])) {
        this.errors.push("Invalid Github username");
      } else if (!validGithubRepo(parts[1])) {
        this.errors.push("Invalid Github repo name");
      }
      if (!this.errors.length) {
        router.push({
          name: "Repo",
          params: { owner: parts[0], repo: parts[1] },
        });
        // return true;
      }
    },
  },
});
</script>

<style lang="scss">
#repo-form input {
  border-radius: 4px;
  border-style: solid;
  padding: 5px;
  font-size: 24px;
}
</style>
