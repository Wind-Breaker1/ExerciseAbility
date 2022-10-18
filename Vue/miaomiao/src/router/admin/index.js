export default {
    path: '/admin',
    component: () => import('@/views/Admin'),
    children: [
        {
            path: 'users',
            component: () => import('@/views/Admin/user')
        },
        {
            path: 'cinemas',
            component: () => import('@/views/Admin/cinemas')
        },
        {
            path: 'movies',
            component: () => import('@/views/Admin/movie')
        },
        {
            path: '/admin',
            redirect: 'users'
        }
    ]
}