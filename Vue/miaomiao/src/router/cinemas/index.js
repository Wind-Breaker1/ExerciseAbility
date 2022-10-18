export default {
    path: '/cinemas',
    component: () => import('@/views/Cinemas'),
    children: [
        {
            path: 'cinemaList',
            component: () => import('@/components/CinemaList')
        },
        {
            path: 'brand',
            component: () => import('@/components/Brand')
        },
        {
            path: 'feature',
            component: () => import('@/components/Feature')
        },
        {
            path: '/cinemas',
            redirect: '/cinemas/cinemaList'
        }
    ]
}