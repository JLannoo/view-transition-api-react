import "./Third.css";

import { useEffect } from "react";

export default function Third(){
    useEffect(() => {
        const main = document.querySelector("main");
        main?.classList.add("third");
        
        return () => { main?.classList.remove("third") }
    })
    
    return (
        <>
            <h1>Sorry if you couldn't see the cool transitions.</h1>
            <h1>Support is not great yet.</h1>
            <small>(Check the link in the footer for browser support)</small>

            <br />

            <p>But here's a deeper explanation of the API inner workings.</p>

            <code>
                <b>During the transition the DOM will have appended a structure on top of everything, like so:</b> 
                {"\n\n"}
                {"<html>\n"}
                <span>::view-transition {"\n"}</span>
                ├─ <span>::view-transition-group(root)</span>          // Root transition group {"\n"}
                │ └─ <span>::view-transition-image-pair(root)</span> {"\n"}
                │     ├─ <span>::view-transition-old(root)</span>      // Old root screenshot {"\n"}
                │     └─ <span>::view-transition-new(root)</span>      // New root screenshot {"\n"}
                | {"\n"}                                  
                └─ <span>::view-transition-group(main)</span>          // `main` element was assigned a name  {"\n"}
                ‎    |                                     // so its transition can be manipulated separately{"\n"}
                ‎    └─ <span>::view-transition-image-pair(main)</span> {"\n"}
                ‎        ├─ <span>::view-transition-old(main)</span>    // Old `main` screenshot {"\n"}
                ‎        └─ <span>::view-transition-new(main)</span>    // New `main` screenshot {"\n"}
                {"<head>\n"}
                {"..."}
            </code>

            <p>The CSS animations are played in these "phantom" elements, while the real DOM is updated behind these images.</p>
            <p>When the transition ends, these elements are removed and the real DOM is shown.</p>

            <br />

            <p>This allows us to be able to do fancy transitions without affecting real DOM elements and operating taxing transformations over them.</p>
            <p>And without having to worry about the browser's repaints and reflows.</p>

        </>
    )
}