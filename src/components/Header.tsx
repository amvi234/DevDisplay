// import '../sass/components/header.scss';
function Header() {
  return (
    <>
    <div className="bg-img"></div>
    <div className="header">
      <div className="header__bg-image"></div>
      <div className="header__logo-box">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/700/398/small/initial-letter-av-or-va-monogram-logo-vector.jpg" alt="Logo" className="header__logo-box__logo" />
      </div>
      <div className="header__name">
        <h1 className="header__name__amit">AMIT VIKRAM</h1>
      </div>
      {/* <div className="header__bg-image"></div> */}

      <div className="header__main-nav-list" role="navigation">
        <li><a className="header__main-nav-list__main-nav-link" href="/html/">About Me</a></li>
        <li><a className="header__main-nav-list__main-nav-link" href="/js/">Projects</a></li>
        <li><a className="header__main-nav-list__main-nav-link" href="/react/">Connect</a></li>
        <li><a className="header__main-nav-list__main-nav-link" href="/css/">Coding Profiles</a></li>
      </div>
      <div className="header__namaste"><span>Hola </span>
      <span>Explorers!!! </span>   
      <span>Welcome </span>   
      <span>to </span>   
      <span>my </span>   
      <span>Portfolio </span>   
      <span>Website</span>   
      
    </div>
    </div>
    </>
  )
}
export default Header;
