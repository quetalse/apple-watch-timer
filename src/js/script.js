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

    function setTimerValue(milliseconds){
        let timerValueMinutes = document.querySelector('.minutes');
        let timerValueSeconds = document.querySelector('.seconds');
        let timerValueMilliseconds = document.querySelector('.milliseconds');

        let calculateMinutes = Math.floor(milliseconds / 60000);

        // if(calculateMinutes === 0){
        //     timerValueMinutes.innerHTML = "00";
        // }else{
            if(calculateMinutes < 10){
                timerValueMinutes.innerHTML = '0' + calculateMinutes;
            }else{
                timerValueMinutes.innerHTML = '' + calculateMinutes;
            }
        // }

        let calculateSeconds = Math.floor((milliseconds % 60000) / 1000);

        if(calculateSeconds < 10){
            timerValueSeconds.innerHTML = '0' + calculateSeconds;
        }else{
            timerValueSeconds.innerHTML = '' + calculateSeconds;
        }

        let calculatedMilliseconds = milliseconds % 1000

        if(calculatedMilliseconds < 10){
            timerValueMilliseconds.innerHTML = ('0' + calculatedMilliseconds).substring(0, 2);
        }else{
            timerValueMilliseconds.innerHTML = ('' + calculatedMilliseconds).substring(0, 2);
        }

    }

    function animationSecondArrow(){
        let timerSecondArrow = document.querySelector('.timer__second-arrow');
        let startTime = Date.now();

        setInterval(function (){
            let delta = Date.now() - startTime;
            // console.log(delta / 1000);

            timerSecondArrow.style.transform = 'rotate(' + (delta / 1000 * 6) + 'deg)';

            setTimerValue(delta)

        }, 10)
    }

    createTimerBasel();
    animationSecondArrow();




});