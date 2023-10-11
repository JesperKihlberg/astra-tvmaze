import type { Meta, StoryObj } from "@storybook/react";

import { TextInputWithWrapper } from "../TextInput";
import CssVariables from "../../../CssVariables";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/TextInput",
  component: TextInputWithWrapper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    wrapper: { control: false, table: { disable: true } },
  },
} satisfies Meta<typeof TextInputWithWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    wrapper: CssVariables,
  },
};
