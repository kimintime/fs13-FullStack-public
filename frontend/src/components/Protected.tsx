import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHooks";

type propsType = {
    children?: ReactElement<any | any>
}

const Protected = (props: propsType) => {
    const user = useAppSelector(state => state.user)

    if (!user || user?.id)
    {
        return (
            <Navigate to='/login' />
        )
    }

    return (
        props.children ? props.children : <Navigate to='/login' />
    )
}

export default Protected;