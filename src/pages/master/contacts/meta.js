
export default {
  name: 'Contacts',
  module: 'contacts',
  schema: 'master',
  module_name: 'Contacts',


  formType: {
    show: false,
    edit: false,
    add: false
  },
  model: {

    phone: null,

    city: null,

    province: null,

    adress: null,

    user_id: null,

  },

  table: {
    columns: (Help, Lang, Static) => {
      return [
        { name: 'id', label: 'Option', field: 'id', sortable: true, align: 'left', },

        { name: 'user-name', label: 'User', field: val => Help.transformField(val, 'user.name'), sortable: true, align: 'left', },

        { name: 'user-email', label: 'Email', field: val => Help.transformField(val, 'user.email'), sortable: true, align: 'left', },

        { name: 'user-username', label: 'Username', field: val => Help.transformField(val, 'user.email'), sortable: true, align: 'left', },

        { name: 'phone', label: 'Phone', field: 'phone', sortable: true, align: 'left', },

        { name: 'city', label: 'City', field: 'city', sortable: true, align: 'left', },

        { name: 'province', label: 'Province', field: 'province', sortable: true, align: 'left', },

        { name: 'adress', label: 'Adress', field: 'adress', sortable: true, align: 'left', },


      ]
    }
  }
}

