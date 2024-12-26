import "./TodoItem.css"

export default function TodoItem({id, isDone, content, date, onUpdate, onDelete}) {

  const onChangeCheckBox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id);
  }

  return (
    <div className="todoItem">
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox"/>
      <div
        className="content"
        style={{textDecoration: isDone ? "line-through" : "none"}}
      >
        {content}
      </div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}