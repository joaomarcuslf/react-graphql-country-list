import React from 'react';

const ButtonGroup = ({ groups }) => (
  <div className="columns">
    {groups.map((button) => (
      <div className="column" key={button.text}>
        <button
          type={button.type || 'button'}
          className={`button is-medium is-fullwidth ${button.className || 'is-info'}`}
          onClick={button.handler}
          disabled={button.disabled}
        >
          {button.text}
        </button>
      </div>
    ))}
  </div>
);

export default ButtonGroup;
