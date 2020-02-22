import React, { useState } from "react"

export const OpenContext = React.createContext()

const OpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <OpenContext.Provider value={[open, setOpen]}>
      {children}
    </OpenContext.Provider>
  )
}
export default OpenProvider
