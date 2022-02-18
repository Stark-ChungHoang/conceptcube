import { gsap } from "gsap";
const onLeave = (origin: any, destination: any, direction: any) => {
  switch (destination.index) {
    case 0:
      gsap.to(".text-wr-one", { visibility: "hidden" });
      gsap.to(".text-wr-two", { visibility: "hidden" });
      gsap.to(".text-wr-three", { visibility: "hidden" });
      gsap.to(".text-wr-fourth", { visibility: "hidden" });
      gsap.to(".text-wr-five", { visibility: "hidden" });
      gsap.to(".page-two-slide", { visibility: "hidden" });
      gsap.to(".page-two-container", { visibility: "hidden" });
      gsap.from(".md-text", {
        autoAlpha: 0,
        y: -1980,
        duration: 1.5,
        ease: "power4.out",
      });
      gsap.from(".intro-company", {
        autoAlpha: 0,
        x: -580,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".logo", {
        autoAlpha: 0,
        y: -780,
        duration: 1.2,
        ease: "power4.out",
      });
      gsap.from(".about-project", {
        autoAlpha: 0,
        y: -780,
        duration: 1.2,
        ease: "power4.out",
      });

      break;
    case 1:
      gsap.to(".changeLang", { color: "#fff" });
      gsap.to(".md-text", { visibility: "hidden" });
      gsap.to(".text-decs", { visibility: "hidden" });
      gsap.to(".pageThree-main", { visibility: "hidden" });
      break;
    case 2:
      const dotElett = document.querySelectorAll(" .selectActiveMenu") as any;
      [...dotElett].forEach(item => {
          item.classList.remove("specialActive");
      });
      gsap.to(".page-two-container", {
        visibility: "hidden",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".changeLang", { color: "#fff" });
      gsap.to(" .btn-toggle span ", { background: "#fff" });
      gsap.to(".maxius-logo", { color: "#fff" });
      gsap.to(".text-wr-one", { visibility: "hidden" });
      gsap.to(".text-wr-two", { visibility: "hidden" });
      gsap.to(".text-wr-three", { visibility: "hidden" });
      gsap.to(".text-wr-fourth", { visibility: "hidden" });
      gsap.to(".text-wr-five", { visibility: "hidden" });
      gsap.to(".fourth-container", {
        visibility: "hidden",
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      });
      break;
    case 3:
      gsap.to(".pageThree-main", { visibility: "hidden" });
      gsap.to(".page-three-content", {
        visibility: "hidden",
        duration: 1,
        ease: "power4.out",
      });
      const dotEle = document.querySelectorAll(" .selectActiveMenu") as any;
        [...dotEle].forEach(item => {
            item.classList.add("specialActive");
        });
      gsap.to(".changeLang", { color: "#1b0080" });
      gsap.to(" .btn-toggle span ", { background: "#1b0080" });
      gsap.to("#fp-nav ul li a span ", { background: "#1b0080" });
      gsap.to(".fifth-title", { visibility: "hidden" });
      gsap.to(".fifth-wrapper", {
        visibility: "hidden",
        duration: 1,
        ease: "power4.out",
      });
      break;
    case 4:
      const dotElet = document.querySelectorAll(" .selectActiveMenu") as any;
      [...dotElet].forEach(item => {
          item.classList.remove("specialActive");
      });
      gsap.to(".fourth-container", {
        visibility: "hidden",
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.to(".changeLang", { color: "#fff" });
      gsap.to(" .btn-toggle span ", { background: "#fff" });
      gsap.to("#fp-nav ul li a span ", { background: "#fff" });
  }
};
export default onLeave;
