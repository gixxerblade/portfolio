import React, { useState } from "react"

export const OpenContext = React.createContext()

const OpenProvider = ({ children }) => {
  const [opened, setOpened] = useState(false)
  return (
    <OpenContext.Provider value={[opened, setOpened]}>
      {children}
    </OpenContext.Provider>
  )
}
export default OpenProvider
