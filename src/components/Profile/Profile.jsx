import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import './Profile.scss'

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <div className="container">
        <span>
        Cargando...
        </span>
      </div>
  }

  return <div className="container">
      <p className="welcome">Bienvenido {user.name}!</p>
    </div>;
};

export default Profile;