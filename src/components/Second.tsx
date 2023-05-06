import { useEffect } from "react";
import "./Second.css";

export default function Second() {
    useEffect(() => {
        const main = document.querySelector("main");
        main?.classList.add("second");
        
        return () => { main?.classList.remove("second") }
    })

    return (
        <>
            <h1>
                {document.startViewTransition ?
                    'So you saw a cool transition there 😎' :
                    'So you didn\'t see a cool transition there 😔'
                }
            </h1>
            <p>During the transition {!document.startViewTransition ? "(if there would have been one)" : ""} this view was rendered in the background, and then used for the animation</p>
            <p>making a seamless transition between the two views.</p>
        </>
    )
}