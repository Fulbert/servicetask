<template>
  <div class="full-width row q-pa-sm-md justify-around">
    <q-card class="col-sm col-12" style="height: calc(100vh - 82px)">
      <q-toolbar class="text-white bg-grey-3">
        <q-toolbar-title>
          <span
            class="text-h6 overflow-hidden"
            :class="'text-' + $models.customer.meta.color">
            {{$t('customers.title')}}
          </span>
        </q-toolbar-title>
      </q-toolbar>
      <q-card-section class="q-pa-none">
        <q-scroll-area style="height: calc(100vh - 140px)">
          <st-list model="customer">
            <template #item-right="{ data }">
              <q-btn icon="search" color="grey" dense round flat @click.prevent="$refs.map.zoomToCustomer(data.id)" />
            </template>
          </st-list>
        </q-scroll-area>
      </q-card-section>
    </q-card>
    <q-card class="col-sm col-12 q-ml-sm-md q-mt-sm-none q-mt-sm" ref="mapCard">
      <q-card-section class="q-pa-none overflow-hidden">
        <div class="rounded-borders">
          <map-component style="height: calc(100vh - 82px)" ref="map" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CustomersPage',
  components: {
    StList: () => import ('../components/generic/StList'),
    MapComponent: () => import('../components/generic/Map')
  }
}
</script>
