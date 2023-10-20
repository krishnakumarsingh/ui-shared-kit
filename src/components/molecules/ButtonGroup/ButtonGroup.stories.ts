import type { Meta, StoryObj } from "@storybook/react";

import { fireEvent, within } from "@storybook/testing-library";
import ButtonGroup from "./index";

const meta: Meta<typeof ButtonGroup> = {
	title: "Design System / Molecules / ButtonGroup",
	component: ButtonGroup,
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
		variant: {
			options: ["contained", "outlined", "text"],
			control: { type: "select" },
			description: `The variant to use.<br/>
                <b>Type:</b><code>'contained' | 'outlined' | 'text' | string</code><br/>`,
			table: {
				defaultValue: { summary: "contained" },
				type: { summary: "string" },
			},
		},
		size: {
			options: ["large", "medium", "small"],
			control: { type: "select" },
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
		children: {
			control: false
		}
	},
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Contained: Story = {
	args: {
		color: "primary",
		variant: "contained",
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
			await fireEvent.click(canvas.getByRole("group"));
		});
		await step("Check Label Text", async () => {
			await fireEvent.click(canvas.getAllByText("One")[0]);
		});
	},
};

export const VerticalContained: Story = {
	args: {
		color: "primary",
		variant: "contained",
		orientation: "vertical",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `contained`.",
			},
		},
	},
};

export const Outlined: Story = {
	args: {
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

export const VerticalOutlined: Story = {
	args: {
		color: "primary",
		variant: "outlined",
		orientation: "vertical",
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

export const VerticalText: Story = {
	args: {
		color: "primary",
		variant: "text",
		orientation: "vertical",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `text`.",
			},
		},
	},
};
