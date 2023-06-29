
export default [

    
           
   { name: 'contacts', path: 'contacts', component: () => import('pages/master/contacts/index.vue') },
   { name: 'add-contacts', path: 'contacts/form', component: () => import('pages/master/contacts/form.vue') },
   { name: 'edit-contacts', path: 'contacts/form/:id', component: () => import('pages/master/contacts/form.vue') },
   { name: 'view-contacts', path: 'contacts/:id', component: () => import('pages/master/contacts/detail.vue') },

              
];