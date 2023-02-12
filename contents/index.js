const homeLink = document.querySelector("#home-link");
const governmentSchemesLink = document.querySelector("#government-schemes-link");
const cropsOfIndiaLink = document.querySelector("#crops-of-india-link");
const vegetationOfIndiaLink = document.querySelector("#vegetation-of-india-link");
const soilsOfIndiaLink = document.querySelector("#soils-of-india-link");
const methodsAndTechnologyLink = document.querySelector("#methods-and-technology-link");
const myGardenLink = document.querySelector("#my-garden-link");
const kisanKiBaatLink = document.querySelector("#kisan-ki-baat-link");
const adviseMeLink = document.querySelector("#advise-me-link");
const donateLink = document.querySelector("#donate-link");

const homeSection = document.querySelector("#home");
const governmentSchemesSection = document.querySelector("#government-schemes");
const cropsOfIndiaSection = document.querySelector("#crops-of-india");
const vegetationOfIndiaSection = document.querySelector("#vegetation-of-india");
const soilsOfIndiaSection = document.querySelector("#soils-of-india");
const methodsAndTechnologySection = document.querySelector("#methods-and-technology");
const myGardenSection = document.querySelector("#my-garden");
const kisanKiBaatSection = document.querySelector("#kisan-ki-baat");
const adviseMeSection = document.querySelector("#advise-me");
const donateSection = document.querySelector("#donate");

const links = [homeLink, governmentSchemesLink, cropsOfIndiaLink, vegetationOfIndiaLink, soilsOfIndiaLink, methodsAndTechnologyLink, myGardenLink, kisanKiBaatLink, adviseMeLink, donateLink];
const sections = [homeSection, governmentSchemesSection, cropsOfIndiaSection, vegetationOfIndiaSection, soilsOfIndiaSection, methodsAndTechnologySection, myGardenSection, kisanKiBaatSection, adviseMeSection, donateSection];

links.forEach((link, index) => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    for (const section of sections) {
      section.style.display = "none";
    }
    sections[index].style.display = "block";
  });
});
