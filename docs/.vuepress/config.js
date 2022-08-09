const { defaultTheme } = require('@vuepress/theme-default');
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom');

module.exports = {
  base: '/unity-book/',
  lang: 'zh-TW',
  title: 'Unity 遊戲開發聖經',
  description: '',
  plugins: [mediumZoomPlugin({})],
  theme: defaultTheme({
    navbar: [
      { text: 'Unity 操作', link: '/basics/' },
      { text: '遊戲設計模式', link: '/patterns/' },
      { text: '遊戲專案', link: '/project-list/' },
    ],
    sidebar: {
      '/basics/': [
          {
            text: '快速開始',
            collapsible: true,
            link: '/basics/quick-start/',
            children: [
              {
                text: '建立 Unity 專案',
                link: '/basics/quick-start/create-project/',
                children: [],
              },
              {
                text: '介面介紹',
                link: '/basics/quick-start/panels/',
                children: [],
              },
              {
                text: '新增物件',
                link: '/basics/quick-start/add-object/',
                children: [],
              },
              {
                text: '物件編輯 W E R',
                link: '/basics/quick-start/basic-controls/',
                children: [],
              },
              {
                text: '操作編輯視角',
                link: '/basics/quick-start/view-control/',
                children: [],
              },
              {
                text: '物件組成',
                link: '/basics/quick-start/object-structure/',
                children: [],
              },
              {
                text: '更換材質 (改變顏色)',
                link: '/basics/quick-start/change-color/',
                children: [],
              },
              {
                text: '擺設場景',
                link: '/basics/quick-start/setup-scene/',
                children: [],
              },
              {
                text: '調整主攝影機',
                link: '/basics/quick-start/main-camera/',
                children: [],
              },
              {
                text: '執行遊戲',
                link: '/basics/quick-start/play/',
                children: [],
              },
              {
                text: '添加物理效果',
                link: '/basics/quick-start/physics/',
                children: [],
              },
              {
                text: '控制球體',
                link: '/basics/quick-start/input/',
                children: [],
              },
              {
                text: '碰撞偵測',
                link: '/basics/quick-start/collision/',
                children: [],
              },
              {
                text: '發佈遊戲',
                link: '/basics/quick-start/build-game/',
                children: [],
              },
            ],
          },
          {
            text: '物件結構',
            collapsible: true,
            children: [],
          },
          {
            text: '父子關係',
            collapsible: true,
            children: [],
          },
          {
            text: 'Prefab 物件分身',
            collapsible: true,
            children: [],
          },
          {
            text: 'Script 程式控制',
            collapsible: true,
            children: [],
          },
          {
            text: '移動物件',
            collapsible: true,
            children: [],
          },
          {
            text: '操作輸入',
            collapsible: true,
            children: [],
          },
          {
            text: '插件使用',
            collapsible: true,
            children: [],
          },
          {
            text: '物理系統',
            collapsible: true,
            children: [],
          },
          {
            text: 'UI 與文字',
            collapsible: true,
            children: [],
          },
          {
            text: '動態產生',
            collapsible: true,
            children: [],
          },
          {
            text: '計時器',
            collapsible: true,
            children: [],
          },
          {
            text: 'Gizmos 開發輔助線',
            collapsible: true,
            children: [],
          },
          {
            text: '自動路線',
            collapsible: true,
            children: [],
          },
          {
            text: '資料保存',
            collapsible: true,
            children: [],
          },
          {
            text: '常用插件',
            collapsible: true,
            children: [],
          },
        ],
    '/patterns/': [
          {
            text: '機率',
            link: '',
            children: [],
          },
          {
            text: '委派事件',
            link: '',
            children: [],
          },
          {
            text: '有限狀態機',
            link: '',
            children: [],
          },
        ],
    },
  }),
};
