<template>
  <div :class="['x-button', theme]" :style="buttonWidth">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonWidth: "",
    };
  },
  props: {
    theme: {
      type: String,
      default: "primary",
    },
    widthSize: {
      type: [Number, String],
      default: 272,
    },
  },
  computed: {
    style() {
      return "width: " + this.buttonWidth;
    },
    routerName() {
      return this.$route.name;
    },
  },

  created() {
    this.setWidth();
  },

  methods: {
    setWidth() {
      this.buttonWidth = "width: " + this.widthSize + "px";
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/style/main.scss";
.x-button {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $radius;
  box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.16);
  font-family: $font-primary;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &.primary {
    background-color: $red;
    color: $white;

    &:hover {
      background-color: $red-dark;
    }
  }
  &.secundary {
    background-color: $white;
    color: $red;

    &:hover {
      background-color: $red-light;
    }
  }
}
</style>
