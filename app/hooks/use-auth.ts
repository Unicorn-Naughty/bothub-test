'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { userStoreZustand } from "../store/user-store";
import { aiModelsStoreZustand } from "../store/ai-models-store";

export const useAuth = () => {
    const { initializeUser, user: { token } } = userStoreZustand((state) => state);
    const fetchModels = aiModelsStoreZustand((state) => state.fetchModels);
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);
    const router = useRouter();

    React.useEffect(() => {
        const checkAuth = async () => {
            const userData = localStorage.getItem("userData");
            const authStatus = !!userData;
            initializeUser()
            fetchModels(token)
            setIsAuthenticated(authStatus);

            if (!authStatus) {
                router.push("/login");
            }
        };

        checkAuth();
    }, [router, initializeUser]);

    return isAuthenticated;
}