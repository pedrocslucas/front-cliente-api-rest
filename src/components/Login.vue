<template>
  <div id="body">
    <div class="container">
      <p id="prince">Login</p>
      <p class="subtext">Digite os seus dados de acesso</p>
      <form @submit.prevent="login">
        <p>
          <label for="iusu">Usuário</label> <br />
          <input
            v-model="usuario" type="text" name="usuario" id="iusu" placeholder="Digite seu usuário" class="input-field" />
        </p>
        <p>
          <label for="isenha">Senha</label> <br />
          <input v-model="senha" type="password" name="senha" id="isenha" placeholder="Digite sua senha" class="input-field" />
        </p>
        <p><button class="entrar" type="submit">Entrar</button></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      senha: ""
    };
  },
  methods: {
    login() {
      if (this.usuario === "admin" && this.senha === "admin") {
        this.$router.push({ name: "Home" });
      }else if (this.usuario === "" || this.senha === "") {
        alert("Preencha Todos os Campos!");
      }else {
        alert("Usuario ou Senha incorretos. Tente novamente.");
      }
    }
  }
};
</script>

<style scoped>
#body {
  font-family: sans-serif;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 400px;
}

#prince {
  font-size: xx-large;
  font-weight: bolder;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.input-field {
  height: 40px;
  width: 100%;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 12px;
  font-size: 16px;
}

.input-field:focus {
  border: 2px solid #8a00ff;
}

label {
  margin-top: 25px ;
  font-weight: bold;
  color: #333;
}

.entrar {
  margin-top: 25px ;
  width: 100%;
  height: 50px;
  font-size: 18px;
  text-align: center;
  background-color: #03441c;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.entrar:hover {
  background-color: #04662a;
}

.subtext {
  margin-bottom: 20px;
  color: #666;
}
</style>
