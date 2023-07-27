# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshots

#### Desktop View

![](/images/screenshots/desktop-dark.png)
![](/images/screenshots/desktop-light.png)

#### Medium View (Between Desktop and Mobile)

![](/images/screenshots/medium-dark.png)
![](/images/screenshots/medium-light.png)

#### Mobile View

![](/images/screenshots/mobile-dark1.png)
![](/images/screenshots/mobile-dark2.png)
![](/images/screenshots/mobile-light1.png)
![](/images/screenshots/mobile-light2.png)

### Links

- Live Site URL: [fm-social-media-db.netlify.app](https://fm-social-media-db.netlify.app/)

## My process

I examined the preview images provided in the starter files to structure my HTML file. It helped me to decide the types of elements and properties to use for this project.

The general approach I followed in this project is to choose a section, design and style it and then move to the next section. I started from the top i.e., the Nav bar followed by the Follower Counts followed by the Other Social Media Metrics.

First I made the desktop dark theme. This was like a checkpoint as now I had basic structure of the project ready.

Then, I tried to make it responsive (adusjtable to multiple device views). I made three views for this project. A desktop view, a middle view (for anything between a desktop and mobile) and a mobile view.

Finally, I implemented the logic behind the dark-light mode toggle. I also hosted this project on Netlify. The links are above.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla JS

### What I learned

This is one of my first web dev projects, hence I learned a lot of things by doing this project. I'll try to list all of them.

- Multiple classes - I found out an important use-case for having multiple classes for tag. For example, I have used two classes for big cards and the small cards. One of the classes is common for both, and this was useful for changing the theme. While the other class was used to style each card based on the given design patterns.

- Overlaying a div on top of another - I found this neat and simple trick to move a div on top or bottom of another div by using CSS `z-index` property.

```css
.top-bar {
  height: 14rem;
  background-color: var(--dark-top-bg);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
```

- Creating a toggle - Found this on codepen but understood each segment of the code. Later used it to change theme using JS.

- JS - I a complete newbie at JS so I had to spend a lot of time in this section. I learned so many things.
  - How to use CSS variables in JS
  - How to work with different elements and selectors in JS
  - Difference between `querySelector` and `querySelectorAll`
  - `forEach` loop in JS
  - Functions in JS
  - How to check for error messages in console

It was a fun experience

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

Some of the topics I am still not comfortable with and would like to work on different projects and learn more about them in the future -

- Linear Gradient and Border Stuff in CSS
- Pseudo-classes in CSS
- Media Queries
- JS

### Useful resources

- [ChatGPT for toggle switch](https://chat.openai.com/share/2a8c84ce-8d65-4526-88bd-e8e26ee7c787) - This is the converstation I had with ChatGPT. Not all of it is useful, but got to learn a lot of things from this.

- [querySelectorAll](https://stackoverflow.com/questions/38763103/javascript-queryselectorall-classlist-toggle-not-working-as-expected) - This is where I found out that we need to use for loop if we need to use querySelectorAll

- [Codepen Toggle Switch](https://codepen.io/JefMari/pen/oNWNLWZ?editors=1100) - This is basic structure of a toggle using HTML and CSS only. I used this in this project.

- [Codepen Toggle Selector](https://codepen.io/nrcoover/pen/ZEvvZay?editors=1010) - This has a great implementation of the toggle

- [How to revert back to a previous commit](https://stackoverflow.com/questions/4114095/how-do-i-revert-a-git-repository-to-a-previous-commit) - Great explanation

## Author

- Website - [Archi Halder](https://archihalder.github.io/portfolio/)
- Frontend Mentor - [@archihalder](https://www.frontendmentor.io/profile/archihalder)
- Twitter - [@archi_halder](https://twitter.com/archi_halder)
