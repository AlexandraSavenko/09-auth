'use client';

import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useEffect } from "react";

type Props = {
    children: React.ReactNode;
}

const AuthProvider = ({children}: Props) => {
    const setUser = useAuthStore(state => state.setUser) 
    const clearIsAuthentiated = useAuthStore(state => state.clearIsAuthenticated)
useEffect(()=> {
    const fetchUser = async () => {
        const isAuthenticated = await checkSession()
        if(isAuthenticated){
            const user = await getMe();
            if(user) setUser(user)
        }else{
    clearIsAuthentiated()}
    }
    fetchUser()
},[setUser, clearIsAuthentiated])
return children;
}

export default AuthProvider;