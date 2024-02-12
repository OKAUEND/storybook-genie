import type { Meta, StoryObj } from "@storybook/react";
import { CaseOne } from "./CaseOne";

type Story = StoryObj<typeof CaseOne>;

const meta: Meta = {
  title: "CaseOne",
  component: CaseOne,
};

export default meta;

export const Template: Story = {};
