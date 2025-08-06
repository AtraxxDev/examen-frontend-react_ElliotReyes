import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Hook: useAuthentication
// Se encarga de consumir la api de dummyjson esto para agarrar las credenciales que hay y pasar por una validacion , se ahce en un funcion asyc ya que es pedida de datos tambien guarda el token de acceso en el local storage 

// Los props utilizados son los siguientes:
// username: el nombre unico del usuario
// password la contrase{a unica del usuario

export function useAuthentication() {
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const login = async ({ username, password }) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })

            if (!response.ok) {
                throw new Error('Credenciales Incorrectas')
            }
            const data = await response.json()
            console.log("Login exitoso ✅", data);
            localStorage.setItem('accessToken', data.accessToken)
            localStorage.setItem('user', JSON.stringify(data))

            navigate("/profile");
            setError(null)
            return data
        }
        catch(err) {
            setError(err.message)
            return null
        }
    }

    return {login,error}

}
