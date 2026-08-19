const links = {
  website: "https://example.com",
  whatsappNumber: "447000000000",
  whatsappMessage: "Hi Capture Crew, I would like to enquire about photography or videography.",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  facebook: "https://www.facebook.com/"
};

const selectors = {
  websiteLink: document.getElementById("websiteLink"),
  whatsappLink: document.getElementById("whatsappLink"),
  instagramLink: document.getElementById("instagramLink"),
  tiktokLink: document.getElementById("tiktokLink"),
  facebookLink: document.getElementById("facebookLink")
};

const whatsappHref = `https://wa.me/${links.whatsappNumber}?text=${encodeURIComponent(links.whatsappMessage)}`;

selectors.websiteLink.href = links.website;
selectors.whatsappLink.href = whatsappHref;
selectors.instagramLink.href = links.instagram;
selectors.tiktokLink.href = links.tiktok;
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
