type UserType = {
  //Authorization
  email: string;
  login: string;
  password: string;
  role: string;
  //Game data
  nickName: string;
  isLogin: boolean;
  class: "samurai" | "ronin" | "ony";
  gender: string;
  level: number;
  experience: number;
  coin: number
};

  

export const User = (props: UserType) => {
return(
<div></div>
)


}



