export type commentType = {
  comment:string,
  author:string,
}

export type postType = {
  title:string,
  content:string,
  comments: commentType[]
}

export type stateType = {
  logged:boolean,
  posts:postType[],
}

export enum actionsEnum{
  toggle_log = 'TOGGLE_LOG',
  add_post = 'ADD_POST',
  delete_post = 'DELETE_POST',
  add_comment = 'ADD_COMMENT',
  delete_comment = 'DELETE_COMMENT',  
}

export type actionType = {
  type:actionsEnum,
  payload:any
} 


export const reducer = (state:stateType, action:actionType):stateType | Error => {
  switch(action.type){
    case actionsEnum.toggle_log:
      return state
    case actionsEnum.add_post:
      return state
    case actionsEnum.delete_post:
      return state
    case actionsEnum.add_comment:
      return state
    case actionsEnum.delete_comment:
      return state
    default:
      return new Error("Any of the actions in the state manager were matched") 
  }
}