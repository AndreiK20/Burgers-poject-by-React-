import styles from "./BurgerIngredientsInOderList.module.css";
import { deleteIngredientToBurger } from "../../services/action/selectedIngredients";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export function BurgerIngredientsInOderList({ element, index, moveCard }) {
  const dispatch = useDispatch();
  const ref = useRef(null);


 

  const handeOnDeleteIngredient = (element) => {
    dispatch(deleteIngredientToBurger(element));
  };


  const [, drop] = useDrop({
    accept: "item",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });


  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // const [{ isDragging }, drag] = useDrag({
  //   type: "item",
  //   item: { ...element, index },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const statusLock = element.type === "bun" ? true : false;

  return (
    <li
      className={`${styles.dragIconConstructorElementWrapper} mb-4 ml-4 mr-4`}
      key={element.dropUniqID}
      ref={ref}
      style={{ ...styles, opacity }}
    >
      <DragIcon />
      <ConstructorElement
        isLocked={statusLock}
        text={element.name}
        price={element.price}
        thumbnail={element.image}
        handleClose={() => handeOnDeleteIngredient(element)}
      />
    </li>
  );
}

BurgerIngredientsInOderList.propTypes = {
	index: PropTypes.number.isRequired,
	element: PropTypes.object.isRequired,
  moveCard: PropTypes.func.isRequired
};