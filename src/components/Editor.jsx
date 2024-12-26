import "./Editor.css"
import {useRef, useState} from "react";

export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onKeydown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  }

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return
    }
    onCreate(content);
    setContent("");
  }

  return (
    <div className="editor">
      <input ref={contentRef}
             value={content}
             onKeyDown={onKeydown}
             onChange={onChangeContent}
             placeholder="오늘 할일은?"/>
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}
