# # Ch1 시작하기
> ##### [ 강의 출처 ] [NOMAD CODERS](https://academy.nomadcoders.co/) ["ReactJS로 웹 서비스 만들기"](https://academy.nomadcoders.co/courses/enrolled/216871) Chapter #1 시작하기

> ##### [ 강의 출처 ] ["ReactJS로 웹 서비스 만들기 : Chapter #1 시작하기”](https://academy.nomadcoders.co/courses/enrolled/216871) by [NOMAD CODERS](https://academy.nomadcoders.co/)

## 필수 설치 내역
1. npm
2. node
3. yarn
4. npm install -g create-react-app

## Hello World with React and CRA

#### react 앱 생성 
> $ create-react-app 앱이름 

#### react 앱 start ( runserver )
> $ cd 앱이름  
> $ yarn start

- yarn start 명령을 통해 react-script 를 실행 시킨다.
- http://localhost:3000의 리액트 기본 페이지를 브라우저를 통해 확인 할 수 있다
- CRA ( create-react-app )을 사용하는 가장 큰 이유는 기타 세세한 configuration을 직접 하지 않아도 된다는 장점 때문이다.

#### yarn
- yarn을 이용해 react 앱을 실행시(runserver) 소스코드를 변경 하는 순간 yarn이 컴파일을 시작하고 수정된 내용을 반영하여 서버에 빌드 한다.

```
[ 참고 ] git tag 추가하기

tag 푸쉬하기

git push 원격저장소명 태그명
git push 원격저장소명 로컬브랜치명 --tags

원격저장소에 특정태그를 푸쉬하려면 첫번째 명령어를 사용하면 되고 로컬브랜치의 모든 태그를(태그는 브랜치에 종속적이므로) 푸쉬하려면 두번째 명령어를 사용하면 됩니다.

➜  movie_app git:(master) git tag ch1_end
➜  movie_app git:(master) git push origin master --tags
```
