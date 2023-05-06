import { useNavigate } from "react-router-dom";

export function useTransitionNavigate(){
    const navigate = useNavigate();

    const transitionNavigate = (route: string) => {
        if(route === window.location.pathname) return;
        
        if(!document.startViewTransition) return navigate(route);
        return document.startViewTransition(() => { navigate(route) });
    }

    return transitionNavigate;
}