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
                text: '🎨 改變顏色',
                link: '/basics/quick-start/change-color/',
                children: [],
              },
              {
                text: '擺設遊戲畫面',
                link: '/basics/quick-start/setup-scene/',
                children: [],
              },
              {
                text: '▶️ 執行遊戲',
                link: '/basics/quick-start/play/',
                children: [],
              },
              {
                text: '添加物理效果',
                link: '/basics/quick-start/physics/',
                children: [],
              },
              {
                text: '🎮 控制球體',
                link: '/basics/quick-start/input/',
                children: [],
              },
              {
                text: '💥 碰撞偵測',
                link: '/basics/quick-start/collision/',
                children: [],
              },
              {
                text: '🚀 發佈遊戲',
                link: '/basics/quick-start/build-game/',
                children: [],
              },
            ],
          },
          {
            text: 'Visual Studio Code 設定',
            collapsible: true,
            link: '/basics/code-editor',
            children: [],
          },
          /*{
            text: '物件詳解',
            collapsible: true,
            children: [
              {
                text: '物件基礎',
                link: '/basics/object/basic/',
                children: [],
              },
            ],
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
          },*/
          {
            text: '碰撞',
            collapsible: true,
            children: [
              {
                text: 'Unity 中的碰撞',
                link: '/basics/collide/collide/',
                children: [],
              },
              {
                text: 'Collision',
                link: '/basics/collide/collision/',
                children: [],
              },
              {
                text: 'Trigger',
                link: '/basics/collide/trigger/',
                children: [],
              },
            ],
          },
          {
            text: '場景管理',
            collapsible: true,
            children: [
              {
                text: '場景切換',
                link: '/basics/scene/switch-scene/',
                children: [],
              },
              {
                text: '關卡重新開始',
                link: '/basics/scene/reload-level/',
                children: [],
              },
            ],
          },
          {
            text: '範例：滾球遊戲',
            collapsible: true,
            children: [
              {
                text: '設定場景',
                link: '/basics/rolling-ball/setup-scene/',
                children: [],
              },
              {
                text: '打勾 Trigger',
                link: '/basics/rolling-ball/enable-trigger/',
                children: [],
              },
              {
                text: '增加 Tag',
                link: '/basics/rolling-ball/add-tag/',
                children: [],
              },
              {
                text: '球體控制與碰撞',
                link: '/basics/rolling-ball/ball-control/',
                children: [],
              },
              {
                text: '指定下一關',
                link: '/basics/rolling-ball/next-scene/',
                children: [],
              },
              {
                text: '執行遊戲',
                link: '/basics/rolling-ball/play/',
                children: [],
              },
            ],
          },
          {
            text: '攝影機跟隨',
            collapsible: true,
            children: [
              {
                text: '使用 Script 控制',
                link: '/basics/camera-follow/basic/',
                children: [],
              },
              // {
              //   text: '使用 Cinemachine',
              //   link: '/basics/camera-follow/cinemachine/',
              //   children: [],
              // },
            ],
          },
          /*{
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
            text: 'Gizmos 開發輔助繪圖',
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
          },*/
        ],
    '/patterns/': [
          {
            text: '機率',
            link: 'probability/',
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
