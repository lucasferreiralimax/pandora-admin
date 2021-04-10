<template>
  <q-page class="flex flex-center column">
    <h1><q-icon name="shopping_cart" />Checkout</h1>
    <q-btn
      @click="persistent = true"
      icon="shopping_cart"
      color="primary"
      label="Checkout modal"
    />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
        style="width: 400px;"
      >
        <q-btn
          class="float-right q-mr-md"
          flat
          round
          dense
          icon="close"
          v-close-popup
        />
        <q-step
          :name="1"
          title="Personal data"
          icon="shopping_cart"
          :done="step > 1"
        >
          Input personal data
          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Registration data"
          caption="Optional"
          icon="shopping_cart"
          :done="step > 2"
        >
          Input registration data
          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn
              flat
              @click="step = 1"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="4" title="Finish" icon="shopping_bag">
          Last step
          <q-stepper-navigation>
            <q-btn
              color="primary"
              icon="shopping_cart"
              label="Checkout"
              v-close-popup
            />
            <q-btn
              flat
              @click="step = 2"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'PageCheckout',
  data () {
    return {
      step: 1,
      persistent: false
    }
  }
}
</script>
