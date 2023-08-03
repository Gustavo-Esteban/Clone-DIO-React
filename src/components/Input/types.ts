export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    leftIcon?: React.ReactNode;
    name: string;
    control: any;
    errorMessage?: string;
    placeholder?: string;
    type?:string;
}