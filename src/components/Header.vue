<template>
    <div class="x-header">
        <img src="@/assets/logo.png"  href="/">
        <Button :widthSize="132">{{routerName}}</Button>
    </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Button
  },
  computed: {
    routerName(){
      return this.$route.name;
    }
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/style/main.scss";
.x-header{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 4px 4px 0px rgba(0,0,0,0.25);
    background-color: $white;

    img{
        width: 50px;
    }
}
</style>

