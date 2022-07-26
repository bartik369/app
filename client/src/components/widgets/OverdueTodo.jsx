import React from "react";
import "../widgets/widgets.css";
import { Link } from "react-router-dom";
import moment from "moment"


const OverdueTodo = ({todos}) => {
    const dateNow = moment().format("DD.MM.YYYY HH:mm");
    const overdueTodos = []
    const attentionTodos = []
    let endTodoDate;
    
    todos.map((todo) => {
      const startD = moment(todo.startTime);
      const endD = moment(todo.endTime);
      const diffDate = endD.diff(startD);
      const passedTime = diffDate - (endD - new Date());
      const eighty = (diffDate / 100) * 80;
      const ninetyNine = (diffDate / 100) * 99.9;
      
      endTodoDate = moment(todo.endTime).format("DD.MM.YYYY HH:mm");

      if (passedTime >= eighty && passedTime <= ninetyNine) {
        attentionTodos.push(todo);
      }
      
      if (endTodoDate <= dateNow) {
        overdueTodos.push(todo);
      }
    })


    return (
        <div className="widget-item">
          <div className="wrapper-title">
          <div className="icon-title-danger"><i className="bi bi-alarm"></i></div>
          <div className="widget-item__title">Срочно выполнить</div>
          </div>
          {overdueTodos.length > 0
          ? <div className="todos_info">
          {overdueTodos.slice(0, 3).map((todo, index) => (
                    todo.endTime <= dateNow
                    ?
                    <div className="overdue__item" key={index}>
                      <div className="todos_info__title">{todo.title}</div>
                      <span className="time-text">Закончить до:</span>
                      <div className="todos_info__endtime">{moment(todo.endTime).format("DD.MM.YYYY HH:mm")}</div>
                    </div>
                    : ""
                ))}
        </div>
        : <div className="empty">Срочных задач нет</div>
        }
          <div className="widget-separate"></div>
          <div className="wrapper-title">
          <div className="icon-title-attention"><i className="bi bi-exclamation-circle"></i></div>
          <div className="widget-item__title">Обратить внимание</div>
          </div>
          {attentionTodos.length > 0
          ? <div className="todos_info">
          {attentionTodos.slice(0, 3).map((todo, index) => (
                    <div className="expire-soon__item" key={index}>
                      <div className="todos_info__title">{todo.title}</div>
                      <span className="time-text">Закончить до:</span>
                      <div className="todos_info__endtime">{moment(todo.endTime).format("DD.MM.YYYY HH:mm")}</div>
                    </div>
                ))}
        </div>
          : "Нет информации"
          }
          <div className="button-wrap">
            <Link to="/todos">
              <button className="read-more">Перейти к задачам</button>
            </Link>
          </div>
        </div>
    )
}

export default OverdueTodo;




    // todos.map((todo) => {
    //   const startD = moment(todo.startTime);
    //   const endD = moment(todo.endTime);
    //   const diffDate = endD.diff(startD);
    //   const beetwenDate = endD - new Date();
  
    //   const eightyPercent = diffDate / 100 * 50;
    //   const ninetyninePercent = diffDate / 100 * 99;
 
    //   // const checkDiffDate = (diffDate / 100 * 80) || (diffDate / 100 * 99);

    //   if (beetwenDate >= eightyPercent && beetwenDate <= ninetyninePercent) {
    //     console.log("got it")
    //     attentionTodos.push(todo);
    //   }
    //   if (endD <= dateNow) {
    //     overdueTodos.push(todo)
    //   }
    // })