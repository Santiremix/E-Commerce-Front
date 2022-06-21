import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
<<<<<<< HEAD
import './Profile.scss'

=======
import { Spin } from "antd";
import { Form, Input, Button } from "antd";
import "./Profile.scss";
>>>>>>> develop
const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
<<<<<<< HEAD
    return <div className="container">
        <span>
        Cargando...
        </span>
      </div>
  }

  return <div className="container">
      <p className="welcome">Bienvenido {user.name}!</p>
    </div>;
=======
    return (
      <div className="example">
        {" "}
        <Spin />
      </div>
    );
  }

  return (
    <>
      <div className="profile">
        <div className="currentInfo">
          <h3>Cuenta:</h3>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>

       

        <div className="updateInfo">
          <h3>Información personal</h3>
          <p>
            Para iniciar sesión en tu cuenta, tendrás que utilizar la dirección
            de correo electrónico.
          </p>
        </div>
      </div>
    </>
  );
>>>>>>> develop
};

export default Profile;
