
import {S} from "./Menu.Styles"

type MenuType = {
  menuItems: Array<{id: string, href: string, name: string}>
 
};

export const Menu = (props: MenuType) => {
  return (
<S.Menu>
    <S.NavMenu>
      {props.menuItems.map((m) => {
        return (
          <S.NavMenuItem key={m.id} href={m.href}>
            {m.name}
          </S.NavMenuItem>
        );
      })}
    </S.NavMenu>
    </S.Menu>
  );
};

