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

## 4-3 Loading States

#### API 콜을 타임아웃 기능으로 유사하게 구현하기!!

1. 기본 state는 비우고 setTimeout 에 setState를 통해 특정 시간이 지나면 state에 데이터를 저장 하도록한다.

> 첫번째 렌더링이 진행 되면 DidMount 과정까지 진행되고,  
DidMount 될 때 setState 를 통해 데이터를 state에 업데이트 하고,  
state에 변화가 일어났기 때문에 render 함수를 재 실행 하여 컴포넌트를 다시 렌더링 하게 된다.

```
state = {
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "아이언맨 1",
            poster: "http://thumbnail.egloos.net/600x0/http://pds27.egloos.com/pds/201804/20/59/c0225259_5ad995f0aa663.jpg"
          },
          {
            ...
        ]
      })
    }, 5000)
  }
```

2. movie 리스트를 렌더링 하는 함수 코딩

> _renderMovies 함수를 실행하면 현재 state 에 저장된 데이터를 map을 통하여 데이터를 렌더링 하는 소스를 변수에 담아 리턴 하도록 한다.

```
_renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }
```

!? 함수 앞의 _는 리액트 내장 함수와 직접 개발한 함수의 차이를 구분하기 위해 표기 하였다.

3. render 함수가 실행 될 때 state 내부의 값을 체크하여 값이 있다면 _renderMovies 함수를 실행, 값이 없다면 'Loading 메시지만 보게 될 것이다.

> { this.state.movies ? this._renderMovies() : 'Loading'}  
state에 movies 가 들어있다면 ? _renderMovies() 를 실행하여 렌더링을 하고, 그렇지 않으면 Loading 메시지를 출력 하겠다.

```
render() {
    return (
      <div className="App">
        { this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
```