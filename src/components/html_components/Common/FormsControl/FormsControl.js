import React from "react";
import style from './FormsControl.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched,error}, ...props}) => {
    const Error = touched && error;
    return (
        <div>
            <div className={Error && style.error}>
                {props.children}
            </div>
            <div className={style.error}>
                {Error && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return  <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder,component,name,type,validate) => {
    return <div><Field validate={validate} placeholder={placeholder} component={component}
                  name={name} type={type}/></div>
}
