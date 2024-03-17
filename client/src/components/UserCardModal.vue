<script lang="ts">
  import CloseIcon from "@/components/icons/CloseIcon.vue";
  import {defineComponent} from "vue";
  import type {UserModel} from "@/models/user.model";

  export default defineComponent({
    components: {CloseIcon},
    props: {
      user: {
        type: Object as () => UserModel,
        required: true
      }
    }
  })
</script>

<template>
  <div class="modal fade" id="modal-window" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="d-flex justify-content-between modal-header border-0">
          <h5 class="modal-title">{{ user.name }}</h5>
          <CloseIcon type="button" data-bs-dismiss="modal" aria-label="Close" />
        </div>
          <div class="modal-body">
          <table class="table border-0">
            <tr>
              <td>Телефон:</td>
              <td class="table-data">{{ user.phone }}</td>
            </tr>
            <tr>
              <td>Почта:</td>
              <td class="table-data">{{ user.email }}</td>
            </tr>
            <tr>
              <td>Дата приема:</td>
              <td class="table-data">{{ user.hire_date }}</td>
            </tr>
            <tr>
              <td>Должность:</td>
              <td class="table-data">{{ user.position_name }}</td>
            </tr>
            <tr>
              <td>Подразделение:</td>
              <td class="table-data">{{ user.department }}</td>
            </tr>
            <tr>
              <td>Адрес:</td>
              <td class="table-data">{{ user.address }}</td>
            </tr>
          </table>
        </div>
        <div class="modal-footer border-0 d-flex flex-column align-items-start">
          <span class="modal-footer-title">Дополнительная информация:</span>
          <div class="modal-footer-description">
            <span>
              Разработчики используют текст в качестве заполнителя макта страницы.
              Разработчики используют текст в качестве заполнителя макта страницы.</span>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../assets/styles/user-card-modal.css';
</style>

<style>
  .modal-backdrop {
    background-color: #BCC3D080;
  }
</style>