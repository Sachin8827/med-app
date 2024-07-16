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
    handleNext : (values: any, {}:any) => void
}

export  interface PersonalInfoProps {
    firstName: string;
    lastName: string;
    dateOfBirth: string ; // Consider using a Date type if you're handling dates
    handlePrevious : () =>void
    gender :string;
    handleNext : (values: any, {}:any) => void
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
export interface GenderProps {
    isSelected: boolean,
    // onClick: (value: string, setFieldvalue: (key: string, value: string) => void) => void,
    onClick: any
    name: string,
    value: string,
    label: string
}
export  interface InfectionIntensity extends BoxProps {
    name: string;
}
export interface DiseaseInputFieldProps{
    image  : string,
    isSelected : boolean,
    name : string,
    num : number,
    onClick : () => void
}
export interface HomePageCardProps {
    heading: string,
    content: string,
    onclick   :() =>void
}
export interface SymptomsData {
    additionalSymptoms: string;
    bodyParts: string[];
    crustsIntensity: number;
    drynessIntensity: number;
    itchingState: number;
    psychologicalState: number;
    rednessIntensity: number;
    scratchMarksIntensity: number;
    skinThickening: number;
    sleepState: number;
    swellingIntensity: number;
  }
  export interface UserProfileProps extends BoxProps{
    isSelected : boolean
  }
  export interface UserProfileCardProps {
    name  :string,
    onclick : () =>void,
    caption : string,
    isActive : boolean
}