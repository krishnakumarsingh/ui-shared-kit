/// <reference types="react" />
import { Props } from './InfcButton'
import './style.scss'
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
export default BHMuiButton
