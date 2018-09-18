import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitle = [
  "아이언맨 1",
  "아이언맨 2",
  "아이언맨 3",
  "스파이더맨 홈커밍",
  "앤트맨 1",
  "앤트맨 2",
  "어벤저스 1",
  "어벤저스 2"
]

const movieImage = [
  "http://postfiles1.naver.net/20160524_176/elkysky_1464080712848GrbVq_JPEG/01.jpg?type=w773",
  "http://playwares.com/files/attach/images/5543821/251/942/012/po2.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/3/33/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_3.jpg/250px-%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_3.jpg",
  "http://img.ezmember.co.kr/cache/board/2017/11/15/c8da162980acf7a05b5d3d1fc4a6960f.jpg",
  "https://t1.daumcdn.net/cfile/tistory/99C867335B3BA88B28",
  "http://file.mk.co.kr/meet/neds/2018/07/image_readtop_2018_431119_15311039313381158.jpg",
  "http://playwares.com/files/attach/images/763163/998/239/022/30dbff123517ebd551a87990a51cda66.jpg",
  "http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2015/02/2015022507185618375-540x800.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitle[0]} poster={movieImage[0]}/>
        <Movie title={movieTitle[2]} poster={movieImage[2]}/>
        <Movie title={movieTitle[1]} poster={movieImage[1]}/>
        <Movie title={movieTitle[3]} poster={movieImage[3]}/>
        <Movie title={movieTitle[4]} poster={movieImage[4]}/>
        <Movie title={movieTitle[5]} poster={movieImage[5]}/>
        <Movie title={movieTitle[6]} poster={movieImage[6]}/>
        <Movie title={movieTitle[7]} poster={movieImage[7]}/>
      </div>
    );
  }
}

export default App;
