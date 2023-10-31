import { useTypedSelector } from "@/globalHooks/useTypedSelector";
import { FC } from "react";
import { Navigate } from "react-router-dom";


interface IAuthProtectedRoute {
  children?: React.ReactNode;
  redirectPath?: string;
}

const AuthProtectedRoute: FC<IAuthProtectedRoute> = ({
  redirectPath = '/auth',
  children,
}) => {
  const { status } = useTypedSelector((selector) => selector.auth);

  if (status !== 'succeeded') {
    return <Navigate to={`/auth?rollbackUrl=${redirectPath}`}></Navigate>
  }

  return children;
};

export default AuthProtectedRoute;
