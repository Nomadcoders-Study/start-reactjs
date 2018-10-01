import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "아이언맨 1",
    poster: "http://thumbnail.egloos.net/600x0/http://pds27.egloos.com/pds/201804/20/59/c0225259_5ad995f0aa663.jpg"
  },
  {
    title: "아이언맨 2",
    poster: "http://playwares.com/files/attach/images/5543821/251/942/012/po2.jpg"
  },
  {
    title: "아이언맨 3",
    poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/3/33/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_3.jpg/250px-%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_3.jpg",
  },
  {
    title: "스파이더맨 홈커밍",
    poster: "http://img.ezmember.co.kr/cache/board/2017/11/15/c8da162980acf7a05b5d3d1fc4a6960f.jpg",
  },
  {
    title: "앤트맨 1",
    poster: "https://t1.daumcdn.net/cfile/tistory/99C867335B3BA88B28",
  },
  {
    title: "앤트맨 2",
    poster: "http://file.mk.co.kr/meet/neds/2018/07/image_readtop_2018_431119_15311039313381158.jpg",
  },
  {
    title: "어벤저스 1",
    poster: "http://playwares.com/files/attach/images/763163/998/239/022/30dbff123517ebd551a87990a51cda66.jpg",
  },
  {
    title: "어벤저스 2",
    poster: "http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2015/02/2015022507185618375-540x800.jpg",
  }
]

class App extends Component {

  state = {
    greeting: 'Hello!'
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
