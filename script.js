function HomepageAnimation() {
  gsap.set(".slidesm", { scale: 5 })
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",

      duration: 2,
      scrub: 1,
    },
  })

  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )

    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )

    .to(
      ".lft",
      {
        xPercent: "-10",
        ease: Power2,
      },
      "b"
    )

    .to(
      ".rgt",
      {
        xPercent: "10",
        stagger: 0.03,
        ease: Power2,
      },
      "b"
    )

    .to(
      ".btmtext",
      {
        opacity: 1,
        stagger: 0.03,
        ease: Power2,
      },
      "b"
    )
}
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")

document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.addEventListener("click", function () {
    lightbox.style.display = "flex"
    lightboxImg.src = this.src
  })
})

document.querySelector(".close").addEventListener("click", function () {
  lightbox.style.display = "none"
})

function page3Animation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".page3",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  })
}
document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("email-link")
  const emailAddress = "metapoisev1.0@gmail.com.com"

  emailLink.addEventListener("click", function (event) {
    event.preventDefault() // Prevent default link behavior

    // Create a temporary textarea to copy the email address
    const tempTextArea = document.createElement("textarea")
    tempTextArea.value = emailAddress
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand("copy")
    document.body.removeChild(tempTextArea)

    // Optionally, alert the user that the email has been copied
    alert("Email address copied to clipboard: " + emailAddress)
  })
})

HomepageAnimation()
page3Animation()
