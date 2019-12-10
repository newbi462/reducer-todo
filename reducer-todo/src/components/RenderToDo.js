import React, { useReducer } from 'react';

import { reducer, initialState } from "./../reducers/reducer";

export const RenderToDo = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
    I WORKS
    {state.map(function( item, index ) {
        return (
          <>
          <li key={index}>{item.item}</li>
          </>
        );
      })}
		</>
	);
};
