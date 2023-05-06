import "./Header.css"
import { useTransitionNavigate } from "../hooks/transitionNavigate"

export default function Header() {
    const transitionNavigate = useTransitionNavigate()

    return (
        <header>
            <button onClick={() => transitionNavigate("/")}>
                First
            </button>
            <button onClick={() => transitionNavigate("/second")}>
                Second
            </button>
            <button onClick={() => transitionNavigate("/third")}>
                Third
            </button>
        </header>
    )
}