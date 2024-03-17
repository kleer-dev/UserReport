<script lang="ts">

import SearchIcon from "@/components/icons/SearchIcon.vue";
import type { UserModel } from "@/models/user.model";
import UrlService from "@/services/url.service";
import {UserReportService} from "@/services/user-report.service";

export default {
  components: {SearchIcon},
  data() {
    return {
      term: Object as any,
      userCards: [] as UserModel[],
      userReportService: new UserReportService()
    };
  },
  async created() {
    this.term = UrlService.getParameterFromUrl('term')
    this.userCards = await this.userReportService.get(this.term);
    this.handleSearchInput()
  },
  methods: {
    handleSearchInput() {
      this.$emit('getUserCards', this.userCards);
    }
  },
  watch: {
    async term() {
      this.userCards = await this.userReportService.get(this.term);
      UrlService.setUrlParameter('term', this.term)
    }
  }
}

</script>

<template>
  <div class="d-flex align-items-center search-container position-relative">
    <input v-model="term" @input="handleSearchInput" type="text" class="search">
    <SearchIcon class="position-absolute end-0 me-4"/>
  </div>
</template> 

<style scoped>
  @import '../assets/styles/search.css';
</style>