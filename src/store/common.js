
const initialState = {
  projects: [
    {
      key: "senseProject",
      title: "山時作 SenseProject",
      coverImg: require('@assets/img/senseProject/1.jpg'),
      show: false,
      imgUrls: [require('@assets/img/senseProject/1.jpg'), require('@assets/img/senseProject/2.jpg'), require('@assets/img/senseProject/3.jpg')],
      background: "山時作 SenseProject 餐廳形象官網，提供最新活動消息、線上菜單、線上訂位、包場資訊、甜點訂製及聯絡資訊",
      links: [
        {
          name: "Demo",
          url: "http://www.google.com"
        }
      ],
      tags: ["Bootstrap-Vue", "Vue", "Vue Cli"]
    },
    {
      key: "f2eHotel",
      title: "F2E Hotel",
      coverImg: require('@assets/img/f2eHotel/1.png'),
      show: false,
      imgUrls: [require('@assets/img/f2eHotel/1.png'), require('@assets/img/f2eHotel/2.png'), require('@assets/img/f2eHotel/3.png'), require('@assets/img/f2eHotel/4.png'), require('@assets/img/f2eHotel/5.png'), require('@assets/img/f2eHotel/6.png')],
      background: `串接 F2E 提供的旅館 API，可以即時查詢、預定所有房型`,
      links: [
        {
          name: "Demo",
          url: "https://challenge.thef2e.com/news/17"
        },
        {
          name: "API文件",
          url: "https://challenge.thef2e.com/news/17"
        },
        {
          name: "設計稿",
          url: "https://z7x2c0v0b8.github.io/the_f2e_2nd/hotel_reservation.html#artboard0"
        }
      ],
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
};

const state = {
  ...initialState,
  initialState() {
    return initialState;
  }
};

const mutations = {
  setProjects(state, projects) {
    state.projects = projects;
  }
};

const getters = {
  projects: state => state.projects
};

const actions = {
};


export default {
  state,
  getters,
  mutations,
  actions
};