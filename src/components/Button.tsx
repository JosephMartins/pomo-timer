import { ButtonContainer } from './button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonProps{
  variant?: ButtonVariant;
}

const buttonVariants = {
  primary: "pruple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <ButtonContainer variant={variant}>Enviar</ButtonContainer>
  )
}
