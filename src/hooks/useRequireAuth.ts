import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const useRequireAuth = (redirectTo = '/login') => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(redirectTo);
    }
  }, [user, navigate, redirectTo]);

  return user;
};