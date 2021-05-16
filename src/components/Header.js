import '../scss/Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <a href="/" className="logo">
            ShortWiki
          </a>
          <div className="account">
            <div className="sign-in">Вход</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header