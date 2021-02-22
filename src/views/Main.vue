<template>
  <el-container>
    <el-header>
      <router-link :to="{ name: 'Bio' }"> YUCHING </router-link>
      <el-menu class="el-menu" mode="horizontal" :router="true">
        <el-menu-item index="/bio">ABOUT ME</el-menu-item>
        <el-menu-item index="/project">PROJECT</el-menu-item>
        <el-menu-item index="/resume/index">RESUME</el-menu-item>
      </el-menu>
      <div class="mobile-menu">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span class="menu-icon iconify" data-icon="bi:list"></span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><router-link to="/bio">ABOUT ME</router-link></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link to="/project"
                >PROJECT</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link to="/resume/index"
                >RESUME</router-link
              ></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>COPYRIGHT © 2020 CHENYUCHING. ALL RIGHTS RESERVED.</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      menuList: [
        {
          key: 'bio',
          name: 'ABOUT ME',
          path: '/bio',
          isActive: false
        },
        {
          key: 'project',
          name: 'PROJECT',
          path: '/project',
          isActive: false
        },
        {
          key: 'resume',
          name: 'RESUME',
          path: '/resume/index',
          isActive: false
        }
      ]
    };
  }
  // watch: {
  //   "$route"(to, from) {
  //   }
  // }
};
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
  .is-active {
    background-color: #fff;
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
.el-dropdown-menu__item {
  a {
    color: $color-blue-dark;
    text-decoration: none;
  }
}
@media (max-width: 768px) {
  .mobile-menu {
    display: block;
  }
  .el-menu {
    display: none;
  }
}
.el-main {
  padding: 0;
  min-height: 830px;
}
.el-footer {
  background-color: $color-brown;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
  font-size: 10px;
  z-index: 3;
  position: sticky;
}
</style>