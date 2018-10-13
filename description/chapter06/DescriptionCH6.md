# # Ch6 AJAX

> ##### [ 강의 출처 ] ["ReactJS로 웹 서비스 만들기 : Chapter #6 AJAX”](https://academy.nomadcoders.co/courses/enrolled/216871) by [NOMAD CODERS](https://academy.nomadcoders.co/)

----

## 참고
1. 동기방식 ( Synchronous )

2. 비동기 방식 ( Asynchronous )

----

## 6-1 Ajax in React

### Fetch

> fetch 란? 특정 URL의 네트워크 요청을 쉽게 활용할 수 있도록 해주는 함수

```
fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
```

----

## 6-2 Promise

### Promise

> Promise 객체는 비동기 처리를 위해 사용 되며, 나중에 완료될 것으로 약속 된 연산을 구현 한다.  

#### .then( source )

> 앞 라인의 로직이 수행 된 후 source를 수행 하도록 한다.

#### .catch( source )

> 앞 라인의 로직 수행 중 에러 발생시 source를 수행 하도록 한다.

```
componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
```

- fetch(url) 의 통신이 완료 되면, 통신 결과를 response에 담아 console.log로 출력 하고,  
오류 발생 시 오류 내용을 console.log로 출력 하라.



> .json() : 해당 데이터를 json형식의 데이터로 변환 한다.

```
fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
```

- .then(response => response.json())  
: 앞 로직(fetch)이 수행 된 후 fetch의 결과물을 response변수에 담은 후 json형태로 변환 한다.

- .then(json => console.log(json))  
: 변환 되어 반환 한 후 해당 값을 json 변수에 담은 후 console.log로 출력 한다.  

- .catch(err => console.log(err))  
: 앞의 작업 중 오류 발생시 해당 오류를 console.log로 출력 한다.

![결과물](../../DescImages/ch6-2-001.png)

----

## 6-3 Async Await in React

- Async : resolve / reject 된 Promise 객체를 리턴하는 함수로 만들어 준다.

- Await : async 함수 내에서만 사용 가능하며,  
await 키워드가 명시 된 코드 라인의 수행 결과가 완료 될 때까지 일시 정지 된다.

```
 _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
```

> _callApi() 함수의 응답이 완료 될 대 까지 일시 정지 후 완료 되고 나면 다음 코드를 수행 한다.