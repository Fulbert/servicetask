import { i18n } from '../boot/i18n'

export default (locale) => {
  i18n.locale = locale

  return {
    name: 'report',
    titleProp: 'date',
    components: {
      item: () => import('../components/report/ReportItem.vue')
    },
    meta: {
      icon: 'outlined_flag',
      color: 'lime'
    },
    routes: [{
      path: 'reports',
      name: 'reports',
      component: () => import('../pages/StListPage'),
      meta: {
        title: i18n.t('reports.routes.list.title'),
        menu: true,
        createRoute: 'report'
      }
    }, {
      path: 'report/:id',
      name: 'report',
      component: () => import('../pages/ReportPage'),
      meta: {
        title: i18n.t('reports.routes.single.title')
      }
    }],
    fields: [{
      key: 'technician',
      component: 'UserField',
      attrs: {
        label: i18n.t('reports.fields.technician.label')
      },
      search: '=='
    }, {
      key: 'customer',
      component: 'CustomerField',
      attrs: {
        label: i18n.t('reports.fields.customer.label')
      },
      search: '=='
    }, {
      key: 'machine',
      component: 'MachineField',
      attrs: {
        label: i18n.t('reports.fields.machine.label')
      },
      forward: ['customer'],
      search: '=='
    }]
  }
}
