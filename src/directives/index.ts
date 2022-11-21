const directives =  (app) => {
  //这里是给元素取得名字，虽然是focus，但是实际引用的时候必须以v开头
  app.directive('focus',{
    //这里的el就是获取的元素
    mounted(el) {
      el.focus() 
     }
  })
}

//默认导出 directives
export default directives
