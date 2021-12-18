var i = 0;
function change(element){
    // var a = element.innerHTML;
    if(element == '+')
        i = (i + 1)%4;
    else
        i = (i - 1)%4;

    switch(i){
        case 0:
            document.getElementById('bg').style.cssText = 'background-image: url("res_main/img/Roadster.jpg");';
            document.getElementById("mainWord").innerHTML = "Roadster";
            document.getElementById("mainWord").style.cssText = 'font-family: Japane; color:#A60425FF';

            document.getElementById("roadster").style.cssText = 'display: block;';
            document.getElementsByClassName('move-bg-car')[0].style.cssText = '';
            document.getElementsByClassName("model-x-car")[0].style.cssText = 'color: #black; border: 10px; padding: 5px 20px; border-radius: 20px; background-color: rgba(130, 130, 130, 0.0);';

            document.getElementsByClassName("roadster-car")[0].style.cssText = 'color: #bb0023; border: 10px; padding: 5px 20px; border-radius: 20px; background-color: rgba(130, 130, 130, 0.4);';
            document.getElementsByClassName("model-s-car")[0].style.cssText = 'background-color: rgba(130, 130, 130, 0.0);';

            break;
        case 1:
            document.getElementById('bg').style.cssText = 'background-image: url("res_main/img/model-s.png");';
            document.getElementById("mainWord").innerHTML = "Model S";
            document.getElementById("mainWord").style.cssText = 'font-family: \'Roboto\', sans-serif; color:#181B21';
            for(j = 0; j < document.getElementsByClassName("a").length; j++)
                document.getElementsByClassName("a")[j].style.cssText = 'color: black';

            document.getElementById("roadster").style.cssText = 'display: none';
            document.getElementsByClassName("roadster-car")[0].style.cssText = 'color: black; border: 0px; padding: 5px 20px; border-radius: 0px; background-color: rgba(130, 130, 130, 0.0);';

            document.getElementsByClassName("model-s-car")[0].style.cssText = 'color: #bb0023; border: 10px; padding: 5px 20px; border-radius: 20px; background-color: rgba(130, 130, 130, 0.4);';
            break;
        case 2:
            document.getElementById('bg').style.cssText = 'background-image: url("res_main/img/model-3.jpeg"); color: white; ';
            document.getElementById("mainWord").innerHTML = "Model 3";
            document.getElementById("mainWord").style.cssText = 'font-family: \'Roboto\', sans-serif; color:white';

            for(j = 0; j < document.getElementsByClassName("a").length; j++)
                document.getElementsByClassName("a")[j].style.cssText = 'color: white';
            document.getElementsByClassName("roadster-car")[0].style.cssText = 'color: white; border: 0px; padding: 5px 20px; border-radius: 0px; background-color: rgba(130, 130, 130, 0.0);';

            document.getElementsByClassName("model-3-car")[0].style.cssText = 'color: #FF466DFF; border: 10px; padding: 5px 20px; border-radius: 20px; background-color: rgba(130, 130, 130, 0.4);';
            break;
        case 3:
            // document.getElementById("bg").background-image = url("img/img2.png");
            let subTitle = document.getElementById('bg');
            subTitle.style.cssText = 'background-image: url("res_main/img/model-x.png")';
            document.getElementById("mainWord").innerHTML = "Model X";
            document.getElementById("mainWord").style.cssText = 'font-family: \'Roboto\', sans-serif; color:#181B21';
            for(j = 0; j < document.getElementsByClassName("a").length; j++)
                document.getElementsByClassName("a")[j].style.cssText = 'color: black';
            document.getElementsByClassName("roadster-car")[0].style.cssText = 'color: black; border: 0px; padding: 5px 20px; border-radius: 0px; background-color: rgba(130, 130, 130, 0.0);';

            document.getElementsByClassName("model-x-car")[0].style.cssText = 'color: #bb0023; border: 10px; padding: 5px 20px; border-radius: 20px; background-color: rgba(130, 130, 130, 0.4);';


            console.debug("hellpo");
            break;


        // case 4:
        //     document.getElementById('bg').style.cssText = 'background-image: url("res_main/img/powerwall.jpeg"); color: white; ';
        //     document.getElementById("mainWord").innerHTML = "Powerwall";
        //     document.getElementById("mainWord").style.cssText = 'font-family: \'Roboto\', sans-serif; color:#181B21';
        //     break;
    }
    /*$("#img").animate({left: '+=40px'}, "slow");
    $("#img").animate({left: '-=50px'}, "slow");*/
}