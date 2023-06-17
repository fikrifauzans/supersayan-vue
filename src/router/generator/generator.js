
export default [

    
           
   { name: 'transactions', path: 'transactions', component: () => import('pages/transaction/transactions/index.vue') },
   { name: 'add-transactions', path: 'transactions/form', component: () => import('pages/transaction/transactions/form.vue') },
   { name: 'edit-transactions', path: 'transactions/form/:id', component: () => import('pages/transaction/transactions/form.vue') },
   { name: 'view-transactions', path: 'transactions/:id', component: () => import('pages/transaction/transactions/detail.vue') },

           
   { name: 'transaction-details', path: 'transaction-details', component: () => import('pages/transaction/transaction-details/index.vue') },
   { name: 'add-transaction-details', path: 'transaction-details/form', component: () => import('pages/transaction/transaction-details/form.vue') },
   { name: 'edit-transaction-details', path: 'transaction-details/form/:id', component: () => import('pages/transaction/transaction-details/form.vue') },
   { name: 'view-transaction-details', path: 'transaction-details/:id', component: () => import('pages/transaction/transaction-details/detail.vue') },

              
];