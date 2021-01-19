import React from 'react';

const InputField = ({
  text, value, onChange, placeholder, type, id,
}) => (
  <div className="field">
    <label className="label" htmlFor={id}>
      {text}

      <div className="control">
        <input
          id={id}
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
        />
      </div>
    </label>
  </div>
);

export default InputField;
