// https://keycode.info/

const d = document;
const displayKey        = d.querySelector('.key h2')
const displayKeyCode    = d.querySelector('.keyCode h2')
const keyCodeDiv        = d.querySelector('.keyCode')
const overlay           = d.querySelector('.overlay')

window.addEventListener('keydown',(e)=>{
    overlay.classList.add('hide');
    displayKey.innerText    =e.key;
    displayKeyCode.innerText=e.keyCode;
    if(e.keyCode == 32){
        displayKey.innerText= `space`;
    }
})

keyCodeDiv.addEventListener('click',(e)=>{
    const textarea          = d.createElement('textarea');
    textarea.value          = keyCodeDiv.querySelector('h2').innerText;
    textarea.style.position = 'absolute';

    d.body.appendChild(textarea);
    textarea.select();
    d.execCommand('copy');
    d.body.removeChild(textarea);
    
    let 
    p = keyCodeDiv.querySelector('p'),
    previousText = p.innerText;
    p.innerText  = 'Copied';

    setTimeout(()=>{
        p.innerText = previousText;
    },2000)
})