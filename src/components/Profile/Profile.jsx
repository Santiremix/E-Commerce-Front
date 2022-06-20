import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Cargando...</span>;
  }
console.log(user)
  return <div>Tu usuario es:  {user.name}</div>;
};

export default Profile;