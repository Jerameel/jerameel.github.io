export interface TextFieldProps {
  id?: string;
  label?: string;
  value?: string;
  type?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  onBlur?: () => void;
  secured?: boolean;
  error?: string;
  prefix?: string;
  LeftComponent?: React.ReactNode;
  className?: string;
  InputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  style?: React.CSSProperties;
}
