<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="main-title">
          <H1>Ura Chen</H1>
          <div class="main-divider"></div>
          <h6 class="main-job">Front-End Developer</h6>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span
          class="title project-title"
          data-aos="fade-up"
          data-aos-duration="2000"
          >PROJECTS</span
        >
      </el-col>
      <!-- <el-row class="bg-one">
          <el-col :span="12" :offset="6">
            <el-image :src="require('@assets/img/Vector.png')"></el-image>
          </el-col>
        </el-row> -->
    </el-row>
    <el-row class="project-card-group">
      <el-col
        :xl="8"
        :lg="12"
        :md="12"
        :sm="24"
        :xs="24"
        v-for="pItem in projects"
        :key="pItem.key"
      >
        <el-card class="project-card">
          <img
            :src="pItem.coverImg"
            class="card-image"
            :fit="'cover'"
            @click="onClick(pItem)"
          />
          <div class="card-title">
            <span>{{ pItem.title }}</span>
            <div class="card-detail">
              <el-tag
                v-for="tItem in pItem.tags"
                :key="tItem"
                :type="'info'"
                effect="plain"
              >
                {{ tItem }}
              </el-tag>
              <!-- <el-button type="text" class="button">操作按钮</el-button> -->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "project",
  data() {
    return {
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  },
  methods: {
    onClick(obj) {
      this.$router.push({ name: 'ProjectDetail', params: { projectKey: obj.key } });
    }
  }
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
.main-title-job {
  font-weight: 500;
  color: $color-gray-normal;
}
.title {
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  display: block;
}
.project-title {
  color: $color-blue-normal;
}
.bg {
  position: relative;
  min-height: 600px;
}
.bg-one {
  position: absolute;
  top: inherit;
  right: 0;
}
.el-card {
  cursor: pointer;
}
.el-card__body {
  padding: 0px !important;
}
.card-image {
  height: 300px;
  width: 100%;
}
.el-card:hover .card-detail {
  height: 30px;
  margin-top: 23px;
  opacity: 1;
  display: block;
}
.card-title {
  padding: 15px;
}
.card-detail {
  height: 0;
  margin-top: 0px;
  opacity: 0;
  transition: 1s;
}
.project-card {
  padding: 0px;
  margin: 30px;
  // min-height: 400px;
}
.project-detail-image,
.project-detail-content {
  padding: 30px;
}
.carousel-img {
  min-height: 300px;
}
.projct-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.el-tag {
  margin-right: 10px;
}
@media (min-width: 992px) {
  .project-card-group {
    margin-right: 100px;
    margin-left: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
@media (max-width: 767.9px) {
  .el-card {
    margin: 10px !important;
  }
}
</style>