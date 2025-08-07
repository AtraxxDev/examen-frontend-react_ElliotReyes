import './ProfileLayout.css'

// Layout: ProfileLayout
// Se encarga de hacer un contenedor de informacion para envolver logica 

// Los props utilizados son los siguientes:
// children: todos los objetos que esten dentro se renderizaran haciendo mas escalable el layout
export function ProfileLayout({children}){
    return(
                <article className="profileCard-Box">
            <header className='profileCard-Header'>
                <img src="/favicon.png" alt="" />
                <h2>WebDECero</h2>
            </header>
                {children}
        </article>
    )
}