import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href, 
  to, 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClassName = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const allClassNames = `${baseClassName} ${className}`;
  
  // External link
  if (href) {
    return (
      <a 
        href={href} 
        className={allClassNames}
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Internal router link
  if (to) {
    return (
      <Link 
        to={to} 
        className={allClassNames}
        {...props}
      >
        {children}
      </Link>
    );
  }
  
  // Regular button
  return (
    <button 
      className={allClassNames} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;