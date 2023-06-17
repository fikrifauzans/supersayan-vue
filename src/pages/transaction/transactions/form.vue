
<template>
  <div>
    <s-loading :load='loading' />
    <s-drawer @refresh='refresh' :useModal='useModal' form @submit='submit' @back='back' :Meta='Meta'>
      <div>
        <s-form class='q-px-md q-py-lg' title='Form Transactions'>
          <t-input col='4' label='code' v-model='model.code' topLabel='code' readonly />
          <t-datetime v-model='model.date' col='4' dateTime label='date' topLabel='date' readonly />
          <t-currency col='4' label='customer_id' currency v-model='model.customer_id' topLabel='customer_id' />
          <t-currency col='4' label='subtotal' currency v-model='model.subtotal' topLabel='subtotal' />
          <t-currency col='4' label='discount' currency v-model='model.discount' topLabel='discount' />
          <t-currency col='4' label='ongkir' currency v-model='model.ongkir' topLabel='ongkir' />
          <t-currency col='4' label='total' currency v-model='model.total' topLabel='total' />
        </s-form>
      </div>
    </s-drawer>
  </div>

</template>

<script>
import Meta from './meta'
import { date } from 'quasar'

export default {
  name: Meta.name + 'Form',
  props: ['modal', 'id', 'submitOnModal'],
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

    this.model.code = `TRX-${this.$Help.randomString(10)}`

    setInterval(() => {
      this.model.date = this.$Help.generateDate()
    }, 1000);



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
      date: date
    }
  },

  watch: {
    submitOnModal: function (val) {
      if (val.isTrusted) this.submit()
    },
  },
  methods: {
    findId(id) {
      let endpoint = Meta.module + '/' + id
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
      let endpoint = this.Meta.module + '/' + id
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
      if (this.useModal == true) this.$emit('closeModal')
      else
        return this.$router.push({ name: Meta.module, query: { ...this.$route.query } })
    },
  },
}
</script>
