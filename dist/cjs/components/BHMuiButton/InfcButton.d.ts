export interface Props {
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
