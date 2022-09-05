<template>
  <img src='../assets/profile.jpg' alt='profile' />
</template>

<script>
export default {
  name: 'Picture',
};
</script>

<style scoped lang='scss'>
img {
  border-radius: 50%;
  width: 60%;
  object-fit: cover;
  object-position: 0% 0%;
  overflow: hidden;
}
</style>
