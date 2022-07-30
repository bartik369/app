import React from "react";
import "../widgets/widgets.css";
import { Link } from "react-router-dom";
import moment from "moment";
import emtyImageDanger from "../../assets/portal/empty-danger.jpg";
import emtyImageAttention from "../../assets/portal/empty-attention.jpg";
import CountdownTimer from "../../components/timer/CountdownTimer";

const OverdueTodo = ({ todos }) => {

  
  // const THREE_DAYS_IN_MS =  1 * 60 * 60 * 1000;
  const THREE_DAYS_IN_MS =  1 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const dateNow = moment().format("DD.MM.YYYY HH:mm");
  const overdueTodos = [];
  const attentionTodos = [];
  let endTodoDate;

  todos.map((todo) => {
    const startD = moment(todo.startTime);
    const endD = moment(todo.endTime);
    const diffDate = endD.diff(startD);
    const passedTime = diffDate - (endD - new Date());
    const eighty = (diffDate / 100) * 80;
    const ninetyNine = (diffDate / 100) * 99.9;

    endTodoDate = moment(todo.endTime).format("DD.MM.YYYY HH:mm");

    if (
      passedTime >= eighty &&
      passedTime <= ninetyNine &&
      todo.status !== "done"
    ) {
      attentionTodos.push(todo);
    }

    if (endTodoDate <= dateNow && todo.status !== "done") {
      overdueTodos.push(todo);
    }
  });

  return (
    <div className="widget-item">
      <div className="wrapper-title">
        <div className="icon-title">
          <i className="bi bi-exclamation-circle"></i>
        </div>
        <div className="widget-item__title">Обратить внимание</div>
      </div>
      {attentionTodos.length > 0 ? (
        <div className="todos_info">
          {attentionTodos.slice(0, 3).map((todo, index) => (
            <div className="expire-soon__item" key={index}>
              <div className="todos_info__title">{todo.title}</div>
              <span className="time-text">Закончить до:</span>
              <div className="todos_info__endtime">
                {moment(todo.endTime).format("DD.MM.YYYY HH:mm")}
              </div>
              <CountdownTimer targetDate={todo.endTime} />
            </div>
          ))}
        </div>
      ) : (
        <div className="expire-soon__item-empty">
          <img src={emtyImageAttention} />
          <div className="todo-info">Срочных задач нет</div>
        </div>
      )}
      <div className="widget-separate"></div>
      <div className="wrapper-title">
        <div className="icon-title">
          <i className="bi bi-alarm"></i>
        </div>
        <div className="widget-item__title">Просроченные задачи</div>
      </div>
      {overdueTodos.length > 0 ? (
        <div className="todos_info">
          {overdueTodos.slice(0, 3).map((todo, index) =>
            todo.endTime <= dateNow ? (
              <div className="overdue__item" key={index}>
                <div className="todos_info__title">{todo.title}</div>
                <span className="time-text">Закончить до:</span>
                <div className="todos_info__endtime">
                  {moment(todo.endTime).format("DD.MM.YYYY HH:mm")}
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      ) : (
        <div className="overdue__item-empty">
          <img src={emtyImageDanger} />
          <div className="todo-info">Просроченных задач нет</div>
        </div>
      )}
      <div className="button-wrap">
        <Link to="/todos">
          <button className="read-more">Перейти к задачам</button>
        </Link>
      </div>
    </div>
  );
};

export default OverdueTodo;
