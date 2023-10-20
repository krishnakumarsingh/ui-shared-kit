import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, within } from "@storybook/testing-library";
import Button from "./index";

const meta: Meta<typeof Button> = {
	title: "Design System / Atoms / Button",
	component: Button,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple buttom with default properties `large`, `primary`, `enabled`, `contained`.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "The content of the component.",
			table: {
				defaultValue: { summary: "label" },
				type: { summary: "string" },
			},
		},
		variant: {
			options: ["contained", "outlined", "text"],
			control: { type: "radio" },
			description: `The variant to use.<br/>
                <b>Type:</b><code>'contained' | 'outlined' | 'text' | string</code><br/>`,
			table: {
				defaultValue: { summary: "contained" },
				type: { summary: "string" },
			},
		},
		textTransform: {
			options: ["capitalize", "lowercase", "uppercase"],
			control: { type: "radio" },
			description: `The Text Transform to use.<br/>
                <b>Type:</b><code>'capitalize' | 'lowercase' | 'uppercase' | string</code><br/>`,
			table: {
				defaultValue: { summary: "capitalize" },
				type: { summary: "string" },
			},
		},
		size: {
			options: ["large", "medium", "small"],
			control: { type: "radio" },
			description:
				"The size of the component. small is equivalent to the dense button styling. `large`, `medium`, `small` ",
			table: {
				defaultValue: { summary: "large" },
				type: { summary: "string" },
			},
		},
		color: {
			options: ["primary", "secondary", "error", "warning", "info", "success", "inheritText", "inheritWhite"],
			control: { type: "select" },
			description: "The color of the component. It supports both default and custom theme colors.",
			table: {
				defaultValue: { summary: "primary" },
				type: { summary: "string" },
			},
		},
		disabled: {
			options: ["enabled", "disabled"],
			control: { type: "boolean" },
			description: "If true, the component is disabled.",
			table: {
				defaultValue: { summary: "enabled" },
				type: { summary: "string" },
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Contained: Story = {
	args: {
		label: "Label",
		size: "large",
		color: "primary",
		variant: "contained",
		textTransform: "capitalize",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `contained`.",
			},
		},
	},
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		await step("Check Role", async () => {
			await fireEvent.click(canvas.getByRole("button"));
		});
		await step("Check ContainedPrimary class", async () => {
			let elementsClassList = Array.from(canvas.getByRole("button").classList);
			await elementsClassList.includes("MuiButton-containedPrimary");
		});
	},
};

export const Outlined: Story = {
	args: {
		label: "Label",
		size: "large",
		color: "primary",
		variant: "outlined",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `outlined`.",
			},
		},
	},
};

export const Text: Story = {
	args: {
		label: "Label",
		size: "large",
		color: "primary",
		variant: "text",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `text`.",
			},
		},
	},
};
