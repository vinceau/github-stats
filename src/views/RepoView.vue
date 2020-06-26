<template>
  <Repo
    :key="`${$route.params.owner}/${$route.params.repo}`"
    v-bind:owner="$route.params.owner"
    v-bind:repo="$route.params.repo"
  />
</template>

<script>
// @ is an alias to /src
import Repo from "@/components/Repo.vue";

export default {
  name: "RepoView",
  components: {
    Repo,
  },
};
</script>
