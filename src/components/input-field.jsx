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
          className={`input ${!value ? 'is-danger' : 'is-primary'}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
        />
      </div>

      {!value && <p className="help is-danger">This field is required</p>}
    </label>
  </div>
);

export default InputField;
