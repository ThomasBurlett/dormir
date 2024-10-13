import { useState } from "react"
import { Button, defaultTheme, Provider } from "@adobe/react-spectrum"
import sleep from "./assets/sleep.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider theme={defaultTheme}>
      <div>
        <img src={sleep} className="logo" alt="Duermo Logo" />
      </div>
      <h1>Duermo - A sleep calculator</h1>
      <Button variant="primary" onPress={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </Provider>
  )
}

export default App
