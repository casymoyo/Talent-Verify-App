import { useEffect, useState, useCallback } from "react";
import React from "react";
import UserContext from './UserContext'
import axios from "axios";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([])

  const handleLogin = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setError(`Login failed with status: ${response.status}`);
      } else {
        const data = await response.json();
        
        setUser({ 
          id:data.id, 
          username: data.username, 
          role: data.role,  
        });
        setIsLoggedIn(true);
      }
    } catch (error) {
        console.log(error)
    } finally {
      setIsLoading(false); 
    }
  };

  const usersData = useCallback(async()=>{
    try {
      await axios.get('http://127.0.0.1:8000/api/users/', {
      }).then(response=>{
        setUsers(response.data)
      })
    } catch (error) {
      
    }
  }, [])

  useEffect(()=>{
    usersData()
  }, [usersData])

  const refreshUserData = () => {
    usersData()
  }
  

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    
  };

  return (
    <UserContext.Provider value={{
      user, 
      users,
      handleLogin, 
      error, 
      logout, 
      isLoggedIn, 
      isLoading,
      refreshUserData
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
