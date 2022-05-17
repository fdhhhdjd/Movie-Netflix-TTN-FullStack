import { useForm } from "react-hook-form";

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
    inputRequire,
  } = props;
  const {
    register,
    formState: { errors },
  } = useForm();
  console.log(errors);

  return (
    <>
      <input
        type={inputType}
        className={classStyle}
        name={inputName}
        value={inputValue}
        ref={inputRef}
        required="required"
        {...register(inputName, inputRequire)}
        // onChange={(e) => {
        //   const { name, value } = e.target;
        //   setData({ ...data, [name]: value });
        // }}
      />
      <span>{label}</span>
      <span style={{ color: "red" }}>
        {errors.email?.type === "required" &&
          `Mời bạn nhập ${inputName} đầy đủ! `}
        {errors?.email?.type === "pattern" &&
          `${inputName} của bạn không hợp lệ!`}
      </span>
    </>
  );
};

export default InputField;
