if (!requestScreenCapture()) {
     toast("请求截图失败");
     exit();
 }
 //APP启动
 app.launchApp("金讯")
 console.log("打开App成功")
 sleep(3000)
 
 控键识别()
 while (true) {
     sleep(10000)
     任务()
     sleep(15000)
     任务2()
     广告ad()
 }
 
 
 function 控键识别() {
     
let 任务1 = className("android.view.View").depth(10).drawingOrder(0).indexInParent(3).findOnce()
     if(任务1){
         任务1.click();
         console.log("打开发现")
         sleep(1000)
 }
 desc("任务中心").findOne().click();
      console.log("每日签到成功")
         sleep(1000)
 
 }
 function 任务() {
 let 视频 =className("android.widget.ImageView") .depth(8).drawingOrder(0).indexInParent(1).findOnce()
     if(视频){
         视频.click();
         console.log("视频")
         sleep(1000)
         
     }
     
 }
function 任务2() {
    desc("返回").findOne().click();
      console.log("每日签到成功")
         sleep(1000)
}
 
 
 
 
 function 广告ad() {

     let 广告ad7 = className("android.widget.ImageView").depth(1).drawingOrder(67).indexInParent(3).findOnce()
     if (广告ad7) {
         广告ad7.click();
         console.log("--关闭广告2")
         sleep(1000)
     }
     let 广告ad1 = className("android.widget.ImageView").depth(8).drawingOrder(5).indexInParent(1).findOnce()
     if (广告ad1) {
         广告ad1.click();
         console.log("--关闭广告2")
         sleep(1000)
     }
let 广告ad99 = className("android.widget.ImageView").depth(7).drawingOrder(3).indexInParent(2).findOnce()
     if (广告ad99) {
         广告ad99.click();
         console.log("--关闭广告2")
         sleep(1000)
     }
     let 广告ad98 = className("android.widget.ImageView").depth(7).drawingOrder(3).indexInParent(1).findOnce()
     if (广告ad98) {
         广告ad98.click();
         console.log("--关闭广告2")
         sleep(1000)
     }
let 广告ad97 = className("android.widget.ImageView").depth(16).drawingOrder(0).indexInParent(0).findOnce()
     if (广告ad97) {
         广告ad97.click();
         console.log("--关闭广告2")
         sleep(1000)
     }
let 广告ad96 = className("android.widget.ImageView").depth(8).drawingOrder(3).indexInParent(2).findOnce()
     if (广告ad96) {
         广告ad96.click();
         console.log("--关闭广告2")
         sleep(1000)
     }
 }