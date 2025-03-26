'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { userStoreZustand } from "../store/user-store";

export const useAuth = () => {
    const initializeUser = userStoreZustand((state) => state.initializeUser);
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);
    const router = useRouter();

    React.useEffect(() => {
        const checkAuth = async () => {
            const userData = localStorage.getItem("userData");
            const authStatus = !!userData;
            initializeUser()
            setIsAuthenticated(authStatus);

            if (!authStatus) {
                router.push("/login");
            }
        };

        checkAuth();
    }, [router, initializeUser]);

    return isAuthenticated;
}