/**
 * Created by Echonessy on 2019/4/15.
 */
export default [{
  path: 'page1',
  meta: {title: 'page1',},
  component: () => import('@/views/page/page1')
},{
  path: 'page2',
  meta: {title: 'page2',},
  component: () => import('@/views/page/page2')
},{
  path: 'page3',
  meta: {title: 'page3',},
  component: () => import('@/views/page/page3')
},{
  path: 'page4',
  meta: {title: 'page4',},
  component: () => import('@/views/page/page4')
}]
