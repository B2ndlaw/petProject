import styled from "styled-components";

// type MenuType = {
//     title: string
//     href: string
// }

// {props.tasks.map((t) => {
//   const onRemoveHandler = () => props.removeTask(t.id);
//   return (
//     <li key={t.id}>
//       <input type="checkbox" checked={t.isDone} />
//       <span>{t.title}</span>
//       <button onClick={onRemoveHandler}>x</button>
//     </li>
//   );
// })}


// type MenuItemType = {
//   title: string,
//   href: string
// }

// const menuItems = ["Домой", "Аренда", "Сообщения", "Персонаж", "Настройки", "Выход"];

// const menuItemsList = menuItems.map((m: MenuItemType)=>{<li key={}>{m}</li>})

//const menuItems = [{title:"Домой"}, {title:"Домой"}, {title:"Домой"}, {title:"Домой"}, {title:"Домой"}, {title:"Домой"}];
// const menuItemsList = menuItem.map((m)=>{<li key={}>{m.title}</li>})

export const Menu = () => {
  return (
    <StylesMenu>
      <p>Меню</p>
      <ul>
     <li>1</li>
     <li>2</li>
     <li>3</li>
      </ul>
    </StylesMenu>
  );
};

const StylesMenu = styled.nav`
  grid-area: n;
  border: 1px solid green;
`;
