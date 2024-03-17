<script lang="ts">

import UserCard from "@/components/UserCard.vue";
import UserCardModal from "@/components/UserCardModal.vue";
import {defineComponent} from "vue";
import type {UserModel} from "@/models/user.model";
import CloseIcon from "@/components/icons/CloseIcon.vue";

export default defineComponent({
  components: {CloseIcon, UserCard, UserCardModal},
  props: {
    userCards: Object as () => UserModel[]
  },
  data() {
    return {
      selectedUser: Object as UserModel
    }
  },
  
  methods: {
    selectUser(user: UserModel) {
      this.selectedUser = user;
    }
  }
})
</script>

<template>
  <div class="d-flex justify-content-between flex-wrap">
    <UserCard class="mb-3 mr-3"
              data-bs-toggle="modal"
              data-bs-target="#modal-window"
              v-for="userCard in userCards"
              :user="userCard"
              @click="selectUser(userCard)"
    />
    <UserCardModal :user="selectedUser"/>

    <span class="w-100 text-center no-users" v-if="!userCards?.length">No users</span>
  </div>
</template>