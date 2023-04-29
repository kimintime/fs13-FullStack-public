import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHooks";

type propsType = {
    children?: ReactElement<any | any>
}

const ProtectedProfile = (props: propsType) => {
    const user = useAppSelector(state => state.user)

    if (user?.id === null)
    {
        return (
            <Navigate to='/login' />
        )
    }

    return (
        props.children ? props.children : <Navigate to='/login' />
    )
}

export default ProtectedProfile;