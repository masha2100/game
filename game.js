    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");

    document.addEventListener("keydown",function(event) {
        jump();
    });
     
    function jump() {
        if (dino.classList != "jump") {
            dino.classList.add('jump')
        }
        setTimeout(function() {
            dino.classList.remove("jump")
        },300)
        
        //dino.classList.add("jump")//метод который возвращает псевдо-массив,содержащий все классы елемента 

    }

    let isAlive = setInterval( function(){
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))//parsInt возвращает целое число,getComputedStyle - возвращает обьект содержащие значения все css-свойств элемента и далее получаем его значение
        let  cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

        if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >=140 ){
            alert("Game Over!")
        }
    }, 10)