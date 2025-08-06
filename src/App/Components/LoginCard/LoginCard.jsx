import { useForm } from "react-hook-form";
import { InputButton } from "../InputButton/InputButton";
import { InputText } from "../InputText/InputText";
import './LoginCard.css'

// Componente: LoginCard
// Representa un formulario de autenticacion sencillo el cual tiene 2 campos [Usuario,Contraseña] asi mismo su boton de autenticacion

// Los props utilizados son los siguientes:
// onSubmit: hace referencia a una funcion que se hara presionar el boton AUTENTICAR


export function LoginCard({ onSubmit, error }) {

    const {register, handleSubmit } = useForm();

    const handleLogin = (data) => {
        onSubmit(data)
    }

    return (
        <form className="login-card-form" onSubmit={handleSubmit(handleLogin)}>
            <InputText {...register("username")} placeHolder="Usuario" />
            <InputText {...register("password")} type="password" placeHolder="Contraseña" />
            <InputButton type="submit" name="login-view" labelText="AUTENTICAR"/>
            {error && <p style={{ color: "red",marginTop:"1rem" }}>{error}</p>}
        </form>
    );
}