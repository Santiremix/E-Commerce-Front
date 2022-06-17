import './Header.scss'

const Header = () => {
  return (
    <>
        <nav className="header">
            <p>Nombre</p>
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Register</li>
                <li>Profile</li> {/*Se puede añadir un icono en lugar de texto */}
            </ul>
        </nav>
    </>
  )
}

export default Header