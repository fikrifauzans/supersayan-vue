
export default {
  name: 'Products',
  module: 'products',
  schema: 'master',
  module_name: 'Products',


  formType: {
    show: false,
    edit: false,
    add: false
  },
  model: {

    category_id: null,

    code: null,

    name: null,

    price: null,

    stock: null,

    remark: null,

  },

  table: {
    columns: (Help, Lang, Static) => {
      return [
        { name: 'id', label: 'Option', field: 'id', sortable: true, align: 'left', },

        { name: 'category_id', label: 'Category', field: 'category_name', sortable: true, align: 'left', },

        { name: 'code', label: 'Code', field: 'code', sortable: true, align: 'left', },

        { name: 'name', label: 'Name', field: 'name', sortable: true, align: 'left', },

        { name: 'price', label: 'Price', field: 'price', sortable: true, align: 'left', },

        { name: 'stock', label: 'Stock', field: 'stock', sortable: true, align: 'left', },

        { name: 'remark', label: 'Remark', field: 'remark', sortable: true, align: 'left', },

      ]
    }
  }
}

