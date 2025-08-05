import { useState } from "react"

const AppLogo = () => {
    // การตั้งชื่อ Suate Variables เเละ Constant Variables ที่ดี
    const [isActive] = useState(false);
    const [hasPermission] = useState(true);
    const NOT_FOUND_MESSAGE = "ไม่พยข้อมูล";

    //#6
    const handleClickMe = () => {
        alert("hello #6");
    }
  return (
    <div>
        <button onClick={handleClickMe} >Click Me</button>
        
        {
            isActive ? <p>App Logo</p> : NOT_FOUND_MESSAGE
        }
        {
            hasPermission && <p>Hello Admin</p> 
        }
    </div>
  )
}

export default AppLogo