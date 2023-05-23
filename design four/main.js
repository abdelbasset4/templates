const counter = document.querySelectorAll('.counter');

setTimeout(() => {
    let i =0;
    const myCounterExp = setInterval(() => {
        i++;
        counter[0].innerHTML = i
        if(i==10){
            clearInterval(myCounterExp)
        }
    }, 200);
    
    let j =0;
    const myCounterPro = setInterval(() => {
        j++;
        counter[1].innerHTML = j
        if(j==500){
            clearInterval(myCounterPro)
        }
    }, 10);
    let k =0;
    const myCounterClient = setInterval(() => {
        k++;
        counter[2].innerHTML = k
        if(k==200){
            clearInterval(myCounterClient)
        }
    }, 20); 
}, 6000);

