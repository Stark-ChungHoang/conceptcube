import { gsap } from "gsap";

const afterLoad = (origin: any, destination: any, direction: any) => {

  switch (destination.index) {
    case 0:
      gsap.to(".changeLang", { color: "#fff" });
      gsap.to("#fp-nav ul li a span ", { background: "#fff" });
      gsap.to(" .btn-toggle span ", { background: "#fff" });
      break
    case 1:
      gsap.to("#fp-nav ul li a span ", { background: "#fff" });
      gsap.from(".page-two-container", {
        autoAlpha: 0,
      });
      gsap.from(".text-wr-one", {
        autoAlpha: 0,
        x: 880,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".text-wr-two", {
        autoAlpha: 0,
        x: -880,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".text-wr-three", {
        autoAlpha: 0,
        x: 880,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".text-wr-four", {
        autoAlpha: 0,
        x: -880,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".text-wr-five", {
        autoAlpha: 0,
        x: 880,
        duration: 1,
        ease: "power4.out",
        delay: .1
      });
      gsap.from(".page-two-slide", {
        autoAlpha: 0,
        y: -1880,
        duration: 2,
        ease: "power4.out",
      });
      break;
    case 2:
      gsap.to("#fp-nav ul li a span ", { background: "#fff" });
      gsap.from(".pageThree-main", {
        autoAlpha: 0,
      });
      gsap.from(".page-three-content", {
        autoAlpha: 0,
        y: 1200,
        duration: .7
      });
   
      break;
    case 3:
      gsap.from(".fourth-container", {
        autoAlpha: 0,
      });
      gsap.from(".fourth-title", {
        autoAlpha: 0,
        y: -220,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".list-history", {
        autoAlpha: 0,
        x: -420,
        duration: 1,
        ease: "power4.out",
        delay: 0.3,
      });
      break;
    case 4:
      gsap.from(".fifth-wrapper", {
        autoAlpha: 0,
      });
      gsap.from(".fifth-name", {
        autoAlpha: 0,
        y: 420,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".fifth-title", {
        autoAlpha: 0,
        x: 2020,
        duration: 1.5,
        ease: "power4.out",
      });
      gsap.from(".fifth-contact", {
        autoAlpha: 0,
        x: -220,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        delay: .2,
      });
      break;
  }
};
export default afterLoad;
