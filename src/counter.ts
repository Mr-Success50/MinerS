export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function handleClick(): void {
  const element = document.getElementById('udc_wrap');
  const btn_element = document.getElementById('btn');
  const btn_element2 = document.getElementById('btn2');
  if (element && btn_element && btn_element2) {
    element.style.display = "block";
    btn_element.style.display = "none";
    btn_element2.style.display = "block";
  }
}

export function handleClick2(): void { 
  const element = document.getElementById('udc_wrap');
  const btn_element = document.getElementById('btn');
  const btn_element2 = document.getElementById('btn2');
  if (element && btn_element && btn_element2) {
    element.style.display = "none";
    btn_element.style.display = "block";
    btn_element2.style.display = "none";
  }
}
