import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
	title: "Design System / Atoms / Typography",
	component: Typography,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple typography with default properties.",
			},
		},
	},
	tags: ["autodocs"],
    argTypes: {
		children: {
			description:
				"The content of the component.",
			table: {
				defaultValue: { summary: "text" },
				type: { summary: "string" },
			},
		},
		align: {
			options: ['center' , 'inherit' , 'justify' , 'left' , 'right'],
			control: { type: "select" },
			description: `The alignment to use.<br/>
                <b>Type:</b><code>'center' | 'inherit' | 'justify' | 'left' | 'right'</code><br/>`,
			table: {
				defaultValue: { summary: "center" },
				type: { summary: "string" },
			},
		},
		variant: {
			options: [ 'body1' , 'body2' , 'button' , 'caption' , 'h1' , 'h2' , 'h3' , 'h4' , 'h5' , 'h6' , 'inherit' , 'overline' , 'subtitle1' , 'subtitle2'],
			control: { type: "select" },
			description:
				"The size of the component. small is equivalent to the dense select styling. `body1`, `body2`,`button`, `caption`,`h1`, `h2`,`h3`, `h4`, `h5`, `h6`,`inherit`,`overline`,`subtitle1`,`subtitle2` ",
			table: {
				defaultValue: { summary: "body1" },
				type: { summary: "string" },
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
	args: {
		children: "Simple Typography Text",
		variant: "h1",
	},
	play:  ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		 step("Check Label", async () => {
			await canvas.getByText("Simple Typography Text");
		});
	},
};

