# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](/design/desktop-preview.jpg)

### Links

- Solution URL: [Code Source](https://github.com/AbdrrahimDahmani/IP-Adress-Tracker.git)
- Live Site URL: [Demo](https://ipadress-track.netlify.app)


### Built with

- Angular
- CSS custom properties
- Flexbox
- Angular Material
- Type Script
- [Leaflet](https://leafletjs.com/) - JS library
- [Ipify](https://geo.ipify.org/) - map API 

### What I learned

I've so many things such as creating a responsive design using Angular, Converting JavaScript codes into TypeScript, using Leaflet js in ts and controlling data using life cycles 

```ts
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['data'].currentValue.lat != 0.0 &&
      changes['data'].currentValue.lng != 0
    ) {
      this.data.lat = changes['data'].currentValue.lat;
      this.data.lng = changes['data'].currentValue.lng;
      console.log(this.data);
      var map1 = this.initMap(this.data.lat, this.data.lng);
      var container = L.DomUtil.get('map');
      if (container != null) {
        container['_leaflet_id'] = null;
      }
      if (container['_leaflet_id'] == null) {
        console.log(map1);
        this.initMap(this.data.lat, this.data.lng);
        console.log(map1);
      }
    }
  }
```
```css
.cardComponent {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}
.map-container {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}
```


### Continued development

I'm thinking of working more on the responsive design so i can improve it more

### Useful resources

- [Stack Overflow](https://stackoverflow.com/) - This helped me  a lot for resolving problems and bugs i faced

## Author

- Frontend Mentor - [@AbderrahimDahmani](https://www.frontendmentor.io/profile/AbdrrahimDahmani)
- Linkedin - [@AbderrahimDahmani](https://www.linkedin.com/in/abderrahim-dahmani)
