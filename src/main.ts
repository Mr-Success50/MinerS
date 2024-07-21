import './styles/style.css' //For importing links brandLogo
import brandLogo from '/images/vite.svg'
import { handleClick } from './counter.ts' //importing a function from and API endpoint
import { handleClick2 } from './counter.ts' //importing a function from and API endpoint
//________________________________________________________________________
//import { retrieveLaunchParams } from '@telegram-apps/sdk'; 
  
//________________________________________________________________________
var logoImage = document.getElementById("logo") as HTMLImageElement;
logoImage.src = `${brandLogo}`;

//____Telegram User Data__________________________________________________
/*const contentData0 = document.getElementById("userDataContent");

if (contentData0) {
  //const initDataRaw = "Your content goes here"; // Replace this with your actual data
  const { initDataRaw } = retrieveLaunchParams();
  contentData0.textContent = initDataRaw;
} else {
  console.error("Element with ID 'userDataContent' not found.");
}*/
//___CLOSED____Telegram User Data___________________________________________



// for launch btn
const button1 = document.getElementById('btn');
if (button1) {
  button1.addEventListener('click', handleClick);
}

// for close launch btn
const button2 = document.getElementById('btn2');
if (button2) {
  button2.addEventListener('click', handleClick2);
}
