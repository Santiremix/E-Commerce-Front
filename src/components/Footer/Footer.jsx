import './Footer.scss'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-up'>
            <div className='politicas'>
                <p>Políticas</p>
                <ul>
                    <li>Condiciones de Uso y Venta</li>
                    <li>Aviso de Privacidad</li>
                    <li>Área Legal</li>
                    <li>Política de Cookies</li>
                </ul>
            </div>
            <div className='contacto'>
                <p>Sobre Nosotros</p>
                <ul>
                    <li>Nuestra Marca</li>
                    <li>Trabajar con Nombre</li>
                    <li>Sostenibilidad</li>
                    <li>Ubicación</li>
                </ul>
            </div>
            <div className='enlaces-header'>
                <p>Nuestra Web</p>
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div className='enlaces-redes'>
                <p>Contactanos</p>
                <ul>
                    <li>Enlace1</li>
                    <li>Enlace1</li>
                    <li>Enlace1</li>
                    <li>Enlace1</li>
                </ul>
            </div>
        </div>

        <div className='footer-down'>
                <p>Logo</p>
                <p>ⓒ 2021 Nombre ESP, Inc. Todos los derechos reservados</p>
        </div>
    </div>
    </>
  )
}

export default Footer