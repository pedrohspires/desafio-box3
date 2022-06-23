import '../css/Login.css';
import { Navigate } from 'react-router';
import register from '../services/Register.service';

function Login(){
  if(localStorage.getItem('token'))
    return <Navigate to="/" />

  async function registerRequest(event){
    event.preventDefault();

    const userName = event.target.username.value;
    const { data } = await register(userName);

    if(data.token){
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', userName);
    }

    window.location.reload();
  }

  return (
    <div className="login-container grid place-items-center h-screen ">
      <div className="form-container w-full max-w-xs rounded-lg">
        <form className="form-container bg-white shadow-md rounded-lg px-8 pt-6 pb-8" onSubmit={registerRequest}>
          <div className="mb-4">
            <label className="login-label grid place-items-center user-label block text-gray-700 text-2xl font-bold mb-2" htmlFor="username">
              Login
            </label>
            <input className="shadow Loginearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Usuário"/>
          </div>
          <div className="grid place-items-center">
            <div className="flex items-center justify-between">
              <button className="sign-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;