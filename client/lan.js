const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { keyboard, Key, mouse,straightTo, up, down, left, right } = require("@nut-tree/nut-js");
const os = require('os');
const qrcode = require('qrcode-terminal');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 9999;

const staticPath = path.join(__dirname, '..', 'decktap-web', 'dist');

console.log('📂 Static files path:', staticPath);
app.use(express.static(staticPath));

// WebSocket 连接处理
wss.on('connection', (ws) => {
  console.log('📲 Mobile phone controller connected');
  ws.on('message', (message) => {
    const msg = message.toString();
    console.log('🔍 Received message:', msg);

    // 所有处理逻辑
    switch(msg) {
      case 'prev':
        // 左切换标签页
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftControl,Key.LeftShift,Key.Tab);
            await keyboard.releaseKey(Key.LeftControl,Key.LeftShift,Key.Tab);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'next':
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftControl, Key.Tab);
            await keyboard.releaseKey(Key.LeftControl, Key.Tab);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'pause':
        try {
          (async () => {
            await keyboard.pressKey(Key.Space);
            await keyboard.releaseKey(Key.Space);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'close':
        // 关闭标签页
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftControl,Key.W);
            await keyboard.releaseKey(Key.LeftControl,Key.W);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'f11':
        try {
          (async () => {
            await keyboard.pressKey(Key.F11);
            await keyboard.releaseKey(Key.F11);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'pageup':
        try {
          (async () => {
            await keyboard.pressKey(Key.PageUp);
            await keyboard.releaseKey(Key.PageUp);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'pagedown':
        try {
          (async () => {
            await keyboard.pressKey(Key.PageDown);
            await keyboard.releaseKey(Key.PageDown);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'enlarge':
        // 浏览器放大
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftControl,Key.Add);
            await keyboard.releaseKey(Key.LeftControl,Key.Add);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'reset':
        // 放大还原
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftControl,Key.Num0);
            await keyboard.releaseKey(Key.LeftControl,Key.Num0);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'all':
        // 视频全屏
        try {
          (async () => {
            await keyboard.pressKey(Key.F);
            await keyboard.releaseKey(Key.F);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'nextp':
        // 下一个程序
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftAlt,Key.Tab);
            await keyboard.releaseKey(Key.LeftAlt,Key.Tab);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'forward':
        // 快进
        try {
          (async () => {
            await keyboard.pressKey(Key.Right);
            await keyboard.releaseKey(Key.Right);
            await keyboard.pressKey(Key.Right);
            await keyboard.releaseKey(Key.Right);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'back':
        // 快退
        try {
          (async () => {
            await keyboard.pressKey(Key.Left);
            await keyboard.releaseKey(Key.Left);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'twice':
        // 2倍速
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftShift, Key.Num2);
            await keyboard.releaseKey(Key.LeftShift, Key.Num2);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'normal':
        // 1倍速
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftShift, Key.Num1);
            await keyboard.releaseKey(Key.LeftShift, Key.Num1);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'danmu':
        // 开关弹幕
        try {
          (async () => {
            await keyboard.pressKey(Key.D);
            await keyboard.releaseKey(Key.D);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'prei':
        // 上一P
        try {
          (async () => {
            await keyboard.pressKey(Key.LeftBracket);
            await keyboard.releaseKey(Key.LeftBracket);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'nexti':
        // 下一P
        try {
          (async () => {
            await keyboard.pressKey(Key.RightBracket);
            await keyboard.releaseKey(Key.RightBracket);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'love':
        // 点赞
        try {
          (async () => {
            await keyboard.pressKey(Key.Q);
            await keyboard.releaseKey(Key.Q);
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;


      //方向盘
      case 'up':
        try {
          (async () => {
            await mouse.move(up(50));
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'down':
        try {
          (async () => {
            await mouse.move(down(50));
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'left':
        try {
          (async () => {
            await mouse.move(left(50));
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'right':
        try {
          (async () => {
            await mouse.move(right(50));
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;
      case 'click':
        try {
          (async () => {
            await mouse.leftClick();
          })();
        } catch (error) {
          alert('❌ Key simulation failed');
        }
        break;


      default:
        alert('❌ Unknown message type:' + msg);
        break;
    }

  });

  ws.on('error', (error) => {
    console.error('❌ WebSocket error:', error);
  });

  ws.on('close', () => {
    console.log('🔌 The phone controller has been disconnected');
  });
});

server.listen(port, () => {
  const controlUrl = `http://${getLocalIP()}:${port}`;
  console.log(`\n✅ DeckTap LAN service has been started：${controlUrl}`);
  console.log('\n🔗 Please open the above link with your mobile phone under the same Wi-Fi, or scan the QR code below:\n');
  qrcode.generate(controlUrl, { small: true });
});

process.on('SIGINT', () => {
    ioHook.unload();
    ioHook.stop();
    process.exit();
  });

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  console.log('🔍 Scanning the network interface......');
  
  // 存储所有找到的 IP 地址
  const ipAddresses = [];
  
  for (let [name, iface] of Object.entries(interfaces)) {
    for (let config of iface) {
      if (config.family === 'IPv4' && !config.internal) {
        // 检查是否是有效的单播地址（不是网络地址或广播地址）
        const ipParts = config.address.split('.').map(Number);
        const lastOctet = ipParts[3];
        if (lastOctet !== 0 && lastOctet !== 255) {  // 排除网络地址和广播地址
          console.log(`📡 Discover network interfaces: ${name}`);
          console.log(`   IP Address: ${config.address}`);
          console.log(`   Subnet Mask: ${config.netmask}`);
          ipAddresses.push({
            name,
            address: config.address,
            netmask: config.netmask,
            // 添加优先级分数
            priority: getPriorityScore(config.address, name)
          });
        }
      }
    }
  }

  // 按优先级排序
  ipAddresses.sort((a, b) => b.priority - a.priority);
  
  if (ipAddresses.length > 0) {
    const selectedIP = ipAddresses[0];
    console.log(`✅ Choose Local IP: ${selectedIP.address} (${selectedIP.name})`);
    return selectedIP.address;
  }

  console.log('❌ No available network interface was found, use localhost');
  return 'localhost';
}

// 计算 IP 地址的优先级分数
function getPriorityScore(address, interfaceName) {
  let score = 0;
  
  // 优先选择常见的本地网络接口名称
  if (interfaceName.includes('en0') || interfaceName.includes('wlan0')) {
    score += 100;
  }
  
  // 优先选择 192.168.x.x 地址（最常见的本地网络）
  if (address.startsWith('192.168.')) {
    score += 50;
  }
  
  // 优先选择 172.16.x.x - 172.31.x.x 地址
  if (address.startsWith('172.')) {
    const secondOctet = parseInt(address.split('.')[1]);
    if (secondOctet >= 16 && secondOctet <= 31) {
      score += 40;
    }
  }
  
  // 优先选择 10.x.x.x 地址
  if (address.startsWith('10.')) {
    score += 30;
  }
  
  // 排除一些特殊的网络接口
  if (interfaceName.includes('vmnet') || 
      interfaceName.includes('VMnet') || 
      interfaceName.includes('docker') || 
      interfaceName.includes('veth')) {
    score -= 100;
  }
  
  return score;
}
