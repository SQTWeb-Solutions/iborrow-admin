/*
* This is a file to save all routs used by app, each routes is group accoridng the routes group and types
 */
export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('@/views/Welcome/WelcomeView').default
  },
  // routes for authentication with the guest middleware to check if teh user is logged in or not
  ...middleware('guest', [
    { path: '/auth',
      component: () => import('@/views/Auth/Template'),
      children: [
        { path: '', redirect: { name: 'auth.login' } },
        { path: 'login', name: 'auth.login', component: require('@/views/Auth/Login').default, meta: { layout: 'auth' } },
        { path: 'register', name: 'auth.register', component: require('@/views/Auth/Register').default, meta: { layout: 'auth' } },
        { path: 'password/forgot', name: 'auth.password.forgot', component: require('@/views/Auth/ForgotPassword').default, meta: { layout: 'auth' } }
      ]
    }
  ]),
  ...middleware('auth', [
    { path: '/dashboard', name: 'dashboard', component: require('@/views/Dashboard/DashboardView').default, meta: { layout: 'dashboard', title: 'Dashboard' } },
    {
      path: '/members',
      component: () => import('@/views/Members/Template'),
      children: [
        { path: '', name: 'members.all', component: require('@/views/Members/MemberView').default, meta: { layout: 'dashboard', title: 'All Members' } },
        ...middleware(['roles'], [
          { path: 'add', name: 'members.add', component: require('@/views/Members/AddMember').default, meta: { layout: 'dashboard', title: 'Add Member', roles: ['admin', 'editor'] } },
          { path: '/edit/:username', name: 'members.edit', component: require('@/views/Members/AddMember').default, meta: { layout: 'dashboard', title: 'Edit Member', roles: ['admin'] } }
        ])
      ]
    },
    {
      path: '/investors',
      component: () => import('@/views/Users/Template'),
      children: [
        { path: '', name: 'investors.all', component: require('@/views/Users/InvestorsView').default, meta: { layout: 'dashboard', title: 'Invesors List' } },
        { path: 'requests', name: 'investors.requests', component: require('@/views/Users/Requests/InvestorsRequestView').default, meta: { layout: 'dashboard', title: 'Invesors Request' } }
      ]
    },
    {
      path: '/borrowers',
      component: () => import('@/views/Users/Template'),
      children: [
        { path: '', name: 'borrowers.all', component: require('@/views/Users/BorrowersView').default, meta: { layout: 'dashboard', title: 'Borrowers List' } },
        { path: 'requests', name: 'borrowers.requests', component: require('@/views/Users/Requests/BorrowersRequestView').default, meta: { layout: 'dashboard', title: 'Borrowers Requests' } }
      ]
    },
    { path: '/unauthorised', name: 'unauthorised', component: require('@/views/Error/NotFoundView').default, meta: { layout: 'auth' } }
  ]),
  { path: '*', component: require('@/views/Error/NotFoundView').default, meta: { layout: 'auth' } }
]

/**
 * @param  {String|Function} middleware
 * @param  {Array} routes
 * @return {Array}
 */
// eslint-disable-next-line
function middleware (middleware, routes) {
  routes.forEach(route =>
    (route.middleware || (route.middleware = [])).unshift(middleware)
  )

  return routes
}
