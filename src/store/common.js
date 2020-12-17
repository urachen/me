
const initialState = {
  portfolio: [
    {
      type: 'frontend',
      key: "f2eHotel",
      title: "F2E Hotel",
      coverImg: require('@assets/img/f2eHotel/1.png'),
      imgUrls: [require('@assets/img/f2eHotel/1.png'), require('@assets/img/f2eHotel/2.png'), require('@assets/img/f2eHotel/3.png'), require('@assets/img/f2eHotel/4.png'), require('@assets/img/f2eHotel/5.png'), require('@assets/img/f2eHotel/6.png')],
      background: `<p>參加THE F2E 2nd，串接 F2E 提供的旅館 API，可即時查詢、預定所有房型。</p>
          <ul>
            <li>UI設計稿:F2E UI設計組所提供的極簡風介面</li>
            <li>UI框架:element UI切版</li>
            <li>透過Vuex管理API狀態及數值</li>
            <li>使用webpack編譯打包部署</li>
            <li>套件:vue2-datepicker</li>
          </ul>`,
      links: [
        {
          name: "Demo",
          url: "https://urachen.github.io/F2E-hotel/"
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
      tags: ["Vue", "Vuex", "Webpack", "Vue-router", "AXIOS", "Restful API", "SCSS", "element UI",]
    },
    {
      type: 'frontend',
      key: "senseProject",
      title: "山時作 SenseProject",
      coverImg: require('@assets/img/senseProject/1.jpg'),
      imgUrls: [require('@assets/img/senseProject/1.jpg'), require('@assets/img/senseProject/2.jpg'), require('@assets/img/senseProject/3.jpg')],
      background: "山時作 SenseProject 餐廳形象官網，提供最新活動消息、線上菜單、線上訂位、包場資訊、甜點訂製及聯絡資訊",
      // links: [
      //   {
      //     name: "Demo",
      //     url: "http://www.google.com"
      //   }
      // ],
      tags: ["Vue", "Vue Cli", "Bootstrap-Vue"]
    },
    {
      type: 'frontend',
      key: "workouter",
      title: "Workouter 運動筆記",
      coverImg: require('@assets/img/workouter/1.png'),
      imgUrls: [require('@assets/img/workouter/1.png'), require('@assets/img/workouter/2.png'), require('@assets/img/workouter/3.png'), require('@assets/img/workouter/4.png'), require('@assets/img/workouter/5.png'), require('@assets/img/workouter/6.png'), require('@assets/img/workouter/7.png')],
      background: `<p>Workouter主要提供健身者輸入各項運動紀錄，以便使用者檢視自身訓練狀態，除健身紀錄外，也可加入一般日常運動記錄，例如:瑜珈、慢跑、飛輪、登山等。</p>
          <ul>
            <li>wireframe/UI設計稿:透過Figma自行繪製</li>
            <li>UI框架:Material UI切版</li>
            <li>React框架</li>
            <li>API將與後端工程師合作(進行中)</li>
            <li>使用webpack編譯打包部署</li>
            <li>自行刻製Calendar套件</li>
          </ul>`,
      links: [
        {
          name: "Demo (目前僅有前端prototype)",
          url: "http://www.google.com"
        },
        {
          name: "Figma設計稿",
          url: " https://www.figma.com/file/msgFudMLm7zQKLSDdtHvWB/Workouter?node-id=100%3A0"
        }

       
      ],
      tags: ["React", "Material UI"]
    },
    {
      type: 'frontend',
      key: "internal",
      title: "Internal Projects",
      coverImg: require('@assets/img/internalProjects.png'),
      imgUrls: [require('@assets/img/epad2.png'), require('@assets/img/epad1.png'), require('@assets/img/CFAS.png'), require('@assets/img/CGDS.png'), require('@assets/img/CMS1.png'), require('@assets/img/CMS2.png'), require('@assets/img/DBSS.png')],
      background: `公司內部管理網站，包含官網內容管理系統、官網選餐後台系統、考核系統、航班旅客資料保存系統、組員通關表單系統`,
      tags: ["SCSS", "Bootstrap", "Vue", "Vuex", "Webpack", "Restful API"]
    },
    {
      type: 'UI',
      key: "UI21Day",
      title: "21 Days UI Challenge",
      coverImg: require('@assets/img/UI21Day/1.png'),
      imgUrls: [require('@assets/img/UI21Day/1.png'), require('@assets/img/UI21Day/2.png'), require('@assets/img/UI21Day/3.png'), require('@assets/img/UI21Day/4.png'), require('@assets/img/UI21Day/5.png'), require('@assets/img/UI21Day/6.png'), require('@assets/img/UI21Day/7.png')],
      background: `<p>參與Figma 21天實戰營，UI視覺設計作品集</p>
          <ul>
            <li>Sign up page</li>
            <li>Neumorhism Calculator</li>
            <li>Testimonials design</li>
            <li>Calendar design</li>
            <li>Music app design</li>
          </ul>`,
      links: [
        {
          name: "Figma",
          url: "https://www.figma.com/file/o4QiC1MpgbasbCegofnsyM/21-Challenge?node-id=408%3A140"
        }
      ],
      tags: ["Figma", "Figma21Days", "UI Design"]
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
  setPortfolio(state, portfolio) {
    state.portfolio = portfolio;
  }
};

const getters = {
  portfolio: state => state.portfolio
};

const actions = {
};


export default {
  state,
  getters,
  mutations,
  actions
};