import { useState } from "react";
import { Select } from "../elements/select/Select";



export const Attack = () => {
    const [attackValue, setAttackValue] = useState("Выбери атаку");
    return( 
    <Select value={attackValue} 
      onChange={setAttackValue} 
      items={[
        { value: "1", title: "голова"},
        { value: "2", title: "грудь" },
        { value: "3", title: "пах" },
        { value: "4", title: "ноги" }
      ]}/>
    )
    }