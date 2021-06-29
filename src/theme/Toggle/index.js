import React, { useState, useRef, memo } from 'react';
import { Moon, Sun } from '@theme/icons';
import './styles.css';

const Toggle = memo(({ checked: defaultChecked, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <div>
      <button className="theme-toggle" onClick={() => inputRef.current?.click()}>
        {checked ? <Sun /> : <Moon />}
      </button>

      <input
        ref={inputRef}
        checked={checked}
        type="checkbox"
        className="theme-toggle-screenreader-only"
        aria-label="Switch between dark and light mode"
        onChange={onChange}
        onClick={() => setChecked(!checked)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
});

export default function (props) {
  return <Toggle {...props} />;
}
