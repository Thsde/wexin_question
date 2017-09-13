//index.js
//获取应用实例
var app = getApp()
var answers = ['唐伯虎', '6', '2', '贾迎春', '李纨', '秦可卿', '李纨', '3', '14', '秦可卿', '贾惜春', '7', '薛宝钗', '下平七阳', '粘屏聊以慰重阳', '刘姥姥', '携蝗大嚼图', '秋爽斋', '贾母', '荣禧堂'];
var count = 20; //number of questions

Page({
  data: {
    array: [{
      question: "贾宝玉在秦可卿卧室见到的《海棠春睡图》是谁画的？",
      myAnswer: "",
      ifError: false
    }, {
      question: "贾宝玉在薄命司见到的金陵十二钗正册的画里，出现人物的一共有几幅？",
      myAnswer: "",
      ifError: false
    }, {
      question: "贾宝玉在薄命司见到的金陵十二钗正册的画里，出现动物的一共有几幅？",
      myAnswer: "",
      ifError: false
    }, {
      question: "贾宝玉在薄命司见到的金陵十二钗正册的画里，同时出现动物和人物的是谁的画？",
      myAnswer: "",
      ifError: false
    }, {
      question: "贾宝玉在薄命司见到的金陵十二钗正册的画里，出现花卉的是谁的画？",
      myAnswer: "",
      ifError: false
    }, {
      question: "贾宝玉在薄命司见到的金陵十二钗正册的画里，出现高楼大厦的是谁的画？",
      myAnswer: "",
      ifError: false
    }, {
      question: "贾宝玉在薄命司见到的金陵十二钗正册的画里，“凤冠霞帔的美人”是谁？",
      myAnswer: "",
      ifError: false
    }, {
      question: "贾宝玉在薄命司见到的探春的画里，出现了几个人？",
      myAnswer: "",
      ifError: false
    }, {
      question: "贾宝玉在薄命司一共看了金陵十二钗正册、副册、又副册的多少幅画？",
      myAnswer: "",
      ifError: false
    }, {
      question: "太虚幻境的《红楼梦曲》，谁的曲词里出现了“画”字？",
      myAnswer: "",
      ifError: false
    }, {
      question: "入画是谁的丫鬟？",
      myAnswer: "",
      ifError: false
    }, {
      question: "“蘅芜君夜拟菊花题”所拟的十二个题目中，“画菊”排第几个？",
      myAnswer: "",
      ifError: false
    }, {
      question: "菊花诗里的《画菊》是谁作的？",
      myAnswer: "",
      ifError: false
    }, {
      question: "菊花诗里的《画菊》押的是什么韵部？",
      myAnswer: "",
      ifError: false
    }, {
      question: "《画菊》诗“莫认东篱闲采掇”的下一句是什么？",
      myAnswer: "",
      ifError: false
    }, {
      question: "惜春画大观园是为了送给谁？",
      myAnswer: "",
      ifError: false
    }, {
      question: "惜春画大观园，林黛玉为取笑刘姥姥，戏称“连题跋都有了，起个名字”，叫什么？",
      myAnswer: "",
      ifError: false
    }, {
      question: "米襄阳《烟雨图》挂在大观园的那栋建筑里面？",
      myAnswer: "",
      ifError: false
    }, {
      question: "仇十洲画的《双艳图》挂在谁的屋子里？",
      myAnswer: "",
      ifError: false
    }, {
      question: "待漏随朝墨龙大画悬在荣国府的哪个建筑里面？",
      myAnswer: "",
      ifError: false
    }
    ]
  },
  onLoad: function(options) {
    console.log(options);
  },
  onShow: function() {
    console.log(this.data);
  },
  saveMyAnswer: function(e) {
    var data = this.data;
    data.array[e.currentTarget.id].myAnswer = e.detail.value;
    this.setData(data);
  },
  formSubmit: function(e) {
    var temp = e.detail.value;
    var myAnswers = [];
    for (var item in temp) {
      myAnswers[item] = temp[item];
    }
    // for (var i = 0; i < myAnswers.length; i++) {
    //   var tempString = 'array[' + i + '].myAnswer';
    //   this.setData({
    //     tempString: 'myAnswers[i]'
    //   })
    // }
    this.check(myAnswers);
    wx.navigateTo({
      url: '../result/result?count=' + answers.length + "&result=" + count
    })
  },
  check: function(myAnswers) {
    var data = this.data;
    for (var i = 0; i < myAnswers.length; i++) {
      if (answers[i] != myAnswers[i]) {
        count--;
        // var tempString = 'array[' + i + '].ifError';
        // this.setData({
        //   'tempString': true
        // });  
        data.array[i].ifError = true;
      }
    }
    this.setData(data);
    if (count == 60) {
      return true;
    }
    return false;
  }
})