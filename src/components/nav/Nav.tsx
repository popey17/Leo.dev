import Logo from "./Logo"
import Clock from "./Clock"

const Nav = () => {
  return (
    <nav className='nav'>
      <Logo />
      <Clock />
      <div className="nav__menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav