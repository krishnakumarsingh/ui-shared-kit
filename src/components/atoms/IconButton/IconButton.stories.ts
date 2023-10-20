import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, within } from "@storybook/testing-library";
import IconButton from "./index";

const meta: Meta<typeof IconButton> = {
	title: "Design System / Atoms / IconButton",
	component: IconButton,
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

export const Primary: Story = {
	args: {
		color: "primary",
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

export const Secondary: Story = {
	args: {
		color: "secondary",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `outlined`.",
			},
		},
	},
};

export const Info: Story = {
	args: {
		color: "info",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `text`.",
			},
		},
	},
};

export const Error: Story = {
	args: {
		color: "error",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `text`.",
			},
		},
	},
};

export const Success: Story = {
	args: {
		color: "success",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `text`.",
			},
		},
	},
};

export const Warning: Story = {
	args: {
		color: "warning",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `text`.",
			},
		},
	},
};
