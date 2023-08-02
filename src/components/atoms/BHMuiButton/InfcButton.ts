export interface Props {
    loadingEnd?: boolean
    loadingStart?: boolean
    label: string
    startIcon?: boolean
    endIcon?: boolean
    size?: 'large' | 'medium' | 'small'
    color?:
        | 'warning'
        | 'info'
        | 'success'
        | 'secondary'
        | 'primary'
        | 'error'
        // | 'inheritText'
        // | 'inheritWhite'
        | 'inherit'
    stateProp?: 'enabled' | 'focused' | 'hovered' | 'loading' | 'disabled'
    variant?: 'text' | 'outlined' | 'contained'
    className?: string
}

// BHMuiButton.propTypes = {
//     loadingEnd: PropTypes.bool,
//     loadingStart: PropTypes.bool,
//     label: PropTypes.string,
//     startIcon: PropTypes.bool,
//     endIcon: PropTypes.bool,
//     size: PropTypes.oneOf(['large', 'medium', 'small']),
//     color: PropTypes.oneOf([
//         'warning',
//         'info',
//         'success',
//         'secondary',
//         'primary',
//         'error',
//         'inheritText',
//         'inheritWhite'
//     ]),
//     stateProp: PropTypes.oneOf([
//         'enabled',
//         'focused',
//         'hovered',
//         'loading',
//         'disabled',
//     ]),
//     variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
// }
