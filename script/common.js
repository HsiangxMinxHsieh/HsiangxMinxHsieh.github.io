 
// 使用 JavaScript 在 DOM 載入時滾動到底部並定位元素
document.addEventListener('DOMContentLoaded', function () {
   // 獲取頁面的高度
   var body = document.body,
     html = document.documentElement;

   var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

   // 滾動到頁面底部
   window.scrollTo(0, height);

 });

 // 定位程式碼	
  window.onload = function() {
	const imgage = document.getElementById('background-image');
    const divformat = document.getElementById('frame-item');
    const rect = imgage.getBoundingClientRect();
    divformat.style.width = rect.width + 'px';
    divformat.style.height = rect.height + 'px';
    console.log("Frame寬高使用Script設定完成,reac.width=>" + rect.width + "rect.height=>" + rect.height);
       
    // 將圖片寬度存儲在全域變量中
    window.backgroundImageWidth  = rect.width;
	window.localStorage.setItem('backgroundImageWidth', rect.width);
};
   


