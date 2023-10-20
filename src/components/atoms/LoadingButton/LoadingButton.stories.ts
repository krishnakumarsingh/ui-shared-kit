import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, within } from "@storybook/testing-library";
import LoadingButton from "./index";

const meta: Meta<typeof LoadingButton> = {
	title: "Design System / Atoms / LoadingButton",
	component: LoadingButton,
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
			description:
				"The size of the component. small is equivalent to the dense button styling. `large`, `medium`, `small` ",
			table: {
				defaultValue: { summary: "label" },
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
		variant: "contained",
		loading: true,
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
		variant: "outlined",
		loading: true,
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
		variant: "text",
		loading: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple buttom with default properties `text`.",
			},
		},
	},
};
