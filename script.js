const experience = document.querySelector(".experience");
const startButton = document.querySelector(".start");
const ritualScene = document.querySelector(".ritual-scene");
const drawButton = document.querySelector(".draw-button");
const fortunePaper = document.querySelector(".fortune-paper");
const stepCount = document.querySelector(".step-count");
const stepTitle = document.querySelector(".ritual-copy h1");
const stepLine = document.querySelector(".step-line");
const resultDownloadButton = document.querySelector(".result-button-download");
const resultHomeButton = document.querySelector(".result-button-home");
const resultMainPaper = document.querySelector(".result-main-paper");
const fortuneInkGrade = document.querySelector(".fortune-grade");
const fortuneInkPoem = document.querySelector(".fortune-poem");
const fortuneInkDetail = document.querySelector(".fortune-detail");
const resultFields = document.querySelectorAll("[data-field]");
const INLINE_FORTUNE_LIBRARY = [
  {
    "id": 1,
    "no": "01",
    "number_label": "第01番",
    "luck": "大吉",
    "theme": "水光开运",
    "oracle": "水光既明，所行皆有清风相随。",
    "direction": "东南有喜",
    "illness": "静养渐安",
    "childbirth": "安稳可期",
    "love": "心意相通",
    "wish": "所愿将成",
    "relocation": "迁入见福",
    "lost_item": "近处可得",
    "business": "财缘渐旺",
    "study": "一举有成",
    "travel": "晴日宜行"
  },
  {
    "id": 2,
    "no": "02",
    "number_label": "第02番",
    "luck": "大吉",
    "theme": "花影逢春",
    "oracle": "花影映水，迟来的好消息正向你靠近。",
    "direction": "向南更吉",
    "illness": "调息则安",
    "childbirth": "母子平安",
    "love": "良缘自至",
    "wish": "贵人助成",
    "relocation": "新居生光",
    "lost_item": "有人送还",
    "business": "利在新客",
    "study": "才思清明",
    "travel": "远行顺遂"
  },
  {
    "id": 3,
    "no": "03",
    "number_label": "第03番",
    "luck": "大吉",
    "theme": "云开月满",
    "oracle": "云开月满，曾经悬着的事会轻轻落定。",
    "direction": "西方得助",
    "illness": "早治早安",
    "childbirth": "喜气相随",
    "love": "旧情亦暖",
    "wish": "终得圆满",
    "relocation": "宜择佳日",
    "lost_item": "箱柜中寻",
    "business": "名利双来",
    "study": "考运上扬",
    "travel": "遇景生欢"
  },
  {
    "id": 4,
    "no": "04",
    "number_label": "第04番",
    "luck": "大吉",
    "theme": "清露入怀",
    "oracle": "清露入怀，你会被温柔而坚定地推向好处。",
    "direction": "东北有缘",
    "illness": "安心休养",
    "childbirth": "喜讯可待",
    "love": "真心可托",
    "wish": "近成无忧",
    "relocation": "移步添喜",
    "lost_item": "灯下可见",
    "business": "合作有利",
    "study": "文运昌明",
    "travel": "同行更吉"
  },
  {
    "id": 5,
    "no": "05",
    "number_label": "第05番",
    "luck": "大吉",
    "theme": "风送莲香",
    "oracle": "风送莲香，不争之处反而最先开花。",
    "direction": "东方大利",
    "illness": "日渐轻快",
    "childbirth": "顺遂安宁",
    "love": "情意渐深",
    "wish": "自然成就",
    "relocation": "可迁可安",
    "lost_item": "回身即见",
    "business": "进财有门",
    "study": "勤则夺魁",
    "travel": "水边见喜"
  },
  {
    "id": 6,
    "no": "06",
    "number_label": "第06番",
    "luck": "大吉",
    "theme": "朝雨初霁",
    "oracle": "朝雨初霁，新的路会比想象中更明亮。",
    "direction": "北方逢贵",
    "illness": "身心回暖",
    "childbirth": "安稳无忧",
    "love": "相守有期",
    "wish": "天时已至",
    "relocation": "换处更旺",
    "lost_item": "问人即得",
    "business": "声名渐起",
    "study": "灵感丰盛",
    "travel": "出门得福"
  },
  {
    "id": 7,
    "no": "07",
    "number_label": "第07番",
    "luck": "吉",
    "theme": "小舟顺流",
    "oracle": "小舟顺流，顺着当下的节奏便会靠岸。",
    "direction": "东南平顺",
    "illness": "勿急渐安",
    "childbirth": "平稳可喜",
    "love": "慢热见真",
    "wish": "稳步可成",
    "relocation": "宜先整理",
    "lost_item": "迟些可寻",
    "business": "守正有利",
    "study": "温习见效",
    "travel": "近行更佳"
  },
  {
    "id": 8,
    "no": "08",
    "number_label": "第08番",
    "luck": "吉",
    "theme": "薄雾见山",
    "oracle": "薄雾未散，方向却已经清楚。",
    "direction": "向东可行",
    "illness": "节养为先",
    "childbirth": "安然待时",
    "love": "坦诚则近",
    "wish": "可望可得",
    "relocation": "择日则吉",
    "lost_item": "旧处有迹",
    "business": "小利渐积",
    "study": "专注有功",
    "travel": "宜轻装行"
  },
  {
    "id": 9,
    "no": "09",
    "number_label": "第09番",
    "luck": "吉",
    "theme": "竹影生凉",
    "oracle": "竹影生凉，安静的坚持会替你挡去浮躁。",
    "direction": "南方有光",
    "illness": "调理见安",
    "childbirth": "顺其自然",
    "love": "温柔相待",
    "wish": "有人相助",
    "relocation": "不急为宜",
    "lost_item": "桌旁细寻",
    "business": "旧客生财",
    "study": "积累成章",
    "travel": "可行勿赶"
  },
  {
    "id": 10,
    "no": "10",
    "number_label": "第10番",
    "luck": "吉",
    "theme": "溪声报喜",
    "oracle": "溪声报喜，小小的回应会带来长久的安心。",
    "direction": "西南见喜",
    "illness": "少劳渐好",
    "childbirth": "喜气渐近",
    "love": "消息将至",
    "wish": "缓缓成形",
    "relocation": "修整后吉",
    "lost_item": "可由友寻",
    "business": "口碑渐开",
    "study": "问师有益",
    "travel": "午后宜行"
  },
  {
    "id": 11,
    "no": "11",
    "number_label": "第11番",
    "luck": "吉",
    "theme": "月白风清",
    "oracle": "月白风清，心定之后，事物自会归位。",
    "direction": "北方清吉",
    "illness": "心宽则安",
    "childbirth": "平安为福",
    "love": "相知更深",
    "wish": "守候有果",
    "relocation": "宜小改动",
    "lost_item": "不远即在",
    "business": "少进多稳",
    "study": "静读有得",
    "travel": "平顺无碍"
  },
  {
    "id": 12,
    "no": "12",
    "number_label": "第12番",
    "luck": "吉",
    "theme": "花枝向阳",
    "oracle": "花枝向阳，被看见的时刻正在靠近。",
    "direction": "东南较佳",
    "illness": "循序康复",
    "childbirth": "有喜可期",
    "love": "缘分转暖",
    "wish": "得人提携",
    "relocation": "向明处吉",
    "lost_item": "晨间可见",
    "business": "新意生利",
    "study": "表达有彩",
    "travel": "宜见朋友"
  },
  {
    "id": 13,
    "no": "13",
    "number_label": "第13番",
    "luck": "吉",
    "theme": "清泉洗尘",
    "oracle": "清泉洗尘，放下旧念，轻处即是通处。",
    "direction": "西北可守",
    "illness": "清淡养身",
    "childbirth": "静待佳音",
    "love": "误会可解",
    "wish": "旧愿重启",
    "relocation": "宜先观望",
    "lost_item": "整理即出",
    "business": "稳中有进",
    "study": "复盘有益",
    "travel": "不宜贪多"
  },
  {
    "id": 14,
    "no": "14",
    "number_label": "第14番",
    "luck": "吉",
    "theme": "灯火可亲",
    "oracle": "灯火可亲，平凡日子里会落下一点好运。",
    "direction": "近处有福",
    "illness": "睡足则安",
    "childbirth": "顺遂为吉",
    "love": "日久生情",
    "wish": "小成可喜",
    "relocation": "近水处吉",
    "lost_item": "家中可寻",
    "business": "细账有利",
    "study": "基础稳固",
    "travel": "短途甚宜"
  },
  {
    "id": 15,
    "no": "15",
    "number_label": "第15番",
    "luck": "中吉",
    "theme": "雨后新枝",
    "oracle": "雨后新枝，眼下的等待正在长出新意。",
    "direction": "向南较顺",
    "illness": "耐心调养",
    "childbirth": "安静待时",
    "love": "宜多倾听",
    "wish": "半成在望",
    "relocation": "秋后更佳",
    "lost_item": "迟日可见",
    "business": "先稳后进",
    "study": "日课不辍",
    "travel": "择晴再行"
  },
  {
    "id": 16,
    "no": "16",
    "number_label": "第16番",
    "luck": "中吉",
    "theme": "云水相逢",
    "oracle": "云水相逢，有些答案需要绕一段温柔的路。",
    "direction": "东方可试",
    "illness": "勿忧自缓",
    "childbirth": "谨慎为安",
    "love": "慢谈更好",
    "wish": "有阻后通",
    "relocation": "先问旧事",
    "lost_item": "向北寻迹",
    "business": "合作需明",
    "study": "重在理解",
    "travel": "结伴较吉"
  },
  {
    "id": 17,
    "no": "17",
    "number_label": "第17番",
    "luck": "中吉",
    "theme": "松间微光",
    "oracle": "松间微光，不显眼的机会值得认真对待。",
    "direction": "东北可行",
    "illness": "早睡见安",
    "childbirth": "平稳为先",
    "love": "勿急定论",
    "wish": "小阻可过",
    "relocation": "可缓一步",
    "lost_item": "夹层中寻",
    "business": "谨慎开单",
    "study": "错题有益",
    "travel": "近郊更宜"
  },
  {
    "id": 18,
    "no": "18",
    "number_label": "第18番",
    "luck": "中吉",
    "theme": "水纹渐圆",
    "oracle": "水纹渐圆，事情会以不声张的方式变好。",
    "direction": "西方平吉",
    "illness": "少思则安",
    "childbirth": "听从安排",
    "love": "心结可解",
    "wish": "再等一时",
    "relocation": "不宜仓促",
    "lost_item": "问长辈知",
    "business": "守价有利",
    "study": "温故知新",
    "travel": "行程宜宽"
  },
  {
    "id": 19,
    "no": "19",
    "number_label": "第19番",
    "luck": "中吉",
    "theme": "白露知秋",
    "oracle": "白露知秋，懂得收束，反而得到更多。",
    "direction": "西南可守",
    "illness": "饮食宜清",
    "childbirth": "平安渐近",
    "love": "真意需明",
    "wish": "先减后成",
    "relocation": "简化更吉",
    "lost_item": "旧袋可寻",
    "business": "少投稳收",
    "study": "细节得分",
    "travel": "宜慢不宜满"
  },
  {
    "id": 20,
    "no": "20",
    "number_label": "第20番",
    "luck": "中吉",
    "theme": "檐雨轻敲",
    "oracle": "檐雨轻敲，别怕慢，慢处有回声。",
    "direction": "北方可待",
    "illness": "静养勿劳",
    "childbirth": "耐心可安",
    "love": "消息稍迟",
    "wish": "晚成亦好",
    "relocation": "待价而动",
    "lost_item": "傍晚可见",
    "business": "账目需清",
    "study": "背诵有功",
    "travel": "晚些更顺"
  },
  {
    "id": 21,
    "no": "21",
    "number_label": "第21番",
    "luck": "中吉",
    "theme": "柳色初匀",
    "oracle": "柳色初匀，新关系与新计划都在试着舒展。",
    "direction": "东南可喜",
    "illness": "舒展筋骨",
    "childbirth": "顺势为安",
    "love": "新缘可近",
    "wish": "初成未满",
    "relocation": "小换可宜",
    "lost_item": "路旁有线",
    "business": "试水可行",
    "study": "开题有利",
    "travel": "春日更佳"
  },
  {
    "id": 22,
    "no": "22",
    "number_label": "第22番",
    "luck": "中吉",
    "theme": "镜水含星",
    "oracle": "镜水含星，你已有答案，只需把心放清。",
    "direction": "向西可静",
    "illness": "心静身安",
    "childbirth": "从容待喜",
    "love": "别猜多问",
    "wish": "明心则成",
    "relocation": "宜选安处",
    "lost_item": "暗处可寻",
    "business": "守信得利",
    "study": "思辨见长",
    "travel": "夜行勿急"
  },
  {
    "id": 23,
    "no": "23",
    "number_label": "第23番",
    "luck": "小吉",
    "theme": "花苞未放",
    "oracle": "花苞未放，今日的小耐心是明日的好花。",
    "direction": "南方小吉",
    "illness": "慢养为宜",
    "childbirth": "稳妥待时",
    "love": "先做朋友",
    "wish": "小愿先成",
    "relocation": "暂不大动",
    "lost_item": "细找可得",
    "business": "小利可守",
    "study": "每日一进",
    "travel": "短行无妨"
  },
  {
    "id": 24,
    "no": "24",
    "number_label": "第24番",
    "luck": "小吉",
    "theme": "浅水行舟",
    "oracle": "浅水行舟，轻一点走，便不会惊动好事。",
    "direction": "东方尚可",
    "illness": "少劳为要",
    "childbirth": "安心观察",
    "love": "温言有益",
    "wish": "宜先小求",
    "relocation": "修补为佳",
    "lost_item": "不急可现",
    "business": "勿贪大利",
    "study": "基础为先",
    "travel": "宜近不远"
  },
  {
    "id": 25,
    "no": "25",
    "number_label": "第25番",
    "luck": "小吉",
    "theme": "风停叶稳",
    "oracle": "风停叶稳，先把心安住，运气才会落座。",
    "direction": "西方可安",
    "illness": "静心养息",
    "childbirth": "平稳无忧",
    "love": "缓和关系",
    "wish": "改日更宜",
    "relocation": "旧处亦安",
    "lost_item": "柜中可见",
    "business": "守成可吉",
    "study": "少量多次",
    "travel": "天气为准"
  },
  {
    "id": 26,
    "no": "26",
    "number_label": "第26番",
    "luck": "小吉",
    "theme": "晨光一线",
    "oracle": "晨光一线，不必急着盛大，亮起来就很好。",
    "direction": "北方小利",
    "illness": "按时休养",
    "childbirth": "顺问医嘱",
    "love": "先解误会",
    "wish": "小步靠近",
    "relocation": "先看三次",
    "lost_item": "纸下有迹",
    "business": "谨防漏账",
    "study": "勤补短处",
    "travel": "宜早回程"
  },
  {
    "id": 27,
    "no": "27",
    "number_label": "第27番",
    "luck": "小吉",
    "theme": "雨丝织梦",
    "oracle": "雨丝织梦，柔软地坚持，会比强求更有力量。",
    "direction": "东南可行",
    "illness": "勿熬夜安",
    "childbirth": "平顺待产",
    "love": "慢慢升温",
    "wish": "勿催自来",
    "relocation": "小修更吉",
    "lost_item": "湿处细寻",
    "business": "细水长流",
    "study": "笔记有用",
    "travel": "带伞则吉"
  },
  {
    "id": 28,
    "no": "28",
    "number_label": "第28番",
    "luck": "小吉",
    "theme": "檐下听风",
    "oracle": "檐下听风，暂留一步，是为了看清更好的路。",
    "direction": "东北宜守",
    "illness": "温养见效",
    "childbirth": "谨慎则安",
    "love": "多给时间",
    "wish": "暂缓不失",
    "relocation": "宜再比较",
    "lost_item": "问家人知",
    "business": "合同细看",
    "study": "审题为重",
    "travel": "勿临时改"
  },
  {
    "id": 29,
    "no": "29",
    "number_label": "第29番",
    "luck": "小吉",
    "theme": "石上青苔",
    "oracle": "石上青苔，慢慢生长的东西最能长久。",
    "direction": "西南小吉",
    "illness": "旧疾留意",
    "childbirth": "安心为上",
    "love": "旧缘可修",
    "wish": "积累后成",
    "relocation": "守旧较安",
    "lost_item": "低处可寻",
    "business": "小单成利",
    "study": "稳扎稳打",
    "travel": "熟路更佳"
  },
  {
    "id": 30,
    "no": "30",
    "number_label": "第30番",
    "luck": "小吉",
    "theme": "半窗微明",
    "oracle": "半窗微明，只要留一扇窗，好运就会进来。",
    "direction": "近南可吉",
    "illness": "调息见缓",
    "childbirth": "安稳待讯",
    "love": "先暖自己",
    "wish": "有望未满",
    "relocation": "先清旧物",
    "lost_item": "角落可见",
    "business": "慢谈可成",
    "study": "请教得益",
    "travel": "少走弯路"
  },
  {
    "id": 31,
    "no": "31",
    "number_label": "第31番",
    "luck": "末吉",
    "theme": "冬芽藏春",
    "oracle": "冬芽藏春，眼下不显，后来会有温柔回报。",
    "direction": "向东待吉",
    "illness": "缓慢见安",
    "childbirth": "耐心守候",
    "love": "勿急表白",
    "wish": "后日可成",
    "relocation": "暂缓为宜",
    "lost_item": "久后自现",
    "business": "先守后开",
    "study": "补基为要",
    "travel": "改期更稳"
  },
  {
    "id": 32,
    "no": "32",
    "number_label": "第32番",
    "luck": "末吉",
    "theme": "远山未晴",
    "oracle": "远山未晴，雾会散，只是还需要一点时间。",
    "direction": "北方宜静",
    "illness": "细养勿躁",
    "childbirth": "谨慎安心",
    "love": "心意未明",
    "wish": "先修其因",
    "relocation": "不宜急迁",
    "lost_item": "旧处再寻",
    "business": "勿冒大险",
    "study": "慢读有成",
    "travel": "宜延期行"
  },
  {
    "id": 33,
    "no": "33",
    "number_label": "第33番",
    "luck": "末吉",
    "theme": "潮声稍远",
    "oracle": "潮声稍远，别追逐回声，先照顾好自己。",
    "direction": "西方宜缓",
    "illness": "休息为先",
    "childbirth": "安静待诊",
    "love": "少言多察",
    "wish": "暂未圆满",
    "relocation": "等待消息",
    "lost_item": "或在别处",
    "business": "收支谨慎",
    "study": "勿临时抱",
    "travel": "少行少忧"
  },
  {
    "id": 34,
    "no": "34",
    "number_label": "第34番",
    "luck": "末吉",
    "theme": "纸灯微温",
    "oracle": "纸灯微温，微小的光也能陪你走过长夜。",
    "direction": "南方稍吉",
    "illness": "求医则安",
    "childbirth": "谨慎可稳",
    "love": "先清心绪",
    "wish": "迟来无妨",
    "relocation": "修旧待新",
    "lost_item": "问后可得",
    "business": "小心契约",
    "study": "稳住心神",
    "travel": "同行为宜"
  },
  {
    "id": 35,
    "no": "35",
    "number_label": "第35番",
    "luck": "末吉",
    "theme": "苔径回春",
    "oracle": "苔径回春，绕远的路也会通向春天。",
    "direction": "东南缓吉",
    "illness": "渐复勿急",
    "childbirth": "平稳等待",
    "love": "旧结待解",
    "wish": "多行善缘",
    "relocation": "晚些更好",
    "lost_item": "春后可寻",
    "business": "先清库存",
    "study": "从头整理",
    "travel": "短程可安"
  },
  {
    "id": 36,
    "no": "36",
    "number_label": "第36番",
    "luck": "末吉",
    "theme": "水底月影",
    "oracle": "水底月影，看似未得，其实已经在心里成形。",
    "direction": "东北可待",
    "illness": "静养问医",
    "childbirth": "从容守护",
    "love": "距离需暖",
    "wish": "慢成亦吉",
    "relocation": "先稳财务",
    "lost_item": "勿强求寻",
    "business": "保守为吉",
    "study": "重修旧章",
    "travel": "待晴再去"
  }
];

let fortuneLibrary = INLINE_FORTUNE_LIBRARY;
let currentFortune = fortuneLibrary[0];

let revealStageTimer;
let revealInkTimer;
let resultInkTimer;

loadFortuneLibrary();
renderFortune(currentFortune);

startButton.addEventListener("click", () => {
  setState("draw");
});

drawButton.addEventListener("click", drawPaper);
resultDownloadButton.addEventListener("click", downloadResultPaper);
resultHomeButton.addEventListener("click", resetToHome);
fortunePaper.addEventListener("click", () => {
  if (experience.classList.contains("is-revealed")) {
    showResult();
    return;
  }

  if (!experience.classList.contains("is-drawn")) {
    drawPaper();
  }
});

function drawPaper() {
  window.clearTimeout(revealStageTimer);
  window.clearTimeout(revealInkTimer);

  currentFortune = pickFortune();
  renderFortune(currentFortune);

  experience.classList.remove("is-ready-for-reveal", "is-revealed");
  experience.classList.add("is-drawn");
  drawButton.disabled = true;

  setState("water");
  stepCount.textContent = "02 / 04";
  stepTitle.textContent = "入水";
  stepLine.textContent = "签纸正缓缓飘向水面";

  revealStageTimer = window.setTimeout(() => {
    stepCount.textContent = "03 / 04";
    stepTitle.textContent = "显影";
    stepLine.textContent = "签文正在水面上慢慢浮现";
    experience.classList.add("is-ready-for-reveal");
  }, 3000);

  revealInkTimer = window.setTimeout(() => {
    experience.classList.add("is-revealed");
  }, 3600);
}

async function loadFortuneLibrary() {
  try {
    const response = await fetch("mizu_omikuji_library.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Unable to load fortune library: ${response.status}`);
    }

    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      fortuneLibrary = data;
      if (!currentFortune) {
        currentFortune = fortuneLibrary[0];
        renderFortune(currentFortune);
      }
    }
  } catch (error) {
    fortuneLibrary = INLINE_FORTUNE_LIBRARY;
  }
}

function pickFortune() {
  const source = fortuneLibrary.length ? fortuneLibrary : INLINE_FORTUNE_LIBRARY;
  return source[Math.floor(Math.random() * source.length)];
}

function renderFortune(fortune) {
  if (!fortune) {
    return;
  }

  fortuneInkGrade.textContent = fortune.luck || "吉";
  fortuneInkPoem.textContent = "";
  fortuneInkDetail.textContent = "";

  resultFields.forEach((field) => {
    const key = field.dataset.field;
    const value = fortune[key] || "";
    field.textContent = value;
    field.dataset.ink = value;
  });
}

function setState(state) {
  experience.dataset.state = state;
  ritualScene.setAttribute("aria-hidden", state === "home" || state === "result");
  document
    .querySelector(".result-screen")
    .setAttribute("aria-hidden", state !== "result");
}

function showResult() {
  window.clearTimeout(revealStageTimer);
  window.clearTimeout(revealInkTimer);
  window.clearTimeout(resultInkTimer);
  experience.classList.remove("is-result-ink-visible");
  experience.classList.add("is-result");
  setState("result");
  resultInkTimer = window.setTimeout(() => {
    experience.classList.add("is-result-ink-visible");
  }, 300);
}

function resetToHome() {
  window.clearTimeout(revealStageTimer);
  window.clearTimeout(revealInkTimer);
  window.clearTimeout(resultInkTimer);
  experience.classList.remove(
    "is-drawn",
    "is-ready-for-reveal",
    "is-revealed",
    "is-result",
    "is-result-ink-visible",
  );
  drawButton.disabled = false;
  stepCount.textContent = "01 / 04";
  stepTitle.textContent = "取签";
  stepLine.textContent = "抽取一张空白签纸";
  setState("home");
}

async function downloadResultPaper() {
  if (!window.html2canvas) {
    console.warn("html2canvas failed to load; result image download is unavailable.");
    return;
  }

  resultMainPaper.classList.add("is-exporting");

  try {
    if (document.fonts) {
      await document.fonts.ready;
    }

    const canvas = await window.html2canvas(resultMainPaper, {
      backgroundColor: null,
      scale: 3,
      useCORS: true,
    });
    const link = document.createElement("a");
    link.download = "mizu-omikuji.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.warn("Failed to download result image.", error);
  } finally {
    resultMainPaper.classList.remove("is-exporting");
  }
}
