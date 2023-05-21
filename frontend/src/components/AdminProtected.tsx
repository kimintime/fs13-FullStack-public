import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/reduxHooks";

import { User } from "../types/user";
import { getOwnProfile, setUser } from "../redux/reducers/userReducer";

type PropsType = {
  children?: React.ReactNode;
};

const AdminProtected = (props: PropsType) => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  useEffect(() => {
    if (!isUserDataLoaded && user) {
        dispatch(getOwnProfile(user) as any).then((response: any) => {
            const userProfile = response.payload as User;
            dispatch(setUser(userProfile));
            setIsUserDataLoaded(true);
        });
    }
}, [dispatch, user, isUserDataLoaded]);


  if (!user || !user.roles.includes("Admin")) {
    return <Navigate to="/" />;
  }

  return <>{props.children}</>;
};

export default AdminProtected;
