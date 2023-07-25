/// <reference types="react" />
interface Props {
    loadingEnd?: boolean
    loadingStart?: boolean
    label: string
    startIcon?: boolean
    endIcon?: boolean
    size?: 'large' | 'medium' | 'small'
    color?:
        | 'inherit'
        | 'warning'
        | 'info'
        | 'success'
        | 'secondary'
        | 'primary'
        | 'error'
        | 'inheritText'
        | 'inheritWhite'
    stateProp?: 'enabled' | 'focused' | 'hovered' | 'loading' | 'disabled'
    variant?: 'text' | 'outlined' | 'contained'
    className?: string
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        inheritText: true
        inheritWhite: true
    }
}
declare const BHMuiButton: ({
    loadingEnd,
    loadingStart,
    label,
    startIcon,
    endIcon,
    size,
    color,
    stateProp,
    variant,
    className,
}: Props) => JSX.Element

export { BHMuiButton }
