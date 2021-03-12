<template>
    <div class="x-header">
        <img src="@/assets/logo.png"  href="/">
        <div @click="redirectionTo()">
          <Button :widthSize="132" >{{routerName}}</Button>
        </div>
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
      if( this.$route.name == "Todos"){
        return "Adicionar"
      }else{
        return "Ver todos"
      }
    }
  },
  methods: {
    redirectionTo(){
      if(this.routerName == "Adicionar"){
        this.$router.push('/add-new');
        console.log('CLICOU')
      }else{
        this.$router.push('/');
        console.log('CLICOU')
      }
    }
  }

};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/style/main.scss";
.x-header{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    box-shadow: 0 4px 4px 0px rgba(0,0,0,0.25);
    background-color: $white;

    @media only screen and (max-width: 600px) {
      width: 80%;
    }

    img{
        width: 50px;
    }
}
</style>

