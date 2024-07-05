import {  FormControlLabelProps } from '@mui/material';
import {Dayjs} from 'dayjs'
import { BoxProps } from '@mui/material/Box';
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
    selected? : boolean
    handleChange? : (value:string | undefined) =>void
}
export interface ErrorObject{
    error : boolean   
}
export  interface User {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth : string;
    gender: string; // Consider using an enum or specific string values
    skinTone: string; // Consider using an enum or specific string values
    isChecked : boolean;
}
export  interface EmailFormProps {
    email: string;
    password: string;
}

export  interface PersonalInfoProps {
    firstName: string;
    lastName: string;
    dateOfBirth: string ; // Consider using a Date type if you're handling dates
    setFieldValue : (name : string, value:string) =>void
    gender :string
}
export interface DateProp {
    label: string;
    name: string;
   
}
export interface SkinToneProps{
    name : string,
    heading : string,
    firstImage :string,
    secondImage : string,
    thirdImage  :string,
    isSelected : boolean,
    handleSkinTone : (value:string) =>void,
    isError : boolean;
}
export interface CustomRadioButtonProps extends FormControlLabelProps {
    isError?: boolean | "" | undefined;
    isSelected?: boolean;
}
export  interface SkinToneBoxProps extends BoxProps {
    name?: string;
}