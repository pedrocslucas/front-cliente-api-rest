<template>

    <div id="foo">
        <p>Desenvolvido por Matheus Cardoso e Pedro Lucas Costa</p>
    </div>

</template>

<script>

    export default {
        name: "Footer",
    }

</script>

<style scoped>
#foo {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #222;
  border-top: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#foo > p {
  color: #fff;
  font-family: sans-serif;
  margin: auto;
  font-weight: bold;
}
</style>