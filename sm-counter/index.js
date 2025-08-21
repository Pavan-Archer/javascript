const num = document.querySelectorAll('.count')
let speed = 200;

num.forEach( (myCount) => {
    
    
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    
    let new_increment_num = Math.floor(target_count / speed);
    
    const updateNumber = () => {
        init_count +=  new_increment_num;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
            setTimeout(() => {updateNumber()}, 5)
        }
    }
    
    updateNumber();
    
})