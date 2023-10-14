# Galaxy Groove

![Galaxy Groove Logo](https://mdohr07.github.io/galaxygroove/images/logobig.png)

Galaxy Groove is a concept for a website that combines an online community with a retro space game. This project, implemented as a solo endeavor, focuses on capturing the aesthetics and nostalgia of earlier video games while creating a sense of belonging within the gaming community.

## Description

The project was planned, organized, and developed from a private workplace, with the aim of obtaining feedback in an agile development environment. The landing page is inspired by the retro gaming era and the "old web," delivering a nostalgic gaming experience.

## Features

- Video background to immerse users in the gaming atmosphere.
- Handcrafted pixel graphics to evoke a retro feel.
- Fully responsive design for a seamless experience on all devices.

![Galaxy Groove Screenshot](https://mdohr07.github.io/galaxygroove/images/galaxygroove1.png).

![Galaxy Groove Screenshot](https://mdohr07.github.io/galaxygroove/images/galaxygroove2.png).

## JavaScript Code Example

Here are two code snippets used in the project:

```html
<header class="header">

    <div class="overlay has-fade"></div>

    <nav class="flex flex-jc-sb flex-ai-c"> <!-- helper-class "flex" -->
      <a href="/" class="header__logo hide-for-desktop">
        <img src="images/logo.png" alt="Galaxy Groove Logo">
      </a>

      <a id="burgerBtn" href="#" class="header__menu hide-for-desktop">
        <span></span>
        <span></span>
        <span></span>
      </a>

      <div class="header__links hide-for-mobile">
        <a href="http://">About</a>
        <a href="http://">News</a>
        <a href="http://">Tournaments</a>
        <a href="http://">VIP</a>
      </div>
    </nav>

    <div class="floatmenu has-fade">

      <a href="#">About</a>
      <a href="#">News</a>
      <a href="#">Tournaments</a>
      <a href="#">VIP</a>

    </div>

  </header>
```

```javascript
const burgerBtn = document.querySelector('#burgerBtn'); 
const header = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');

const fadeElems = document.querySelectorAll('.has-fade');

burgerBtn.addEventListener('click', function() {
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in'); 
        });
    }
});
```
