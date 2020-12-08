import React, { useState, useEffect } from 'react';
import { Sun, Moon } from '@theme/icons';
import './theme-toggle.css';

function ThemeToggle({checked, onChange}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, []);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onChange(isChecked);
  }

  return (
    <button className='theme-toggle' onClick={handleClick}>
      {isChecked ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeToggle;
