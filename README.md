# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot


### Links

- Solution URL: [Solution URL](https://github.com/29nikita/faq-accordion)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

Desktop View

<img width="943" alt="image" src="https://user-images.githubusercontent.com/71252906/223413905-6d289510-cd5b-400e-b169-80b4fd64375d.png">

Mobile View

<img width="281" alt="image" src="https://user-images.githubusercontent.com/71252906/223413820-f5951072-9b5e-453f-82dd-25c16127a34a.png">

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Angular](https://angular.io/) - JS framework


### What I learned

I have learnt how to use clip-path property along with tranform property in CSS and use of media queries for responsive web application. Also practised angular concepts.

To see how you can add code snippets, see below:

```html
<table class="table-data" *ngFor="let obj of quesObj">
    <tr class="ques" [ngClass]="{'selectedColor': (this.selectedQues == obj.ques) && isSelectedColor}"
        (click)="onClickQues(obj)">{{obj.ques}}<svg style="margin-top: 3px;" width="10" height="7"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd" />
        </svg></tr>
      <tr *ngIf="displayAns && this.selectedQues == obj.ques" class="ans">{{obj.ans}}</tr>
      <hr class="ques-separator">
</table>
```
```css
.box {
    height: 239px;
    width: 243px;
    margin-top: 136px;
    margin-left: -4px;
    border-radius: 15px;
    background-color: hsl(240deg 29% 94% / 52%);
    position: absolute;
    transform: rotate3d(1, 2.7, 5, -141deg);
    clip-path: polygon(-11% -10%, 2% 189%, 100% 85%, 33% -94%);
}
```
```js
onClickQues(selectedObj: any){
    this.selectedQues = selectedObj.ques;
    if(this.selectedQues == selectedObj.ques){
      this.displayAns= true;
      this.isSelectedColor = true;
    }
  }
```

## Author

- Website - [FAQ Accordian](https://nikita-faq-accordian.netlify.app/)
- Frontend Mentor - [@29nikita](https://www.frontendmentor.io/profile/29nikita)
