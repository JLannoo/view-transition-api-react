import './First.css'

import { useEffect } from 'react'

function First() {
  useEffect(() => {
      const main = document.querySelector("main");
      main?.classList.add("first");
      
      return () => { main?.classList.remove("first") }
  })

  return (
    <>
      <h1>
        {document.startViewTransition ?
            'Transitions are supported in your browser 😀' :
            'Sorry, transitions are not supported in this browser 😢'
        }
      </h1>
      <p>
        This view will be screenshot, then superimposed during the transition.
      </p>
    </>
  )
}

export default First
