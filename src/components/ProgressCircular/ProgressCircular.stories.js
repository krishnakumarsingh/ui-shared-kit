import { ProgressCircular } from '.'

export default {
    title: 'Components/ProgressCircular',
    component: ProgressCircular,
    argTypes: {
        color: {
            options: ['primary', 'inherit', 'secondary'],
            control: { type: 'select' },
        },
        size: {
            options: ['thirty-two-px', 'sixteen-px'],
            control: { type: 'select' },
        },
    },
}

export const Default = {
    args: {
        label: false,
        color: 'primary',
        size: 'thirty-two-px',
        className: {},
        ringClassName: {},
        line: '/img/line-22.svg',
    },
}
