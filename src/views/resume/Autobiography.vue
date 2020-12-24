<template>
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
          <div class="ab-title">
            <span>Autobiography</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="cv-row">
        <el-col :span="24">
          <div class="ab-content">
            <p v-for="(cItem,cKey) in contents" :key="cKey">{{cItem}}</p>
          </div>
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
</template>

<script>
export default {
  name: "cv",
  data() {
    return {
      interestList: [
        { title: "FOODIE", iconClass: "el-icon-fork-spoon" },
        { title: "TRAVEL", iconClass: "las la-map-marked" },
        { title: "WORKOUT", iconClass: "las la-dumbbell" },
        { title: "PHOTOGRAPHY", iconClass: "las la-camera-retro" }
      ],
      contents: [
        `我是陳鈺青，個性正向樂觀，做事思考周全且態度積極，面對新的工作環境及事物能快速適應、學習力強，在團隊合作中具備良好的溝通能力。喜愛旅行與攝影，藉由旅行探索未知，開闊自己的眼界，而攝影培養觀察力、美感的直覺與眼光。`,
        `目前就職於星宇航空，擔任前端工程師一職，主要負責公司內部管理網站開發，開發專案包含官網內容管理系統、官網選餐後台系統、考核系統、航班旅客資料保存系統、組員通關表單系統。因樂於研究UX(使用者體驗)，在開發過程中除追求美觀易讀的介面外，亦以優質友善的使用者體驗為目標。擁有後端開發經驗的我，在規畫制定API時，可與後端工程師合作，開發出高彈性之API，解決多數業務邏輯並減低前後端溝通問題。`,
        `畢業於國立雲林科技大學資訊管理學系。畢業專題製作 Android APP-「Tainwan In Hand」，以外國背包客的角度出發，設計一套行銷台灣的手機應用程式，並參加了中華電信加值應用大賽，達到進入決賽資格。`,
        `畢業後即進入長榮航空公司擔任工程師一職，業務範圍為空地勤排班。空勤排班部分，主要負責排班資料維護、班表發佈後日常追蹤監控、組員簽到退、組員資訊網站、組員個人班表iOS APP等相關系統維運及新功能開發，負責修改開發案約105件，簡化業務單位作業流程、提升工作效率及使用滿意度；地勤排班部分，主要負責客服人員排班系統與機場人員排班系統導入，擔任專案主負責人，舉凡專案時程規劃及控管、使用者需求分析、與跨部門業務單位、專案成員及委外廠商溝通整合等，導入系統化自動排班，減低人為失誤及使人力資源運用達最佳化。因此經驗，讓我深知身為團隊之一員、角色定位的重要性，更讓我了解身為一位管理者不只要以堅定的態度帶領團隊，同時 也必須擔任輔導者的角色，站在不同角度給予適時的協助。`,
        `為了內心的小創業夢，在2016年毅然決然離開了長榮航空，與朋友合資在台中文創園區內創立山時作餐廳，藉著熱愛美食及對料理的熱忱並冀望傳達對「良食」 的理念給大家。從空間設計、裝修到設備安裝；從餐具、食材挑選到餐點飲品研發試作，皆親力親為。在這兩年中，體認到雖然餐飲服務業與資訊產業有著不一樣的 專業知識領域，但實際上在執行的模式與成果卻是讓我覺得有很多相似之處。比如外場服務就像是使用者需求分析到使用者滿意度提升的過程;內場餐點製作就像是 接到需求後，進而分析設計及撰寫系統;最重要的是得到使用者對系統、顧客對餐點服務的讚賞獲得的自我成就感也是不變的。`,
        `對於熱愛學習新事物的我在現況並不自滿，更想多方面充實自己的能力，並將過去經歷運用在 工作上，期望機會到來時能盡情發揮所學及特質。`
      ]
    }
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
.cv-footer {
  background-color: #dfddd2;
  margin-bottom: 10px;
  padding-top: 10px;
  // padding-left: 50px;
  color: $color-gray-dark;
  border-top: $color-gray-light dashed 1px;
  text-align: left;
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
}
.cv-interests-list > li > i {
  font-size: 20px;
  padding-top: 5px;
  color: #8d8d8d;
}
.cv-interests-list > li > span {
  font-size: 8pt;
  color: $color-gray-normal;
}
.ab-title {
  font-size: 20px;
  letter-spacing: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.ab-content {
  color: $color-gray-normal;
  font-size: 14px;
  white-space: 5px;
  text-align: justify;
  line-height: 16pt;
  margin-bottom: 10px;
}
</style>