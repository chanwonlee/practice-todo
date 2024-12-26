import "./Header.css"

export default function Header() {
  const date = new Date();
  const koreanDate = new Intl.DateTimeFormat("ko-KR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);

  return (
    <div className="header">
      <h3>오늘은🗓️</h3>
      <h1>{koreanDate}</h1>
    </div>
  )
}