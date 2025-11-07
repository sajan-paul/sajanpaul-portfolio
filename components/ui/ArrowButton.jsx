import React from 'react';

const ArrowButton = ({ children = 'NEXT', onClick, useArrows = true, color = 'default' }) => {
  // Fixed button styles - all inline, no external dependencies
  const buttonStyle = {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '50px',
    padding: '0.4em 0.9em 0.4em 1.0em',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 300,
    fontSize: '1.1em',
    color: color === 'purpleGlass' ? '#E9D5FF' : '#ffffff',
    background: color === 'purpleGlass' ? 'rgba(124,58,237,0.18)' : '#ff135a',
    border: '1px solid rgba(255,255,255,0.18)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 8px 24px 0 rgba(124,58,237,0.25), 0 0 0.2em 0 rgba(124,58,237,0.18)',
    transition: '0.5s',
    height: '44px',
    lineHeight: 1,
    gap: '0.4em',
    position: 'relative',
    boxSizing: 'border-box',
  };

  // Fixed SVG icon styles - pixel values, no em units
  const svgStyle = {
    width: '16px',
    height: '16px',
    minWidth: '16px',
    minHeight: '16px',
    maxWidth: '16px',
    maxHeight: '16px',
    flexShrink: 0,
    display: 'block',
    marginRight: 0,
    position: 'relative',
    fill: 'currentColor',
  };

  // Arrow icon SVG
  const ArrowIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 66 43"
      style={svgStyle}
      width="16"
      height="16"
    >
      <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
      <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
      <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
    </svg>
  );

  // Message icon SVG
  const MessageIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      style={svgStyle}
      width="16"
      height="16"
    >
      <path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8l-4 4V5a1 1 0 0 1 1-1z"/>
      <circle cx="8" cy="11" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="11" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="11" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  );

  return (
    <button 
      type="button" 
      onClick={onClick} 
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 30px 0 rgba(124,58,237,0.35), 0 0 1em 0 rgba(124,58,237,0.28)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(124,58,237,0.25), 0 0 0.2em 0 rgba(124,58,237,0.18)';
      }}
    >
      <span style={{ marginRight: '0.3em' }}>{children}</span>
      {useArrows ? <ArrowIcon /> : <MessageIcon />}
    </button>
  );
};

export default ArrowButton;
