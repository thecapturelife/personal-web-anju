'use client'
import React from 'react';
import './btndw.css'

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/anjumolVR.pdf';
    link.download = 'anjumolVR.pdf';
    link.click();
  };

  return (
    <div className="container">
      <label className="label">
        <input type="checkbox" className="input" onClick={handleDownload} />
        <span className="circle">
          <svg
            className="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            ></path>
          </svg>
          <div className="square"></div>
        </span>
        <p className="title">Resume</p>
        <p className="title">Open</p>
      </label>
    </div>
  );
};

export default DownloadButton;
