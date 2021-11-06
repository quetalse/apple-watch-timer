document.addEventListener('DOMContentLoaded', function(){

    function createTimerBasel(){

        let timerBasel = document.querySelector('.timer__basel');

        // for(var i = 1; i <= 60; i = i+1){
        //
        //     let trait = document.createElement('div');
        //     trait.classList.add('trait');
        //     trait.style.transform = 'translate(-50%, -50%) rotate(' + (i * 6) + 'deg) translateY(-144px)';
        //
        //     if(i % 5 === 0){
        //
        //         let traitValue = document.createElement('div');
        //         traitValue.classList.add('trait__value');
        //         traitValue.innerText = i;
        //         traitValue.style.transform = 'translate(-50%, -50%) rotate(' + (i * 6) + 'deg) translateY(-125px) rotate(' + (- i * 6) + 'deg)';
        //
        //         timerBasel.append(traitValue);
        //     }
        //
        //     timerBasel.append(trait)
        //
        // }


        for(var i = 1 / 4; i <= 60; i = i+1/4){

            console.log('i', i)

            let trait = document.createElement('div');
            trait.classList.add('trait');

            if(i % 5 === 0){

                let traitValue = document.createElement('div');
                traitValue.classList.add('trait_value');
                traitValue.innerText = i;
                traitValue.style.transform = 'translate(-50%, -50%) rotate(' + (i * 6) + 'deg) translateY(-125px) rotate(' + (- i * 6) + 'deg)';

                timerBasel.append(traitValue);

                trait.classList.add('trait_major');
            }

            if(i % 1 === 0){
                trait.classList.add('trait_whole');
                trait.style.transform = 'translate(-50%, -50%) rotate(' + (i * 6) + 'deg) translateY(-145px)';
            }else{
                trait.classList.add('trait_quarter');
                trait.style.transform = 'translate(-50%, -50%) rotate(' + (i * 6) + 'deg) translateY(-147px)';
            }

            timerBasel.append(trait)

        }

    }


    function animationSecondArrow(){
        let timerSecondArrow = document.querySelector('.timer__second-arrow');
        let startTime = Date.now();

        setInterval(function (){
            let delta = Date.now() - startTime;
            console.log(delta / 1000);

            timerSecondArrow.style.transform = 'rotate(' + (delta / 1000 * 6) + 'deg)';

        }, 10)
    }

    createTimerBasel();
    animationSecondArrow();
});