<template>
  <div class="main-title">
    <H1>Ura Chen</H1>
    <div class="main-divider"></div>
    <h5 class="main-job">Front-End Developer</h5>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
@import "@assets/scss/custom-main.scss";
@import "@assets/scss/element-variables.scss";
.main-title {
  color: $--color-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-divider {
  border-top: solid 1px $--color-primary;
  width: 30px;
}
.main-job {
  font-weight: 300;
  color: $color-gray-light;
}
</style>