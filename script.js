let current = 0;

const img = document.getElementById("slide-img");
const title = document.getElementById("slide-title");
const desc = document.getElementById("slide-desc");

// Slide content
const slides = [
  {
    title: "The Harsh Reality",
    desc: "Rising crimes against women in Tamil Nadu"
  },
  {
    title: "Our Solution",
    desc: "GOAT Drone Safety System protects women using smart emergency response"
  },
  {
    title: "Components Used",
    desc: "ESP32, GPS, SOS Button, Drone Module"
  },
  {
    title: "How It Works",
    desc: "SOS → Drone Launch → Live Location → Police Response"
  },
  {
    title: "Why GOAT is Different",
    desc: "Faster, automated and real-time emergency system"
  },
  {
    title: "System Design",
    desc: "Drone docking + control system + live tracking"
  },
  {
    title: "Conclusion",
    desc: "Lawrence • Keshav • Sarvesh"
  }
];

function showSlide(i){
  current = i;

  // only image switching
  img.src = `images/slide${current + 1}.png`;

  // update text
  if (title) title.textContent = slides[current].title;
  if (desc) desc.textContent = slides[current].desc;

  // optional safety check
  console.log("Slide:", current + 1);
}

function nextSlide(){
  if(current < slides.length - 1){
    showSlide(current + 1);
  }
}

function prevSlide(){
  if(current > 0){
    showSlide(current - 1);
  }
}

// buttons
document.getElementById("next").onclick = nextSlide;
document.getElementById("prev").onclick = prevSlide;

// keyboard controls
document.addEventListener("keydown", (e)=>{
  if(e.key === "ArrowRight") nextSlide();
  if(e.key === "ArrowLeft") prevSlide();
});

// start
showSlide(0);


