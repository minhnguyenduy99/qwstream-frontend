<template>
  <div
    :class="[
      'qw-sidebar',
      !isDock ? '--fixed' : fixNavbarOnDock ? '--dock-fixed' : '--fixed',
      reduce ? '--reduce' : ''
    ]"
  >
    <b-sidebar
      fullheight
      :overlay="!isDock"
      :position="isDock ? 'static' : 'fixed'"
      :reduce="reduce"
      v-model="_open"
    >
      <div :class="['qw-sidebar-container', reduce ? '--reduce' : '']">
        <div v-if="isDock" class="active-dock">
          <b-button
            v-if="!reduce"
            type="is-primary"
            outlined
            class="qw-sidebar-reducer --collapse"
            icon-left="arrow-collapse-left"
            size="is-small"
            @click="reduce = true"
          ></b-button>
          <b-button
            v-else
            type="is-primary"
            outlined
            class="qw-sidebar-reducer --expand"
            icon-left="arrow-collapse-right"
            size="is-small"
            @click="reduce = false"
          ></b-button>
        </div>
        <div v-else class="active-fixed">
          <b-button
            type="is-primary"
            outlined
            class="qw-sidebar-closer"
            icon-left="close"
            size="is-small"
            @click="_open = false"
          >
          </b-button>
        </div>
        <div class="qw-sidebar-content">
          <!-- <p
          class="qw-sidebar-title has-text-light has-text-weight-bold py-1"
          :style="{
            visibility: reduce && titleHideOnReduce ? 'hidden' : 'visible'
          }"
        >
          {{ title }}
        </p> -->
          <slot v-bind="{ open, reduce }"></slot>
        </div>
      </div>
    </b-sidebar>
    <div
      :class="['qw-sidebar-filler', reduce ? '--reduce' : '']"
      :style="{
        display: isDock && fixNavbarOnDock ? 'block' : 'none'
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "QWSidebar",
  inheritAttrs: false,
  model: {
    prop: "open",
    event: "open-close"
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "dock",
      validator: val => {
        return ["dock", "fixed"].indexOf(val) >= 0;
      }
    },
    open: {
      type: Boolean,
      default: false
    },
    fixNavbarOnDock: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    reduce: false
  }),
  watch: {
    reduce: function(newVal, oldVal) {
      this.$emit("reduce", newVal);
    }
  },
  computed: {
    isDock() {
      return this.type === "dock";
    },
    _open: {
      get() {
        return this.open;
      },
      set(val) {
        this.$emit("open-close", val);
      }
    }
  }
};
</script>

<style scoped lang="scss">
$qw-sidebar-width: calc(260px + 10px);
$qw-sidebar-width-reduce: calc(80px + 10px);

.qw-sidebar {
  height: 100%;

  .b-sidebar {
    height: 100%;
  }

  &-closer,
  &-reducer {
    position: absolute;
  }

  &-reducer.--collapse,
  &-closer {
    top: 10px;
    right: 10px;
  }

  &-reducer.--expand {
    top: 10px;
    left: 20px;
  }

  &-container {
    position: relative;
    background: $primary-light;
    padding: 0.75rem;
    height: 100%;
  }

  &-filler {
    height: 100%;
    width: $qw-sidebar-width;

    &.--reduce {
      width: $qw-sidebar-width-reduce;
    }
  }
}

.qw-sidebar {
  &.--dock-fixed {
    .b-sidebar {
      height: calc(100% - 70px);
      position: fixed;
      top: 3.5rem;
      left: 0;
      width: inherit;
    }
  }
}
</style>
