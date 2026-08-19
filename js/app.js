const links = {
  website: "https://yasinyt4221-netizen.github.io/Capture-Crew/?v=instagram-dm-final",
  whatsapp: "https://wa.me/917396906771?text=Hi%20Capture%20Crew%2C%20I%20would%20like%20to%20enquire%20about%20a%20shoot."
};

const selectors = {
  brandWebsiteLink: document.getElementById("brandWebsiteLink"),
  websiteLink: document.getElementById("websiteLink"),
  whatsappLink: document.getElementById("whatsappLink")
};

const applyLink = (element, href) => {
  if (!element) return;

  if (!href) {
    element.href = "#";
    element.setAttribute("aria-disabled", "true");
    element.addEventListener("click", (event) => event.preventDefault());
    return;
  }

  element.href = href;
};

applyLink(selectors.brandWebsiteLink, links.website);
applyLink(selectors.websiteLink, links.website);
applyLink(selectors.whatsappLink, links.whatsapp);

const canAnimate = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

if (canAnimate) {
  let frame = null;

  window.addEventListener(
    "pointermove",
    (event) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * -10;
        const y = (event.clientY / window.innerHeight - 0.5) * -8;

        document.documentElement.style.setProperty("--parallax-x", `${x}px`);
        document.documentElement.style.setProperty("--parallax-y", `${y}px`);
        frame = null;
      });
    },
    { passive: true }
  );
}
