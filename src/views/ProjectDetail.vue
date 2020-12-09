<template>
  <div>
    <el-row>
      <el-col :span="24">
        <span
          class="title project-title"
          data-aos="fade-up"
          data-aos-duration="2000"
          >Project</span
        >
      </el-col>
    </el-row>
    <el-row class="bg">
      <el-col class="project-detail-image" :span="12" :xs="24">
        <el-carousel indicator-position="outside" :autoplay="false">
          <el-carousel-item
            v-for="(img, imgKey) in currentProject.imgUrls"
            :key="imgKey"
          >
            <el-image class="carousel-img" :src="img" :fit="'cover'"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col class="project-detail-content" :span="12" :xs="24">
        <div class="projct-content">
          <h1>{{ currentProject.title }}</h1>
          <span>{{ currentProject.background }}</span>
          <el-divider></el-divider>
          <el-row class="detail-item">
            <el-col :span="3">
              <span class="detail-title">Links</span>
            </el-col>
            <el-col :span="20">
              <el-link
                v-for="link in currentProject.links"
                :key="link.name"
                :href="link.url"
                target="_blank"
                >{{ link.name }}</el-link
              >
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">
              <span class="detail-title">Tags</span>
            </el-col>
            <el-col :span="20">
              <el-tag
                :type="'info'"
                effect="dark"
                v-for="(tag, tagKey) in currentProject.tags"
                :key="tagKey"
              >
                {{ tag }}
              </el-tag>
            </el-col>
          </el-row>
          <el-divider></el-divider>
        </div>
      </el-col>
    </el-row>
    <el-row class="back" type="flex" justify="center">
      <el-col :span="2">
        <el-button type="primary" @click="onBack">Back</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "projectDetail",
  data() {
    return {
      currentProjectKey: this.$route.params.projectKey
    }
  },
  computed: {
    currentProject() {
      return this.$store.getters.projects.find(e => e.key === this.currentProjectKey);
    }
  },

  methods: {
    onBack() {
      this.$router.go(-1);
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
}
.el-link {
  margin-right: 10px;
}
@media (min-width: 992px) {
}
@media (min-width: 1201px) {
}
@media (max-width: 767.9px) {
}
</style>