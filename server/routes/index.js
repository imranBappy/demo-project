const routes = [
    { path: '/auth', router: require('./authRoutes.js') },
    { path: '/admission', router: require('./admissionRoutes.js') },
    { path: '/department', router: require('./departmentRoutes.js') },
]


const setRoutes = (app) => {
    routes.forEach(route => {
        app.use(route.path, route.router)
    })
}

module.exports = setRoutes;