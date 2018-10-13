# # Ch7 Finishing Up

> ##### [ 강의 출처 ] ["ReactJS로 웹 서비스 만들기 : Chapter #7 Finishing Up”](https://academy.nomadcoders.co/courses/enrolled/216871) by [NOMAD CODERS](https://academy.nomadcoders.co/)

----

## 7-1 Updating Movie Component

### HTML Elements Class 셋팅

> 기본 HTML 마크업 에서의 css class 지정은 `class=""` 의 형식으로 지정하지만  
리액트에서의 class 지정은 `className=""` 의 형식으로 지정한다.

## 7-2 Giving some CSS to Movie

### [react-lines-ellipsis](https://www.npmjs.com/package/react-lines-ellipsis)

- 옵션에 맞는 만큼의 텍스트를 출력 후 생략 시킨다.

> yarn add react-lines-ellipsis

```
<LinesEllipsis
    text={synopsis}
    maxLine='3'
    ellipsis='...'
    trimRight
    basedOn='letters'
/>
```
