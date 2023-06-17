
export default {
  name: 'Transaction Details',
  module: 'transaction-details',
  schema: 'transaction',
  module_name: 'Transaction Details',


  formType: {
    show: false,
    edit: false,
    add: false
  },
  model: {

    transaction_id: null,

    product_id: null,

    price: null,

    qty: null,

    last_stock: null,

    discount_in_percent: null,

    discount_in_rupiah: null,

    amount: null,

    total: null,

  },

  table: {
    columns: (Help, Lang, Static) => {
      return [
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

      ]
    }
  }
}

