import { InputButton } from '../InputButton/InputButton'
import './ProfileCard.css'

// Componente: ProfileCard
// Representa la informacion almacenada dentro del contendor de layout

// Los props utilizados son los siguientes:
// onClickBtn: hace referencia a una funcion que se hara presionar el boton del Input Button para cerrar sesion

export function ProfileCard({ onClickBtn }) {
    return (
        <div className='profileCard-Content'>
            <h2 className="profileCard-Name">Nombre completo usuario</h2>
            <p className="profileCard-Email">Correo de usuario</p>

            <div className="profileCard-Location">
                <span>📍</span> Ciudad - País
            </div>

            <div className="profileCard-Grid">
                <div className="profileCard-GridItem">
                    <span className="gridItem-value">1996-5-30</span>
                    <span className="gridItem-label">Cumpleaños</span>
                </div>
                <div className="profileCard-GridItem">
                    <span className="gridItem-value">28</span>
                    <span className="gridItem-label">Edad</span>
                </div>
                <div className="profileCard-GridItem">
                    <span className="gridItem-value">(55)9999-9999</span>
                    <span className="gridItem-label">Teléfono</span>
                </div>
            </div>

            <div className="profileCard-PersonalInfo">
                <p>Información personal 1: usuario</p>
                <p>Información personal 2: usuario</p>
                <p>Información personal 3: usuario</p>
            </div>

            <div style={{ margin: '20px auto', width: '150px', height: '40px' }}>
                <InputButton labelText="Cerrar sesión" onClick={onClickBtn} />
            </div>


        </div>

    )
}