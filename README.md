<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  <img src="images/main-logo.png" alt="Logo" width="250" height="80">

  <h3 align="center">Curtis' Martial Arts</h3>

  <p align="center">
    <a href="https://time2fishman.github.io/curtisMartialArts/">View Demo</a>
    ·
    <a href="https://github.com/time2fishman/curtisMartialArts/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/time2fishman/curtisMartialArts/issues/new">Request Feature</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

![Curtis' Martial Arts Screen Shot][product-screenshot]

This project was built for a martial arts studio. The owner needs a responsive website that provides company pricing, contact infromation, instructor bios, upcoming events, payment options, and the ability to register. There is no need for a database as this is more of a website than a web app. However, The PayPal function does require some backend funcitonality to POST and GET API calls. Node.js will be used for these calls. No customer information will be stored on the site. There is currently no need to create an account or sign in on this project.


### Built With

* ![HTML5]
* ![JavaScript]
* ![JQuery]
* ![NodeJs]
* ![Github Pages]
* ![Express]
* ![CSS3]
* ![SASS]
* ![Visual Studio Code]


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* node.js
* npm

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```
   git clone https://github.com/time2fishman/curtisMartialArts.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Create a `.env` file and add the following
   ```
   PORT=3000
   ENVIRONMENT=sandbox
   CLIENTID={your paypal sandbox client id}
   CLIENT_SECRET={your paypal sandbox client secret}
   ```
4. Add you PayPal client id to the `script.js` in the root folder
   ```
   const client_id = {Your PayPal sandbox client id}
   ```
5. Click `"Go Live"` when focused on `index.html` to navigate through styled site or run `npm start` to test the PayPal features on localhost://3000

<!-- ROADMAP -->
## Roadmap

- [ ] Add nav links and quick links on homepage to direct user to Contact, FAQ, and Pricing sections.
- [ ] Update photos on home page
- [ ] Change to lighter background colors in nav bar and home page
- [ ] Phase out Google Docs and integrate into website

See the [open issues](https://github.com/time2fishman/curtisMartialArts/issues/) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

Adam Martinez - [LinkedIn](https://www.linkedin.com/in/adam-martinez/)

Project Link: [https://github.com/time2fishman/curtisMartialArts](https://github.com/time2fishman/curtisMartialArts)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [html5up.net](https://html5up.net/halcyonic)
* [Ileriayo: markdown-badges](https://github.com/Ileriayo/markdown-badges)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/HomePageImg.png
[JQuery]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[Visual Studio Code]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[Github Pages]: https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white
[Express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[SASS]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
