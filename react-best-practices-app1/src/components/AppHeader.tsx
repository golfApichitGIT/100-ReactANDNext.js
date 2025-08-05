//#10 ให้ทำ Props เพื่อให้ Component ใช้ซ่ำได้

import AppButton from "./AppButton";

//11 ใช้ TypeScript เพื่อตรวจสอบ Props
type AppHeaderProps = {
  fullname: string;
  age?: number;
};

const AppHeader = ({ fullname, age = 0 }: AppHeaderProps) => { //14 ใช้ Detructuring ในการรับ Props
  
  return (
    <>
      <h1>
        Hello {fullname} {age}
      </h1>
      <AppButton label="Click Me" onClick={() =>{ alert ('#15 เรื่อง ไทป์ มีให้ใช้')}}/>
    </>
  );
};

export default AppHeader;
