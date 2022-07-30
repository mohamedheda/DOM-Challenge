//body style
document.body.style.cssText="margin: 0px;padding: 0px; font-family: sans-serif;font-family: sans-serif"


//header style
let header=document.createElement("div")
header.className="header"
document.body.appendChild(header)
header.style.cssText="box-sizing: border-box;justify-content: space-between;display: flex;align-items: center;padding: 10px 15px;    font-size: 12px;"


//adding logo
let logo=document.createElement("h4")
logo.className="logo"
logo.textContent="ElZero"
header.appendChild(logo)
logo.style.cssText="color: #4AB886;;padding: 0px;margin: 0px;    font-weight: bolder;"


//adding list of header
let ulList=document.createElement("ul")
ulList.className="ulList"
let liOne=document.createElement("li")
liOne.textContent="Home"
liOne.className="liOne"
let liTwo=document.createElement("li")
liTwo.textContent="About"
liTwo.className="liTwo"
let liThree=document.createElement("li")
liThree.textContent="Service"
liThree.className="liThree"
let liFour=document.createElement("li")
liFour.textContent="Contact"
liFour.className="liFour"
ulList.appendChild(liOne)
ulList.appendChild(liTwo)
ulList.appendChild(liThree)
ulList.appendChild(liFour)
header.appendChild(ulList)

//ul style
ulList.style.cssText="    list-style-type: none;margin: 0px;"
//li style
liOne.style.cssText="color: #BAB0AB;margin-right: 10px;float: left;"
liTwo.style.cssText="color: #BAB0AB;margin-right: 10px;float: left;"
liThree.style.cssText="color: #BAB0AB;margin-right: 10px;float: left;"
liFour.style.cssText="color: #BAB0AB;margin-right: 10px;float: left;"


//products big div
let productList=document.createElement("div")
productList.style.cssText="    background-color: #ECECEC;margin: auto;padding-top: 10px ;"
document.body.appendChild(productList)
// inner products
for(let i=0;i<15;i++){
    let products=document.createElement("div")
    products.style.cssText="    display: inline-block;background-color:#fff;margin-left: 10px;padding: 10px;box-sizing: border-box;height: fit-content;width: calc((100% - 40px)/3);margin-bottom: 10px;text-align: center;font-weight: bold;    "
    let proSpan=document.createElement("span")
    proSpan.textContent=`${i+1}`
    products.appendChild(proSpan)
        let proParagraph=document.createElement("p")
        proParagraph.textContent="product"
        proParagraph.style.cssText="    margin: 0px auto;text-align: center;font-size: 7.5px;opacity: .5;padding: 5px;        "
        products.appendChild(proParagraph)
        productList.appendChild(products)
}

//footer
let footer=document.createElement("div")
footer.className="footer"
footer.style.cssText="    width: 100%;height: 30px;background-color: #4AB886;"
document.body.appendChild(footer)
let footerText=document.createElement("p")
footerText.textContent="Copyright 2021"
footer.appendChild(footerText)
footerText.style.cssText="    color: #fff;font-size: 10px;text-align: center;padding-top: 10px;"

