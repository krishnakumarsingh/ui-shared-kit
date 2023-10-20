import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, screen } from "@storybook/testing-library";
import Tooltip from "./index";


const meta: Meta<typeof Tooltip> = {
	title: "Design System / Atoms / Tooltip",
	component: Tooltip,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple tooltip with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		placement: {
			options: [ 'bottom-end' , 'bottom-start' , 'bottom' , 'left-end' , 'left-start' , 'left' , 'right-end' , 'right-start' , 'right' , 'top-end' , 'top-start' , 'top'],
			control: { type: "select" },
			description:
				"The placement of the tooltip component.",
			table: {
				defaultValue: { summary: "bottom" },
				type: { summary: "string" },
			},
		},
	},
	};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
	args: {
		title: "My tooltip",
		arrow: true,
		placement: "bottom",
		children: "Tooltip"
	},
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		userEvent.hover(canvas.getByText("Tooltip"));

		await step("Check Title",  () => {
			screen.findByText("My tooltip")
	   });
	},
};

