<script lang="ts">
import Search from "@/components/Search.vue";
import UserCardContainer from "@/components/UserCardContainer.vue";
import type { UserModel } from "@/models/user.model";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Search, UserCardContainer},
  data() {
    return {
      userCards: [] as UserModel[]
    }
  },
  methods: {
    updateUsers(users: UserModel[]) {
      this.userCards = users;
    }
  }
})
</script>

<template>
  <main class="container-lg">
    <Search @getUserCards="updateUsers"/>
    <UserCardContainer :userCards="userCards"/>
  </main>
</template>