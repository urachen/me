<template>
  <div>
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
    <el-row class="bg">
      <el-col :span="16" :xs="24" class="project-detail-cover-image">
        <el-row>
          <transition>
            <el-image
              :src="currentCover || currentProject.coverImg"
              :fit="'contain'"
              lazy
              :preview-src-list="currentImgUrls"
            ></el-image>
          </transition>
        </el-row>
        <el-row
          class="project-detail-image-group"
          v-if="
            !currentProject.auth ||
            (currentProject.auth && currentProject.password === password)
          "
        >
          <el-col
            :span="6"
            v-for="(imgItem, imgKey) in currentImgUrls"
            :key="imgKey"
          >
            <el-image
              class="img-item"
              :src="imgItem"
              :fit="'contain'"
              @click="onClickImg(imgKey)"
            ></el-image>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :xs="24" class="project-detail-content">
        <h1>{{ currentProject.title }}</h1>
        <div class="normal-text" v-html="currentProject.background"></div>
        <el-row v-if="currentProject.auth">
          <el-col :span="24">
            <el-input
              placeholder="Please input password to see more"
              v-model="password"
              show-password
            ></el-input>
          </el-col>
          <!-- <el-col :offset="1" :span="7">
            <el-button
              icon="el-icon-check"
              circle
              @click="onClickPassword"
            ></el-button>
          </el-col> -->
        </el-row>
        <el-divider></el-divider>
        <el-row
          class="detail-item"
          v-if="currentProject.hasOwnProperty('links')"
        >
          <el-col :span="3" :xs="24">
            <span class="detail-title">Links</span>
          </el-col>
          <el-col :span="20" :xs="24">
            <el-link
              v-for="link in currentProject.links"
              :key="link.name"
              :href="link.url"
              target="_blank"
              >{{ link.name }}</el-link
            >
          </el-col>
        </el-row>
        <el-row
          class="detail-item"
          v-if="currentProject.hasOwnProperty('tags')"
        >
          <el-col :span="3" :xs="24">
            <span class="detail-title">Tags</span>
          </el-col>
          <el-col :span="20" :xs="24">
            <el-tag
              :type="'info'"
              effect="plain"
              v-for="(tag, tagKey) in currentProject.tags"
              :key="tagKey"
            >
              {{ tag }}
            </el-tag>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row class="back" type="flex" justify="center">
      <el-col :span="2">
        <el-button type="primary" @click="onBack">Back to all projects</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "projectDetail",
  data() {
    return {
      currentProjectKey: this.$route.params.projectKey,
      currentCover: '',
      password: ''
    }
  },
  computed: {
    currentProject() {
      return _.find(this.$store.getters.portfolio, portofolioItem => {
        return portofolioItem.key === this.currentProjectKey
      })
    },
    currentImgUrls() {
      return _.map(this.currentProject.imgUrls, fileNo => {
        return require(`@assets/img/${this.currentProject.key}/${fileNo}.png`);
      })
    }
  },
  methods: {
    onBack() {
      this.$router.push({ name: 'Project' })
    },
    onClickImg(key) {
      this.currentCover = this.currentImgUrls[key];
    }
  },
  created() {
    this.currentCover = this.currentProject.coverImg;
  }
}
</script>
<style scoped lang="scss">
@import "@assets/scss/custom-main.scss";
@import "@assets/scss/element-variables.scss";

.title {
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
  display: block;
}
.project-title {
  color: $color-blue-normal;
}
.bg {
  position: relative;
  min-height: 450px;
  margin-top: 20px;
}
.bg-one {
  position: absolute;
  top: inherit;
  right: 0;
}
.back {
  margin: 20px 0px;
}

.project-detail-cover-image,
.project-detail-content {
  padding: 30px;
  min-height: 300px;
}
.project-detail-cover-image {
  transition-delay: 2s;
}
.project-detail-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.project-detail-image-group {
  margin-top: 20px;
}
.img-item {
  padding: 10px;
  cursor: pointer;
  opacity: 1;
  height: 120px;
}
.img-item :hover {
  cursor: pointer;
  opacity: 0.7;
}
.detail-item {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.detail-title {
  color: $color-brown;
}
.el-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
.el-link {
  margin-right: 10px;
}
.el-image-viewer__btn {
  color: #ffffff !important;
}
// .el-divider__text {
//   background-color: $color-beige !important;
// }
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
h1 {
  color: $color-gray-dark;
}
@media (min-width: 992px) {
}
@media (min-width: 1201px) {
}
@media (max-width: 767.9px) {
}
</style>
