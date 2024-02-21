import { useState } from "react"
import { Button, lightTheme, Provider } from "@adobe/react-spectrum"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider theme={lightTheme}>
      <Button variant="accent" onPress={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </Provider>
  )
}

export default App
