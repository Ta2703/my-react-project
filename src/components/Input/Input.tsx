import {FC} from "react";
import "./Input.css";

type InputProps = {
    className?: string;
    type?: string;
    onChange?: (event: any) => void;
    value?: any;
    required?: string;
    placeholder?: string;
  };
  
  const Input: FC<InputProps> = ({
    className,
    type,
    onChange,
    value,
    required,
    props,
    placeholder,
  }: any) => {
    return (
      <input
        value={value}
        className={className}
        required={required}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  };

// const Input = (props: any) => {
//     return <input 
//     className={props.className} 
//     type={props.type} 
//     required={props.required}
//     onChange={props.onChange}/>
// };

export default Input;