import './App.css';
import React, { useState, useRef, useLayoutEffect } from 'react';
import { IoGlobeOutline, IoRefresh } from 'react-icons/io5'; 
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { getAdaptiveScale } from './utils/scaling';

const DEVICES = [
  { name: 'iPhone 12 Pro', width: 390, height: 844 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'MacBook Pro', width: 1440, height: 900 },
];

export default function App() {
  const [url, setUrl] = useState('https://example.com');
  const rowRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    function handleResize() {
      if (!rowRef.current) return;
      const GAP = 24;
      const totalDeviceWidth = DEVICES.reduce((sum, d) => sum + d.width, 0) + GAP * (DEVICES.length - 1);
      const availableWidth = rowRef.current.offsetWidth;
      const availableHeight = window.innerHeight - rowRef.current.getBoundingClientRect().top - 48;
      const maxDeviceHeight = Math.max(...DEVICES.map(d => d.height));
      const scaleW = availableWidth / totalDeviceWidth;
      const scaleH = availableHeight / maxDeviceHeight;
      const adaptiveScale = getAdaptiveScale(window.innerWidth);
      setScale(Math.min(scaleW, scaleH, adaptiveScale));
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <IoGlobeOutline size={18} color="#64748b" />
          </span>
          <input
            className="url-input"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </div>
      </div>
      <div className="viewports-row" ref={rowRef}>
        {DEVICES.map(device => (
          <div
            key={device.name}
            className="viewport"
            style={{
              width: device.width * scale,
              height: device.height * scale + 40, // header
              flex: 'none',
            }}
          >
            <div className="viewport-header">
              {device.name} <span>{device.width}x{device.height}</span>
            </div>
            <div
              className="iframe-wrapper"
              style={{
                width: device.width * scale,
                height: device.height * scale,
              }}
            >
              <iframe
                title={device.name}
                src={url}
                width={device.width}
                height={device.height}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                  width: device.width,
                  height: device.height,
                  border: '1px solid #ccc',
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
