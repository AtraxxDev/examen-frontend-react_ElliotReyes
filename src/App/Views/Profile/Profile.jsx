import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');         
  };

  return (
    <div>
      <h1>Profile</h1>
      <input type="button" value="Cerrar sesión" onClick={handleLogout} />
    </div>
  );
};

export default Profile;
