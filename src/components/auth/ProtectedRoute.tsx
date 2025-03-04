import { PropsWithChildren, useEffect } from 'react';

import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router';


export default function ProtectedRoute({ children }: PropsWithChildren) {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated === false) {
      navigate('/login', { replace: true });
    }
  }, [navigate, auth]);

  return children;
}