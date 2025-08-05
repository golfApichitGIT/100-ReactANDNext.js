import { NavLink } from "react-router"
import AppHeader from "../components/AppHeader"

const HomePage = () => {
  return (
    <div> 
      <AppHeader fullname="Golf" age={20}/>
      <AppHeader fullname="Mary" age={22}/>
      <AppHeader fullname="Bob"/>
      <hr/>
      <h3>HomePage</h3>
      <p>
        <NavLink to="/about">About</NavLink>
      </p>
      <p>
        <NavLink to="/product">Product</NavLink>
      </p>
    </div>
  )
}

export default HomePage