import { Button } from '@mui/material'
import { ThemeProvider, styled } from '@mui/material/styles'
import type {} from '@mui/material/themeCssVarsAugmentation'
import PropTypes from 'prop-types'
import React from 'react'
import theme from './theme'
// import { ProgressCircular } from '../ProgressCircular'
import { Props } from './InfcButton'
import './style.scss'
// declare module '@mui/material/Button' {
//     interface ButtonPropsColorOverrides {
//         inheritText: true
//         inheritWhite: true
//     }
// }

const StyledButton = styled(Button)(({ theme, ...props }) => ({
    backgroundColor: theme?.vars?.palette?.primary?.main,
    color: theme?.vars?.palette?.primary?.contrastText,
}))

const BHMuiButton = ({
    loadingEnd,
    loadingStart = true,
    label = 'label',
    startIcon,
    endIcon,
    size = 'large',
    color = 'primary',
    stateProp = 'enabled',
    variant = 'outlined',
    className = '',
}: Props): JSX.Element => {
    /*const [state, dispatch] = useReducer(reducer, {
        size: size || 'large',
        color: color || 'primary',
        state: stateProp || 'enabled',
        variant: variant || 'contained',
    })*/
    return (
        // <ThemeProvider theme={theme}>
        <Button
            className={`button ${stateProp} btn-override-${color} variant-${variant} size-${size} ${className}`}
            variant={variant}
            color={color}
            size={size}
            onMouseLeave={() => {
                console.log('mouse_leave')
            }}
            onMouseEnter={() => {
                console.log('mouse_enter')
            }}
        >
            <div className="base">
                <div className="text-wrapper">{label}</div>
            </div>
        </Button>
        // </ThemeProvider>
    )
}

function reducer(state: any, action: any) {
    switch (action) {
        case 'mouse_enter':
            return {
                ...state,
                state: 'hovered',
            }

        case 'mouse_leave':
            return {
                ...state,
                state: 'enabled',
            }
    }

    return state
}

export default BHMuiButton
