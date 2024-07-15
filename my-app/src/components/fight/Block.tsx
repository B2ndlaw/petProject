import { useState } from "react";
import { Select } from "../elements/select/Select";

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