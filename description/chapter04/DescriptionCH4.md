# # Ch4 State
## 4-1 Thingking in React: Component State

> State ?? 리액트 컴포넌트 안에 존재 하는 오브젝트  
Lifecycle의 내장 함수들 처럼 모든 리액트 컴포넌트 안에 내장 돼 있다.  

##### state 기본 예시
```
class App extends Component {

  state = {
    greeting: 'Hello!'
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
```

컴포넌트 안의 state가 바뀔 때 마다, 컴포넌트는 다시 render 한다.