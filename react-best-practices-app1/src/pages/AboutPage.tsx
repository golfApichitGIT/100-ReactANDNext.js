import { NavLink } from "react-router"
import AppLogo from "../components/AppLogo"

const AboutPage = () => {
  return (
   <div> 
    <h1>AboutPage</h1>
    <AppLogo/>
    <NavLink to="/">Back..</NavLink>
    </div>

  )
}

export default AboutPage