使用说明：  
1. 文件"start.cmd"能快捷启动前后端服务。运行start.cmd后会出现二维码，手机扫描即可打开页面（保证内网通畅）；  
2. 文件"远程控制"是快捷方式，右键添加到开始屏幕用的；  
3. 页面功能说明：  
- MousePanel：打开弹窗，双击阴影处关闭；上下左右是修改鼠标位置，不是键盘的方向键；
- 切换程序：alt+tab
- 从preTab开始往下的按键都用于网页操作：
  - preTab：ctrl+shift+tab
  - NextTab: ctrl+tab
  - CloseTab：ctrl+w
  - Pause：空格，暂停视频
  - 视频全屏：按键F，b站快捷键
  - 快进快退：方向键
  - 放大还原：ctrl+'+'和ctrl+0
  - 倍速：ctrl+1/2，b站快捷键
  - 上/下一P、关弹幕、点赞：b站快捷键

程序修改步骤：
1. 主体文件流程：components/Controller.tsx 到 hooks/useWebSocket.ts 到 client/lan.js
2. Controller.tsx是主页面，配置按钮；
3. hooks是协议，约定操作码；
4. lan.js实现各操作码具体操作


<img width="375" height="666" alt="Snipaste_2025-09-15_15-24-58" src="https://github.com/user-attachments/assets/757ae7ca-f977-41bc-911a-378a64fda979" />
