import { useNavigate } from 'react-router-dom';
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { ProfileLayout } from '../../Layouts/ProfileLayout/ProfileLayout';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');         
  };

  return (
    <ProfileLayout>
      <ProfileCard onClickBtn={handleLogout}/>
    </ProfileLayout>   
  );
};

export default Profile;
