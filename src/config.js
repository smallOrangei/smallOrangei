export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m SmallOrange', //英文标题
    title: '键起代码三万行，BUG通通站两旁', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page1.jpg', // 作者头像
    xinhui: '我叫曹小橙，是一位Java/Rust开发工程师。', // 幸会
    qiuzhi: '后端开发', // 求职意向
    guanyuwo: '愿天下无BUG' // 关于我
  },

  // page3部分
  page3: [{
    icon: 'icon-tubiao-',
    title: 'Java',
    msg: ['JavaSE、JavaEE']
  },{
    icon: 'icon-diannao', // 图标
    title: 'Spring', // 标题
    msg: ['Spring', 'SpringBoot', 'SpringCloudAlibaba'] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: 'Rust',
    msg: ['WebApi', 'GUI']
  },  {
    icon: 'icon-shouji',
    title: '数据库',
    msg: ['关系型数据库','非关系型数据库',]
  }],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2021/6——至今', // 时间
      desc: { // 经历
        title: '公司牛马',
        list: ['考学', 'PMP', '专职后端/全栈开发', '研究学习Rust', '进军财富自由']
      }
    }, {
      date: '2018/9——2021/7',
      desc: {
        title: '河南工学院',
        list: ['计算机组成原理', '计算机网络', '操作系统','数据结构&算法','C语言','Java语言']
      }
    }],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'Vue',
      text: '掌握'
    }, {
      title: 'Actix',
      text: '掌握'
    }, {
      title: '云原生',
      text: '熟悉'
    }, {
      title: '自动化运维',
      text: '掌握'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'Java',
      value: '80%'
    }, {
      title: '数据库',
      value: '70%'
    }, {
      title: '分布式系统架构',
      value: '60%'
    }, {
      title: 'Vue',
      value: '50%'
    }, {
      title: 'Rust',
      value: '35%'
    }]
  },
  // page5部分
  page5: [{
    title: '508工作室',
    content: '晋城职业技术学院508工作室独立站点的维护',
    image: 'box1.png',
    href: 'https://lab508.gitee.io/'
  }, {
    title: '图书管理系统',
    content: 'Vue,NodeJs图书管理系统前后端',
    image: 'box3.jpg',
    href: 'https://gitee.com/wttAndroid/book_admin'
  }, {
    title: '校园约吧',
    content: 'Vue,NodeJs移动端校园项目前后端',
    image: 'box5.jpg',
    href: 'https://gitee.com/wttAndroid/xyy_server'
  }, {
    title: '蘑菇街',
    content: 'Vue蘑菇街商城案例前端',
    image: 'box2.png',
    href: 'https://github.com/wttAndroid/MyShoppingStreet'
  }, {
    title: '个人简历',
    content: 'html,css,jq,bootsrap搭建个人简历网站',
    image: 'box4.png',
    href: ''
  }, {
    title: '二维码生成器',
    content: 'Android二维码生成器',
    image: 'box6.jpeg',
    href: ''
  }],
  // page6部分
  page6: {
    github: 'https://github.com/smallOrangei',
    email: 'Mailto:orangeweni@outlook.com?Subject=邮箱标题&Body=邮箱内容！'
  }
}
