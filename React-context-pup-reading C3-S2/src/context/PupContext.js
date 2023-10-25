import { createContext, useState, useContext } from 'react'
import speedy from '../pups/speedy-pup.jpg';
import sleepy from "../pups/sleepy-pup.jpg";

export const PupContext = createContext();

export function PupProvider(props) {
  const [puppyType, setPuppyType] = useState(sleepy);

  return (
    <PupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </PupContext.Provider>
  )
}

export function usePuppyType() {
  return useContext(PupContext);
}
