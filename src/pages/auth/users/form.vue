<template>
  <div>
    <s-loading :load="loading" />
    <s-drawer @refresh="refresh" :useModal="useModal" form @submit="submit" @back="back" :Meta="Meta">
      <div>
        <s-form class="q-px-md q-py-lg" title="Data User">
          <t-input col="4" label="name" r-icon="person"  v-model="model.name" />
          <t-input col="4" label="username" r-icon="person"  v-model="model.username" />
          <t-input col="4" label="email" r-icon="mail"  v-model="model.email" />
          <t-input col="4" type="password" label="password" r-icon="lock" v-model="model.password" />
          <t-select-api col="4" api="roles" v-model="model.role_id" optionValue="id" optionLabel="name" label="role" />
        </s-form>
      </div>
    </s-drawer>
  </div>
</template>

<script>
import Meta from "./meta"

export default {
  name: Meta.name + 'Form',
  props: ["modal", "id", "submitOnModal"],
  created() {
    this.$Handle.loadingStart()
    this.Meta.model = {}
    if (this.$route.params.id) {
      this.param = this.$route.params.id ? this.$route.params.id : null
    }
    if (this.id) this.param = this.id ? this.id : null
    if (this.modal && this.modal.add === true) this.useModal = true
    if (this.modal && this.modal.edit === true) this.useModal = true
    if (this.param !== null) this.findId(this.param)
    this.$Handle.loadingStop()
  },
  data() {
    return {
      Meta,
      useModal: false,
      model: Meta.model,
      loading: false,
      edit: false,
      param: null,
    }
  },

  watch: {
    submitOnModal: function (val) {
      if (val.isTrusted) this.submit()
    },
  },
  methods: {
    findId(id) {
      let endpoint = Meta.module + "/" + id
      this.$api.get(endpoint, (data, status, message, full) => {
        if (status == 200) {
          this.model = data
          this.$Handle.loadingStop()
        }
      })
    },
    async submit() {
      this.$Handle.loadingStart()
      if (this.param !== null) await this.editData(this.param)
      else await this.postData(this.model)
    },
    editData(id) {
      let endpoint = this.Meta.module + "/" + id
      this.$api.put(endpoint, this.model, (data, status, message, full) => {
        if (status == 200) {
          this.$Handle.successMessage(message)
          this.$Handle.loadingStop()
          this.back()
        }
      })
    },
    postData(model) {
      let endpoint = this.Meta.module
      this.$api.post(endpoint, model, (data, status, message, full) => {
        if (status == 200) {
          this.$Handle.successMessage(message)
          this.$Handle.loadingStop()
          this.back()
        }
      })
    },
    back() {
      if (this.useModal == true) this.$emit("closeModal")
      else
        return this.$router.push({ name: Meta.module, query: { ...this.$route.query } })
    },
  },
}
</script>
