import NftCoverImage from "../assets/project-images/Ecommerce/ecommerce-cover.png";
import NftFrontImage from "../assets/project-images/Ecommerce/ecommerce-front.png";
import NftFirstImage from "../assets/project-images/Ecommerce/ecommerce-desktop.png";
import NftSecondImage from "../assets/project-images/Ecommerce/ecommerce-iphone.jpg";
import NftThirdImage from "../assets/project-images/Ecommerce/ecommerce-ipad.jpg";

import TreactCoverImage from "../assets/project-images/Barecare/barecare-cover.png";
import TreactFrontImage from "../assets/project-images/Barecare/barecare-front.png";
import TreactFirstImage from "../assets/project-images/Barecare/barecare-desktop.png";
import TreactSecondImage from "../assets/project-images/Barecare/barecare-iphone.png";
import TreactThirdImage from "../assets/project-images/Barecare/barecare-ipad.png";

import EcommerceCover from "../assets/project-images/Candyroo/candyroo-cover.png";
import EcommerceFrontImage from "../assets/project-images/Candyroo/candyroo-front.png";
import EcommerceFirstImage from "../assets/project-images/Candyroo/candyroo-desktop.png";
import EcommerceSecondImage from "../assets/project-images/Candyroo/candyroo-phones-1.jpg";
import EcommerceThirdImage from "../assets/project-images/Candyroo/candyroo-phones-2.jpg";

const projectsConfig = [
  {
    title: "E-Portfolio",
    type: "Web App",
    description:
      "Designed, developed and hosted my client’s e-portfolio using semantic HTML5 and CSS3 (+BEM) best practises. Provided support for search engine optimisation for higher indexing through Google’s search engine crawler. Included responsive and multi-platform support to enable the portfolio to be viewed on any platform and device.",
    liveLink: "https://zhuanyoon.com/",
    githubLink: "",
    coverImage: NftCoverImage,
    topImage: NftFrontImage,
    firstImage: NftFirstImage,
    secondImage: NftSecondImage,
    thirdImage: NftThirdImage,
  },
  {
    title: "BareCare",
    type: "Web App",
    description:
      "Another website I had the pleasure to work on and create was 'BareCare', I implemented a mix off HTML5, CSS3, React.js (+BEM) and Javascript best practices in order to create the final product.",
    liveLink: "https://jonathan6242.github.io/treact/",
    githubLink: "https://jonathan6242.github.io/treact/",
    coverImage: TreactCoverImage,
    topImage: TreactFrontImage,
    firstImage: TreactFirstImage,
    secondImage: TreactSecondImage,
    thirdImage: TreactThirdImage,
  },
  {
    title: "Candyrooau",
    type: "Web App",
    description:
      "Developed and created `Candyrooau` their websites landing page using HTML5, CSS3 (+BEM) and React js best practises. Simplified difficult programming concepts including responsive website development, CSS layout, Promises and API requests.By working and researching independantly while creating this site it has highly sharpened and imporved my skills in React JS.",
    liveLink: "https://www.shopcandyroo.com.au/",
    coverImage: EcommerceCover,
    topImage: EcommerceFrontImage,
    firstImage: EcommerceFirstImage,
    secondImage: EcommerceSecondImage,
    thirdImage: EcommerceThirdImage,
  },
];

export default projectsConfig;
