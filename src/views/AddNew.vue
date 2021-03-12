<template>
  <div class="x-add-new">
    <div class="x-add-new__form">
      <h1>Adicionar novo contato</h1>
      <form class="x-add-new__form-content">
        <Input
          id="nome"
          name="nome"
          type="text"
          :v-model="contact.nome"
          widthSize="346"
          label="Nome"
          placeholder="Digite seu nome"
          @input="updateName"
        ></Input>
        <Input
          id="cpf"
          name="cpf"
          type="text"
          :v-model="contact.cpf"
          mask="###.###.###-##"
          label="CPF"
          placeholder="Digite seu CPF"
          @input="updateCpf"
        ></Input>
        <div class="x-add-new__form-content__input-group">
          <div class="x-add-new__form-content__input-group--item">
            <Input
              id="phone"
              name="phone"
              type="text"
              :v-model="contact.phone"
              mask="(##)#####-####"
              label="Telefone"
              widthSize="346"
              placeholder="Digite seu telefone"
              @input="updatePhone"
            ></Input>
          </div>
          <div class="x-add-new__form-content__input-group--item">
            <Input
              id="email"
              name="email"
              type="text"
              :v-model="contact.email"
              label="E-mail"
              widthSize="272"
              placeholder="Digite seu e-mail"
              @input="updateEmail"
            />
          </div>
        </div>
        <div class="x-add-new__add-btn" @click="addNewContact()">
          <Button theme="secundary">Adicionar</Button>
        </div>
      </form>
    </div>
    <img src="@/assets/background.png" />
  </div>
</template>

<script>
import { api } from "@/services.js";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "AddNew",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      contact: {
        name: "",
        cpf: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    addNewContact() {
      api
        .post(`/contacts/`, this.contact)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.reponse);
        });
    },
    updateName(e) {
      this.contact.name = e;
    },
    updateCpf(e) {
      this.contact.cpf = e;
    },
    updatePhone(e) {
      this.contact.phone = e;
    },
    updateEmail(e) {
      this.contact.email = e;
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/style/main.scss";
.x-add-new {
  display: flex;
  max-height: 100%;
  background-color: $background;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
  &__form {
    width: 60%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    text-align: start;

    @media only screen and (max-width: 600px) {
      h1 {
        text-align: center;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;

      &__input-group {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: 600px) {
          flex-direction: column;
          align-items: flex-start;

          &--item {
            width: 100%;
          }
        }

        &--item {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  img {
    width: 40%;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  &__add-btn {
    position: relative;
    justify-content: flex-end;
    display: flex;
    top: 70px;
    width: fit-content;
  }
}
</style>

