# # Ch6 AJAX
## 6-1 Ajax in React

### Fetch

> fetch 란? 특정 URL의 네트워크 요청을 쉽게 활용할 수 있도록 해주는 함수

```
fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
```

### Promise

> 자바스크립트 비동기 처리에 사용 되는 객체

### .then( source )

> 앞 라인의 로직이 수행 된 후 source를 수행 하도록 한다.

### .catch( source )

> 앞 라인의 로직 수행 중 에러 발생시 source를 수행 하도록 한다.

```
componentDidMount(){
    fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
```

- fetch(url) 의 통신이 완료 되면, 통신 결과를 response에 담아 console.log로 출력 하고,  
오류 발생 시 오류 내용을 console.log로 출력 하라.


