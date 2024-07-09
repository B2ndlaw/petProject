import { useState, KeyboardEvent, useEffect } from "react";
import { S } from "./Select.Styles";

type ItemsType = {
  value: string;
  title: string;
};

type SelectType = {
  value: any;
  onChange: (value: string) => void;
  items: Array<ItemsType>;
};

export function Select(props: SelectType) {
  let [active, setActive] = useState(false);
  let [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  useEffect(() => {
    setHoveredElementValue(props.value);
  }, [props.value]);

  const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);

  const toggleItems = () => setActive(!active);
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement =
            e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;
          }
        }
      }
      props.onChange(props.items[0].value);
    }
    if (e.key === "Escape" || e.key === "Enter") {
      setActive(false);
    }
  };

  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItems();
  };
  return (
    <>
      <S.Select>
        <span onClick={toggleItems}>{props.value}</span>
        {active && (
          <S.Items>
            {props.items.map((i) => (
              <S.Item
                targetColor={hoveredItem === i}
                key={i.value}
                onMouseEnter={() => setHoveredElementValue(i.value)}
                onKeyUp={onKeyUp}
                onClick={() => {
                  onItemClick(i.title);
                }}
              >
                {i.title}
              </S.Item>
            ))}
          </S.Items>
        )}
      </S.Select>
    </>
  );
}
