
<template>
  <div>
    <s-loading :load='loading' />
    <s-drawer @refresh='refresh' :useModal='useModal' form detail :Meta='Meta' @back='back'>
      <div class='row'>
        <div class='col-md-12 col-12'>
          <s-form class='q-px-md py-sm q-mt-lg col-6' title='Transactions'>
            <t-list :list='mainList' />
            <div class="col-12 q-mt-md">
              <div class="text-bold q-mb-sm">Produk yang terjual</div>
              <q-table flat :columns="[

                { name: 'id', label: 'Option', field: 'id', sortable: true, align: 'left', },
                { name: 'transaction-code', label: 'Transaction', field: 'transaction_code', sortable: true, align: 'left', },
                { name: 'product-name', label: 'Product', field: 'product_name', sortable: true, align: 'left', },
                { name: 'price', label: 'Price', field: 'price', sortable: true, align: 'left', },
                { name: 'qty', label: 'Qty', field: 'qty', sortable: true, align: 'left', },
                { name: 'last_stock', label: 'Last Stock', field: 'last_stock', sortable: true, align: 'left', },
                { name: 'discount_in_percent', label: 'Discount In Percent', field: 'discount_in_percent', sortable: true, align: 'left', },
                { name: 'discount_in_rupiah', label: 'Discount In Rupiah', field: 'discount_in_rupiah', sortable: true, align: 'left', },
                { name: 'amount', label: 'Amount', field: 'amount', sortable: true, align: 'left', },
                { name: 'total', label: 'Total', field: 'total', sortable: true, align: 'left', },


              ]" :rows="model.transaction_details" />
            </div>
          </s-form>
        </div>
      </div>
    </s-drawer>
  </div>
</template>

<script>
import Meta from './meta'

export default {
  name: Meta.name + 'Detail',
  props: ['modal', 'id', 'submitOnModal'],
  created() {
    this.$Handle.loadingStart()
    if (this.modal && this.modal.show === true) this.useModal = true
    if (this.$route.params.id) {
      this.param = this.$route.params.id ? this.$route.params.id : null
    }
    if (this.id) this.param = this.id ? this.id : null
    if (this.param) this.findId(this.param)
    else this.$Handle.loadingStop()
  },
  data() {
    return {
      Meta,
      useModal: false,
      model: Meta.model,
      mainList: null,
      loading: false,
      param: null,
      setup: {
        destroy: ['id', 'deleted_at', 'created_at', 'updated_at', 'role_id', 'transaction_details', 'customer', 'created_by', 'updated_by', 'deleted_by'],
        money: [],
        date: [],
      },
    }
  },

  watch: {},
  methods: {
    findId(id) {
      let endpoint = Meta.module + '/' + id
      this.$api.get(endpoint, (data, status, message, full) => {
        if (status == 200) {
          this.model = data
          this.mainList = this.$Help.transformList(data, this.setup)
          console.log(data)
          this.$Handle.loadingStop()
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

        