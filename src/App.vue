<template>
  <CameraView @code="receivedCode" />
  <ProductView :code="code" :panelHidden="panelHidden" />
</template>

<script>
import { ref } from 'vue';
import CameraView from './components/CameraView.vue';
import ProductView from './components/ProductView.vue';
import throttle from 'lodash.throttle';

export default {
  name: 'App',
  components: { CameraView, ProductView },
  setup() {
    const panelHidden = ref(true);
    const code = ref(0);

    function handleCode(result) {
      panelHidden.value = false;
      code.value = result;
    }

    const receivedCode = throttle(handleCode, 1000);

    return { receivedCode, code, panelHidden };
  }
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>