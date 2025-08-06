import './LayoutLogin.css'

// Layout: LoginLayout
// Se encarga de envolver en una estructura visual del formulario (login) colcoando los estilos necesarios para su buena distribucion

// Los props utilizados son los siguientes:
// children: todos los objetos que esten dentro se renderizaran haciendo mas escalable el layout
export function LayoutLogin({children}){
    return(
        <div className="login-card-box">
            {children}
        </div>
    )
}