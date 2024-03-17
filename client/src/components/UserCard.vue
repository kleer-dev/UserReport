<script lang="ts">

import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
import {defineComponent} from "vue";
import type {UserModel} from "@/models/user.model";

export default defineComponent({
  components: {PhoneIcon, MessageIcon},
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
    }
  }
})
</script>

<template>
  <div class="user-card">
    <span class="card-title">{{ user.name }}</span>
    <div class="card-info">
      <div class="card-info-item">
        <PhoneIcon/>
        <span>{{user.phone}}</span>
      </div>
      <div class="card-info-item">
        <MessageIcon/>
        <span>{{user.email}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../assets/styles/user-card.css';
</style>