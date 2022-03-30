const InputField = (props) => {
  const {
    inputType,
    classStyle,
    inputName,
    inputRef,
    inputValue,
    data,
    setData,
    label,
    useForm,
    inputRequire
  } = props;
  console.log(useForm);
  return (
    <>
      <input
        type={inputType}
        className={classStyle}
        name={inputName}
        value={inputValue}
        ref={inputRef}
        required="required"
        {...useForm({inputName}, inputRequire)}
        onChange={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
      />
      <span>{label}</span>
    </>
  );
};

export default InputField;
