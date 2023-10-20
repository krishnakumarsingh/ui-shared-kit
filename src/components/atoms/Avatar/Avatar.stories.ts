import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import Avatar from "./index";


function stringAvatar(name: string) {
	const newName = name.split(' ').length;
	const nameInitials = newName === 2 ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : `${name.split(' ')[0][0]}`;
    return {
      children: `${nameInitials}`,
    };
  }

const meta: Meta<typeof Avatar> = {
	title: "Design System / Atoms / Avatar",
	component: Avatar,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple avatar with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
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
		size: {
			options: ["small", "medium", "large"],
			control: { type: "select" },
			description:
				"The size of the component.  `small`, `medium`, `large`,",
			table: {
				defaultValue: { summary: "small" },
				type: { summary: "string" },
			},
		},
	},
	};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
	args: {
		variant: 'circular',
		...stringAvatar('Test Name'),
		size: 'large',
		badge: false
	},
	play:  ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		 step("Check Label", async () => {
			await canvas.getByText("TN");
		});
	},
};

