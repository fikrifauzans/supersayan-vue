
export default {
  name: 'Categories',
  module: 'categories',
  schema: 'master',
  module_name: 'Categories',


  formType: {
    show: false,
    edit: false,
    add: false
  },
  model: {

    group: null,

    code: null,

    name: null,

    remark: null,

  },

  table: {
    columns: (Help, Lang, Static) => {
      return [
        { name: 'id', label: 'Option', field: 'id', sortable: true, align: 'left', },
        // { name: 'group', label: 'Group', field: 'group', sortable: true, align: 'left', },
        { name: 'code', label: 'Code', field: 'code', sortable: true, align: 'left', },
        { name: 'name', label: 'Name', field: 'name', sortable: true, align: 'left', },
        { name: 'remark', label: 'Remark', field: 'remark', sortable: true, align: 'left', },
      ]
    }
  }
}

