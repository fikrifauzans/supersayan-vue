
        export default {
            name: 'Customers',
            module: 'customers',
            schema: 'master', 
            module_name: 'Customers',
          

            formType: {
              show: false,
              edit: false,
              add: false
            },
            model: {
                
              code:null,

              name:null,

              phone:null,

              address:null,

            },
   
            table: {
              columns: (Help, Lang, Static) => {
                return [
                  { name: 'id', label: 'Option', field: 'id', sortable: true, align: 'left', },

                { name: 'code', label: 'Code', field: 'code', sortable: true, align: 'left', },

                { name: 'name', label: 'Name', field: 'name', sortable: true, align: 'left', },

                { name: 'phone', label: 'Phone', field: 'phone', sortable: true, align: 'left', },

                { name: 'address', label: 'Address', field: 'address', sortable: true, align: 'left', },

                ]
              }
            }
          }
          
        