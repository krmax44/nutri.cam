<template>
  <div class="panel" :class="{ gone: panelHidden, 'overflow-hidden': loading }">
    <div
      class="flex absolute inset-0 justify-center text-center flex-col bg-white"
      v-if="error"
    >
      <h2 class="text-3xl mb-1">{{ $t('error') }}</h2>

      <p v-if="error instanceof errors.ProductNotFoundError">
        {{ $t('productNotFound') }}
      </p>
      <p v-else v-text="error.message" />
    </div>

    <div
      class="flex absolute inset-0 justify-center text-center flex-col bg-white"
      v-if="loading"
    >
      <p>{{ $t('loading') }} {{ code }}...</p>
    </div>

    <div class="flex">
      <div class="flex-1">
        <h2 class="text-3xl mb-1">{{ title }}</h2>
        <p>
          <i18n-t :keypath="`productCategories.${category}`">
            <template #label>
              <strong>{{ label }}</strong>
            </template> </i18n-t
          >&nbsp;<a
            :href="`https://world.openfoodfacts.org/product/${code}`"
            target="_blank"
          >
            {{ $t('viewOnOpenFoodFacts') }}
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
import { ProductNotFoundError } from '../errors';

export default defineComponent({
  props: {
    panelHidden: Boolean,
    code: String
  },
  data() {
    return {
      isVegan: undefined,
      title: '',
      category: '',
      label: '',
      image: '',
      loading: false,
      error: false as false | Error,
      errors: { ProductNotFoundError }
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
          throw new ProductNotFoundError();
        }

        const matchers: { [k: string]: string } = {
          'en:vegan': 'vegan',
          'en:vegetarian': 'vegetarisch',
          'en:vegetarian-status-unknown': 'vegetarianUnknown',
          'en:vegan-status-unknown': 'veganUnknown',
          'en:non-vegan': 'notVegan'
        };

        const qualifiers: { [k: string]: string } = {
          labels_tags: 'labeledAs',
          ingredients_analysis_tags: 'analysedAs'
        };

        let gotResult = false;

        loop: for (const qualifier in qualifiers) {
          const message = qualifiers[qualifier];

          for (const matcher in matchers) {
            const fill = matchers[matcher];

            if (data.product[qualifier].includes(matcher)) {
              this.category = message;
              this.label = fill;
              gotResult = true;
              break loop;
            }
          }
        }

        if (!gotResult) {
          throw new ProductNotFoundError();
        }

        this.title = data.product.product_name_de;
        this.image = data.product.image_thumb_url;
        this.error = false;
      } catch (e) {
        this.error = e;
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
