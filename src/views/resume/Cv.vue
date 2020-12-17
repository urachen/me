<template>
  <div>
    <div class="cv-container">
      <div class="header-content">
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-left-border"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="12">
            <div class="cv-name-content">
              <span>Ura Chen</span>
            </div>
            <div class="cv-job-content">
              <span>Front-End Developer</span>
            </div>
          </el-col>
          <el-col :span="7" :offset="5">
            <div class="cv-photo-content">
              <el-avatar :size="100" :src="require('@assets/img/me.png')"></el-avatar>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-left-border"></div>
          </el-col>
        </el-row>
      </div>
      <div class="main-content">
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-title">
              <span>PROFILE</span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-content">
              <span v-html="profile"></span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-title">
              <span>EXPERIENCE</span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-ep-title">
              <i class="el-icon-caret-right"></i>
              <span>Front-End Developer</span>
              <div class="cv-gap"></div>
              <span>STARLUX Airlines</span>
              <div class="cv-gap"></div>
              <span>2019/04 - 2020</span>
              <img src="https://www.starlux-airlines.com/_nuxt/img/386723d.svg" height="20px" />
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="1">
            <div class="cv-ep-line"></div>
          </el-col>
          <el-col :span="23">
            <div class="cv-ep-item">
              <ul>
                <li>主要負責公司內部管理網站前端開發，依專案需求，與UX/UI設計師和後端工程師協同合作。</li>
                <li>使用 Vue.js 框架與 Webpack 打包工具，依設計稿進行畫面切版及串接API。</li>
                <li>製作共用 component 供其他專案運用，提升專案開發效率。</li>
                <li>使用Docker與Jenkins自動化部署經驗。</li>
                <li>開發專案:官網內容管理系統、官網選餐後台系統、考核系統、航班旅客資料保存系統、組員通關表單系統</li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-ep-title">
              <i class="el-icon-caret-right"></i>
              <span>Software Engineer</span>
              <el-divider direction="vertical"></el-divider>
              <span>EVA Airways</span>
              <el-divider direction="vertical"></el-divider>
              <span>2011/07 - 2016/05</span>
              <img src="https://www.evaair.com/images/logo-evaair-header.png" height="20px" />
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="1">
            <div class="cv-ep-line-2"></div>
          </el-col>
          <el-col :span="23">
            <div class="cv-ep-item">
              <span class="cv-ep-text">- Cockpit / Cabin Crew Roster and Track System</span>
              <ul>
                <li>負責排班資料維護、班表發佈後日常追蹤監控、組員簽到退、組員資訊網站、組員個人班表iOS APP等相關系統維運及新功能開發。</li>
                <li>主要使用VB.NET、JavaScript、jQuery，資料庫為Oracle SQL</li>
                <li>負責修改開發案約105件，簡化業務單位作業流程、提升工作效率及使用滿意度。</li>
              </ul>
              <span class="cv-ep-text">- Airport / Customer Service Staff Roster System</span>
              <ul>
                <li>擔任PM，專案時程規劃及控管、使用者需求分析、與跨部門業務單位和專案成員及委外廠商溝通整合。</li>
                <li>導入系統化自動排班，減低排班人為失誤及使人力資源運用達最佳化。</li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-title">
              <span>SKILL</span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="8">
            <div class="cv-skill-title">
              <i class="las la-code"></i>
              <span class="form-text">網頁語言與框架</span>
              <span class="cv-skill-content form-text">HTML/CSS/Bootstrap</span>
              <span class="cv-skill-content form-text">Vue.js/JavaSciprt/jQuery</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="cv-skill-title">
              <i class="las la-laptop-code"></i>
              <span class="form-text">Library、技術與標準</span>
              <span class="cv-skill-content form-text">NPM/axios/Webpack</span>
              <span class="cv-skill-content form-text">Lodash/ESLint/RESTful API</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="cv-skill-title">
              <i class="lab la-dev"></i>
              <span class="form-text">開發工具、DevOps</span>
              <span class="cv-skill-content form-text">git/Docker/Jenkins</span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-title">
              <span>EDUCATION</span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="24">
            <div class="cv-ep-title">
              <i class="el-icon-caret-right"></i>
              <span>國立雲林科技大學</span>
              <el-divider direction="vertical"></el-divider>
              <span>資訊管理系</span>
              <el-divider direction="vertical"></el-divider>
              <span>2008/09-2011/06</span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="cv-row">
          <el-col :span="1">
            <div class="cv-ed-line"></div>
          </el-col>
          <el-col :span="23">
            <div class="cv-ep-text">畢業專題製作-Taiwan In Hand(Andriod APP)</div>
          </el-col>
        </el-row>
      </div>
      <div class="cv-footer">
        <el-row>
          <el-col :span="6" :offset="4">
            <div class="cv-footer-title">
              <i class="el-icon-user-solid"></i>
              <span>PERSONAL</span>
            </div>
          </el-col>
          <el-col :span="6" :offset="4">
            <div class="cv-footer-title">
              <i class="las la-heart"></i>
              <span>INTERESTS</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" :offset="3">
            <div class="cv-footer-content">
              <ul class="cv-ul-content">
                <li>Name</li>
                <li>Birthday</li>
                <li>Mobile</li>
                <li>Email</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="cv-footer-content">
              <ul class="cv-ul-content cv-ul-content-detail">
                <li>陳鈺青</li>
                <li>25/FEB/1989</li>
                <li>0921793318</li>
                <li>nai0225@gmail.com</li>
              </ul>
            </div>
          </el-col>

          <el-col :span="8" :offset="2">
            <ol class="cv-interests-list">
              <li v-for="(iItem,iKey) in interestList" :key="iKey">
                <i :class="iItem.iconClass"></i>
                <span class="form-text">{{iItem.title}}</span>
              </li>
            </ol>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cv",
  data() {
    return {
      profile: "我是陳鈺青，個性正向樂觀，做事思考周全且態度積極，面對新的工作環境及事物能快速適應、學習力強，在團隊合作中具備良好的溝通能力。喜愛旅行與攝影，藉由旅行探索未知，開闊自己的眼界，而攝影培養觀察力、美感的直覺與眼光。<br/>目前為前端工程師，樂於研究UX(使用者體驗)，在開發過程中除追求美觀易讀的介面外，亦以優質友善的使用者體驗為目標。擁有後端開發經驗，在規畫制定API時，可與後端工程師合作，解決多數業務邏輯並減低溝通問題。",
      interestList: [
        { title: "FOODIE", iconClass: "el-icon-fork-spoon" },
        { title: "TRAVEL", iconClass: "las la-map-marked" },
        { title: "WORKOUT", iconClass: "las la-dumbbell" },
        { title: "PHOTOGRAPHY", iconClass: "las la-camera-retro" }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
@import "@assets/scss/custom-main.scss";
@import "@assets/scss/element-variables.scss";

@page {
  size: A4;
  margin: 0;
}
.cv-container {
  background-color: #fcfbf6;
  // fcf9ec
  position: relative !important;
  max-width: 210mm;
  height: 292mm;
  margin: 0 auto !important;
  box-sizing: border-box !important;
  font-size: 10pt;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,
    sans-serif;
  line-height: 1.2 !important;
  color: #000 !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cv-row {
  min-width: 500px;
  margin-left: 80px;
  margin-right: 30px;
}
.cv-left-border {
  border-radius: 1px;
  min-height: 24px;
  border-left: #000 solid 1px;
}
.cv-name-content {
  font-size: 32pt;
}
.cv-job-content {
  font-size: 18pt;
}
.cv-title {
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.cv-content {
  color: $color-gray-normal;
  word-break: break-all;
  line-height: 12pt;
  margin-bottom: 10px;
}
.cv-footer {
  background-color: #dfddd2;
  margin-bottom: 10px;
  padding-top: 10px;
  // padding-left: 50px;
  color: $color-gray-dark;
  border-top: $color-gray-light dashed 1px;
  text-align: left;
}

.cv-ep-title {
  color: $color-gray-normal;
  letter-spacing: 1px;
}
.cv-ep-line {
  height: 110px;
  margin-left: 7px;
  margin-bottom: 10px;
  border-left: $color-gray-light solid 1px;
}
.cv-ep-line-2 {
  height: 200px;
  margin-left: 7px;
  margin-bottom: 10px;
  border-left: $color-gray-light solid 1px;
}
.cv-ep-item {
  color: $color-gray-normal;
  line-height: 20px;
  margin-left: -30px;
  padding-left: 10px;
}
.cv-ep-text {
  color: $color-gray-normal;
  display: block;
  margin-top: 5px;
  padding-left: 10px;
}
.cv-gap {
  background-color: #dcdfe6;
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
.cv-footer-title {
  color: $color-gray-dark;
  letter-spacing: 1px;
  height: 20px;
}
.cv-footer-content {
  text-align: left;
}
.cv-ul-content {
  list-style-type: none;
  line-height: 20px;
  word-break: break-all;
}
.cv-ul-content-detail {
  color: $color-gray-normal;
  text-align: left;
}
.cv-interests-list {
  list-style-type: none;
  columns: 2;
  padding-left: 20px;
  padding-right: 20px;
}
.cv-interests-list > li > i {
  font-size: 22pt;
  padding-top: 5px;
  color: #8d8d8d;
}
.cv-interests-list > li > span {
  font-size: 8pt;
  color: $color-gray-normal;
}
.cv-skill-title {
  color: #a08989;
  text-align: center;
  margin-bottom: 10px;
}
.cv-skill-title > i {
  font-size: 24pt;
}
.cv-skill-content {
  color: $color-gray-normal;
}
.cv-ed-line {
  height: 20px;
  margin-left: 7px;
  margin-bottom: 10px;
  border-left: #999999 solid 1px;
}

</style>
