// import '../sass/components/header.scss';
function Header() {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/700/398/small/initial-letter-av-or-va-monogram-logo-vector.jpg" alt="Logo" className="header__logo"/>
      </div>     
     <nav className="header__main-nav-list">
        <ul className="main-nav-list" role="navigation">
          <li><a className="main-nav-link" href="/html/">About Me</a></li>
          <li><a className="main-nav-link" href="/css/">Coding Profiles</a></li>
          <li><a className="main-nav-link" href="/js/">Projects</a></li>
          <li><a className="main-nav-link" href="/react/">Connect</a></li>
        </ul>
      </nav>
    </div>
  )
}
export default Header;
