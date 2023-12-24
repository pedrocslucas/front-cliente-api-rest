<template>
    <div>
        <Message :msg="msg" v-show="msg" />

        <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Data/Nasc</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th class="email">E-mail</th>
                    <th class="cadastro">Data/Cadastro</th>
                    <th>Opções:</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cliente in clientes" :key="cliente.id">
                    <td>{{ cliente.id }}</td>
                    <td>{{ cliente.nascimento }}</td>
                    <td>{{ cliente.nome }}</td>
                    <td>{{ cliente.cpf }}</td>
                    <td>{{ cliente.endereco }}</td>
                    <td>{{ cliente.telefone }}</td>
                    <td>{{ cliente.email }}</td>
                    <td>{{ cliente.datacadastro }}</td>
                    <td>
                        <button class="button is-warning mr-2">Editar</button>
                        <button class="button is-danger" @click="excluirCliente(cliente.id)">Excluir</button>
                    </td>
                </tr>
            </tbody>

        </table>

    </div>
</template>

<script>
    import Message from './Mensagem.vue'

    export default {
        name: 'Dashboard',
        data() {
            return {
                id: null,
                nome: null,
                nascimento: null,
                cpf: null,
                email: null,
                telefone: null,
                endereco: null,
                datacadastro: null,
                msg: null
            };
        },

        components: {
            Message
        },

        methods: {
            async getClientes(){
                try{
                    const req = await fetch("http://localhost:8080/api/clientes");
                    const data = await req.json()
                    this.clientes = data
                    console.log(this.clientes)
                } catch (error) {
                    console.error("Não foi possível obter a lista de clientes!");
                }
            },

            async excluirCliente(id) {
                try {

                    const req = await fetch(`http://localhost:8080/api/clientes/${id}`, {
                        method: "DELETE"
                    });
                    
                    if(req.ok){
                        console.log("Excluído com sucesso!");
                    }

                    this.msg = "Cliente removido com sucesso!";
                    setTimeout(() => this.msg = "", 3000);
                    this.getClientes();
                } catch (error) {
                    console.error("Erro ao excluir cliente: ", error);
                }
            }
        },

        mounted() {
            this.getClientes();
        }
    }

</script>

<style>

</style>
