export const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data
          ? {...item, isDone: !item.isDone}
          : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.data);
    default:
      return state;
  }
}

export const mockData = [
  {
    id: 1,
    isDone: false,
    content: "공부하기",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime()
  },
  {
    id: 3,
    isDone: true,
    content: "책읽기",
    date: new Date().getTime()
  },
]
