const links = {
  website: "https://capturecrew.com/",
  whatsappNumber: "919886832275",
  whatsappMessage: "Hi Capture Crew, I would like to enquire about video production or photography services.",
  instagram: "https://www.instagram.com/capturecrewproductions/",
  twitter: "https://twitter.com/capturecrewprod",
  facebook: "https://www.facebook.com/capturecrew/"
};

const selectors = {
  websiteLink: document.getElementById("websiteLink"),
  whatsappLink: document.getElementById("whatsappLink"),
  instagramLink: document.getElementById("instagramLink"),
  twitterLink: document.getElementById("twitterLink"),
  facebookLink: document.getElementById("facebookLink")
};

const whatsappHref = `https://wa.me/${links.whatsappNumber}?text=${encodeURIComponent(links.whatsappMessage)}`;

selectors.websiteLink.href = links.website;
selectors.whatsappLink.href = whatsappHref;
selectors.instagramLink.href = links.instagram;
selectors.twitterLink.href = links.twitter;
selectors.facebookLink.href = links.facebook;

const scene = document.querySelector(".scene");
const canAnimate = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

if (scene && canAnimate) {
  let frame = null;

  window.addEventListener(
    "pointermove",
    (event) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * -12;
        const y = (event.clientY / window.innerHeight - 0.5) * -10;

        scene.style.setProperty("--parallax-x", `${x}px`);
        scene.style.setProperty("--parallax-y", `${y}px`);
        frame = null;
      });
    },
    { passive: true }
  );
}
