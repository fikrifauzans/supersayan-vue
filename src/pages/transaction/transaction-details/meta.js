
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
                
              transaction_id:null,

              barang_id:null,

              price:null,

              qty:null,

              discount_in_percent:null,

              discount_in_rupiah:null,

              amount:null,

              total:null,

            },
   
            table: {
              columns: (Help, Lang, Static) => {
                return [
                  { name: 'id', label: 'Option', field: 'id', sortable: true, align: 'left', },

                { name: 'transaction_id', label: 'Transaction Id', field: 'transaction_id', sortable: true, align: 'left', },

                { name: 'barang_id', label: 'Barang Id', field: 'barang_id', sortable: true, align: 'left', },

                { name: 'price', label: 'Price', field: 'price', sortable: true, align: 'left', },

                { name: 'qty', label: 'Qty', field: 'qty', sortable: true, align: 'left', },

                { name: 'discount_in_percent', label: 'Discount In Percent', field: 'discount_in_percent', sortable: true, align: 'left', },

                { name: 'discount_in_rupiah', label: 'Discount In Rupiah', field: 'discount_in_rupiah', sortable: true, align: 'left', },

                { name: 'amount', label: 'Amount', field: 'amount', sortable: true, align: 'left', },

                { name: 'total', label: 'Total', field: 'total', sortable: true, align: 'left', },

                ]
              }
            }
          }
          
        