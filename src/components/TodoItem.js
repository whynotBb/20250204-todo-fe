import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, removeTask, completedTask }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={() => removeTask(item._id)}>
              삭제
            </button>
            <button
              className="button-delete"
              onClick={() =>
                completedTask(item._id, {
                  ...item,
                  isCompleted: item.isCompleted ? false : true,
                })
              }
            >
              {item.isCompleted ? "끝남" : "안끝남"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
