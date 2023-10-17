let animaute = function (a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i].getBoundingClientRect().top <= 250) {
      a[i].querySelector(
        `.bottomUpAppearance`
      ).style.cssText = `  animation-play-state:running`;

      if (a[i].querySelector(`.rightToLeftAppearance`) !== null) {
        a[i].querySelector(
          `.rightToLeftAppearance`
        ).style.cssText = `  animation-play-state:running`;
      } else if (a[i].querySelector(`.leftToRightAppearance`) !== null) {
        a[i].querySelector(
          `.leftToRightAppearance`
        ).style.cssText = `  animation-play-state:running`;
      }
    }
  }
};

let extitElement = document.createElement(`span`);
let extitElementZindex = 80000;
extitElement.style.cssText = `    display: block;
height: 100%;
width: 100%;
position: absolute;
top: 0px;
z-index: ${extitElementZindex};`;
extitElement.onclick = () => {
  document.querySelector(`#elemntUp`).style.setProperty(`opacity`, `0`);
  setTimeout(() => {
    extitElement.remove();
    document.querySelector(`#elemntUp`).remove();
  }, 140);
};
let links = document.querySelector(`.links`);
let dropDownList = document.createElement(`ul`);
let dropDownListLiOne = document.createElement(`li`);
let dropDownListLiTwo = document.createElement(`li`);
let dropDownListLiThird = document.createElement(`li`);
let dropDownListLiFourth = document.createElement(`li`);
let dropDownListLiFifth = document.createElement(`li`);
let dropDownListLiSixth = document.createElement(`li`);
let dropDownListLiSeventh = document.createElement(`li`);
let dropDownListLiEighth = document.createElement(`li`);

dropDownList.appendChild(dropDownListLiOne);
dropDownList.appendChild(dropDownListLiTwo);
dropDownList.appendChild(dropDownListLiThird);
dropDownList.appendChild(dropDownListLiFourth);
dropDownList.appendChild(dropDownListLiFifth);
dropDownList.appendChild(dropDownListLiSixth);
dropDownList.appendChild(dropDownListLiSeventh);
dropDownList.appendChild(dropDownListLiEighth);

let dropDownListLiText = [
  `User Profile`,
  `Settings`,
  `Our offers`,
  `What's new?`,
  `Change Hosting`,
  `Appearance`,
  `Language`,
  `Add Account `,
];
let dropDownListLiIcon = [
  `fa-solid fa-user`,
  `fa-solid fa-gear`,
  `fa-solid fa-coins`,
  `fa-solid fa-certificate`,
  `fa-solid fa-reply-all`,
  `fa-solid fa-moon`,
  `fa-solid fa-language`,
  `fa-solid fa-plus`,
];
for (let i = 0; i < dropDownList.children.length; i++) {
  let dDlI = document.createElement(`i`);
  let p = document.createElement(`p`);
  p.textContent = dropDownListLiText[i];
  dDlI.setAttribute(`class`, `${dropDownListLiIcon[i]}`);
  dropDownList.children[i].appendChild(dDlI);
  dropDownList.children[i].appendChild(p);
  dropDownList.style.cssText = `      position: absolute;
  z-index: 15;
  padding: 25px;
  transition: 0.5s;
  width: 100%;
  left: 0px;
  backgroungd-color: rgb(0, 52, 89);
  margin: 0px;
  top: 160%;
  display: grid;
  border-radius: 30px;
  opacity: 0;
  grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));

`;
  dropDownList.children[i].style.cssText = `display: flex;  
    margin: 5px;
  align-items: center;
  font-size: 25px;
  background-color: rgb(0, 52, 89);

  padding: 20px;
  border-radius: 25px;
  cursor: pointer;`;
  dropDownList.children[i].onmouseenter = () => {
    dropDownList.children[i].style.setProperty(`color`, `var(--FifthColor)`);
    dropDownList.children[i].style.setProperty(
      `transition`,
      `var(--transitionTime)`
    );
    dropDownList.children[i].style.setProperty(`padding-left`, `40px`);
  };
  dropDownList.children[i].onmouseleave = () => {
    dropDownList.children[i].style.setProperty(`color`, `var(--firstColor)`);
    dropDownList.children[i].style.setProperty(`padding-left`, `20px`);
  };
  p.style.cssText = `margin: 0 0 0 20px;`;
}
links.addEventListener(`click`, () => {
  setTimeout(() => {
    dropDownList.style.setProperty(`opacity`, `1`);
  }, 50);
  let backgroundLinks = document.createElement(`span`);
  document.body.appendChild(backgroundLinks);
  backgroundLinks.style.cssText = `width: 100%;
  display: block;
  height: ${window.screen.height}px;
  position: absolute;
  z-index: 10;
  top: -80px;`;
  links.appendChild(dropDownList);
  backgroundLinks.onclick = () => {
    dropDownList.style.setProperty(`opacity`, `0`);
    setTimeout(() => {
      dropDownList.remove();
      backgroundLinks.remove();
    }, 50);
  };
});
window.onscroll = () => {
  animaute(document.querySelectorAll(`.reason`));
};
let customersSection = document.querySelector(`#customersSection`);
let customers = document.querySelectorAll(`.customer`);
let customerOpnin = document.createElement(`div`);
customerOpnin.style.cssText = `  display: flex;
    justify-content: center;
    align-items: center; position:relative; top:0px;  font-size: 30px;
    color: yellow;transition:0.3s;`;
for (let i = 0; i < 5; i++) {
  let stars = document.createElement(`i`);
  stars.setAttribute(`class`, `fa-solid fa-star`);
  customerOpnin.append(stars);
}
for (let i = 0; i < customers.length; i++) {
  let customerImg = customers[i].querySelector(`div img`);
  let customerName = customers[i].querySelector(`div h3`);
  customerName.remove();
  customers[i].addEventListener(`mouseenter`, () => {
    customerOpnin.style.setProperty(`opacity`, `1`);
    customerImg.style.cssText = ` width: 80px   `;
    customerName.style.cssText = `text-align: center;
    color: var(--SeconColor);
    font-size: 30px;
    position:relative; 
    text-transform: capitalize;
    transition:0.3s;opacity:1;`;
    customers[i].append(customerOpnin);
    customers[i].append(customerName);
  });

  customers[i].addEventListener(`mouseleave`, () => {
    customerImg.style.cssText = `box-shadow: -1px 20px 20px 200px white;
    z-index: 5;
    position: relative;
    transition: 0.3s;width:164px;
`;
    customers[i].children[1].remove();
    customerName.remove();
  });

  customers[i].addEventListener(`click`, () => {
    document.body.append(extitElement);

    let boxDetails = document.createElement(`div`);
    let profileImgAndName = document.createElement(`div`);
    let profileImg = document.createElement(`img`);
    let profileName = document.createElement(`h2`);
    let feedBack = document.createElement(`div`);
    let customerfeedBack = document.createElement(`p`);
    let profileNameText = document.createTextNode(`${customerName.innerText}`);
    let customerfeedBackText =
      document.createTextNode(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aspernatur atque
    porro placeat incidunt veniam provident. Commodi a, quibusdam itaque unde
    inventore deleniti ratione pariatur minima ex eaque quia soluta!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aspernatur atque
    porro placeat incidunt veniam provident. Commodi a, quibusdam itaque unde
    inventore deleniti ratione pariatur minima ex eaque quia soluta!
    `);

    boxDetails.setAttribute(`boxDetailsStayle`, ``);
    boxDetails.setAttribute(`id`, `elemntUp`);
    profileImgAndName.setAttribute(`profileImgAndNameStyle`, ``);
    profileImg.setAttribute(`profileImgStyle`, ``);
    profileImg.setAttribute(`src`, `${customerImg.getAttribute(`src`)}`);
    profileName.setAttribute(`profileNameStyle`, ``);
    feedBack.setAttribute(`feedBackStyle`, ``);
    customerfeedBack.setAttribute(`customerfeedBackStyle`, ``);

    customerfeedBack.append(customerfeedBackText);
    feedBack.append(customerfeedBack);
    profileName.append(profileNameText);
    profileImgAndName.append(profileName);
    profileImgAndName.append(customerOpnin);
    profileImgAndName.append(profileImg);
    boxDetails.append(profileImgAndName);
    boxDetails.append(feedBack);
    console.log(customerOpnin);
    customersSection.append(boxDetails);

    boxDetails.style.cssText = `    background-color: var(--FifthColor);
    position: absolute;
    padding: 25px;
    width: 80%;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    box-shadow: 0px 0px 8px 8px #0000005e;
    height:fit-content;
    border-radius: 60px;
    z-index:${extitElementZindex + 1};
    transition:0.3s;
    opacity:0;
    `;

    setTimeout(() => {
      boxDetails.style.setProperty(`opacity`, `1`);
    }, 50);
    profileImgAndName.style.cssText = `display: flex;
    margin: 0px 0px 10px 0px;
    align-items: center;
    flex-direction: column-reverse;`;
    profileName.style.cssText = `    color: var(--SeconColor);
    font-size: 35px;
    margin: 0;margin-top:20px;`;
    profileImg.style.cssText = `width:100px;`;
    customerfeedBack.style.cssText = ` font-size: 25px;
    padding: 20px;
    line-height: 1.5;
    text-align: center;
}`;
  });
}
