import React from 'react';

import './styles.scss';
import '../../Header/styles.scss';

interface SharedInputsTypes {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SharedInput = (props) => {
  return (
    <div className="shared-container">
      <label>{props.label}</label>
      <input
        id="disable-select"
        className={`shared-input ${props.className}`}
        type="text"
        name="url"
      />
    </div>
  );
};

export default SharedInput;
