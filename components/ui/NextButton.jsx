import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .next-button {
    --main-size: 1.5em;
    --color-text: #ffffff;
    --color-background: #8b5cf6;
    --color-background-hover: #7c3aed;
    --color-outline: #8b5cf640;
    --color-shadow: #00000040;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: calc(var(--main-size) * 100);
    padding: 0.33em 0 0.33em 0.66em;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: var(--main-size);
    color: var(--color-text);
    background: rgba(139, 92, 246, 0.25);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(139, 92, 246, 0.37), 0 0 0.2em 0 var(--color-background);
    transition: 1s;
    position: relative;
    overflow: hidden;
  }

  .next-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    pointer-events: none;
    z-index: 0;
  }

  .next-button > * {
    position: relative;
    z-index: 1;
  }

  @media (prefers-color-scheme: light) {
    .next-button {
      --color-background: #3b82f6;
      --color-background-hover: #2563eb;
      --color-outline: #3b82f640;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px 0 rgba(59, 130, 246, 0.25), 0 0 0.2em 0 var(--color-background);
    }
  }

  .next-button:active {
    transform: scale(0.95);
  }

  .next-button:hover {
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    background: rgba(139, 92, 246, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 1em 0 var(--color-background), 0 8px 32px 0 rgba(139, 92, 246, 0.5);
    animation:
      ripple 1s linear infinite,
      colorize 1s infinite;
    transition: 0.5s;
  }

  @media (prefers-color-scheme: light) {
    .next-button:hover {
      background: rgba(59, 130, 246, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 1em 0 var(--color-background), 0 8px 32px 0 rgba(59, 130, 246, 0.4);
    }
  }

  .next-button span {
    margin-right: 0.3em;
    transition: 0.5s;
  }

  .next-button:hover span {
    text-shadow: 5px 5px 5px var(--color-shadow);
  }

  .next-button:active span {
    text-shadow: none;
  }

  .next-button svg {
    height: 0.8em;
    fill: var(--color-text);
    margin-right: -0.16em;
    position: relative;
    transition: 0.5s;
  }

  .next-button:hover svg {
    margin-right: 0.66em;
    transition: 0.5s;
    filter: drop-shadow(5px 5px 2.5px var(--color-shadow));
  }

  .next-button:active svg {
    filter: none;
  }

  .next-button svg polygon:nth-child(1) {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  .next-button svg polygon:nth-child(2) {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .next-button:hover svg polygon:nth-child(1) {
    transform: translateX(0%);
    animation: opacity 1s infinite 0.6s;
  }

  .next-button:hover svg polygon:nth-child(2) {
    transform: translateX(0%);
    animation: opacity 1s infinite 0.4s;
  }

  .next-button:hover svg polygon:nth-child(3) {
    animation: opacity 1s infinite 0.2s;
  }

  /* Contact variant (mail icon) */
  .next-button.contact-variant svg {
    transform: scale(0.85);
    transition: transform 0.5s;
  }

  .next-button.contact-variant svg path:nth-child(1) {
    transition: 0.4s;
    transform: translateY(-8px);
    opacity: 0.7;
  }

  .next-button.contact-variant svg rect {
    transition: 0.5s;
    opacity: 0.6;
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
  }

  .next-button.contact-variant svg path:nth-child(3) {
    transition: 0.3s;
    opacity: 0.5;
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
  }

  .next-button.contact-variant:hover svg {
    transform: scale(1);
  }

  .next-button.contact-variant:hover svg path:nth-child(1) {
    transform: translateY(0);
    opacity: 1;
    animation: opacity 1s infinite 0.6s;
  }

  .next-button.contact-variant:hover svg rect {
    opacity: 1;
    stroke-dashoffset: 0;
    animation: opacity 1s infinite 0.4s;
  }

  .next-button.contact-variant:hover svg path:nth-child(3) {
    opacity: 1;
    stroke-dashoffset: 0;
    animation: opacity 1s infinite 0.2s;
  }

  @keyframes opacity {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes colorize {
    0% {
      background: var(--color-background);
    }
    50% {
      background: var(--color-background-hover);
    }
    100% {
      background: var(--color-background);
    }
  }

  @keyframes ripple {
    0% {
      outline: 0em solid transparent;
      outline-offset: -0.1em;
    }
    50% {
      outline: 0.2em solid var(--color-outline);
      outline-offset: 0.2em;
    }
    100% {
      outline: 0.4em solid transparent;
      outline-offset: 0.4em;
    }
  }
`;

const NextButton = ({ href, children = 'NEXT', variant = 'next', onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Right arrows (next variant)
  const rightArrows = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
      <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
      <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
      <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
    </svg>
  );

  // Mail/envelope icon (contact variant)
  const mailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
      <path d="M33,21.5 L11,5 L55,5 Z" fill="currentColor" />
      <rect x="11" y="5" width="44" height="33" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M11,5 L33,21.5 L55,5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  return (
    <StyledWrapper>
      <a 
        href={href} 
        onClick={handleClick} 
        className={`next-button ${variant === 'contact' ? 'contact-variant' : ''}`}
      >
        <span>{children}</span>
        {variant === 'contact' ? mailIcon : rightArrows}
      </a>
    </StyledWrapper>
  );
};

export default NextButton;

