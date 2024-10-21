import { createContext, useReducer } from "react";
import "./App.css";
// import Card from './Component/Card/Card'
import CardList from "./Component/CardList/CardList";

export const TerlloContext  = createContext()

function App() {
  const initData = {
    todoList: [],
    inProgressList: [],
    completedList: [],
  };

  const reducerfn = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return{
          ...state,
          [action.payload.listName]: [...state[action.payload.listName],action.payload.data], 
        }
      case "EDIT_ITEM":
      case "DELETE_ITEM":
      case "MOVE_ITEM":
      default:
        return state;
    }
  };

  /*
   * ADD_ITEM
   * EDIT_ITEM
   * DELETE_ITEM
   * MOVE_ITEM
   */

  const [state, dispatch] = useReducer(reducerfn, initData);

  return (
    <>
      Terollo
      <TerlloContext.Provider value={{state, dispatch}}>
      <div className="card-list-container">
        <CardList id={"todoList"} title={"To do"} />
        <CardList id={"inProgressList"} title={"In Progress"} />
        <CardList id={"completedList"} title={"Complete"} />
      </div>
      
      </TerlloContext.Provider>
    </>
  );
}

export default App;
