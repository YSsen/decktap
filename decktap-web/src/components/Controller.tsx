import { useState } from 'react';
// import { Timer } from './Timer';
import { MousePanel } from './MousePanel';
import '../styles/controller.css';
import { useWebSocket, WebSocketCommand } from '../hooks/useWebSocket';
import { ConnectionStatus } from './ConnectionStatus';

export function Controller() {
  const [isRightHanded, setIsRightHanded] = useState(false);
  const [isShowMouse, setIsShowMouse] = useState(false);
  const { connectionStatus, sendCommand } = useWebSocket();
  // const toggleHand = () => {
  //   setIsRightHanded(!isRightHanded);
  // };
  const toggleMouse = () => {
    setIsShowMouse(!isShowMouse);
  };

  return (
    <div className="container">
      <h1>DeckTap Controller</h1>

      {/* <Timer/> */}

      <MousePanel isShow={isShowMouse} onChange={toggleMouse} />
      
      <ConnectionStatus status={connectionStatus} />
      
      <div className={`controls ${isRightHanded ? 'right-handed' : ''}`}>
        <button 
          className="control-btn"
          onClick={toggleMouse}
        >
          MousePanel
        </button>
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.NEXTP)}
        >
          切换程序
        </button>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.PREV)}
        >
          PreTab
        </button>
        
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.NEXT)}
        >
          NextTab
        </button>
        
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.CLOSE)}
        >
          CloseTab
        </button>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.PAUSE)}
        >
          Pause
        </button>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.ALL)}
        >
          视频全屏
        </button>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.F11)}
        >
          F11
        </button>
        
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.FORWARD)}
        >
          快进
        </button>
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.BACK)}
        >
          快退
        </button>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.PAGEUP)}
        >
          PageUp
        </button>
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.PAGEDOWN)}
        >
          PageDown
        </button>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.ENLARGE)}
        >
          放大
        </button>
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.RESET)}
        >
          还原
        </button>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.TWICE)}
        >
          2倍速
        </button>
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.NORMAL)}
        >
          1倍速
        </button>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.PREI)}
        >
          上一P
        </button>
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.NEXTI)}
        >
          下一P
        </button>
        
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.DANMU)}
        >
          关弹幕
        </button>
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.LOVE)}
        >
          点赞
        </button>

        {/* <button 
          className="hand-toggle-btn"
          onClick={toggleHand}
        >
          <span className="hand-icon">
            {isRightHanded ? '👉' : '👈'}
          </span>
        </button> */}
      </div>

    </div>
  );
}

