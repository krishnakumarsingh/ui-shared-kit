/// <reference types="react" />
import PropTypes from 'prop-types'
import './style.css'
interface Props {
    label: boolean
    color: 'primary' | 'inherit' | 'secondary'
    size: 'thirty-two-px' | 'sixteen-px'
    className: any
    ringClassName: any
    line: string
}
export declare const ProgressCircular: {
    ({ label, color, size, className, ringClassName, line }: Props): JSX.Element
    propTypes: {
        label: PropTypes.Requireable<boolean>
        color: PropTypes.Requireable<string>
        size: PropTypes.Requireable<string>
        line: PropTypes.Requireable<string>
    }
}
export {}
