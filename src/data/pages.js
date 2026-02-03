export const pages = [
  {
    id: 1,
    type: 'cover',
    background: '/assets/images/img_p0_1.png',
    content: {
      top: '鲸 湾 探 索\n| Whalebay Expeditions |',
      title: '帆向格陵兰',
      side: 'SAILING GREENLAND',
      bottomRight: [
        '2026 夏',
        '全船八席・限定四期'
      ],
      bottomLeft: 'GREENLAND 2026'
    }
  },
  {
    id: 2,
    type: 'full-image',
    background: '/assets/images/img_p1_1.png',
    overlay: {
      text: '*格陵兰语: Sermeq Kujalleq',
      position: 'bottom-left' // Custom positioning needed
    }
  },
  {
    id: 3,
    type: 'diary',
    images: {
      top: '/assets/images/img_p2_1.png',
      signature: '/assets/images/img_p2_2.png'
    },
    text: {
      header: '鲸湾探索 [Whalebay Expeditions ]',
      date: '航海日记 | 2024-7-12',
      location: '迪斯科湾 夜',
      body: [
        '艾奇冰川(Eqi)历来繁忙。',
        '其实它边上那些小峡湾，也有冰川，只是少有人至罢了。',
        '*',
        '比如面前这个南冰川，我觉得也挺美的，完全不输。',
        '睡了。',
        '半夜，船轻轻地晃啊晃。迷迷糊糊的，像是梦。',
        '职业警觉，还是起了身——水平如镜，无风无浪。',
        '“果然是梦。”',
        '这峡湾窄得可以游上岸，哪会有什么晃呢?',
        '正想着，船晃了起来——原来是冰川在崩裂。',
        '原来冰崩不总是白日喧闹里哗啦啦的一大片。',
        '有时，它悄然发生，只留给夜泊者一人听见。',
        '月牙儿碎在海面，仿佛狡黠地眨了眼。'
      ],
      author: '海宁',
      role: '鲸湾探索联合创始人\n极地向导'
    },
    pageNumber: 1
  },
  {
    id: 4,
    type: 'intro',
    images: {
      main: '/assets/images/img_p3_1.png', // Check this mapping, might be p3_1
    },
    text: {
      header: '扬帆格陵兰',
      subHeader: 'Why Sailing in Greenland ?',
      quote: '真正的探险，\n从不按计划发生。',
      body: [
        '当世界越来越容易抵达，',
        '纯粹的荒野反而成了最奢侈的礼物。',
        '这不是一次巡航。',
        '这是一场独家订制的家族远征，',
        '一曲挚友共赴的静默史诗。'
      ],
      caption: '唯有风知道航路'
    },
    pageNumber: 2
  },
  {
    id: 5,
    type: 'intro',
    images: {
      main: '/assets/images/img_p4_1.png', 
    },
    text: {
      header: '| 为什么要乘帆船航行?',
      subHeader: 'Because some places refuse to be "visited"', // Inferred/OCR
      quote: '', // No quote prominent
      body: [
        '因为有些地方，拒绝被“参观”。',
        '百人游轮只能远观冰川的轮廓，我们的帆船，吃水刚过三米，可悄然滑入冰山环抱的秘境港湾——那里没有码头，没有游客，只有浮冰轻叩船身的清响和午夜阳光下整片峡湾的寂静。',
        '在船上，行程不由日历决定，而由风向、冰情与好奇心书写。今日或许追踪座头鲸的踪迹；明天可能登临无名小岛，在因纽特猎人曾驻足的岩壁下野餐。'
      ],
      caption: '帆船在浮冰中前进'
    },
    pageNumber: 3
  },
  {
    id: 6,
    type: 'vessel-specs',
    text: {
      header: '我们的探索之船',
      subHeader: 'Why Sail With Us ?',
      body: [
        '我们的船，她出生在德国海滨的造船厂，钢壳厚实，专为高纬度风暴与浮冰而造。',
        '2013年，她更名为“风之爱"，转型为人道主义医疗船。驶向巴布亚新几内亚的离岛。她的船舱里，见证了数千例白内障手术，让无数岛民重新看见世界。',
        '为了深入浅水珊瑚礁区，她刻意保持轻盈吃水；为了支撑偏远地区的巡诊，她拥有超常的淡水与电力冗余。',
        '这些为“救助”而生的设计，如今成了“探索”的最大优势。',
        '2022年，她告别医疗使命，白帆换红，北上格陵兰。那双曾运送光明的钢骨，如今载着旅人，驶入峡湾深处的寂静。她不是新船，但正因走过风暴、承载过生命，才懂得如何温柔地陪伴一段私属远征。'
      ]
    },
    specs: [
      { label: '建造地', value: '德国' },
      { label: '船体材质', value: '加厚钢板', desc: '可抗小型浮冰' },
      { label: '总吨位', value: '168 GT' },
      { label: '排水量', value: '约 220 吨', desc: '海上稳定的移动堡垒' },
      { label: '吃水深度', value: '3.5 米', desc: '可航行于峡湾与河口' },
      { label: '帆装类型', value: '双桅纵帆', desc: '侧风效率高，极地操控灵活' },
      { label: '认证', value: '北极航行资质 + 国际海事安全证书' },
      { label: '系统', value: '强大的淡水生成 + 电力冗余系统', desc: '支持长时间无补给航行' }
    ],
    pageNumber: 4
  },
  {
    id: 7,
    type: 'full-image',
    background: '/assets/images/img_p6_1.png',
    overlay: {
        text: '风之爱\n一艘被风与爱淬炼过的船',
        position: 'bottom-right'
    },
    pageNumber: 5
  },
  {
    id: 8,
    type: 'moments',
    images: {
        main: '/assets/images/img_p7_1.png'
    },
    text: {
        header: '格陵兰时刻',
        subHeader: 'Some Moments in Greenland',
        sectionTitle: '午夜阳光',
        sectionBody: '5月下旬至8月，格陵兰高纬度地区将没有黑夜。太阳贴着地平线滑行，仿佛拥有一个无尽的黄昏。',
        highlight: '凌晨三点，当海面泛起柔光——时间，在这里失去了刻度。',
        body: [
            '西格陵兰的迪斯科湾，一颗“荒野皇冠上的钻石”。',
            '这里散落着质朴的极地渔村，有着北极地区最为活跃的冰川，融水滋养出了独特的海洋生态。',
            '在夏季，多种鲸群齐聚冰海，自在游弋；极昼的午夜，光影将万千世界晕染成梦幻奇景。',
            '这片土地没有过度商业化的痕迹，更没有拥挤的观光人群，是真正的“人迹罕至却美到极致”的探险胜地。'
        ]
    },
    pageNumber: 6
  },
  {
    id: 9,
    type: 'double-feature',
    top: {
        title: '冰海奇景',
        desc: '极昼的柔光中，海面上的蓝冰山，凝结着远古的呼吸。每一座冰山都独一无二，每一刻也都在消融。',
        image: '/assets/images/img_p8_1.png'
    },
    bottom: {
        title: '冰川崩解',
        body: [
            '伊卢利萨特冰川，每日向海推进四十米——相当于一座十层楼高的冰墙，悄然滑入迪斯科湾。每年，约三十五立方公里的冰体归还海洋，声如雷鸣，或寂然无声。',
            '这不是毁灭，而是循环；是地球写给海洋的，一封永不停歇的信。'
        ],
        image: '/assets/images/img_p8_2.png'
    },
    pageNumber: 7
  },
  {
    id: 10,
    type: 'whale-watching',
    text: {
        title: '鲸群巡游',
        body: [
            '七月的迪斯科湾，是鲸的夏宫。',
            '座头鲸喷出斜斜的气柱，露脊鲸顶着白色瘤冠浮出水面，抹香鲸沉潜前，尾鳍高高扬起，如一声响亮地告别。',
            '如果运气爆棚，甚至有机会遇到虎鲸'
        ]
    },
    images: [
        { src: '/assets/images/img_p9_2.png', caption: '鲸鱼露出背鳍' },
        { src: '/assets/images/img_p9_3.png', caption: '航拍座头鲸' }
    ],
    pageNumber: 8
  },
  {
    id: 11,
    type: 'diary',
    images: {
        top: '/assets/images/img_p10_1.png',
        signature: '/assets/images/img_p10_2.png' // Or similar signature image
    },
    text: {
        header: '鲸湾探索 [Whalebay Expeditions]',
        date: '航海日记 | 2016-7-25',
        location: '阿塔湾 晴',
        body: [
            '观鲸，是一门需要学习的课程。',
            '你看到它喷出的汽柱，听到巨大的呼吸声，然后是寂静，仿佛失去了。',
            '你等，一分钟、两分钟、三分钟……',
            '在浩瀚无垠的海面，追寻波浪和鸟群的蛛丝马迹，全心全意地守候下一次相遇的可能。',
            '然后又是巨大的一声呼吸。你的心脏也随之一跳。',
            '然后又是寂静。又是等……',
            '然后你慢慢习惯这个节奏。然后你开始看出它在睡觉、在巡游、在捕食、在你周围欢快地玩耍起来。',
            '这便是两个不同物种，相识的伊始。'
        ],
        author: '雪霏',
        role: '鲸湾探索联合创始人\n极地向导'
    },
    pageNumber: 9
  },
  {
    id: 12,
    type: 'image-grid',
    header: '因纽特村落',
    body: [
        '走进冰海之岸的渔村，体验原住民与极地共生的生活方式。',
        '在世界强权的喧嚣之外，仍有人守着自己的日子，遵循着传承千年、贴近自然的生存智慧。'
    ],
    images: [
        { src: '/assets/images/img_p11_1.png', caption: '当地的年轻人' },
        { src: '/assets/images/img_p11_2.png', caption: '格陵兰特色浓汤' },
        { src: '/assets/images/img_p11_3.png', caption: '制作格陵兰美食' }
    ],
    pageNumber: 10
  },
  {
    id: 13,
    type: 'double-feature', // Using double feature for simplicity or customize
    top: {
        title: '苔原的生灵',
        desc: '七月，苔原迎来短暂盛放。北极罂粟、紫虎耳草、羊胡子草……在融雪浸润的土地上，悄然铺展。',
        image: '/assets/images/img_p12_1.png'
    },
    bottom: {
        title: '浆果的滋味',
        body: [
            '岩高兰果实的滋味，是兑了三分之一水的青苹果。',
            '在冰川、鲸群、荒野之外，',
            '我们想用一颗微酸的浆果，让你相信：',
            '“格陵兰，是可以用五感活着的地方。”'
        ],
        image: '/assets/images/img_p12_2.png' // Berry image
    },
    pageNumber: 11
  },
  {
    id: 14,
    type: 'feature-grid',
    header: '这，是否是您一直心之所向的旅程?',
    subHeader: 'Designed for the discerning few',
    heroImage: '/assets/images/img_p13_1.png', // Family photo
    features: [
        { title: '家庭出游', desc: '两三个家庭一起邀约，在遥远的极地，给孩子们一场没有 Wi-Fi 却充满星光的暑假。', image: '/assets/images/img_p13_2.png' },
        { title: '青少年夏令营', desc: '', image: '/assets/images/img_p13_3.png' },
        { title: '生态研学', desc: '', image: '/assets/images/img_p13_4.png' }
    ],
    pageNumber: 12
  },
  {
    id: 15,
    type: 'charter-info',
    title: '全船仅 8-12 席\n全员包船定制',
    subTitle: '',
    heroImage: '/assets/images/img_p14_1.png',
    intro: [
        '有些旅程，不该被分割',
        '这艘船，只为“一起出发的人”而存在'
    ],
    sections: [
        { title: '好友携行', desc: '几位相识多载的好友，一起约定在世界的尽头喝一杯威士忌，看午夜的太阳沉入冰海。', image: '/assets/images/img_p14_3.png' },
        { title: '团队探险', desc: '一支追求极致体验的小型团队，以冰海和荒野为舞台，共创一段不可复制的美好记忆。', image: '/assets/images/img_p14_4.png' }
    ],
    pageNumber: 13
  },
  {
    id: 16,
    type: 'diary',
    images: {
        top: '/assets/images/img_p15_1.png',
        signature: '/assets/images/img_p15_2.png' // Snowflake signature? Or generic
    },
    text: {
        header: '航海日记 | 2025-9-29',
        date: '米古平原 小雪转晴',
        location: '',
        body: [
            '一队朋友定了婚船。',
            '为了在冰川下拍一张特别的照片，我从国内扛来一朵一米八的巨型玫瑰。',
            '把它蜷在登山包里，露出花头来，跋涉过几座小峰、几条小河，拿给他们做道具。',
            '在北极背一朵不合时宜的玫瑰花，穿越冰原，有点儿行为艺术。',
            '但他们玩得很开心，玫瑰花也真的很上相。',
            '十几年的硬核野外，这一瞬间的感受，还是新奇的。',
            '——很可爱。'
        ],
        author: '雪霏',
        role: '鲸湾探索联合创始人\n极地向导'
    },
    pageNumber: 14
  },
  {
    id: 17,
    type: 'full-image',
    background: '/assets/images/img_p16_1.png',
    overlay: {
        text: '极地体验\nThe Experience',
        position: 'bottom-right'
    },
    pageNumber: 15
  },
  {
    id: 18,
    type: 'activity-grid',
    title: '探险活动',
    subTitle: 'Expeditions',
    activities: [
        { name: '山野徒步', image: '/assets/images/img_p17_1.png' },
        { name: '极地摄影', image: '/assets/images/img_p17_2.png' },
        { name: '冰川探险', image: '/assets/images/img_p17_3.png' }
        // Note: Page 18 has 3 images. Grid fits 2 or 4. Layout might need tweak or just show 3.
        // Or assume 4th is from next page logic? No, next page is Custom Activities.
        // Let's add a placeholder or adjust layout logic if needed.
    ],
    pageNumber: 16
  },
  {
    id: 19,
    type: 'activity-grid',
    title: '可选定制活动',
    subTitle: 'Custom Activities',
    customList: [
      '皮划艇',
      '露营',
      '冰潜',
      '射击'
    ],
    activities: [
        { name: '无人机观鲸', image: '/assets/images/img_p18_1.png' },
        { name: '帆船驾驶', image: '/assets/images/img_p18_2.png' },
        { name: '冲锋舟登陆', image: '/assets/images/img_p18_3.png' },
        { name: '皮划艇', image: '/assets/images/img_p18_4.png' },
        { name: '路亚海钓', image: '/assets/images/img_p18_5.png' }
    ],
    pageNumber: 17
  },
  {
    id: 20,
    type: 'team-philosophy',
    header: '我们的团队',
    subHeader: 'Our Team',
    heroImage: '/assets/images/img_p19_1.png', // Ship aerial
    quote: '我们不做“服务”，只做“共历”',
    body: [
        '我们的船长熟悉每一道峡湾的暗流，向导能识别某只座头鲸和她的幼崽。',
        '外籍帆船厨师深谙当地的极地风味，专属的中餐主厨更懂得熨帖你的中国胃。',
        '我们的所有航行都严格遵循丹麦海事安全规范，冲锋舟、救生装备、户外系统 一应俱全。',
        '但最坚固的保障，是团队十几年极地经验沉淀出的直觉——何时该前进，何时该等待，何时该关掉引擎，让风说话。',
        '我们深知，帆船已是北极最温柔的抵达方式，因此更以敬畏之心，积极与当地社区合作，不留痕迹，只留故事。'
    ],
    sideImage: '/assets/images/img_p19_2.png',
    sideCaption: '帆船驾驶舱',
    pageNumber: 18
  },
  {
    id: 21,
    type: 'team-bios',
    stats: [
        '接近 1:1 的人员配比',
        '只为 8-12 位旅人安静护航',
        '- 当地船务组',
        '- 国际化中文探险团队',
        '- 中外双主厨'
    ],
    portholeImage: '/assets/images/img_p20_1.png', // Porthole
    zodiacImage: '/assets/images/img_p20_4.png',   // Zodiac
    members: [
        {
            name: '姚雪霏',
            title: '| 牛津大学动物生态学博士',
            desc: [
                '20余年野外科研经验，项目遍及青藏高原、帕米尔、北极圈',
                '50+ 趟南极探险 / 3 年常驻北极，野生动物向导、冲锋舟驾驶员、急救员',
                '译著有《植物大发现》《荒野守望》《寂静的石头》《聆听冰川》等',
                'Whalebay Expeditions 联合创始人'
            ],
            image: '/assets/images/img_p20_6.png'
        },
        {
            name: '王海宁',
            title: '| 中国南极中山站越冬队员',
            desc: [
                '2004-2006 年驻守南极中山站，从事极光观测、冰芯钻取、野外搜救',
                '国家海洋局“优秀南极考察队员”',
                '2016 年起专注极地探险，足迹遍及南北极点、格陵兰、斯瓦尔巴',
                '中国极地向导联盟 (CPGA) 发起人',
                'Whalebay Expeditions 联合创始人'
            ],
            image: '/assets/images/img_p20_5.png'
        }
    ],
    pageNumber: 19
  },
  {
    id: 22,
    type: 'itinerary',
    header: '参考行程',
    subHeader: 'Itinerary Overview',
    days: [
        { day: '1', loc: '伊卢利萨特', desc: '初入世界遗产冰峡湾，金色浮冰环绕\n抵达·登船・首夜静泊' },
        { day: '2', loc: '北上・鲸迹村落', desc: '在 29 人的因纽特村，听苔原与海的故事\n寻鲸・登陆・午夜锚泊' },
        { day: '3', loc: '深入・艾奇冰川', desc: '贴近千米冰墙，听冰崩如雷或寂然\n冰川・生态・登高极目' },
        { day: '4', loc: '隐秘峡湾', desc: '穿越仅容一船的冰峡，探访隔绝村落\n秘境・浮冰・夜访人家' },
        { day: '5', loc: '火山海岸', desc: '在玄武岩海角，寻渡鸦巢与古瞭望所\n地质・足球・社区互动' },
        { day: '6', loc: '返程・告别', desc: '最后一次寻鲸，满载故事归港\n回望・晚宴・整理行囊' },
        { day: '7', loc: '离船', desc: '清晨告别，飞向日常，心留极地' }
    ],
    images: [
        { src: '/assets/images/img_p21_1.png' }, // Town
        { src: '/assets/images/img_p21_2.png' }  // Ice
    ],
    pageNumber: 20
  },
  {
    id: 23,
    type: 'full-image', // Map page
    background: '/assets/images/img_p22_1.png',
    pageNumber: 21
  },
  {
    id: 24,
    type: 'back-cover',
    image: '/assets/images/img_p23_2.png', // Or img_p23_3 depending on slicing
    pageNumber: ''
  }
];

