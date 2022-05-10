const FormInput = ({
  type,
  name,
  value,
  handleChange,
  label,
  refContainer,
}) => {
  // console.log(name, "name", value, "value");
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        // ref={refContainer}
        value={value}
        onChange={(e) => handleChange(e)}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;
