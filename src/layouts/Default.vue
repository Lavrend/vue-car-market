<template lang="pug">
  .layout-default
    LayoutHeader.layout-default__header

    main.layout-default__content
      transition(name="transition-zoom" mode="out-in")
        slot
</template>

<script>
import LayoutHeader from '@/components/Header';

export default {
  name: 'layout-default',

  components: {
    LayoutHeader,
  },
};
</script>

<style lang="scss">
.layout-default {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('~@/assets/images/delorean.jpg'), url($bgHomepageBase64);
  background-size: cover;
  background-position: center;

  display: flex;
  flex-flow: column nowrap;

  overflow: hidden;

  &__header {
    background: $lime-5;
  }

  &__content {
    width: 100%;
    height: calc(100vh - #{$headerHeight});
    min-width: $screenMinWidth;
    background: rgba($white, 0.8);

    overflow: hidden;
  }
}
</style>
