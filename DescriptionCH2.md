# # Ch2 컴포넌트와 Props
## 2-1 Creating React Components with JSX

> yarn start 를 하게 되면 JS의 모든 코드를 가져와 html 파일에 담는다.

> 위 과정을 통해 생성된 파일은 public 디렉토리에 생성 된다.

#### - 컴포넌트 기본 구성형태

> 모든 컴포넌트는 렌더 하고 리턴 해야 한다!!!  
> = 컴포넌트 > render > return > JSX

```
// 1. React, Component 임포트
import React, { Component } from 'react';

// 2. Movie.js 에 해당하는 css 임포트
import './Movie.css';

// 3-1. Movie 클래스에 컴포넌트를 상속 받아 컴포넌트 생성
class Movie extends Component{
    // 3-2. 렌더
    render(){
        // 3-3. 리턴
        return(
            // 3-4. html / JSX 코드
            <h1>hello this is a movie</h1>
        )
    }
}

// 4. export 를 통한 컴포넌트 반환
export default Movie;
```


#### - 리액트의 컴포넌트 배치

> 큰 컴포넌트 안에 작은 컴포넌트를 집어넣는 방식으로 작업한다.

```
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                // 하위 컴포넌트 호출
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

// 하위 컴포넌트 생성
class MoviePoster extends Component {
    render(){
        return (
            <img src="" width="150px"/>
        )
    }
}

export default Movie;
```

![결과물](./DescImages/ch2-1-001.png)


## 2-2 Dataflow with Props

> state

> props

