import { useContext } from "react"
import { InputContext } from "../context/inputContext"

export function useInputContext() {
  const context = useContext(InputContext)

  if(!context){
    throw new Error("Contexto não encontrado")
  }

  return context
}