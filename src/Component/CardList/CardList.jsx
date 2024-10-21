import { useState, useRef, useContext } from "react";
import Card from "../Card/Card";
import styles from "./cardList.module.css";
import { TerlloContext } from "../../App";

const CardList = ({ title, id }) => {
  const terlloctx = useContext(TerlloContext);

  const [showAddCardBox, setshowAddCardBox] = useState(false);
  const textBoxRef = useRef(null);

  const onAddCardClick = () => {
    setshowAddCardBox(true);
  };

  const onClickCancelBtn = () => {
    setshowAddCardBox(false);
  };

  const onAddClick = () => {

    const task = textBoxRef.current.value;
    if(task ===''){
      alert("Please add Something")
      return;
    }else{
      terlloctx.dispatch({
        type: "ADD_ITEM",
        payload: {
          data: task,
          listName: id,
        },
      });
    }
  };
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {terlloctx.state[id].map((data) => (
        <Card key={data} title={data} />
      ))}

      {showAddCardBox ? (
        <div>
          <textarea ref={textBoxRef} placeholder="Enter a litle for card..."/>
          <button onClick={onAddClick}>Add</button>
          <button onClick={onClickCancelBtn}>Cancel</button>
        </div>
      ) : (
        <p onClick={onAddCardClick}>+ Add another Card</p>
      )}
    </div>
  );
};

export default CardList;
