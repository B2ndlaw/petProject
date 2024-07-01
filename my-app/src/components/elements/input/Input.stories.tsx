import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    changeInput: ()=>{},
    title:"start",


  },
};

