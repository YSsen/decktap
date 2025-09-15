import type { FC } from 'react';
import '../styles/controller.css';
import '../styles/mouse.css';
import { useWebSocket, WebSocketCommand } from '../hooks/useWebSocket';

// 定义 props 类型
interface MousePanelProps {
  isShow: boolean,
  onChange: Function
}

export const MousePanel: FC<MousePanelProps> = ({isShow, onChange}) => {
  const { sendCommand } = useWebSocket();

  const handleClick = () => {
    onChange();
  }

  return (
    <div className={`mouse-container ${isShow ? '' : 'hidden'}`}>
      <div className='shadow' onDoubleClick={handleClick}></div>
      <div className='panel'>
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.UP)}
        >
          UP
        </button>
        <div></div>

        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.LEFT)}
        >
          Left
        </button>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.CLICK)}
        >
          Click
        </button>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.RIGHT)}
        >
          Right
        </button>
        
        <div></div>
        <button 
          className="control-btn"
          onClick={() => sendCommand(WebSocketCommand.DOWN)}
        >
          Down
        </button>
        <div></div>
      </div>
    </div>
  );
}