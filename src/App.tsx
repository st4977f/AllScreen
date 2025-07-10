import React, { useState } from 'react';
import './App.css';
import { IoBrowsersOutline, IoGlobeOutline, IoRefresh } from 'react-icons/io5'; 
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';



const DEVICES = [
  { name: 'iPhone 12 Pro', width: 390, height: 844 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'MacBook Pro', width: 1440, height: 900 },
];

const SCALE = 0.5;

export default function App() {
  const [url, setUrl] = useState('https://example.com');

  return (
    <div className="app-container">
      <div className="toolbar">
        <div className="toolbar-left">
          <button className="toolbar-button">
            <IoIosArrowBack size={18} color="#64748b" />
          </button>
          <button className="toolbar-button">
            <IoIosArrowForward size={18} color="#64748b" />
          </button>
          <button className="toolbar-button">
            <IoRefresh size={18} color="#64748b" />
          </button>
        </div>
        <div className="url-input-wrapper">
          <span className="browser-icon-inside">
            <IoGlobeOutline  size={18} color="#64748b" />
          </span>
          <input
            className="url-input"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </div>
      </div>
      <div className="viewports-row">
        {DEVICES.map(device => (
          <div
            key={device.name}
            className="viewport"
            style={{
              width: device.width * SCALE + 24, // add some padding
              height: device.height * SCALE + 40, // header + padding
            }}
          >
            <div className="viewport-header">
              {device.name} <span>{device.width}x{device.height}</span>
            </div>
            <div
              className="iframe-wrapper"
              style={{
                width: device.width * SCALE,
                height: device.height * SCALE,
                overflow: 'hidden',
                borderRadius: 6,
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                background: '#fff',
              }}
            >
              <iframe
                title={device.name}
                src={url}
                width={device.width}
                height={device.height}
                style={{
                  transform: `scale(${SCALE})`,
                  transformOrigin: 'top left',
                  border: '1px solid #ccc',
                  width: device.width,
                  height: device.height,
                  background: '#fff',
                  pointerEvents: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
