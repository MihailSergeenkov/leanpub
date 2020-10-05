import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ register, label, type, name, options, errors, defaultValue }) => {
  const component = type === 'select' ? (
    <select ref={register} name={name}>
      {
        options.map((author, index) => (
          <option value={author[0]} key={index}>
            {author[1]}
          </option>
        ))
      }
    </select>
  ) : (
      <input
        ref={register}
        name={name}
        type={type}
        defaultValue={defaultValue}
      />
    );

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {component}
      {errors && errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};

Field.propTypes = {
  register: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  errors: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default Field;
