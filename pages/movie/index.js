Page({
  // 1. 定义数组
  data:{
    // 数组
    list:[],
    active:"hot" // hot 代表的是激活的是热映 coming 代表的是激活的是待映
  },
  handleTap:function(e){
    // console.log(e.currentTarget.dataset.active);
    let active = e.currentTarget.dataset.active;
    this.setData({
      // active:active
      active
    })
  },
 // 2. 发请求 获取网络数据
 onLoad(){
   wx.request({
     url:"https://wx.maoyan.com/mmdb/movie/v2/list/hot.json",
     data:{
       limit:10,
       offset:0,
       ct:"东莞"
     },
     success:(res)=>{
      //  console.log(res);
      this.setData({
        list:res.data.data
      })
     }
   })
 }
});