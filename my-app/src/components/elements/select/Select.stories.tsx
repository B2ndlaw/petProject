import { action } from "@storybook/addon-actions";
import { Select } from "./Select";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

// export const Block: Story = {
//   args: {
//     onChange: action("value changed"),
//     items: [
//       { value: "1", title: "голова-ноги" },
//       { value: "2", title: "голова-грудь" },
//       { value: "3", title: "грудь-пах" },
//       { value: "4", title: "пах-ноги" },
//     ],
//   },
// };

// export const Attack: Story = {

//   args: {
//     onChange: action("value changed"),
//     items: [
//       { value: "1", title: "голова" },
//       { value: "2", title: "грудь" },
//       { value: "3", title: "пах" },
//       { value: "4", title: "ноги" },
//     ],
//   },
// };

export const Attack = () => {
const [value, setValue] = useState("Выбери атаку");
return( 
<Select value={value} 
  onChange={setValue} 
  items={[
    { value: "1", title: "голова"},
    { value: "2", title: "грудь" },
    { value: "3", title: "пах" },
    { value: "4", title: "ноги" }
  ]}/>
)
}

export const Block = () => {
  const [value, setValue] = useState("Выбери блок");
  return( 
  <Select value={value} 
    onChange={setValue} 
    items={[
      { value: "1", title: "голова-ноги" },
      { value: "2", title: "голова-грудь" },
      { value: "3", title: "грудь-пах" },
      { value: "4", title: "пах-ноги" },
    ]}/>
  )
  }

    