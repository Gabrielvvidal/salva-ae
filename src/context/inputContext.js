import { createContext, useState } from "react";

export const InputContext = createContext()

export function InputContextProvider ({children}) {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return(
    <InputContext.Provider
      value={{
        title,
        setTitle,
        url,
        setUrl,
        email,
        setEmail,
        password,
        setPassword
      }}
    >
      {children}
    </InputContext.Provider>
  )
}