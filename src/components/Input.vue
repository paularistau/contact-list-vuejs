<template>
  <div :class="['x-input']" :style="inputWidth">
    <label class="x-label__style" for="name">
        {{label}}
    </label>
    <input
      class="x-input__style"
      :id="id"
      :name="name"
      :type="type"
      v-on:input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      v-mask="mask"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputWidth: "",
    };
  },
  props: {
    widthSize: {
      type: [Number, String],
      default: 272,
    },  
    label: {
      type: [String],
    },  
    model: {
      type: [String],
    },
    id: {
      type: [String],
    },
    name: {
      type: [String],
    },
    type: {
      type: [String],
    },    
    mask: {
      type: [String, Number],
    },  
    placeholder: {
      type: [String],
    }
  },
  computed: {
    style() {
        return "width: " + this.inputWidth;
    },
  },

  created() {
    this.setWidth();
  },

  methods: {
    setWidth() {
      this.inputWidth = "width: " + this.widthSize + "px";
    },
  },
};
</script>



<style lang="scss" rel="stylesheet/scss">
@import "@/style/main.scss";
.x-input {
  display: flex;
  flex-direction: column;

    @media only screen and (max-width: 600px) {
        max-width: 100% !important;
    }

  .x-label__style {
    font-family: $font-primary;
    font-size: 14px;
    font-weight: bold;
    color: #444444;
    line-height: 20px;
  }
  &__style {
    background: #ffffff;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 18px;
    font-family: $font-primary;
    padding: 0 10px;

    &:focus{
        border: 1px solid #41A5BB;
        outline: #41A5BB;
        background-color: $white;

    }
  }
}
</style>
