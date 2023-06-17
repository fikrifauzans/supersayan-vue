
        export default {
            name: 'Transactions',
            module: 'transactions',
            schema: 'transaction', 
            module_name: 'Transactions',
          

            formType: {
              show: false,
              edit: false,
              add: false
            },
            model: {
                
              code:null,

              date:null,

              customer_id:null,

              subtotal:null,

              discount:null,

              ongkir:null,

              total:null,

              transaction_details:[
                
              ]

            },
   
            table: {
              columns: (Help, Lang, Static) => {
                return [
                  { name: 'id', label: 'Option', field: 'id', sortable: true, align: 'left', },

                { name: 'code', label: 'Code', field: 'code', sortable: true, align: 'left', },

                { name: 'date', label: 'Date', field: 'date', sortable: true, align: 'left', },

                { name: 'customer-name', label: 'Customer', field: 'customer_name', sortable: true, align: 'left', },

                { name: 'subtotal', label: 'Subtotal', field: (val) => 'Rp. ' + Help.transformMoney(val.subtotal), sortable: true, align: 'left', },

                { name: 'discount', label: 'Discount', field: 'discount', sortable: true, align: 'left', },

                { name: 'ongkir', label: 'Ongkir', field: 'ongkir', sortable: true, align: 'left', },

                { name: 'total', label: 'Total', field: (val) => 'Rp. ' + Help.transformMoney(val.total), sortable: true, align: 'left', },

                ]
              }
            }
          }
          
        