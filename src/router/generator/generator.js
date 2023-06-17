
export default [

    
           
   { name: 'transaction-details', path: 'transaction-details', component: () => import('pages/transaction/transaction-details/index.vue') },
   { name: 'add-transaction-details', path: 'transaction-details/form', component: () => import('pages/transaction/transaction-details/form.vue') },
   { name: 'edit-transaction-details', path: 'transaction-details/form/:id', component: () => import('pages/transaction/transaction-details/form.vue') },
   { name: 'view-transaction-details', path: 'transaction-details/:id', component: () => import('pages/transaction/transaction-details/detail.vue') },

              
];