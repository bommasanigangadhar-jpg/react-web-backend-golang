import { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-lable">
                {props.title}
            </label>
            <input
                type={props.type}
                title={props.title}
                className={props.className}
                id={props.id}
                ref={ref}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
                value={props.value}
            />
            <div className={props.errorDev}>{props.errorMsg}</div>
        </div>
    )
})

export default CustomInput;