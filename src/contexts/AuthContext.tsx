import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthContextType {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });

  const login = async (email: string, password: string) => {
    // Mock authentication
    setTimeout(() => {
      setState({
        user: {
          id: '1',
          name: 'John Doe',
          email: email
        },
        isAuthenticated: true
      });
    }, 1000);
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock registration
    setTimeout(() => {
      setState({
        user: {
          id: '1',
          name: name,
          email: email
        },
        isAuthenticated: true
      });
    }, 1000);
  };

  const logout = () => {
    setState({
      user: null,
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};