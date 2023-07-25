/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

interface Props {
    label: boolean
    color: 'primary' | 'inherit' | 'secondary'
    size: 'thirty-two-px' | 'sixteen-px'
    className: any
    ringClassName: any
    line: string
}

export const ProgressCircular = ({
    label,
    color,
    size,
    className,
    ringClassName,
    line = '/img/line-22.svg',
}: Props): JSX.Element => {
    return (
        <div className={`progress-circular ${className}`}>
            <div className={`ring ${size} color-0-${color} ${ringClassName}`}>
                <img
                    className="line"
                    alt="Line"
                    src={
                        size === 'sixteen-px' && color === 'primary'
                            ? line
                            : size === 'thirty-two-px' && color === 'secondary'
                            ? '/img/line-21.svg'
                            : size === 'sixteen-px' && color === 'secondary'
                            ? '/img/line-20.svg'
                            : size === 'thirty-two-px' && color === 'inherit'
                            ? '/img/line-19.svg'
                            : color === 'inherit' && size === 'sixteen-px'
                            ? '/img/line-18.svg'
                            : '/img/line-23.svg'
                    }
                />
            </div>
            <div className={`div size-0-${size}`} />
        </div>
    )
}

ProgressCircular.propTypes = {
    label: PropTypes.bool,
    color: PropTypes.oneOf(['primary', 'inherit', 'secondary']),
    size: PropTypes.oneOf(['thirty-two-px', 'sixteen-px']),
    line: PropTypes.string,
}
