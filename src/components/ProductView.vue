<template>
  <div class="panel" :class="{ gone: panelHidden, 'overflow-hidden': loading }">
    <div
      class="flex absolute inset-0 justify-center text-center flex-col bg-white"
      v-if="error"
    >
      <h2 class="text-3xl mb-1">Fehler</h2>

      <p>{{ error }}</p>
    </div>

    <div
      class="flex absolute inset-0 justify-center text-center flex-col bg-white"
      v-if="loading"
    >
      <p>Loading {{ code }}...</p>
    </div>

    <div class="flex">
      <div class="flex-1">
        <h2 class="text-3xl mb-1">{{ title }}</h2>
        <p>
          <span v-html="description" />
          <a
            :href="`https://world.openfoodfacts.org/product/${code}`"
            target="_blank"
          >
            Auf OpenFoodFacts einsehen...
          </a>
        </p>
      </div>

      <div>
        <img :src="image" class="h-16" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    panelHidden: Boolean,
    code: String
  },
  data() {
    return {
      isVegan: undefined,
      title: '',
      description: '',
      type: '',
      image: '',
      loading: false,
      error: false
    };
  },
  watch: {
    async code() {
      if (this.loading) return;
      this.loading = true;

      try {
        const data = await fetch(
          `https://world.openfoodfacts.org/api/v0/product/${this.code}.json`
        ).then(r => r.json());

        if (data.status_verbose !== 'product found') {
          throw new Error('Wir konnten das Produkt nicht finden.');
        }

        const matchers: { [k: string]: string } = {
          'en:vegan': 'vegan',
          'en:vegetarian': 'vegetarisch (nicht vegan)',
          'en:vegetarian-status-unknown': 'nicht sicher vegetarisch',
          'en:vegan-status-unknown': 'nicht sicher vegan',
          'en:non-vegan': 'nicht vegan'
        };

        const qualifiers: { [k: string]: string } = {
          labels_tags: 'Das Produkt ist als <strong>$</strong> gekennzeichnet.',
          ingredients_analysis_tags:
            'Die automatische Zutatenanalyse ergab, dass das Produkt <strong>$</strong> ist.'
        };

        let gotResult = false;

        loop: for (const qualifier in qualifiers) {
          const message = qualifiers[qualifier];

          for (const matcher in matchers) {
            const fill = matchers[matcher];

            if (data.product[qualifier].includes(matcher)) {
              this.description = message.replace('$', fill);
              gotResult = true;
              this.type = fill;
              break loop;
            }
          }
        }

        if (!gotResult) {
          throw new Error('Wir konnten das Produkt nicht einstufen.');
        }

        this.title = data.product.product_name_de;
        this.image = data.product.image_thumb_url;
      } catch (e) {
        console.log(e);
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    }
  }
});
</script>

<style lang="postcss" scoped>
.panel {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @apply fixed inset-x-0 bottom-0 bg-white rounded-t-lg p-6 shadow-lg mx-auto;
}

@screen lg {
  .panel {
    max-width: theme('screens.lg');
    @apply p-8;
  }
}

.panel.gone {
  transform: translateY(calc(100% + theme('spacing.2')));
}

a {
  @apply text-blue-500;
}
</style>
