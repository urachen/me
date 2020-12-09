<template>
  <el-header>
    <router-link :to="{ name: 'Main' }">
      YUCHING
    </router-link>
    <el-menu class="el-menu" mode="horizontal" :router="true">
      <el-menu-item index="/">ABOUT ME</el-menu-item>
      <el-menu-item index="/project">PROJECT</el-menu-item>
      <el-menu-item index="/resume/index">RESUME</el-menu-item>
    </el-menu>
    <div class="mobile-menu">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span class="menu-icon iconify" data-icon="bi:list"></span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>ABOUT ME</el-dropdown-item>
          <el-dropdown-item>PROJECT</el-dropdown-item>
          <el-dropdown-item>RESUME</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
@import "@assets/scss/custom-main.scss";
@import "@assets/scss/element-variables.scss";
.el-header {
  background-color: $color-blue-dark;
  color: #ffffff;
  text-align: left;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99;

  a {
    color: #ffffff;
    text-decoration: none;
  }
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal {
  border-bottom: none;
  background-color: inherit;

  .el-menu-item {
    color: #ffffff;
  }
}
.mobile-menu {
  display: none;
}
.menu-icon {
  width: 40px;
  height: 40px;
  margin-top: 10px;
  color: #ffffff;
  cursor: pointer;
}
@media (max-width: 768px) {
  .mobile-menu {
    display: block;
  }
  .el-menu {
    display: none;
  }
}
</style>