'use client';

import React from 'react';

interface IconProps {
  className?: string;
}

// ── HTML5 ──
const HTML5Icon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className={className}>
    <path fill="#e44d26" d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100" />
    <path fill="#f16529" d="M50.093 92.344V7.39h36.048l-6.88 76.811" />
    <path fill="#ebebeb" d="M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32" />
    <path fill="#fff" d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271" />
  </svg>
);

// ── CSS3 ──
const CSS3Icon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className={className}>
    <path fill="#1572B6" d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100" />
    <path fill="#33A9DC" d="M50.093 92.344V7.39h36.048l-6.88 76.811" />
    <path fill="#ebebeb" d="M22.383 18.4h27.71v11.036H34.488l1.022 11.304h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32" />
    <path fill="#fff" d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271" />
  </svg>
);

// ── Tailwind CSS ──
const TailwindIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className={className}>
    <g clipPath="url(#tw)">
      <path fill="#06b6d4" d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991" />
    </g>
    <defs><clipPath id="tw"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath></defs>
  </svg>
);

// ── GSAP ──
const GSAPIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className={className}>
    <path fill="#0ae448" d="M50.21 44.196a.56.56 0 0 0 .169-.383h.002c.07-2.76-.569-4.916-1.897-6.408-1.403-1.576-3.552-2.385-6.387-2.405-2.83 0-5.269.884-7.052 2.557-1.686 1.584-2.637 3.775-2.68 6.171-.072 4.132 2.262 6.76 4.865 9.302 2.015 2.074 2.385 3.099 2.365 4.268-.025 1.353-.669 2.13-1.768 2.13-.453 0-.817-.141-1.078-.418-.408-.428-.588-1.201-.522-2.236a.5.5 0 0 0-.108-.392.56.56 0 0 0-.43-.212h-5.95a.557.557 0 0 0-.559.54c-.14 2.87.529 5.093 1.987 6.608 1.436 1.491 3.596 2.247 6.423 2.247 5.537 0 9.175-3.459 9.27-8.81.058-3.309-1.15-5.812-4.162-8.638-2.288-2.22-3.092-3.511-3.067-4.933.023-1.274.789-2.004 1.977-2.004s1.769.817 1.769 2.495a.69.69 0 0 0 .691.678h5.753a.56.56 0 0 0 .388-.157" />
    <path fill="#0ae448" d="M32.259 49.29v-.014h-.003c.005-.277-.188-.53-.46-.567q-.037-.006-.074-.005H21.197v.013c-.272.032-.493.217-.547.46l-1.096 4.762a.43.43 0 0 0 .089.369.6.6 0 0 0 .446.206h1.604c.092 0 .213.013.257.07.042.055.039.178-.005.337-.312 1.145-1.053 2.399-1.974 3.124-.922.724-2.445 1.158-3.511.505-1.203-.74-1.407-2.521-1.457-3.789-.105-2.722.428-5.456 1.474-7.972.749-1.801 2.161-5.051 4.555-5.051 1.357 0 2.04 1.12 2.091 3.423a.43.43 0 0 0 .415.417h6.245a.56.56 0 0 0 .56-.546c-.005-3.33-.765-5.872-2.262-7.561-1.416-1.597-3.452-2.397-6.045-2.374-8.524 0-12.95 8.612-13.888 17.147-.52 4.546.338 8.32 2.415 10.624 1.57 1.744 3.423 2.628 6.17 2.628 3.057 0 5.346-.679 7.202-2.134 2.182-1.708 3.835-4.554 5.056-8.694a.22.22 0 0 1 .211-.16h1.324c.31 0 .579-.196.638-.465z" />
    <path fill="#0ae448" fillRule="evenodd" d="m68.209 64.558.037-28.459a.535.535 0 0 0-.539-.543h-8.902c-.3 0-.431.258-.517.428l-12.89 28.4v.005l-.005.008c-.143.349.128.723.506.723h6.223q.505.002.669-.314l1.235-2.97c.152-.396.18-.433.613-.433h5.946c.413 0 .422.008.415.413l-.133 2.76a.54.54 0 0 0 .33.503.5.5 0 0 0 .208.04h6.287a.53.53 0 0 0 .41-.185.47.47 0 0 0 .107-.376m-11.014-9.501q-.07 0-.14-.005a.15.15 0 0 1-.126-.09.15.15 0 0 1-.007-.098 3 3 0 0 1 .055-.165l4.458-11.032a3 3 0 0 1 .139-.319c.072-.148.16-.159.187-.048.024.091-.511 11.327-.511 11.327-.042.42-.061.438-.476.473l-3.575-.041h-.008zm18.97-19.501h4.726l.005-.003c6.971 0 10.451 3.16 10.341 9.395-.128 7.306-4.58 12.675-11.284 13.913-.953.175-1.922.244-2.89.239l-3.237-.015a.204.204 0 0 0-.203.198.19.19 0 0 0 .105.173l.394.205 1.019.532 1.024.533.318.165c.226.118.313.314.263.566l-.718 3.237c-.059.27-.276.426-.594.426h-5.907a.58.58 0 0 1-.445-.206.43.43 0 0 1-.09-.37l6.578-28.558c.065-.297.345-.43.595-.43m2.991 16.995h.126c3.103-.126 4.794-3.792 4.856-7.348.036-2.055-.714-3.259-2.059-3.3h-4.32a.2.2 0 0 0-.175.299.2.2 0 0 0 .076.072s2.733 1.441 2.92 1.545c.147.08.15.217.101.454 0 .006-.418 1.844-.859 3.782-.492 2.163-1.01 4.451-1.008 4.455.008.01.058.04.342.04" clipRule="evenodd" />
  </svg>
);

// ── React ──
const ReactIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="8" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="2.5">
      <ellipse cx="50" cy="50" rx="44" ry="17" />
      <ellipse cx="50" cy="50" rx="44" ry="17" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="44" ry="17" transform="rotate(120 50 50)" />
    </g>
  </svg>
);

// ── Next.js ──
const NextJSIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="48" fill="#000" stroke="#fff" strokeWidth="2" />
    <path fill="#fff" d="M38 30h5v28.5L64.5 30h6L50.2 56.8 62 70h-6L43 54.5V70h-5z" />
    <circle cx="64" cy="33" r="3" fill="#fff" />
  </svg>
);

// ── TypeScript ──
const TypeScriptIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="6" fill="#3178C6" />
    <path fill="#fff" d="M22 51.5h10.5V76h7V51.5H50v-6H22zM55 70.5c1.5 1.5 3.5 2.5 6 3.2 2.5.7 5 1 7.5 1 2.4 0 4.6-.3 6.6-1 2-.6 3.6-1.5 4.8-2.8 1.3-1.2 2.2-2.8 2.2-4.8 0-1.5-.4-2.8-1.2-3.8-.8-1-1.8-1.8-3-2.5-1.3-.7-2.7-1.2-4.3-1.7l-4.5-1.3c-1-.3-1.8-.7-2.5-1-.7-.4-1.2-.8-1.5-1.3-.4-.5-.5-1-.5-1.7 0-.6.2-1.2.5-1.7.4-.5.9-.9 1.6-1.2.7-.3 1.6-.4 2.7-.4 1 0 2 .2 2.8.5.9.3 1.6.8 2.2 1.4.6.6 1 1.4 1.2 2.3h6.8c-.2-2-.8-3.8-2-5.3-1.1-1.5-2.6-2.6-4.5-3.4-1.9-.8-4-1.2-6.4-1.2-2.3 0-4.3.4-6.2 1.1-1.8.7-3.3 1.8-4.3 3.2-1.1 1.3-1.6 3-1.6 4.8 0 2.2.7 4 2 5.2 1.4 1.3 3.3 2.3 5.8 3l5 1.3c1.5.5 2.7 1 3.5 1.7.8.6 1.2 1.4 1.2 2.4 0 .7-.2 1.4-.7 1.9-.5.5-1.1 1-2 1.3-.8.3-1.8.5-3 .5-1.5 0-2.8-.3-4-.8-1.1-.5-2-1.2-2.6-2.1-.7-.9-1-2-1.1-3.2h-7c.1 2.2.8 4 1.9 5.6z" />
  </svg>
);

// ── JavaScript ──
const JavaScriptIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" fill="#F7DF1E" rx="6" />
    <path d="M26.5 82.3l7.7-4.6c1.5 2.6 2.9 4.9 6.2 4.9 3.2 0 5.2-1.2 5.2-6V47.5h9.5v29.3c0 9.9-5.8 14.4-14.3 14.4-7.6 0-12.1-4-14.3-8.9zm33.8-1.2l7.7-4.4c2 3.3 4.7 5.7 9.4 5.7 3.9 0 6.5-2 6.5-4.7 0-3.3-2.6-4.4-7-6.3l-2.4-1c-6.9-3-11.5-6.6-11.5-14.4 0-7.2 5.5-12.6 14-12.6 6.1 0 10.5 2.1 13.6 7.6L83.5 55c-1.6-2.8-3.3-3.9-6-3.9-2.7 0-4.5 1.7-4.5 3.9 0 2.7 1.7 3.8 5.7 5.5l2.4 1c8.2 3.5 12.7 7.1 12.7 15.1 0 8.6-6.8 13.4-15.9 13.4-8.9 0-14.7-4.2-17.5-9.8z" />
  </svg>
);

// ── Figma ──
const FigmaIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path fill="#F24E1E" d="M33.333 95c9.205 0 16.667-7.462 16.667-16.667V61.667H33.333c-9.205 0-16.667 7.462-16.667 16.666C16.666 87.538 24.128 95 33.333 95z" />
    <path fill="#FF7262" d="M16.666 50c0-9.205 7.462-16.667 16.667-16.667H50V66.667H33.333c-9.205 0-16.667-7.462-16.667-16.667z" />
    <path fill="#A259FF" d="M50 5v33.333h16.667c9.205 0 16.667-7.462 16.667-16.666C83.334 12.462 75.872 5 66.667 5z" />
    <path fill="#1ABCFE" d="M83.334 50c0 9.205-7.462 16.667-16.667 16.667S50 59.205 50 50s7.462-16.667 16.667-16.667S83.334 40.795 83.334 50z" />
    <path fill="#0ACF83" d="M16.666 21.667c0 9.204 7.462 16.666 16.667 16.666H50V5H33.333c-9.205 0-16.667 7.462-16.667 16.667z" />
  </svg>
);

// ── Framer Motion ──
const FramerMotionIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path fill="#05F" d="M17 5h66v30H50z" />
    <path fill="#0AF" d="M17 35h33l33 30H17z" />
    <path fill="#8DF" d="M17 65h33v30z" />
  </svg>
);

// ── Three.js ──
const ThreeJSIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="6" fill="#000" />
    <path stroke="#fff" strokeWidth="2.5" fill="none" d="M20 80 50 15l30 65zm0 0h60M35 47.5h30M42.5 63.75h15" />
  </svg>
);

// ── Lottie ──
const LottieIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="50" fill="#00DDB3" />
    <path fill="#fff" d="M30 60c0-6 3-12 9-16s14-5 20-2c-2-8-10-14-19-14-11 0-20 9-20 20s9 20 20 20c9 0 17-6 19-14-6 3-14 3-20-2s-9-10-9-16v4z" />
  </svg>
);

// ── CSS Animations (generic sparkle) ──
const CSSAnimIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="6" fill="#264de4" />
    <path fill="#fff" d="M50 15l5 15h16l-13 10 5 15-13-10-13 10 5-15-13-10h16z" opacity=".9" />
    <path fill="#fff" d="M30 60l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" opacity=".6" />
    <path fill="#fff" d="M65 55l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" opacity=".6" />
  </svg>
);

// ── Git ──
const GitIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path fill="#F05032" d="M96.9 46.1 53.9 3.1c-1.6-1.6-4.2-1.6-5.8 0L38.4 12.8l7.3 7.3c1.7-.6 3.6-.2 4.9 1.1 1.3 1.3 1.7 3.2 1.1 4.8l7 7c1.7-.6 3.6-.2 4.9 1.1 1.9 1.9 1.9 4.9 0 6.8-1.9 1.9-4.9 1.9-6.8 0-1.4-1.4-1.8-3.5-1-5.2l-6.6-6.6v17.3c.5.2.9.5 1.3.9 1.9 1.9 1.9 4.9 0 6.8-1.9 1.9-4.9 1.9-6.8 0-1.9-1.9-1.9-4.9 0-6.8.5-.5 1-.8 1.6-1V28.7c-.6-.2-1.1-.6-1.6-1-1.4-1.4-1.8-3.5-1-5.2l-7.2-7.2L3.1 48.1c-1.6 1.6-1.6 4.2 0 5.8l43 43c1.6 1.6 4.2 1.6 5.8 0l43-43c1.6-1.6 1.6-4.2 0-5.8" />
  </svg>
);

// ── VS Code ──
const VSCodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path fill="#0065A9" d="M75 7l18 7.5v71L75 93 30 55.5 13 68l-6-5V37l6-5 17 12.5z" />
    <path fill="#007ACC" d="M75 7 30 43.5 13 31l-6 6v26l6 5 17-12L75 93l18-7.5v-71z" opacity=".8" />
    <path fill="#1F9CF0" d="M75 93V7L30 43.5v13z" opacity=".5" />
  </svg>
);

// ── Vercel ──
const VercelIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="48" fill="#000" stroke="#333" strokeWidth="1" />
    <path fill="#fff" d="M50 25L75 72H25z" />
  </svg>
);

// ── Docker ──
const DockerIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path fill="#2496ED" d="M57 42h9v8h4.5c2.1 0 4.2-.4 6.1-1.1 1.4-.5 2.9-1.3 4-2.3-1.7-2.2-2.5-5-2.7-7.7-.2-3.5.8-7.8 3.5-10.5l1.5-1.5 1.6 1.4c3.2 2.7 4.7 6.8 4.4 10.7 3.7.8 7.9 2.8 10 6.7H57zm0 0" />
    <g fill="#2496ED">
      <rect x="22" y="42" width="9" height="8" rx="1" />
      <rect x="33.5" y="42" width="9" height="8" rx="1" />
      <rect x="45" y="42" width="9" height="8" rx="1" />
      <rect x="33.5" y="31" width="9" height="8" rx="1" />
      <rect x="45" y="31" width="9" height="8" rx="1" />
      <rect x="45" y="20" width="9" height="8" rx="1" />
      <rect x="56.5" y="31" width="9" height="8" rx="1" />
    </g>
    <path fill="#2496ED" d="M15 55c6 13 18.5 20 35 20 21 0 37-12 44-33H10c1 5 3 9 5 13z" opacity=".3" />
  </svg>
);

// ── Postman ──
const PostmanIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="48" fill="#FF6C37" />
    <path fill="#fff" d="M65 35 40 60l-8-8 25-25zm-30 30-5 12 12-5zm28-30 5-5c2-2 2-5 0-7s-5-2-7 0l-5 5z" opacity=".95" />
  </svg>
);

// ── Node.js ──
const NodeJSIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path fill="#539E43" d="M50 5c-1.5 0-3 .4-4.3 1.2L13.5 24.5C10.8 26 9 28.8 9 31.8v36.5c0 3 1.8 5.7 4.5 7.2l32.2 18.3c1.3.8 2.8 1.2 4.3 1.2s3-.4 4.3-1.2l32.2-18.3c2.7-1.5 4.5-4.2 4.5-7.2V31.8c0-3-1.8-5.7-4.5-7.3L54.3 6.2C53 5.4 51.5 5 50 5" />
    <path fill="#fff" d="M50 80c-.8 0-1.6-.2-2.3-.6L39 74c-1.1-.6-.6-.8-.2-.9 1.6-.6 2-1 3.8-2l.4.2 6.8 4c.4.2.8.2 1.2 0l26.6-15.3c.4-.2.6-.6.6-1V29c0-.4-.2-.8-.6-1L50.6 12.7c-.4-.2-.8-.2-1.2 0L22.8 28c-.4.2-.6.6-.6 1v30c0 .4.2.8.6 1l7.3 4.2c4 2 6.4-.4 6.4-2.6V32.2c0-.6.5-1 1-1h4.5c.6 0 1 .4 1 1v30c0 5-2.8 8-7.6 8-1.5 0-2.7 0-6-3.2L23 63.8c-1.4-.8-2.3-2.3-2.3-4V30c0-1.7.9-3.2 2.3-4L49.6 10.7c1.3-.7 3-.7 4.3 0L80.5 26c1.4.8 2.3 2.3 2.3 4v30c0 1.7-.9 3.2-2.3 4L54 79.3c-.7.5-1.5.7-2.3.7z" />
  </svg>
);

// ── Express ──
const ExpressIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="6" fill="#000" />
    <text x="50" y="58" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="monospace">Ex</text>
  </svg>
);

// ── MongoDB ──
const MongoDBIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path fill="#47A248" d="M55.5 8.5c-2-3.5-4-5.5-4.5-6-.5.5-2.5 2.5-4.5 6C37 24 38 38 50 50l1 .5c0 0 .5-1 1-.5 12-12 13-26 3.5-41.5z" />
    <path fill="#47A248" d="M51 50.5s0 26-1 34c0 0 .5 4 1 7h2c.5-3 1-7 1-7-1-8-1-34-1-34z" opacity=".6" />
    <path fill="#47A248" d="M50 50c-20 10-18 30-8 40h4c-14-8-16-28 2-40z" opacity=".4" />
    <path fill="#47A248" d="M54 50c20 10 18 30 8 40h-4c14-8 16-28-2-40z" opacity=".4" />
  </svg>
);

// ── PostgreSQL ──
const PostgreSQLIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path fill="#336791" d="M72 18c-5-5-12-8-20-8s-15 3-20 8c-8 8-10 20-6 30l14 35c1 3 4 5 7 5h10c3 0 6-2 7-5l14-35c4-10 2-22-6-30z" />
    <ellipse cx="50" cy="38" rx="14" ry="10" fill="#fff" opacity=".3" />
    <circle cx="44" cy="38" r="4" fill="#336791" />
    <circle cx="56" cy="38" r="4" fill="#336791" />
    <path stroke="#fff" strokeWidth="2" fill="none" d="M42 52c4 4 12 4 16 0" strokeLinecap="round" />
  </svg>
);

// ── REST APIs ──
const RESTIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="6" fill="#6BA539" />
    <path fill="#fff" d="M18 33h15v6H25v5h8v5h-8v12h-7zm20 0h15c5 0 8 3 8 7.5 0 3-1.5 5.5-4.5 6.5l5.5 14h-7.5l-4.5-12h-5v12h-7zm7 12h6c2 0 3-1 3-2.5S73 40 71 40h-6z" />
  </svg>
);

// ── Responsive Design ──
const ResponsiveIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect x="5" y="15" width="55" height="40" rx="3" fill="none" stroke="#a78bfa" strokeWidth="3" />
    <rect x="15" y="23" width="35" height="24" rx="1" fill="#a78bfa" opacity=".2" />
    <rect x="65" y="25" width="30" height="50" rx="4" fill="none" stroke="#a78bfa" strokeWidth="3" />
    <rect x="70" y="32" width="20" height="35" rx="1" fill="#a78bfa" opacity=".2" />
    <line x1="5" y1="80" x2="60" y2="80" stroke="#a78bfa" strokeWidth="2" />
  </svg>
);

// ── Design Systems ──
const DesignSystemsIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect x="10" y="10" width="35" height="35" rx="4" fill="#f472b6" opacity=".7" />
    <rect x="55" y="10" width="35" height="35" rx="4" fill="#818cf8" opacity=".7" />
    <rect x="10" y="55" width="35" height="35" rx="4" fill="#34d399" opacity=".7" />
    <rect x="55" y="55" width="35" height="35" rx="17.5" fill="#fbbf24" opacity=".7" />
  </svg>
);

// ── Wireframing ──
const WireframingIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <rect x="10" y="10" width="80" height="80" rx="4" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
    <rect x="10" y="10" width="80" height="18" rx="4" fill="#94a3b8" opacity=".3" />
    <rect x="15" y="35" width="30" height="50" rx="2" fill="#94a3b8" opacity=".15" />
    <rect x="50" y="35" width="35" height="23" rx="2" fill="#94a3b8" opacity=".15" />
    <rect x="50" y="62" width="35" height="23" rx="2" fill="#94a3b8" opacity=".15" />
  </svg>
);

// ── Prototyping ──
const PrototypingIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <circle cx="25" cy="30" r="12" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
    <circle cx="75" cy="30" r="12" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
    <circle cx="50" cy="75" r="12" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
    <line x1="35" y1="35" x2="42" y2="65" stroke="#f59e0b" strokeWidth="2" />
    <line x1="65" y1="35" x2="58" y2="65" stroke="#f59e0b" strokeWidth="2" />
    <line x1="37" y1="30" x2="63" y2="30" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="42,63 46,68 38,68" fill="#f59e0b" />
    <polygon points="58,63 62,68 54,68" fill="#f59e0b" />
    <polygon points="63,30 59,26 59,34" fill="#f59e0b" />
  </svg>
);

// ── Skill Icon Map ──
export const skillIconMap: Record<string, React.FC<IconProps>> = {
  'React': ReactIcon,
  'Next.js': NextJSIcon,
  'TypeScript': TypeScriptIcon,
  'JavaScript': JavaScriptIcon,
  'HTML5': HTML5Icon,
  'CSS3': CSS3Icon,
  'Tailwind CSS': TailwindIcon,
  'Figma': FigmaIcon,
  'Responsive Design': ResponsiveIcon,
  'Design Systems': DesignSystemsIcon,
  'Wireframing': WireframingIcon,
  'Prototyping': PrototypingIcon,
  'GSAP': GSAPIcon,
  'Framer Motion': FramerMotionIcon,
  'CSS Animations': CSSAnimIcon,
  'Three.js': ThreeJSIcon,
  'Lottie': LottieIcon,
  'Git': GitIcon,
  'VS Code': VSCodeIcon,
  'Vercel': VercelIcon,
  'Docker': DockerIcon,
  'Postman': PostmanIcon,
  'Node.js': NodeJSIcon,
  'Express': ExpressIcon,
  'MongoDB': MongoDBIcon,
  'PostgreSQL': PostgreSQLIcon,
  'REST APIs': RESTIcon,
};

export function SkillIcon({ name, className = 'w-10 h-10' }: { name: string; className?: string }) {
  const Icon = skillIconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
