import React from 'react';

interface ThikGroIconProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'minimal' | 'badge' | 'animated';
}

const ThikGroIcon: React.FC<ThikGroIconProps> = ({ 
  size = 40, 
  className = '',
  variant = 'default'
}) => {
  if (variant === 'minimal') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified leaf-cart hybrid */}
        <defs>
          <linearGradient id="minimalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        
        {/* Leaf shape */}
        <path
          d="M20 50 Q20 20 50 20 Q80 20 80 50 Q80 70 60 80 L50 85 L40 80 Q20 70 20 50 Z"
          fill="url(#minimalGradient)"
        />
        
        {/* Cart handle */}
        <circle cx="65" cy="35" r="8" fill="none" stroke="white" strokeWidth="3" />
        <line x1="65" y1="27" x2="65" y2="15" stroke="white" strokeWidth="3" strokeLinecap="round" />
        
        {/* Fresh dot */}
        <circle cx="45" cy="45" r="3" fill="white" opacity="0.9" />
      </svg>
    );
  }

  if (variant === 'badge') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Badge background */}
        <circle cx="50" cy="50" r="45" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
        
        {/* Main icon */}
        <g transform="translate(50, 50) scale(0.6)">
          <defs>
            <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          
          {/* Shopping bag with leaf */}
          <path
            d="M-20 -10 L-20 20 Q-20 25 -15 25 L15 25 Q20 25 20 20 L20 -10 Z"
            fill="url(#badgeGradient)"
          />
          
          {/* Bag handles */}
          <path
            d="M-10 -10 Q-10 -20 0 -20 Q10 -20 10 -10"
            fill="none"
            stroke="url(#badgeGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Leaf accent */}
          <path
            d="M-5 5 Q-5 -5 5 -5 Q15 -5 15 5 Q10 15 5 15 Q-5 15 -5 5 Z"
            fill="#22c55e"
          />
          
          {/* Leaf vein */}
          <line x1="5" y1="-5" x2="5" y2="15" stroke="white" strokeWidth="1" opacity="0.7" />
        </g>
      </svg>
    );
  }

  if (variant === 'animated') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981">
              <animate attributeName="stop-color" values="#10b981;#22c55e;#10b981" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#047857">
              <animate attributeName="stop-color" values="#047857;#059669;#047857" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Animated shopping cart with organic elements */}
        <g>
          {/* Cart body */}
          <path
            d="M20 30 L25 70 Q25 75 30 75 L70 75 Q75 75 75 70 L80 30 Z"
            fill="url(#animatedGradient)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.05;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Cart handle */}
          <path
            d="M15 25 Q15 20 20 20 L25 20"
            fill="none"
            stroke="url(#animatedGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Organic elements inside cart */}
          <circle cx="40" cy="50" r="6" fill="#22c55e">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="45" r="4" fill="#16a34a">
            <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="60" r="5" fill="#15803d">
            <animate attributeName="r" values="5;7;5" dur="1.8s" repeatCount="indefinite" />
          </circle>
          
          {/* Cart wheels */}
          <circle cx="35" cy="85" r="5" fill="#374151">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 35 85;360 35 85"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="65" cy="85" r="5" fill="#374151">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 65 85;360 65 85"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    );
  }

  // Default variant - main creative icon
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main gradient */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        
        {/* Leaf gradient */}
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        
        {/* Shadow filter */}
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      {/* Main shopping cart body */}
      <path
        d="M20 25 L25 65 Q25 72 32 72 L68 72 Q75 72 75 65 L80 25 Q82 20 77 20 L25 20 Q20 20 20 25 Z"
        fill="url(#mainGradient)"
        filter="url(#shadow)"
      />
      
      {/* Cart handle with organic curve */}
      <path
        d="M15 20 Q12 15 15 12 Q18 10 22 12 L25 15"
        fill="none"
        stroke="url(#mainGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#shadow)"
      />
      
      {/* Organic leaf sprouting from cart */}
      <path
        d="M45 20 Q40 5 50 5 Q65 5 70 15 Q75 25 65 30 Q55 35 50 30 Q45 25 45 20 Z"
        fill="url(#leafGradient)"
        filter="url(#shadow)"
      />
      
      {/* Leaf vein detail */}
      <path
        d="M50 8 Q55 15 60 22 Q58 25 55 27"
        fill="none"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Fresh produce items in cart */}
      <g opacity="0.9">
        {/* Apple */}
        <circle cx="35" cy="45" r="6" fill="#ef4444" />
        <path d="M35 39 Q37 37 39 39" fill="#22c55e" strokeWidth="1" />
        
        {/* Orange */}
        <circle cx="55" cy="40" r="5" fill="#f97316" />
        <circle cx="55" cy="40" r="3" fill="#fb923c" opacity="0.7" />
        
        {/* Carrot */}
        <ellipse cx="45" cy="55" rx="3" ry="8" fill="#f97316" />
        <path d="M45 47 L43 45 L45 43 L47 45 Z" fill="#22c55e" />
        
        {/* Lettuce */}
        <path d="M60 50 Q65 45 70 50 Q65 55 60 50 Z" fill="#22c55e" />
      </g>
      
      {/* Cart wheels with spokes */}
      <g>
        <circle cx="32" cy="82" r="6" fill="#374151" filter="url(#shadow)" />
        <circle cx="32" cy="82" r="3" fill="#6b7280" />
        <line x1="29" y1="82" x2="35" y2="82" stroke="#9ca3af" strokeWidth="1" />
        <line x1="32" y1="79" x2="32" y2="85" stroke="#9ca3af" strokeWidth="1" />
        
        <circle cx="68" cy="82" r="6" fill="#374151" filter="url(#shadow)" />
        <circle cx="68" cy="82" r="3" fill="#6b7280" />
        <line x1="65" y1="82" x2="71" y2="82" stroke="#9ca3af" strokeWidth="1" />
        <line x1="68" y1="79" x2="68" y2="85" stroke="#9ca3af" strokeWidth="1" />
      </g>
      
      {/* Freshness indicator dots */}
      <g opacity="0.8">
        <circle cx="25" cy="30" r="2" fill="#22c55e">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="35" r="1.5" fill="#22c55e">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default ThikGroIcon;