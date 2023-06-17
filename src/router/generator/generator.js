
export default [

    
           
   { name: 'categories', path: 'categories', component: () => import('pages/master/categories/index.vue') },
   { name: 'add-categories', path: 'categories/form', component: () => import('pages/master/categories/form.vue') },
   { name: 'edit-categories', path: 'categories/form/:id', component: () => import('pages/master/categories/form.vue') },
   { name: 'view-categories', path: 'categories/:id', component: () => import('pages/master/categories/detail.vue') },

           
   { name: 'products', path: 'products', component: () => import('pages/master/products/index.vue') },
   { name: 'add-products', path: 'products/form', component: () => import('pages/master/products/form.vue') },
   { name: 'edit-products', path: 'products/form/:id', component: () => import('pages/master/products/form.vue') },
   { name: 'view-products', path: 'products/:id', component: () => import('pages/master/products/detail.vue') },

           
   { name: 'customers', path: 'customers', component: () => import('pages/master/customers/index.vue') },
   { name: 'add-customers', path: 'customers/form', component: () => import('pages/master/customers/form.vue') },
   { name: 'edit-customers', path: 'customers/form/:id', component: () => import('pages/master/customers/form.vue') },
   { name: 'view-customers', path: 'customers/:id', component: () => import('pages/master/customers/detail.vue') },

           
   { name: 'transactions', path: 'transactions', component: () => import('pages/transaction/transactions/index.vue') },
   { name: 'add-transactions', path: 'transactions/form', component: () => import('pages/transaction/transactions/form.vue') },
   { name: 'edit-transactions', path: 'transactions/form/:id', component: () => import('pages/transaction/transactions/form.vue') },
   { name: 'view-transactions', path: 'transactions/:id', component: () => import('pages/transaction/transactions/detail.vue') },

           
   { name: 'transaction-details', path: 'transaction-details', component: () => import('pages/transaction/transaction-details/index.vue') },
   { name: 'add-transaction-details', path: 'transaction-details/form', component: () => import('pages/transaction/transaction-details/form.vue') },
   { name: 'edit-transaction-details', path: 'transaction-details/form/:id', component: () => import('pages/transaction/transaction-details/form.vue') },
   { name: 'view-transaction-details', path: 'transaction-details/:id', component: () => import('pages/transaction/transaction-details/detail.vue') },

              
];