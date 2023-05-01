import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHooks";

type propsType = {
    children?: ReactElement<any | any>
}

const Protected = (props: propsType) => {
    const user = useAppSelector(state => state.user)

    if (!user)
    {
        return (
            <Navigate to='/login' />
        )
    }

    return (
        props.children || <Navigate to="/" />
    )
}

export default Protected;