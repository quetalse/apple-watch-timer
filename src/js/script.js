document.addEventListener('DOMContentLoaded', function(){

    function createTimerBasel(){

        let timerBasel = document.querySelector('.timer__basel');

        for(var i = 1; i <= 60; i = i+1){

            let trait = document.createElement('div');
            trait.classList.add('trait');
            trait.style.transform = 'translate(-50%, -50%) rotate(' + (i * 6) + 'deg) translateY(-144px)';

            if(i % 5 === 0){

                let traitValue = document.createElement('div');
                traitValue.classList.add('trait__value');
                traitValue.innerText = i;

                traitValue.style.transform = 'translate(-50%, -50%) rotate(' + (i * 6) + 'deg) translateY(-125px) rotate(' + (- i * 6) + 'deg)';


                timerBasel.append(traitValue);
            }

            timerBasel.append(trait)

        }
    }

    createTimerBasel();
});