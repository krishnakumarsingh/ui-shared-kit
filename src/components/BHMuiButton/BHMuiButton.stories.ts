import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, userEvent, within } from '@storybook/testing-library'
import BHMuiButton from './index'

const meta: Meta<typeof BHMuiButton> = {
    title: 'Atom / Button',
    component: BHMuiButton,
    parameters: {
        // layout: 'centered',
        docs: {
            description: {
                component:
                    'Showing a simple buttom with default properties `large`, `primary`, `enabled`, `contained`.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            description:
                'The size of the component. small is equivalent to the dense button styling. `large`, `medium`, `small` ',
            table: {
                defaultValue: { summary: 'label' },
                type: { summary: 'string' },
            },
        },
        size: {
            options: ['large', 'medium', 'small'],
            control: { type: 'select' },
            description:
                'The size of the component. small is equivalent to the dense button styling. `large`, `medium`, `small` ',
            table: {
                defaultValue: { summary: 'large' },
                type: { summary: 'string' },
            },
        },
        color: {
            options: [
                'primary',
                'secondary',
                'error',
                'warning',
                'info',
                'success',
                'inheritText',
                'inheritWhite',
            ],
            control: { type: 'select' },
            description:
                'The color of the component. It supports both default and custom theme colors.',
            table: {
                defaultValue: { summary: 'primary' },
                type: { summary: 'string' },
            },
        },
        stateProp: {
            options: ['enabled', 'focused', 'hovered', 'loading', 'disabled'],
            control: { type: 'select' },
            description: 'If true, the component is disabled.',
            table: {
                defaultValue: { summary: 'enabled' },
                type: { summary: 'string' },
            },
        },
        variant: {
            options: ['contained', 'outlined', 'text'],
            control: { type: 'select' },
            description: 'The variant to use.',
            table: {
                defaultValue: { summary: 'contained' },
                type: { summary: 'string' },
            },
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        console.log(canvas)
        await fireEvent.click(canvas.getByRole('button'))
    },
}
export default meta
type Story = StoryObj<typeof meta>

export const Contained = {
    args: {
        label: 'Label',
        size: 'large',
        color: 'primary',
        stateProp: 'enabled',
        variant: 'contained',
    },
    parameters: {
        docs: {
            description: {
                story: 'Showing a simple buttom with default properties `contained`.',
            },
        },
    },
}

export const Outlined = {
    args: {
        label: 'Label',
        size: 'large',
        color: 'primary',
        stateProp: 'enabled',
        variant: 'outlined',
    },
    parameters: {
        docs: {
            description: {
                story: 'Showing a simple buttom with default properties `outlined`.',
            },
        },
    },
}

export const Text = {
    args: {
        label: 'Label',
        size: 'large',
        color: 'primary',
        stateProp: 'enabled',
        variant: 'text',
    },
    parameters: {
        docs: {
            description: {
                story: 'Showing a simple buttom with default properties `outlined`.',
            },
        },
    },
}

// export const Primary: Story = {
//     args: {
//         label: 'Primary',
//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Another description on the story, overriding the comments',
//             },
//         },
//     },
// }

// export const Secondary: Story = {
//     args: {
//         label: 'Secondary',
//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Another description on the story, overriding the comments',
//             },
//         },
//     },
// }

// export const Error: Story = {
//     args: {
//         label: 'Error',
//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Another description on the story, overriding the comments',
//             },
//         },
//     },
// }

// export const Warning: Story = {
//     args: {
//         label: 'Warning',
//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Another description on the story, overriding the comments',
//             },
//         },
//     },
// }

// export const Info: Story = {
//     args: {
//         label: 'Info',
//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Another description on the story, overriding the comments',
//             },
//         },
//     },
// }

// export const Success: Story = {
//     args: {
//         label: 'Success',
//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Another description on the story, overriding the comments',
//             },
//         },
//     },
// }

// export const InheritText: Story = {
//     args: {
//         label: 'Inherit Text',
//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Another description on the story, overriding the comments',
//             },
//         },
//     },
// }

// export const InheritWhite: Story = {
//     args: {
//         label: 'Inherit White',
//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Another description on the story, overriding the comments',
//             },
//         },
//     },
// }
