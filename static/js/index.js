const portfolioData = document.querySelector("#protfolio-data");
let design,all,development,printBtn;

design = document.querySelector("#design").addEventListener("click",()=>protfolioDataLoop(2,"yes"))
development = document.querySelector("#development").addEventListener("click",()=>protfolioDataLoop(3,"yes"))
all = document.querySelector("#all")             .addEventListener("click",()=>protfolioDataLoop(6,"yes"))
printBtn = document.querySelector("#print").addEventListener("click",()=>protfolioDataLoop(1,"yes"))

function protfolioDataLoop(num,ask) {
  if (ask == "yes") {
    portfolioData.innerHTML = null;
  }

  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.className = "col-lg-4 col-md-4 col-12 data";
    
    div.innerHTML = `

    <div class="portfolio-card"> 

      <img src="./static/img/portfolio/${i+1}.jpg" alt="portfolio">

      <div class="contain">
      <a href="#" class="portfolio-link">
        <i class="fas fa-eye"></i>
      </a>
      <a href="#" class="portfolio-link">
        <i class="fas fa-link"></i>
      </a>
      </div>

    </div>

    `
    portfolioData.appendChild(div)
  }
}
protfolioDataLoop(6)

function counter() {
  let counterNum = document.querySelectorAll(".counter-num");
  let data = 102;    
  
  counterNum.forEach((i)=>{
    setInterval(() => {
      i.innerHTML = data += 1;        
    }, 3500);
  })
}
counter()
