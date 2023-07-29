import { Button } from '@mui/material'
import { ThemeProvider, styled } from '@mui/material/styles'
import type {} from '@mui/material/themeCssVarsAugmentation'
import PropTypes from 'prop-types'
import React, { useReducer } from 'react'
import theme from './theme'
import { ProgressCircular } from '../ProgressCircular'
import { Props } from './InfcButton'
import './style.scss'
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        inheritText: true
        inheritWhite: true
    }
}

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
    const [state, dispatch] = useReducer(reducer, {
        size: size || 'large',
        color: color || 'primary',
        state: stateProp || 'enabled',
        variant: variant || 'contained',
    })
    return (
        <ThemeProvider theme={theme}>
            <StyledButton
                className={`button ${stateProp} btn-override-${color} variant-${variant} size-${size} ${className}`}
                variant={variant}
                color={color}
                size={size}
                onMouseLeave={() => {
                    dispatch('mouse_leave')
                }}
                onMouseEnter={() => {
                    dispatch('mouse_enter')
                }}
            >
                {/* {stateProp === 'focused' && (
                    <img
                        className="focus-ripple"
                        alt="Focus ripple"
                        src={
                            '../../../static' + color === 'inheritText' &&
                            variant === 'contained' &&
                            size === 'large'
                                ? '/img/focusripple-140.svg'
                                : color === 'inheritWhite' &&
                                  variant === 'contained' &&
                                  size === 'large'
                                ? '/img/focusripple-138.svg'
                                : variant === 'contained' &&
                                  color === 'secondary' &&
                                  size === 'large'
                                ? '/img/focusripple-136.svg'
                                : variant === 'contained' &&
                                  color === 'error' &&
                                  size === 'large'
                                ? '/img/focusripple-134.svg'
                                : color === 'warning' &&
                                  variant === 'contained' &&
                                  size === 'large'
                                ? '/img/focusripple-132.svg'
                                : color === 'info' &&
                                  variant === 'contained' &&
                                  size === 'large'
                                ? '/img/focusripple-130.svg'
                                : variant === 'contained' &&
                                  color === 'success' &&
                                  size === 'large'
                                ? '/img/focusripple-128.svg'
                                : color === 'primary' &&
                                  variant === 'contained' &&
                                  size === 'medium'
                                ? '/img/focusripple-126.svg'
                                : color === 'inheritText' &&
                                  variant === 'contained' &&
                                  size === 'medium'
                                ? '/img/focusripple-124.svg'
                                : color === 'inheritWhite' &&
                                  variant === 'contained' &&
                                  size === 'medium'
                                ? '/img/focusripple-122.svg'
                                : color === 'secondary' &&
                                  variant === 'contained' &&
                                  size === 'medium'
                                ? '/img/focusripple-120.svg'
                                : variant === 'contained' &&
                                  color === 'error' &&
                                  size === 'medium'
                                ? '/img/focusripple-118.svg'
                                : color === 'warning' &&
                                  variant === 'contained' &&
                                  size === 'medium'
                                ? '/img/focusripple-116.svg'
                                : color === 'info' &&
                                  variant === 'contained' &&
                                  size === 'medium'
                                ? '/img/focusripple-114.svg'
                                : variant === 'contained' &&
                                  color === 'success' &&
                                  size === 'medium'
                                ? '/img/focusripple-112.svg'
                                : variant === 'contained' &&
                                  size === 'small' &&
                                  color === 'primary'
                                ? '/img/focusripple-110.svg'
                                : size === 'small' &&
                                  variant === 'contained' &&
                                  color === 'inheritText'
                                ? '/img/focusripple-108.svg'
                                : size === 'small' &&
                                  variant === 'contained' &&
                                  color === 'inheritWhite'
                                ? '/img/focusripple-106.svg'
                                : variant === 'contained' &&
                                  size === 'small' &&
                                  color === 'secondary'
                                ? '/img/focusripple-104.svg'
                                : variant === 'contained' &&
                                  size === 'small' &&
                                  color === 'error'
                                ? '/img/focusripple-102.svg'
                                : size === 'small' &&
                                  color === 'warning' &&
                                  variant === 'contained'
                                ? '/img/focusripple-100.svg'
                                : color === 'info' &&
                                  variant === 'contained' &&
                                  size === 'small'
                                ? '/img/focusripple-98.svg'
                                : variant === 'contained' &&
                                  size === 'small' &&
                                  color === 'success'
                                ? '/img/focusripple-96.svg'
                                : variant === 'outlined' &&
                                  color === 'primary' &&
                                  size === 'large'
                                ? '/img/focusripple-94.svg'
                                : color === 'inheritText' &&
                                  variant === 'outlined' &&
                                  size === 'large'
                                ? '/img/focusripple-92.svg'
                                : color === 'inheritWhite' &&
                                  variant === 'outlined' &&
                                  size === 'large'
                                ? '/img/focusripple-90.svg'
                                : variant === 'outlined' &&
                                  color === 'secondary' &&
                                  size === 'large'
                                ? '/img/focusripple-88.svg'
                                : variant === 'outlined' &&
                                  color === 'error' &&
                                  size === 'large'
                                ? '/img/focusripple-86.svg'
                                : color === 'warning' &&
                                  variant === 'outlined' &&
                                  size === 'large'
                                ? '/img/focusripple-84.svg'
                                : color === 'info' &&
                                  variant === 'outlined' &&
                                  size === 'large'
                                ? '/img/focusripple-82.svg'
                                : variant === 'outlined' &&
                                  color === 'success' &&
                                  size === 'large'
                                ? '/img/focusripple-80.svg'
                                : color === 'primary' &&
                                  variant === 'outlined' &&
                                  size === 'medium'
                                ? '/img/focusripple-78.svg'
                                : color === 'inheritText' &&
                                  variant === 'outlined' &&
                                  size === 'medium'
                                ? '/img/focusripple-76.svg'
                                : color === 'inheritWhite' &&
                                  variant === 'outlined' &&
                                  size === 'medium'
                                ? '/img/focusripple-74.svg'
                                : color === 'secondary' &&
                                  variant === 'outlined' &&
                                  size === 'medium'
                                ? '/img/focusripple-72.svg'
                                : variant === 'outlined' &&
                                  color === 'error' &&
                                  size === 'medium'
                                ? '/img/focusripple-70.svg'
                                : color === 'warning' &&
                                  variant === 'outlined' &&
                                  size === 'medium'
                                ? '/img/focusripple-68.svg'
                                : variant === 'outlined' &&
                                  color === 'info' &&
                                  size === 'medium'
                                ? '/img/focusripple-66.svg'
                                : variant === 'outlined' &&
                                  color === 'success' &&
                                  size === 'medium'
                                ? '/img/focusripple-64.svg'
                                : variant === 'outlined' &&
                                  size === 'small' &&
                                  color === 'primary'
                                ? '/img/focusripple-62.svg'
                                : color === 'inheritText' &&
                                  variant === 'outlined' &&
                                  size === 'small'
                                ? '/img/focusripple-60.svg'
                                : color === 'inheritWhite' &&
                                  variant === 'outlined' &&
                                  size === 'small'
                                ? '/img/focusripple-58.svg'
                                : variant === 'outlined' &&
                                  size === 'small' &&
                                  color === 'secondary'
                                ? '/img/focusripple-56.svg'
                                : variant === 'outlined' &&
                                  size === 'small' &&
                                  color === 'error'
                                ? '/img/focusripple-54.svg'
                                : color === 'warning' &&
                                  variant === 'outlined' &&
                                  size === 'small'
                                ? '/img/focusripple-52.svg'
                                : variant === 'outlined' &&
                                  color === 'info' &&
                                  size === 'small'
                                ? '/img/focusripple-50.svg'
                                : variant === 'outlined' &&
                                  size === 'small' &&
                                  color === 'success'
                                ? '/img/focusripple-48.svg'
                                : color === 'primary' &&
                                  variant === 'text' &&
                                  size === 'medium'
                                ? '/img/focusripple-46.svg'
                                : color === 'inheritText' &&
                                  variant === 'text' &&
                                  size === 'medium'
                                ? '/img/focusripple-44.svg'
                                : color === 'inheritWhite' &&
                                  variant === 'text' &&
                                  size === 'medium'
                                ? '/img/focusripple-42.svg'
                                : color === 'secondary' &&
                                  variant === 'text' &&
                                  size === 'medium'
                                ? '/img/focusripple-40.svg'
                                : variant === 'text' &&
                                  color === 'error' &&
                                  size === 'medium'
                                ? '/img/focusripple-38.svg'
                                : color === 'warning' &&
                                  variant === 'text' &&
                                  size === 'medium'
                                ? '/img/focusripple-36.svg'
                                : color === 'info' &&
                                  variant === 'text' &&
                                  size === 'medium'
                                ? '/img/focusripple-34.svg'
                                : variant === 'text' &&
                                  color === 'success' &&
                                  size === 'medium'
                                ? '/img/focusripple-32.svg'
                                : variant === 'text' &&
                                  color === 'primary' &&
                                  size === 'large'
                                ? '/img/focusripple-30.svg'
                                : color === 'inheritText' &&
                                  variant === 'text' &&
                                  size === 'large'
                                ? '/img/focusripple-28.svg'
                                : color === 'inheritWhite' &&
                                  variant === 'text' &&
                                  size === 'large'
                                ? '/img/focusripple-26.svg'
                                : variant === 'text' &&
                                  color === 'secondary' &&
                                  size === 'large'
                                ? '/img/focusripple-24.svg'
                                : variant === 'text' &&
                                  color === 'error' &&
                                  size === 'large'
                                ? '/img/focusripple-22.svg'
                                : color === 'warning' &&
                                  variant === 'text' &&
                                  size === 'large'
                                ? '/img/focusripple-20.svg'
                                : color === 'info' &&
                                  variant === 'text' &&
                                  size === 'large'
                                ? '/img/focusripple-18.svg'
                                : variant === 'text' &&
                                  color === 'success' &&
                                  size === 'large'
                                ? '/img/focusripple-16.svg'
                                : size === 'small' &&
                                  variant === 'text' &&
                                  color === 'primary'
                                ? '/img/focusripple-14.svg'
                                : color === 'inheritText' &&
                                  size === 'small' &&
                                  variant === 'text'
                                ? '/img/focusripple-12.svg'
                                : color === 'inheritWhite' &&
                                  size === 'small' &&
                                  variant === 'text'
                                ? '/img/focusripple-10.svg'
                                : size === 'small' &&
                                  variant === 'text' &&
                                  color === 'secondary'
                                ? '/img/focusripple-8.svg'
                                : size === 'small' &&
                                  variant === 'text' &&
                                  color === 'error'
                                ? '/img/focusripple-6.svg'
                                : color === 'warning' &&
                                  size === 'small' &&
                                  variant === 'text'
                                ? '/img/focusripple-4.svg'
                                : color === 'info' &&
                                  size === 'small' &&
                                  variant === 'text'
                                ? '/img/focusripple-2.svg'
                                : size === 'small' &&
                                  variant === 'text' &&
                                  color === 'success'
                                ? '/img/focusripple.svg'
                                : '/img/focusripple-142.svg'
                        }
                    />
                )} */}

                <div className="base">
                    {stateProp === 'loading' && (
                        <>
                            <>
                                {/* {loadingStart && (
                                    <ProgressCircular
                                        className="progress-circular-instance"
                                        color="primary"
                                        line={
                                            variant === 'contained'
                                                ? '/img/line-12.svg'
                                                : '/img/line.svg'
                                        }
                                        ringClassName={`${
                                            variant === 'contained' &&
                                            size === 'medium'
                                                ? 'class'
                                                : variant === 'contained' &&
                                                  size === 'small'
                                                ? 'class-2'
                                                : variant === 'outlined' &&
                                                  size === 'large'
                                                ? 'class-3'
                                                : variant === 'outlined' &&
                                                  size === 'medium'
                                                ? 'class-4'
                                                : variant === 'outlined' &&
                                                  size === 'small'
                                                ? 'class-5'
                                                : variant === 'text' &&
                                                  size === 'medium'
                                                ? 'class-6'
                                                : variant === 'text' &&
                                                  size === 'large'
                                                ? 'class-7'
                                                : size === 'small' &&
                                                  variant === 'text'
                                                ? 'class-8'
                                                : 'class-9'
                                        }`}
                                        size="sixteen-px"
                                    />
                                )} */}
                            </>
                        </>
                    )}

                    <div className="text-wrapper">{label}</div>
                </div>
            </StyledButton>
        </ThemeProvider>
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

BHMuiButton.propTypes = {
    loadingEnd: PropTypes.bool,
    loadingStart: PropTypes.bool,
    label: PropTypes.string,
    startIcon: PropTypes.bool,
    endIcon: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    color: PropTypes.oneOf([
        'warning',
        'info',
        'success',
        'secondary',
        'primary',
        'error',
        'inheritText',
        'inheritWhite'
    ]),
    stateProp: PropTypes.oneOf([
        'enabled',
        'focused',
        'hovered',
        'loading',
        'disabled',
    ]),
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}

export default BHMuiButton
