import React, { createContext, useReducer } from 'react'
import { actionType, reducer, stateType } from './reducer'

const initialState:stateType = {
  logged:false,
  posts:[
    {
      title: 'Default title',
      content: "Default content",
      comments: [
        {
          comment: 'comment by default',
          author: 'Author of the comment by default'
        }
      ]
    }
  ],
}

type Props = { children?: React.ReactNode }

type contextType = {
  state: stateType,
  dispatch: React.Dispatch<actionType>
}

const Store = createContext({} as contextType)

const StoreProvider:React.FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>  )
}

export default StoreProvider

export {Store, initialState}
