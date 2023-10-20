import type { Meta, StoryObj } from "@storybook/react";
import AvatarGroup from "./index";

const meta: Meta<typeof AvatarGroup> = {
	title: "Design System / Molecules / AvatarGroup",
	component: AvatarGroup,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple avatar group with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		max: {
			description:
				"Max avatars to show before +x.",
			table: {
				defaultValue: { summary: 5 },
				type: { summary: "number" },
			},
		},
		spacing: {
			options: ["small", "medium"],
			control: { type: "select" },
			description:
				"Spacing between avatars. `small`, `medium`",
			table: {
				defaultValue: { summary: "medium" },
				type: { summary: "string" },
			},
		},
		variant: {
			options: [ 'circular' , 'rounded' , 'square'],
			control: { type: "select" },
			description:
				"The variant of the component. `circular`, `rounded`,`square`",
			table: {
				defaultValue: { summary: "circular" },
				type: { summary: "string" },
			},
		},
	},
	};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
	args: {
		max: 3,
		spacing: 'small',
		variant: 'circular'
	},
};

