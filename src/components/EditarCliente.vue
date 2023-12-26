<template>
  <div>
    <Message :msg="msg" v-show="msg" />

    <div class="box">
      <form id="editar-cliente-form" @submit="updateCliente">

        <div class="columns">
          <div class="field column is-3">
            <label class="label" for="nascimento">Data/Nascimento</label>
            <div class="control">
              <input class="input is-primary" type="text" id="nascimento" name="nascimento" v-model="nascimento" placeholder="aaaa-mm-dd">
            </div>
          </div>

          <div class="field column">
            <label class="label" for="nome">Cliente:</label>
            <div class="control">
              <input class="input is-primary" type="text" id="nome" name="nome" v-model="nome" placeholder="Nome">
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="field column is-3">
            <label class="label" for="cpf">CPF:</label>
            <div class="control">
              <input class="input is-primary" type="text" id="cpf" name="cpf" v-model="cpf" placeholder="000.000.000-00">
            </div>
          </div>

          <div class="field column">
            <label class="label" for="endereco">Endereço:</label>
            <div class="control">
              <input class="input is-primary" type="text" id="endereco" name="endereco" v-model="endereco" placeholder="Endereço">
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="field column is-3">
            <label class="label" for="telefone">Telefone:</label>
            <div class="control">
              <input class="input is-primary" type="text" id="telefone" name="telefone" v-model="telefone" placeholder="(99)99999-9999">
            </div>
          </div>

          <div class="field column">
            <label class="label" for="email">E-mail:</label>
            <div class="control">
              <input class="input is-primary" type="text" id="email" name="email" v-model="email" placeholder="E-mail">
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="field column is-3">
            <label class="label" for="datacadastro">Data/Cadastro</label>
            <div class="control">
              <input class="input is-primary" type="text" id="datacadastro" name="datacadastro" v-model="datacadastro" placeholder="aaaa-mm-dd">
            </div>
          </div>

          <div class="field column" style="margin-top: 32px;">
            <div class="control">
              <input type="submit" class="button is-primary" value="Atualizar Cliente">
            </div>
          </div>
          <div class="field column is-8" style="margin-top: 32px;">
            
            <input type="submit" class="button is-primary" value="Voltar" @click="voltar()">
            
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import Message from "./Mensagem.vue";

export default {
  name: "EditarCliente",
  props: ['id'],
  data() {
    return {
      nascimento: null,
      cpf: null,
      nome: null,
      endereco: null,
      telefone: null,
      email: null,
      datacadastro: null,
      msg: null,
    };
  },

  components: {
    Message,
  },

  mounted() {
  this.getCliente();
},

methods: {
    async getCliente() {
      try {
        const req = await fetch(`http://localhost:8080/api/clientes/${this.id}`);
        const data = await req.json();

        this.nascimento = data.nascimento;
        this.cpf = data.cpf;
        this.nome = data.nome;
        this.endereco = data.endereco;
        this.telefone = data.telefone;
        this.email = data.email;
        this.datacadastro = data.datacadastro;

      } catch (error) {
        console.error("Não foi possível obter os dados do cliente!");
      }
    },

  async updateCliente(e) {
  e.preventDefault();

  if (!this.nascimento || !this.cpf || !this.nome || !this.endereco || !this.telefone || !this.email || !this.datacadastro) {
    this.msg = "Por favor, preencha todos os campos.";
    setTimeout(() => (this.msg = ""), 3000);
    return;
  }

  try {
    const data = {
      id: this.id,
      nascimento: this.nascimento,
      cpf: this.cpf,
      nome: this.nome,
      endereco: this.endereco,
      telefone: this.telefone,
      email: this.email,
      datacadastro: this.datacadastro
    };

    const dataJson = JSON.stringify(data);

    const req = await fetch(`http://localhost:8080/api/clientes/${this.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: dataJson,
    });

    if (req.ok) {
      console.log("Atualizado com sucesso!");
      this.msg = "Cliente atualizado com sucesso!";
      setTimeout(() => (this.msg = ""), 3000);
    } else {
      console.error("Erro ao atualizar cliente:", req.statusText);
    }
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
  }
},

    voltar() {
      this.$router.push({ name: 'Clientes' });
    },
  },
  beforeMount() {
    this.getCliente();
  },
};
</script>

<style>
</style>
