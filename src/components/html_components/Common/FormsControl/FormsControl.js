import React from "react"
import style from './FormsControl.module.css'

const FormControl = ({input, meta, ...props}) => {
    const Error = meta.touched && meta.error
    return (<div>
            <div className={Error && style.error}>
                {props.children}
            </div>
            <div className={style.error}>
                {Error && <span>{meta.error}</span>}
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

