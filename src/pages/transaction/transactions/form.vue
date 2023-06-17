
<template>
  <div>
    <s-loading :load='loading' />
    <s-drawer @refresh='refresh' :useModal='useModal' form @submit='submit' @back='back' :Meta='Meta'>
      <div>
        <s-form class='q-px-md q-pt-lg' title='Form Transaksi / Sales'>
          <t-input col='6' label='code' v-model='model.code' topLabel='code' readonly />
          <t-datetime v-model='model.date' col='6' dateTime label='date' topLabel='date' readonly />
        </s-form>
        <s-form class='q-px-md q-pt-lg' title='Form Customer'>
          <div class="col-12 row">
            <t-select-api col='4' label='Customer' v-model='model.customer_id' api="customers" optionValue="id"
              optionLabel="name" />

          </div>

        </s-form>


        <s-form class='q-px-md q-pt-lg' title='Form Produk'>
          <q-card bordered flat class='col-12 row q-pt-lg q-px-lg q-mb-xl '>
            <div class="col-12 row justify-between">
              <div class="q-mb-sm">Tambahkan produk kedalam keranjang anda</div>
              <div>
                <q-btn label="Tambah Produk" size="sm" color="primary" class="q-mb-md"
                  @click="model.transaction_details.unshift({ product_id: null })" />

              </div>
            </div>
            <div v-for="(preCart, index) in model.transaction_details" :key="preCart" class="col-12 row q-mb-md">
              <div class="text-bold col-12 q-mb-sm q-px-sm">Item {{ index + 1 }}</div>
              <t-select-api col='3' label='Products' v-model='preCart.product_id' api="products" optionLabel="name"
                optionValue="id" @updateEvent="(val) => preCart.price = val.price" :select="['id,name,price']" />
              <t-currency col='3' label='price' currency v-model='preCart.price' topLabel='price' readonly />
              <t-currency v-if="preCart.price != null && preCart.price != undefined && preCart.price != 0" col='3'
                label='qty' currency v-model='preCart.qty' topLabel='qty'
                @updateEvent="() => calculateProduct(preCart)" />
              <t-currency v-if="preCart.price != null && preCart.price != undefined && preCart.price != 0" col='3'
                label='discount in percent' currency v-model='preCart.discount_in_percent' topLabel='discount in percent'
                @updateEvent="() => calculateProduct(preCart)" max="100" />
              <t-currency v-if="preCart.price != null && preCart.price != undefined && preCart.price != 0" col='3'
                label='discount in rupiah' currency v-model='preCart.discount_in_rupiah' topLabel='discount in rupiah'
                readonly />
              <t-currency v-if="preCart.price != null && preCart.price != undefined && preCart.price != 0" col='3'
                label='amount' currency v-model='preCart.amount' topLabel='amount' readonly />
              <t-currency v-if="preCart.price != null && preCart.price != undefined && preCart.price != 0" col='3'
                label='total' currency v-model='preCart.total' topLabel='total' readonly />
              <div>
                <q-btn icon="delete" color="negative" round rouned size="sm"
                  @click="model.transaction_details.splice(index, 1)" />
              </div>
              <q-separator class="col-12" style="height:1px" />
            </div>


            <div class="col-12 row">
              <div class="text-bold col-12 q-mb-md">Total Products</div>
              <t-currency col='3' label='subtotal' currency v-model='model.subtotal' topLabel='subtotal' readonly />
              <t-currency col='3' label='discount' currency v-model='model.discount' topLabel='discount'
                @updateEvent="calculateProduct()" />
              <t-currency col='3' label='ongkir' currency v-model='model.ongkir' topLabel='ongkir'
                @updateEvent="calculateProduct()" />
              <t-currency col='3' label='total' currency v-model='model.total' topLabel='total' readonly />
            </div>


          </q-card>
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
    this.model = this.$Handle.resetObjectValue(this.Meta.model)

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
      date: date,
      product: null,

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

    calculateProduct(item) {
      if (item != undefined) {
        let price = item.price
        let qty = item.qty
        let discount_in_percent = item.discount_in_percent
        let discount_in_rupiah = item.discount_in_rupiah
        let amount = item.amount
        let total = item.total

        item.discount_in_rupiah = (item.discount_in_percent / 100 * item.price)
        item.amount = item.price - item.discount_in_rupiah
        item.total = item.qty * item.amount
      }

      try {
        this.model.subtotal = this.model.transaction_details.map((v) => v.total).reduce((acc, cv) => acc + cv)
        this.model.total = (this.model.subtotal - this.model.discount + this.model.ongkir)
      } catch (error) {
        return false
      }


    }
  },
}
</script>
