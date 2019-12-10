//import React from 'react'; not needed

export const initialState = [{

    item: 'Learn about reducers',
    completed: false,
    id: 3892987589

}]

//const addTodos = { type: "NEWTODO" }

export function reducer(state, action) {
  console.log(state, action);

/*  if (action.type === "INCREMENT") {
    console.log("I ran 3");
    return [...state, "new test string"];
  } else if (action.type === "DECREMENT") {
    return state;
  }*/
  switch(action.type) {
   case "NEWTODO":
     return [...state, {item: action.payload, completed: false, id: new Date()}];
  case "TOGGLEDONE":
    const killitem = () => {
      (state[action.payload].completed == false ) ? state[action.payload].completed = true : state[action.payload].completed = false;
    };
    killitem();
    return [...state];
   default:
     return state;
 }
//  return state;
  console.log(state, action);
};
