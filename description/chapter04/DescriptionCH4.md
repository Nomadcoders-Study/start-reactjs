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

> setTimeout : 00 시간 뒤 해당 작업을 시작하겠다.  

```
    setTimeout(() => {
      console.log('hello')
    }, 1000)
```
1초 뒤 console 로그에 hello 출력

#### ?? 함수 선언시 function을 명시하지 않고 => 로 간소화 할 수 있다.
```
  과거 자바스크립트 :
    setTimeout(function() {
      console.log('hello')
    }, 1000)
    
  최신 자바스크립트 :
    setTimeout(() => {
      console.log('hello')
    }, 1000)
```

### 확산연산자( ... )란?

> es6에서 추가된 문법으로 ...로 표기 하며 배열의 값을 받아오거나,  
배열 안에 있는 값들을 매개변수에 넣을 수 있다.

### # 배열에서의 활용

> ...this.state.movies 즉,  state에 있는 movies 배열의 값들을 복제 해 오겠다는 의미

```
setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {

ex) 
let x = [1, 2, 3, 4, 5]
let y = [...x, 6, 7]

// y = [1, 2, 3, 4, 5, 6, 7]
```

### # 함수의 매개변수에서 활용  

> 2개 이상의 복수 혹은 특정 할 수 없는 수의 매개변수를 전달시 ... 연산자를 사용한다.  
단, 확장 연산자를 통해 전달 된 매개변수들은 배열에 담기게 된다.

```
fucntion test(x, ...y) {
  // x = 1
  // y = [2, 3, 4, 5]
}

test(1, 2, 3, 4, 5);
```