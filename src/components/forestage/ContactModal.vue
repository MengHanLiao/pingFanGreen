<template>
  <div
    class="modal fade"
    id="contactModal"
    tabindex="-1"
    ref="modal"
    aria-labelledby="contactModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="contactModalLabel">聯絡我們</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <v-form ref="form" v-slot="{ errors }" @sumbit="submitMessage">
            <div class="mb-3">
              <label for="customName" class="form-label">
                姓名<span class="text-sm text-primary ms-2">必填</span>
              </label>
              <v-field
                id="customName"
                name="customName"
                type="text"
                placeholder="請輸入姓名"
                class="form-control"
                :class="{ 'is-invalid': errors['customName'] }"
                rules="required"
                v-model="customForm.name"
              >
              </v-field>
              <error-message
                name="customName"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="customEmail" class="form-label">
                聯絡信箱<span class="text-sm text-primary ms-2">必填</span>
              </label>
              <v-field
                id="customEmail"
                name="customEmail"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['customEmail'] }"
                placeholder="請輸入 Email"
                rules="required|email"
                v-model="customForm.email"
              ></v-field>
              <error-message
                name="customEmail"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-4">
              <label for="customMessage" class="form-label">
                留言<span class="text-sm text-primary ms-2">必填</span>
              </label>
              <v-field
                id="customMessage"
                name="customMessage"
                v-model="customForm.message"
                class="form-control"
                :class="{ 'is-invalid': errors['customMessage'],
                  'border-green-500': customForm.message !== '' }"
                cols="30"
                rows="5"
                as="textarea"
                rules="required"
              ></v-field>
              <error-message
                name="customMessage"
                class="invalid-feedback"
              ></error-message>
            </div>
            <button
                type="submit"
                class="w-100 btn btn-green-500 text-white"
                :disabled="Object.keys(errors).length > 0"
              >
                送出
            </button>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalControl from '@/methods/modalControl';

export default {
  data() {
    return {
      customForm: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  mixins: [modalControl],
  methods: {
    submitMessage() {
      this.closeModal();
    },
  },
};
</script>
