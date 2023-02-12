<template>
  <div class="container">
    <div class="options">
      <a :href="img.src" :download="img.alt">
        <i class="anchor fa-solid fa-circle-down"></i>
      </a>
      <i @click="$emit('close')" class="anchor fa-solid fa-circle-xmark"></i>
    </div>
    <img :src="img.src" :alt="img.alt" />
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: ["img"],
};
</script>

<style scoped lang="scss">
.container {
  align-items: center;
  background: #ececec;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 50%;
  padding: 55px 25px 25px 25px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  .options {
    margin: 15px 0;
    text-align: right;
    width: 100%;
    .anchor {
      font-size: 1.5rem;
      margin-left: 10px;
    }
  }
  img {
    border-radius: 20px;
    margin-bottom: 35px;
    max-height: 90%;
    max-width: 90%;
    position: relative;
  }
}
</style>
