import type { Meta, StoryObj } from "@storybook/react";
import { QuoteBlock } from "../components/QuoteBlock/QuoteBlock";
import { withKnobs } from "@storybook/addon-knobs";
import dummy from "./dummy";

const meta = {
  title: "Example/QuoteBlock",
  component: QuoteBlock,
  decorators: [withKnobs],
  argTypes: {},
} satisfies Meta<typeof QuoteBlock>;
export default meta;
type Story = StoryObj<typeof meta>;

export const BrandA: Story = {
  args: {
    brand: "A",
    data: dummy,
  },
};

export const BrandB: Story = {
  args: {
    brand: "B",
    data: dummy,
  },
};
