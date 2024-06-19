import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ComponentType, FC } from 'react';

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redirecting you to the login...</div>
  });

  return <Component {...args} />;
};
