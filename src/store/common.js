
const initialState = {
  portfolio: [
    {
      type: 'frontend',
      key: "f2eHotel",
      title: "F2E Hotel",
      coverImg: require('@assets/img/f2eHotel/1.png'),
      imgUrls: ['1', '2', '3', '4', '5', '6'],
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
      tags: ["Vue", "Vuex", "Webpack", "Vue-router", "AXIOS", "Restful API", "SCSS", "element UI"],
      auth: false,
      password: ''
    },
    {
      type: 'frontend',
      key: "senseProject",
      title: "山時作 SenseProject",
      coverImg: require('@assets/img/senseProject/1.png'),
      imgUrls: ['1', '2', '3'],
      background: "山時作 SenseProject 餐廳形象官網，提供最新活動消息、線上菜單、線上訂位、包場資訊、甜點訂製及聯絡資訊",
      // links: [
      //   {
      //     name: "Demo",
      //     url: "http://www.google.com"
      //   }
      // ],
      tags: ["Vue", "Vue Cli", "Bootstrap-Vue"],
      auth: false,
      password: ''
    },
    {
      type: 'frontend',
      key: "workouter",
      title: "Workouter 運動筆記",
      coverImg: require('@assets/img/workouter/1.png'),
      imgUrls: ['1', '2', '3', '4', '5', '6', '7'],
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
          url: "https://urachen.github.io/workouter-app/"
        },
        {
          name: "Figma設計稿",
          url: " https://www.figma.com/file/msgFudMLm7zQKLSDdtHvWB/Workouter?node-id=100%3A0"
        }
      ],
      tags: ["React", "Material UI", "data-fns"],
      auth: false,
      password: ''
    },
    {
      type: 'frontend',
      key: "internal",
      title: "Internal Projects",
      coverImg: require('@assets/img/internal/1.png'),
      imgUrls: ['1', '2', '3', '4', '5', '6', '10'],
      background: `<p>公司內部管理網站</p>
      <p>開發專案</p>
      <ul>
        <li>官網內容管理系統</li>
        <li>官網選餐後台系統</li>
        <li>航班旅客資料保存系統</li>
        <li>航班資料報局系統</li>
        <li>組員通關表單系統</li>
        <li>員工考核系統</li>
        <li>員工優待機票系統</li>
        <li>JX-vue(架構)</li>
      </ul>
      <p>專案前端架構</p>
      <ul>
        <li>Vue框架</li>
        <li>使用webpack編譯打包</li>
        <li>透過Vuex管理API狀態及數值</li>
        <li>UI介面使用bootstrap框架</li>
        <li>多語系i18n，中英文切換</li>
        <li>使用套件/標準
          <ul>
            <li>axios / lodash / ESLint</li>
            <li>vue2-datepicker</li>
            <li>vue-multiselect</li>
            <li>vue-loading-overlay</li>
          </ul>
        </li>
      </ul>`,
      tags: ["SCSS", "Bootstrap", "Vue", "Vuex", "Vue router", "Webpack", "i18n", "axios", "Restful API"],
      auth: true,
      password: 'starlux'
    },
    {
      type: 'frontend',
      key: "realtalk",
      title: "Real Talk Prototype",
      coverImg: require('@assets/img/realtalk/1.png'),
      imgUrls: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      background: `<p>提供企業內部同仁交流的論壇</p>
      <p>實作內容發想</p>
      <ul>
        <li>登入頁面</li>
        <li>首頁包含公告區、依喜好類別推薦之文章列表、熱門分享/討論/Tags、新增文章按鈕、個人設定按鈕、各類別NavBar。</li>
        <li>於文章列表點選標題後，可進入文章詳細內容，若已有回應的內容一併顯示，可針對此篇文章點選Like /DisLike /收藏，並可回應此文章。</li>
        <li>於新增文章頁面可新增分享/討論。</li>
      </ul>
      <p>使用套件</p>
      <ul>
        <li><a href="https://github.com/jshjohnson/Choices" target="_blank">select input - choice.js</a></li>
        <li><a href="https://quilljs.com/" target="_blank">wysiwyg editor - quill</a></li>
      </ul>
      `,
      links: [
        {
          name: "Demo",
          url: "https://urachen.github.io/realtalk_prototype"
        }
      ],
      tags: ["Bootstrap", "choice.js", "quill"],
      auth: false,
      password: ''
    },
    {
      type: 'UI',
      key: "UI21Day",
      title: "21 Days UI Challenge",
      coverImg: require('@assets/img/UI21Day/1.png'),
      imgUrls: ['1', '2', '3', '4', '5', '6', '7'],
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
      tags: ["Figma", "Figma21Days", "UI Design"],
      auth: false,
      password: ''
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
  setInternalImg({
    commit
  }, check) {
    let internal = _.map(state.portfolio, item => {
      if (check) {
        return { ...item };
      }
      return { ...item, imgUrls: ['1'] }
    })
    commit("setPortfolio", internal);
  }
};


export default {
  state,
  getters,
  mutations,
  actions
};