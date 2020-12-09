<template>
  <el-container>
    <Header />
    <el-main>
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
      </el-row>
      <el-row class="bg">
        <el-row class="bg-one">
          <el-col :span="12" :offset="6">
            <el-image :src="require('@assets/img/Vector.png')"></el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="4" :span="8" :xs="{ offset: 0, span: 24 }">
            <el-card :body-style="{ padding: '0px' }">
              <el-image
                class="card-image"
                :src="require('@assets/img/CFAS.png')"
                :fit="'cover'"
                @click="onClick"
              ></el-image>
              <div class="card-title">
                <span>CFAS</span>
                <div class="card-detail">
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-card :body-style="{ padding: '0px' }">
              <el-image
                class="card-image"
                :src="require('@assets/img/CFAS.png')"
                :fit="'cover'"
                @click="onClick"
              ></el-image>
              <div class="card-title">
                <span>CFAS</span>
                <div class="card-detail">
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div>
         <button @click="show = !show">click</button>
          <transition name="fade">
            <div v-if="show" class="box"></div>
          </transition>
          <el-row type="flex" justify="center">
            <el-col :span="16" :xs="24">
              <div class="project-detail">
                <el-row type="flex" justify="end">
                  <a href="#">
                    <span class="iconify" data-icon="iwwa:delete"></span
                  ></a>
                </el-row>
                <el-row>
                  <el-col class="project-detail-image" :span="12" :xs="24">
                    <el-carousel indicator-position="outside" :autoplay="false">
                      <el-carousel-item>
                        <el-image
                          class="carousel-img"
                          :src="require('@assets/img/internalProjects.png')"
                          :fit="'cover'"
                        ></el-image>
                      </el-carousel-item>
                    </el-carousel>
                  </el-col>
                  <el-col class="project-detail-content" :span="12" :xs="24">
                    <div class="projct-content">
                      <h1>Project Title</h1>
                      <span
                        >Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.</span
                      >
                      <el-divider></el-divider>
                      <el-divider></el-divider>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </el-main>
    <el-footer>COPYRIGHT © 2020 CHENYUCHING. ALL RIGHTS RESERVED.</el-footer>
  </el-container>
</template>
<script>
import Header from '@views/layout/Header'
export default {
  name: "project",
  components: {
    Header
  },
  data() {
    return {
      show:false,
      projects: [
        {
          key: "senseProject",
          title: "山時作 SenseProject",
          coverImg: require('@assets/img/senseProject/1.jpg'),
          show: false,
          imgUrls: [require('@assets/img/senseProject/1.jpg'), require('@assets/img/senseProject/2.jpg'), require('@assets/img/senseProject/3.jpg')],
          background: "山時作 SenseProject 餐廳形象官網，提供最新活動消息、線上菜單、線上訂位、包場資訊、甜點訂製及聯絡資訊",
          tags: ["Bootstrap-Vue", "Vue", "Vue Cli"]
        },
        {
          key: "f2eHotel",
          title: "F2E Hotel",
          coverImg: require('@assets/img/f2eHotel/1.png'),
          show: false,
          imgUrls: [require('@assets/img/f2eHotel/1.png'), require('@assets/img/f2eHotel/2.png'), require('@assets/img/f2eHotel/3.png'), require('@assets/img/f2eHotel/4.png'), require('@assets/img/f2eHotel/5.png'), require('@assets/img/f2eHotel/6.png')],
          background: `串接 F2E 提供的旅館 API，可以即時查詢、預定所有房型<br/><br/><a href='https://challenge.thef2e.com/news/17'>DEMO</a><br/><a href='https://challenge.thef2e.com/news/17'>API文件</a><br/><a href='https://z7x2c0v0b8.github.io/the_f2e_2nd/hotel_reservation.html#artboard0'>設計稿</a>`,
          tags: ["SCSS", "element UI", "Vue", "Vuex", "Webpack", "Restful API"]
        },
        {
          key: "internal",
          title: "Internal Projects",
          coverImg: require('@assets/img/internalProjects.png'),
          show: false,
          imgUrls: [require('@assets/img/epad2.png'), require('@assets/img/epad1.png'), require('@assets/img/CFAS.png'), require('@assets/img/CGDS.png'), require('@assets/img/CMS1.png'), require('@assets/img/CMS2.png'), require('@assets/img/DBSS.png')],
          background: `公司內部管理網站，包含官網內容管理系統、官網選餐後台系統、考核系統、航班旅客資料保存系統、組員通關表單系統`,
          tags: ["SCSS", "Bootstrap", "Vue", "Vuex", "Webpack", "Restful API"]
        }
      ]
    }
  },
  methods: {
    onClick() {
      console.log('ddd')
    }
  }
}
</script>
<style scoped lang="scss">
@import "@assets/scss/custom-main.scss";
@import "@assets/scss/element-variables.scss";
.el-main {
  padding: 0;
}
.el-footer {
  background-color: $color-brown;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
  font-size: 10px;
}
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
  margin: 50px;
  cursor: pointer;
}
.card-image {
  height: 300px;
  width: inherit;
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
}
.project-detail {
  background-color: $color-green-normal;
  margin-bottom: 20px;
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
@media (min-width: 992px) {
  .project-detail {
    margin: 20px, 100px;
  }
}
@media (max-width: 767.9px) {
  .el-card {
    margin: 10px !important;
  }
}
.box{
  height:200px;
  width:200px;
  background-color:red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>