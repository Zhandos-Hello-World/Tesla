var i = 0;
function change(element){
    // var a = element.innerHTML;
    if(element == '+')
        i = (i + 1)%4;
    else
        i = (i - 1)%4;

    switch(i){
        case 0:
            document.getElementById('bg').style.cssText = 'background-image: url("Roadster.jpg");';
            document.getElementById("mainWord").innerHTML = "Roadster";
            document.getElementById("mainWord").style.cssText = 'font-family: Japane; color:#A60425FF';
            document.getElementById("roadster").style.cssText = 'display: block';
            break;
        case 1:
            document.getElementById('bg').style.cssText = 'background-image: url("model-s.png");';
            document.getElementById("mainWord").innerHTML = "Model S";
            document.getElementById("mainWord").style.cssText = 'font-family: \'Roboto\', sans-serif; color:#181B21';
            for(j = 0; j < document.getElementsByClassName("a").length; j++)
                document.getElementsByClassName("a")[j].style.cssText = 'color: black';

            document.getElementById("roadster").style.cssText = 'display: none';
            break;
        case 2:
            document.getElementById('bg').style.cssText = 'background-image: url("model-3.jpeg"); color: white; ';
            document.getElementById("mainWord").innerHTML = "Model 3";
            document.getElementById("mainWord").style.cssText = 'font-family: \'Roboto\', sans-serif; color:white';
            for(j = 0; j < document.getElementsByClassName("a").length; j++)
                document.getElementsByClassName("a")[j].style.cssText = 'color: white';
            break;
        case 3:
            // document.getElementById("bg").background-image = url("img/img2.png");
            let subTitle = document.getElementById('bg');
            subTitle.style.cssText = 'background-image: url("model-x.png")';
            document.getElementById("mainWord").innerHTML = "Model X";
            document.getElementById("mainWord").style.cssText = 'font-family: \'Roboto\', sans-serif; color:#181B21';
            for(j = 0; j < document.getElementsByClassName("a").length; j++)
                document.getElementsByClassName("a")[j].style.cssText = 'color: black';


            console.debug("hellpo");
            break;


        case 4:
            document.getElementById('bg').style.cssText = 'background-image: url("powerwall.jpeg"); color: white; ';
            document.getElementById("mainWord").innerHTML = "Powerwall";
            document.getElementById("mainWord").style.cssText = 'font-family: \'Roboto\', sans-serif; color:#181B21';
            break;
    }
    /*$("#img").animate({left: '+=40px'}, "slow");
    $("#img").animate({left: '-=50px'}, "slow");*/
}