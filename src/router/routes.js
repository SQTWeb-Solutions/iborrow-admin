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
        { path: 'password/forgot', name: 'auth.password.forgot', component: require('@/views/Auth/ForgotPassword').default, meta: { layout: 'auth' } }
      ]
    }
  ]),
  ...middleware('auth', [
    { path: '/dashboard', name: 'dashboard', component: require('@/views/Dashboard/DashboardView').default, meta: { layout: 'dashboard', title: 'Dashboard' } }
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
