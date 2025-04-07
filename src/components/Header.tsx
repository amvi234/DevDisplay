import {Link} from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__name">
          <h1 className="header__name__amit">AMIT VIKRAM</h1>
        </div>

        <div className="header__main-nav-list" role="navigation">
          <li><Link className="header__main-nav-list__main-nav-link" to="/about">About Me</Link></li>
          {/* <li><Link className="header__main-nav-list__main-nav-link" to="/projects">Projects</Link></li>   */}
          <li><Link className="header__main-nav-list__main-nav-link" to="/skills">Skills</Link></li>
          <li><Link className="header__main-nav-list__main-nav-link" to="/">Home</Link></li>
        </div>
      </div>
    </>
  )
}