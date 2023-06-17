export default [

  { name: "categories", path: "categories", component: () => import("pages/master/categories/index.vue"), },
  { name: "add-categories", path: "categories/form", component: () => import("pages/master/categories/form.vue"), },
  { name: "edit-categories", path: "categories/form/:id", component: () => import("pages/master/categories/form.vue"), },
  { name: "view-categories", path: "categories/:id", component: () => import("pages/master/categories/detail.vue"), },

  { name: "contents", path: "contents", component: () => import("pages/master/contents/index.vue"), },
  { name: "add-contents", path: "contents/form", component: () => import("pages/master/contents/form.vue"), },
  { name: "edit-contents", path: "contents/form/:id", component: () => import("pages/master/contents/form.vue"), },
  { name: "view-contents", path: "contents/:id", component: () => import("pages/master/contents/detail.vue"), },

           
  { name: 'categories', path: 'categories', component: () => import('pages/master/categories/index.vue') },
  { name: 'add-categories', path: 'categories/form', component: () => import('pages/master/categories/form.vue') },
  { name: 'edit-categories', path: 'categories/form/:id', component: () => import('pages/master/categories/form.vue') },
  { name: 'view-categories', path: 'categories/:id', component: () => import('pages/master/categories/detail.vue') },

  { name: 'customers', path: 'customers', component: () => import('pages/master/customers/index.vue') },
  { name: 'add-customers', path: 'customers/form', component: () => import('pages/master/customers/form.vue') },
  { name: 'edit-customers', path: 'customers/form/:id', component: () => import('pages/master/customers/form.vue') },
  { name: 'view-customers', path: 'customers/:id', component: () => import('pages/master/customers/detail.vue') },

  { name: 'products', path: 'products', component: () => import('pages/master/products/index.vue') },
  { name: 'add-products', path: 'products/form', component: () => import('pages/master/products/form.vue') },
  { name: 'edit-products', path: 'products/form/:id', component: () => import('pages/master/products/form.vue') },
  { name: 'view-products', path: 'products/:id', component: () => import('pages/master/products/detail.vue') },

  { name: 'transactions', path: 'transactions', component: () => import('pages/transaction/transactions/index.vue') },
  { name: 'add-transactions', path: 'transactions/form', component: () => import('pages/transaction/transactions/form.vue') },
  { name: 'edit-transactions', path: 'transactions/form/:id', component: () => import('pages/transaction/transactions/form.vue') },
  { name: 'view-transactions', path: 'transactions/:id', component: () => import('pages/transaction/transactions/detail.vue') },


];
