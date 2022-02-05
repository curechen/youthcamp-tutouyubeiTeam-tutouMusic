const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        // component: () => import('pages/Index.vue'),
        redirect: '/discover',
      },
      {
        path: '/discover',
        component: () => import('pages/DiscoverMusic/Discover.vue'),
        children: [
          {
            path: '',
            redirect: '/discover/personality',
          },
          {
            path: 'personality',
            component: () => import('pages/DiscoverMusic/childPages/Personality.vue'),
          },
          {
            path: 'playlist',
            component: () => import('pages/DiscoverMusic/childPages/Playlist.vue'),
          },
          {
            path: 'rank',
            component: () => import('pages/DiscoverMusic/childPages/Rank.vue'),
          },
          {
            path: 'singer',
            component: () => import('pages/DiscoverMusic/childPages/Singer.vue'),
          },
        ],
      },
      {
        path: '/user/:uid',
        props: true,
        component: () => import('pages/User/User.vue'),
      },
      {
        path: '/user',
        component: () => import('pages/User/User.vue'),
      },
      {
        path: '/search/:keywords',
        props: true,
        component: () => import('pages/Search/Search.vue'),
      },
      {
        path: '/search/:keywords/:type',
        props: true,
        component: () => import('pages/Search/SearchDetail.vue'),
      },
      {
        path: '/playlist',
        component: () => import('pages/Playlist/Playlist.vue'),
      },
      {
        path: '/LikeMusic',
        component: () => import('pages/LikeMusic/LikeMusic.vue'),
      },
      {
        path: '/entrance',
        component: () => import('pages/AuthPanel/AuthPanel.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
