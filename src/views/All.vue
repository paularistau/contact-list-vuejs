<template>
  <div class="x-all-contacts">
    <h1>Todos os contatos</h1>
    <table class="x-all-contacts__table">
      <tr class="x-all-contacts__table-title">
        <th>Nome</th>
        <th>CPF</th>
        <th>Telefone</th>
        <th>e-Mail</th>
        <th></th>
      </tr>
      <tr
        class="x-all-contacts__table-item"
        v-for="(contact, index) in contacts"
        :key="index"
      >
        <td>{{ contact.name }}</td>
        <td>{{ contact.cpf }}</td>
        <td>{{ contact.phone }}</td>
        <td>{{ contact.email }}</td>
        <td
          class="x-all-contacts__table-item-delete"
          @click="deleteContact(contact.id)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
              fill="#F05E5C"
            />
          </svg>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
import { api } from "@/services.js";

export default {
  name: "All",
  components: {},

  data() {
    return {
      contacts: null,
    };
  },
  created() {
    this.getContacts();
  },

  methods: {
    getContacts() {
      api.get("/contacts").then((response) => {
        this.contacts = response.data;
      });
    },
    deleteContact(id) {
      const confirm = window.confirm("Deseja remover este contato?");
      if(confirm){
        console.log("ID=>", id)
        api
          .delete(`/contacts/${id}`)
          .then(() => {
            this.getContacts();
          })
          .catch(error => {
            console.log(error.reponse);
          });
      }
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/style/main.scss";
.x-all-contacts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5%;
  text-align: left;
  overflow-x: auto;

  &__table {
    border-spacing: 0 12px;
    border-collapse: separate;
    &-title {
      font-family: $font-primary;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      color: #828282;

      th {
        padding: 12px;
      }
    }
    &-item {
      background-color: #f2f2f2;
      height: 70px;

      td {
        padding: 12px;
        background-color: #f2f2f2;

      }

      &-delete {
        text-align: right;
        margin-right: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>