<template>
  <div>
    <el-row>
      <el-col :span="24">
        <main-header />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :xl="7" :xs="24">
        <el-image class="block" :src="profileImgUrl" :fit="'cover'"></el-image>
      </el-col>
      <el-col :span="14" :xl="17" :xs="24">
        <el-row
          class="profile-aboutme-top"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col :span="16">
            <div>
              <div class="aboutme-title">ABOUT ME</div>
              <div
                class="aboutme-divider"
                data-aos="fade-left"
                data-aos-duration="2000"
              ></div>
              <div class="normal-text" v-html="aboutMe"></div>
              <el-button plain class="aboutme-btn" @click="clickResume"
                >Download Resume</el-button
              >
            </div>
          </el-col>
        </el-row>
        <el-row
          class="profile-aboutme-bottom"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col :span="16">
            <div class="aboutme-icon">
              <a
                href="https://www.linkedin.com/in/ura-chen-7839a01b5/"
                target="_blank"
              >
                <i class="iconify" data-icon="ant-design:linkedin-filled"></i
              ></a>
              <a
                href="https://www.facebook.com/yuching.chen.925/"
                target="_blank"
              >
                <i class="iconify" data-icon="ant-design:facebook-filled"></i
              ></a>
              <a href="https://www.instagram.com/chingchenn/" target="_blank">
                <i class="iconify" data-icon="ant-design:instagram-filled"></i
              ></a>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="aboutme-sub block">
      <el-col :span="3" :xs="1" class="left-divider block fade-in">
        <div></div>
      </el-col>
      <el-col :span="21" :xs="23">
        <el-row
          class="aboutme-sub-img parallax"
          :style="{ backgroundImage: `url(${profileSubImgUrl})` }"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col :span="16" :xs="24" class="aboutme-sub-content">
            <div>
              <span class="aboutme-sub-title">I am a frontend developer</span>
              <span class="normal-text">{{ aboutMeDeveloper }}</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="skill block">
      <el-col :span="24" :xs="24">
        <el-row type="flex" justify="space-around" align="center">
          <el-col :span="8"></el-col>
          <el-col :span="8" :xs="24" class="title skill-title">
            <span data-aos="fade-up" data-aos-duration="2000">SKILLS</span>
          </el-col>
          <el-col
            :span="8"
            class="row-divider"
            data-aos="fade-left"
            data-aos-duration="2000"
          ></el-col>
        </el-row>
        <el-row class="skill-card-group">
          <el-col
            :span="8"
            :xs="24"
            :sm="24"
            :md="12"
            v-for="skillItem in skills"
            :key="skillItem.title"
          >
            <el-card class="skill-card">
              <div class="skill-card-content">
                <i class="iconify skill-icon" :data-icon="skillItem.icon"></i>
                <h3>{{ skillItem.title }}</h3>
                <ul
                  class="skill-list"
                  v-for="contentItem in skillItem.contents"
                  :key="contentItem"
                >
                  <li>{{ contentItem }}</li>
                </ul>
                <span class="skill-list-memo">{{ skillItem.memo }}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="project">
      <el-col :span="10" :offset="2" :xs="{ span: 24, offset: 0 }">
        <el-image
          class="project-image"
          :src="projectImgUrl"
          :fit="'cover'"
        ></el-image>
      </el-col>
      <el-col :span="9" :xs="23">
        <div class="project-content">
          <span
            class="title project-title"
            data-aos="fade-up"
            data-aos-duration="2000"
            >PORTFOLIO</span
          >
          <div class="normal-text" v-html="project"></div>
          <el-button type="primary" @click="clickProject">Read More</el-button>
        </div>
      </el-col>
      <el-col
        :span="3"
        :xs="1"
        class="right-divider"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
      </el-col>
    </el-row>
    <el-row class="contact">
      <el-row type="flex" justify="space-around" align="center">
        <el-col
          :span="8"
          class="row-divider"
          data-aos="fade-right"
          data-aos-duration="2000"
        ></el-col>
        <el-col :span="8" :xs="24" class="title contact-title">
          <span data-aos="fade-up" data-aos-duration="2000">CONTACT</span>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8" :xs="24">
          <div class="text-gray-light text-center text-block">X</div>
          <div class="text-gray-light text-center">Feel free to contact me</div>
        </el-col>
      </el-row>
      <el-row class="contact-list">
        <el-col :span="8" :xs="24">
          <div class="contact-text text-center">
            <span
              class="contact-icon iconify"
              data-icon="bx:bx-mobile-vibration"
            ></span
            >0921-793318
          </div>
        </el-col>
        <el-col :span="8" :xs="24">
          <div class="contact-text text-center">
            <span class="contact-icon iconify" data-icon="carbon:email"></span>
            nai0225@gmail.com
          </div>
        </el-col>
        <el-col :span="8" :xs="24">
          <div class="contact-text text-center">
            Follow Me On
            <i class="iconify" data-icon="ant-design:facebook-filled"></i>
            <i class="iconify" data-icon="ant-design:instagram-filled"></i>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import MainHeader from '@components/MainHeader'
export default {
  name: "Main",
  components: {
    MainHeader
  },

  data() {
    return {
      profileImgUrl: require('@assets/img/me_v2.png'),
      profileSubImgUrl: require('@assets/img/profile-sub.jpg'),
      projectImgUrl: require('@assets/img/project.jpg'),
      aboutMe: `<p>我是陳鈺青，個性正向樂觀，做事思考周全且態度積極，面對新的工作環境及事物能快速適應、學習力強，在團隊合作中具備良好的溝通能力。</p><p>喜愛旅行與攝影，藉由旅行探索未知，開闊自己的眼界，而攝影培養觀察力、美感的直覺與眼光。</p>`,
      aboutMeDeveloper: `我是一名網頁前端工程師，因樂於研究UX使用者體驗，在開發過程中除追求美觀易讀的介面外，亦以優質友善的使用者體驗為目標。擁有後端開發經驗，在規畫制定API時，可與後端工程師合作，解決多數業務邏輯並減低前後端溝通問題。`,
      skills: [
        {
          title: '網頁語言 / 框架',
          icon: 'ant-design:code-outlined',
          contents: [
            "HTML", "CSS", "JavaScript", "-", "Vue", "Element UI", "Bootstrap"
          ],
          memo: '-學習中: React / Material UI'
        },
        {
          title: 'Library / Standard',
          icon: 'la:laptop-code',
          contents: [
            "NPM", "AXIOS", "Webpack", "Lodash", "ESLint", "Restful API"
          ],
          memo: ''
        },
        {
          title: '開發工具 / DevOps',
          icon: 'la:dev',
          contents: [
            "GIT", "VS code", "Figma", "Docker", "Jenkins"
          ],
          memo: ''
        }
      ],
      project:"主要內容為"
    };
  },
  methods: {
    closeDialog(id) {
      _.find(this.projects, pItem => {
        return pItem.key === id
      }).show = false;
    },
    clickProject() {
      this.$router.push({ name: 'Project' });
    },
    clickResume() {
      this.$router.push({ name: 'ResumeIndex' });
    }
  }
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
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal {
  border-bottom: none;
  background-color: inherit;
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
.el-main {
  padding: 0;
}
.el-row {
  // margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
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
.block {
  min-height: 650px;
}
.profile-aboutme-top {
  min-height: 550px;
  background-color: $color-green-normal;
  margin-bottom: 0px;
}
.profile-aboutme-bottom {
  min-height: 100px;
  background-color: #ffffff;
  text-align: center;
}
.aboutme-title {
  font-size: 40px;
  font-weight: 200;
}
.aboutme-divider {
  min-height: 20px;
  border-top: solid 2px $color-green-dark;
}
.aboutme-btn {
  margin: 20px 0px;
}
.aboutme-icon {
  display: flex;
  justify-content: center;
}
.aboutme-sub,
.project {
  background-color: $color-beige;
}
.left-divider {
  border-right: solid 2px $color-green-dark;
}
.aboutme-sub-img {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 600px;
  margin: 25px;
  opacity: 0.8;
}
.aboutme-sub-content {
  background-color: #ffffff;
  opacity: 0.9;
  padding: 20px;
}
.aboutme-sub-title {
  font-size: 30px;
  font-weight: 200;
  display: block;
  margin-bottom: 25px;
  text-transform: uppercase;
}
.aboutme-icon > a {
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
.aboutme-icon > a > .iconify {
  color: $color-gray-dark;
  width: 40px;
  height: 40px;
}
.skill {
  background-color: $color-green-light;
}
.title {
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  display: block;
}
.skill-title,
.project-title {
  color: $color-blue-normal;
}

.contact-title {
  color: #ffffff;
}

.row-divider {
  margin-top: 50px;
  border-top: solid 2px $color-green-dark;
}
.skill-card {
  // padding: 20px;
  margin: 50px;
  min-height: 400px;
}
.skill-card-group {
  :first-child > .skill-card {
    border-top: solid 5px #cec7b7;
  }
  :nth-child(2) > .skill-card {
    border-top: solid 5px #879288;
  }
  :nth-child(3) > .skill-card {
    border-top: solid 5px #1d2a3a;
  }
}
.skill-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.skill-icon {
  display: block;
  width: 80px;
  height: 80px;
  color: $color-blue-dark;
}
.skill-list {
  list-style: none;
  margin: 3px;
  padding: 0 !important;
  color: $color-blue-dark;
}
.skill-list-memo {
  margin-top: 10px;
  font-size: 12px;
  color: $color-gray-normal;
}
.right-divider {
  border-left: solid 2px $color-green-dark;
  height: 400px;
}
.project-image {
  height: 400px;
}
.project-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding:20px;
  height: 400px;
}
.contact {
  background-color: $color-blue-dark;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-list {
  padding: 30px 0px;
}
.contact-icon {
  width: 20px;
  height: 20px;
  margin: 0 10px;
  color: #ffffff;
}
.contact-text {
  color: #ffffff;
  margin-right: 10px;
  line-height: 26px;
}
@media (min-width: 992px) {
  .skill-card-group {
    margin-right: 100px;
    margin-left: 100px;
    display: flex;
    justify-content: center;
  }
}
</style>