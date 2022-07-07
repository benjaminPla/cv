<template>
  <div class='container'>
    <div class='options'>
      <a :href='img.src' :download='img.alt'>
        <i class='anchor fa-solid fa-circle-down'></i>
      </a>
      <i @click='$emit("close")' class='anchor fa-solid fa-circle-xmark'></i>
    </div>
    <img :src='img.src' :alt='img.alt' />
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: ['img'],
};
</script>

<style scoped lang='scss'>
.container {
  margin: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  background: #dadada;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .options {
    width: 100%;
    height: 35px;
    text-align: right;
    margin-bottom: 10px;
    .anchor {
      font-size: 2rem;
      margin-left: 10px;
    }
  }
  img {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    border-radius: 20px;
    margin-bottom: 35px;
  }
}
</style>