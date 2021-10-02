import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import CompanyComponent from '@/components/CompanyComponent'
import CiComponent from '@/components/CiComponent'
import HistoryComponent from '@/components/HistoryComponent'
import ProductComponent from '@/components/ProductComponent'
import GalleryComponent from '@/components/GalleryComponent'
import NoticeComponent from '@/components/NoticeComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-component',
      component: MainComponent
    },
    {
      path: '/company',
      name: 'company-component',
      component: CompanyComponent
    },
    {
      path: '/ci',
      name: 'ci-component',
      component: CiComponent
    },
    {
      path: '/history',
      name: 'history-component',
      component: HistoryComponent
    },
    {
      path: '/product',
      name: 'product-component',
      component: ProductComponent
    },
    {
      path: '/gallery',
      name: 'gallery-component',
      component: GalleryComponent
    },
    {
      path: '/notice',
      name: 'notice-component',
      component: NoticeComponent
    }
    ,
    {
      path: '/faq',
      name: 'faq-component',
      component: NoticeComponent
    }
    ,
    {
      path: '/location',
      name: 'location-component',
      component: NoticeComponent
    }
  ]
})
