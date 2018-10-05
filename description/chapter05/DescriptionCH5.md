# # Ch5 Stateless Functional Components
## 5-1 Smart vs Dumb Components

> 모든 컴포넌트가 state를 가지고 있는 것은 아니다.  
state가 없는 컴포넌트를 Stateless Functional Component 라고 한다.

### Smart Components

- 컴포넌트 선언을 class로 선언하여 Component 를 extends 한다.
- state 를 가지고 있다.
- Render / Update Lifecycle이 존재 한다.

```
class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render(){
        return (
            <img src={ this.props.poster } width="150px"/>
        )
    }
}
```

### Dumb Components

- 컴포넌트 선언을 function으로 한다.
- props 만 가지고 있다.
- Lifecycle이 없다.

```
function Movie({title, poster}) {
    return(
        <div>
            <MoviePoster poster={ poster }/>
            <h1>{ title }</h1>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
```