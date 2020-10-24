<template>
  <video ref="video" />

  <div class="fixed top-0 right-0 p-4" v-if="cams > 1">
    <div class="bg-white rounded-full shadow-md p-2" @click="changeCamera">
      <img src="../assets/camera-flip.svg" class="h-6 w-6" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

export default defineComponent({
  data() {
    return {
      codeReader: new BrowserMultiFormatReader(),
      camIndex: 0,
      cams: 0
    };
  },
  mounted() {
    const deviceId = localStorage.getItem('camid');
    this.setupScanner(deviceId || undefined);
  },
  methods: {
    setupScanner(id?: string) {
      this.codeReader = new BrowserMultiFormatReader();

      this.codeReader
        .listVideoInputDevices()
        .then(videoInputDevices => {
          if (videoInputDevices.length === 0) {
            return this.$emit('no-cameras');
          }

          let device = '';

          if (videoInputDevices.find(v => v.deviceId === id)) {
            device = id!;
          } else {
            device = videoInputDevices[this.camIndex].deviceId;
          }
          this.cams = videoInputDevices.length;

          localStorage.setItem('camid', device);

          this.codeReader.decodeFromVideoDevice(
            device,
            this.$refs.video as HTMLVideoElement,
            (result, err) => {
              if (result) {
                this.$emit('code', result.getText());
              }

              if (err && !(err instanceof NotFoundException)) {
                console.error(err);
              }
            }
          );
        })
        .catch(err => {
          console.error(err);
        });
    },
    changeCamera() {
      console.log(this.codeReader);
      this.codeReader.reset();

      this.camIndex++;
      if (this.camIndex >= this.cams) {
        this.camIndex = 0;
      }

      this.setupScanner();
    }
  }
});
</script>

<style lang="postcss" scoped>
video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>
