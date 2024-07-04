import {Dayjs} from 'dayjs'
export interface LoginType {
    email: string,
    password: string
}
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    endadornment?: React.ReactNode;
    inputProps?: object; 
    value? : string;
    emailfound? : boolean,
    error? : boolean | undefined
}
export interface ErrorObject{
    error : boolean   
}
export  interface User {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date; // Consider using a Date type if you're handling dates
    gender: string; // Consider using an enum or specific string values
    skinTone: string; // Consider using an enum or specific string values
}
export  interface EmailFormProps {
    email: string;
    password: string;
}

export  interface PersonalInfoProps {
    firstName: string;
    lastName: string;
    dateOfBirth: Date ; // Consider using a Date type if you're handling dates
    setFieldValue : (name : string, value:string) =>void
    gender :string
}
export interface DateProp {
    label: string;
    name: string;
    value  :Date | string
}
export interface SkinToneProps{
    heading : string,
    firstImage :string,
    secondImage : string,
    thirdImage  :string,
    isSelected : boolean,
    handleSkinTone : (value:string) =>void
}