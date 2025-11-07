import React from 'react';

const ResumeButton = ({ href, download, children = 'Resume' }) => {
  // Fixed button styles - all inline
  const buttonStyle = {
    position: 'relative',
    width: '150px',
    height: '40px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid rgba(139,92,246,0.35)',
    boxShadow: '0 10px 28px rgba(139,92,246,0.25), 4px 4px #8b5cf6',
    backgroundColor: 'rgba(139,92,246,0.14)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '10px',
    overflow: 'hidden',
    textDecoration: 'none',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s',
  };

  const textStyle = {
    transform: 'translateX(21px)',
    color: '#e2e8f0',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    flexShrink: 0,
    display: 'inline-block',
    transition: 'all 0.3s',
  };

  const iconContainerStyle = {
    position: 'absolute',
    transform: 'translateX(109px)',
    height: '100%',
    width: '39px',
    backgroundColor: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.3s',
  };

  // Fixed SVG icon - pixel values only
  const iconStyle = {
    width: '18px',
    height: '18px',
    minWidth: '18px',
    minHeight: '18px',
    maxWidth: '18px',
    maxHeight: '18px',
    fill: '#8b5cf6',
    display: 'block',
    flexShrink: 0,
  };

  const DownloadIcon = () => (
    <svg 
      viewBox="0 0 35 35" 
      xmlns="http://www.w3.org/2000/svg"
      style={iconStyle}
      width="18"
      height="18"
    >
      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
    </svg>
  );

  return (
    <a 
      href={href} 
      download={download} 
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(139,92,246,0.22)';
        e.currentTarget.style.boxShadow = '0 14px 36px rgba(139,92,246,0.35), 4px 4px #8b5cf6';
        const text = e.currentTarget.querySelector('.resume-text');
        const icon = e.currentTarget.querySelector('.resume-icon');
        if (text) text.style.color = 'transparent';
        if (icon) {
          icon.style.width = '148px';
          icon.style.transform = 'translateX(0)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(139,92,246,0.14)';
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(139,92,246,0.25), 4px 4px #8b5cf6';
        const text = e.currentTarget.querySelector('.resume-text');
        const icon = e.currentTarget.querySelector('.resume-icon');
        if (text) text.style.color = '#e2e8f0';
        if (icon) {
          icon.style.width = '39px';
          icon.style.transform = 'translateX(109px)';
        }
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translate(3px, 3px)';
        e.currentTarget.style.boxShadow = '0px 0px #8b5cf6';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(139,92,246,0.25), 4px 4px #8b5cf6';
      }}
    >
      <span className="resume-text" style={textStyle}>{children}</span>
      <span className="resume-icon" style={iconContainerStyle}>
        <DownloadIcon />
      </span>
    </a>
  );
};

export default ResumeButton;
