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
}