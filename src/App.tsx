import { useState } from "react"
import { Button, defaultTheme, Provider } from "@adobe/react-spectrum"
import moon from "/moon.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider theme={defaultTheme}>
      <div>
        <img src={moon} className="logo" alt="Vite logo" />
      </div>
      <h1>Duermo - A sleep calculator</h1>
      <div className="card">
        <Button
          variant="primary"
          onPress={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </Provider>
  )
}

export default App
