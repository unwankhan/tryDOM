const heading=document.createElement('h3');
heading.id=' sub-heading';
const headText=document.createTextNode("Buy high quality organic fruits online");
heading.style.fontStyle='italic';
heading.appendChild(headText);
const divs=document.getElementsByTagName('div');
const firstDiv=divs[0];
firstDiv.appendChild(heading);
const para=document.createElement('p');
para.id='fruits-total';
const paraText=document.createTextNode("Total fruits: 4");
para.appendChild(paraText);
const secondDiv=divs[1];
const unList=document.querySelector('.fruits');
secondDiv.insertBefore(paraText,unList);