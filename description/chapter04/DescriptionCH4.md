# # Ch4 State
## 4-1 Thingking in React: Component State

> State ?? 리액트 컴포넌트 안에 존재 하는 오브젝트  
Lifecycle의 내장 함수들 처럼 모든 리액트 컴포넌트 안에 내장 돼 있다.  

#### state 기본 예시
```
class App extends Component {

  state = {
    greeting: 'Hello!'
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting} // state 에 저장 된 값을 호출하여 화면에 출력 할 수 있다.
        {movies.map((movie, index) => {
            ...
```

> 컴포넌트 안의 state가 바뀔 때 마다, 컴포넌트는 다시 render 한다.

![결과물](../../DescImages/ch4-1-001.png)  
  
---

## state 변경하기

> : 컴포넌트가 mount 되면 5초를 기다리고, greeting을 업데이트 하기.

### 잘 못된 state 변경 방법

> state를 직접적으로 변경하면 안된다.  

```
class App extends Component {

  state = {
    greeting: 'Hello!'
  }

  componentDidMount(){
    setTimeout(() => {
      this.state.greeting = 'something'
    }, 5000)
  }

  render() {
      ...
```

> 아래와 같은 에러( "직접적으로 state를 벼경하지 말아라" )를 출력하게 되며,  

```
Do not mutate state directly. Use setState()  react/no-direct-mutation-state
printWarnings @ webpackHotDevClient.js:138`
```

> render의 LifeCycle이 동작하지 않게 된다.  

`render LifeCycle : componentWillMount() -> render() -> componentDidMount()`

### 올바른 state 변경 방법

> setState를 사용하여 새로운 state를 셋팅 한다.

```
class App extends Component {

  state = {
    greeting: 'Hello!'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!!'
      })
    }, 2000)
  }

  render() {
    return (
```

> state를 변경할 때는 setState를 사용하여 업데이트 하며, 업데이트 때마다 render가 작동 하게 된다.


## 4-2 Practicing this.setState()

