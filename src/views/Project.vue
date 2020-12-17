<template>
  <div>
    <el-row>
      <el-col :span="24">
        <main-header />
      </el-col>
    </el-row>
    <div class="project">
      <el-row type="flex" justify="center">
        <img
          :src="require('@assets/img/dot.svg')"
          :fit="'cover'"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
      </el-row>
      <el-row>
        <el-col :span="24">
          <span
            class="title project-title"
            data-aos="fade-up"
            data-aos-duration="2000"
            >PORTFOLIO</span
          >
        </el-col>
      </el-row>

      <el-divider content-position="left"><span>FrontEnd</span></el-divider>
      <el-row class="project-card-group">
        <el-col
          :xl="8"
          :lg="12"
          :md="12"
          :sm="24"
          :xs="24"
          v-for="pItem in showProjects('frontend')"
          :key="pItem.key"
        >
          <el-card class="project-card">
            <el-image
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
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-divider content-position="left"><span>UI Design</span></el-divider>
      <el-row class="project-card-group">
        <el-col
          :xl="8"
          :lg="12"
          :md="12"
          :sm="24"
          :xs="24"
          v-for="pItem in showProjects('UI')"
          :key="pItem.key"
        >
          <el-card class="project-card">
            <el-image
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
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import MainHeader from '@components/MainHeader'
export default {
  name: "project",
  components: {
    MainHeader
  },
  data() {
    return {
    }
  },
  computed: {
    projects() {
      return this.$store.getters.portfolio.projects;
    }
  },
  methods: {
    onClick(obj) {
      this.$router.push({ name: 'ProjectDetail', params: { projectKey: obj.key } });
    },
    showProjects(type) {
      return _.filter(this.$store.getters.portfolio, item => {
        return item.type === type;
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import "@assets/scss/custom-main.scss";
@import "@assets/scss/element-variables.scss";
.title {
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  display: block;
}
.project {
  background-color: $color-beige;
}
.project-title {
  color: $color-blue-normal;
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
  height: 50px;
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
  transition: 0.5s;
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
  margin-bottom: 10px;
}
.row-divider {
  margin: 20px 0px;
  border-top: solid 2px $color-green-dark;
  border-style: dashed;
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