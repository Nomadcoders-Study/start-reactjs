# # Ch3 컴포넌트 Lifecycle

> ##### [ 강의 출처 ] ["ReactJS로 웹 서비스 만들기 : Chapter #3 컴포넌트 Lifecycle”](https://academy.nomadcoders.co/courses/enrolled/216871) by [NOMAD CODERS](https://academy.nomadcoders.co/)

----

## 3-1 Lifecycle Event on React

### 3-1-1 Render Lifecycle
#### # 화면을 render 할 때, 즉 컴포넌트가 화면에 "존재" 하게 될 때 자동으로 아래의 과정을 거친다.

> Render : componentWillMount() -> render() -> componentDidMount()  


순서 체크 해보기!!
```
componentWillMount() {
    console.log('WillMount')
}

componentDidMount() {
    console.log('DidMount')
}

class App extends Component {
    console.log('render')
    render() {
        ...
```

=> 만약 영화 앱을 만든다고 한다면,  
WillMount를 진행 할 때 api를 호출하고  
해당 사이클의 작업 수행이 완료 되면 컴포넌트를 통한 화면 렌더링을 진행 한다.


(1) WillMount : 사이클이 시작 됐음을 알게 된다.  
(2) render : 컴포넌트가 리액트에 "존재" 하게 되었음을 알게 된다.  
(3) DidMount : 성공적으로 리액트에 컴포넌트가 자리 잡았음을 알게 된다.  

### 3-1-2 Update Lifecycle

> Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

(1) componentWillReceiveProps : 컴포넌트가 새로운 props를 받았다는 것을 의미한다.  
(2) shouldComponentUpdate : 리액트는 이전 props와 새 props를 비교한 후 새로운 props가 다르면, "업데이트 = true"로 인지한다.  
(3) componentWillUpdate : 컴포넌트가 업데이트 되는 단계  
(4) render : 업데이트 된 컴포넌트 정보를 렌더링  
(5) componentDidUpdate : 성공적으로 리액트에 컴포넌트가 업데이트 되었음을 인지하는 단계

=> 활용 예!! Update를 수행 할 때 componentWillUpdate 시점에 로딩바를 셋팅 후 render과정을 거친 후 componentDidMount 시점에 로딩바를 숨기면 된다.
