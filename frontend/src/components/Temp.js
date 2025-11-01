
import React, { useState, useEffect, createContext, useContext } from 'react';
import { AlertCircle, LogOut, Lock, User, Home, Settings } from 'lucide-react';

// API service - handles all communication with backend
const api = {
  baseUrl: 'https://api.example.com', // Replace with your backend URL
  
  async login(email, password) {
    const res = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include' // Important: sends cookies with request
    });
    
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Login failed');
    }
    
    return res.json(); // Returns { user: {...}, token?: "..." }
  },
  
  async logout() {
    const res = await fetch(`${this.baseUrl}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    return res.ok;
  },
  
  async getCurrentUser() {
    const res = await fetch(`${this.baseUrl}/auth/me`, {
      credentials: 'include'
    });
    
    if (!res.ok) {
      if (res.status === 401) return null;
      throw new Error('Failed to fetch user');
    }
    
    return res.json(); // Returns { user: {...} }
  },
  
  async fetchProtectedData() {
    const res = await fetch(`${this.baseUrl}/data/protected`, {
      credentials: 'include'
    });
    
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
  }
};

// Auth Context - provides authentication state throughout the app
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check if user is logged in on mount
  useEffect(() => {
    checkAuth();
  }, []);
  
  const checkAuth = async () => {
    try {
      const data = await api.getCurrentUser();
      setUser(data?.user || null);
    } catch (err) {
      console.error('Auth check failed:', err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  
  const login = async (email, password) => {
    const data = await api.login(email, password);
    setUser(data.user);
    return data;
  };
  
  const logout = async () => {
    await api.logout();
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout, loading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

// Protected Route Component - redirects to login if not authenticated
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }
  
  if (!user) {
    return <LoginPage />;
  }
  
  return children;
}

// Login Page
function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      // After successful login, user state updates and ProtectedRoute re-renders
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Lock className="w-12 h-12 text-indigo-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign In
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-red-800">{error}</span>
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Demo: Try any email/password (backend not connected)
        </p>
      </div>
    </div>
  );
}

// Dashboard Page (Protected)
function DashboardPage() {
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = async () => {
    try {
      const result = await api.fetchProtectedData();
      setData(result);
    } catch (err) {
      console.error('Failed to load data:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-800">Dashboard</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <User className="w-5 h-5" />
              <span className="font-medium">{user?.name || user?.email}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Welcome back, {user?.name || 'User'}!
          </h2>
          <p className="text-gray-600">
            You are successfully authenticated. This is a protected page that only logged-in users can see.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-800">Protected Data</h3>
          </div>
          
          {loading ? (
            <p className="text-gray-600">Loading data...</p>
          ) : data ? (
            <div className="bg-indigo-50 rounded-lg p-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          ) : (
            <p className="text-gray-600">No data available</p>
          )}
        </div>
        
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">How Authentication Works:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Session stored via httpOnly cookies (most secure)</li>
            <li>• All API calls include credentials: 'include'</li>
            <li>• Protected routes check auth state before rendering</li>
            <li>• Context provides user state to entire app</li>
            <li>• Logout clears session on backend and resets state</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Main App with Routing Logic
function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      </div>
    </AuthProvider>
  );
}

export default App;