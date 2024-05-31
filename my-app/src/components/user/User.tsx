type UserType = {
  nickName: string;
  email: string;
  login: string;
  password: string;
  isLogin: boolean;
  rase: string;
  class: string;
  gender: string
};

export const User1 = {
    nickName: "Lord",
    rase: "Elf",
    userClass: "rogue",
    role: "user",
    gender: "male"

} 

const { nickName, rase, userClass, role = "guest"} = User1;




