<template>
  <div class="x-add-new">
    <div class="x-add-new__form">
      <h1>Adicionar novo contato</h1>
    </div>
    <img src="@/assets/background.png">
  </div>
</template>

<script>

export default {
  name: "AddNew",
  components: {
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/style/main.scss";
.x-add-new{
  display: flex;
  max-height: 100%;
  background-color: $background;
  &__form{
    width: 60%;
    padding: 5%;
    display: flex;
  }

  img{
    width: 40%;
  }
}
</style>

