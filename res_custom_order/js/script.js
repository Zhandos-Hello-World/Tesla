$(document).ready(function anim() {

        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function anim(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    });

var i = 0;
function change(element){
    // var a = element.innerHTML;
    if(element == '+')
        i = (i + 1)%4;
    else
        i = (i - 1)%4;

    switch(i){
        case 0:
            document.getElementById('name').innerHTML = 'Model S';
            document.getElementById('range').innerHTML = '375km';
            document.getElementById('top_speed').innerHTML = '155km/h';
            document.getElementById('sixty').innerHTML = '3.1s';
            document.getElementById('name1').innerHTML = 'Model S';
            document.getElementById('price').innerHTML = '$87 510';
            document.getElementById('name1Plaid').innerHTML = 'Model S Plaid';
            document.getElementById('price_plaid').innerHTML = '$127 510';
            document.getElementsByClassName('carusel')[0].src = 'https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$PBSB,$W40B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202112160416&crop=0,0,0,0&version=v0028d202112160416';

            break;
        case 2:
            document.getElementById('name').innerHTML = 'Model Y';
            document.getElementById('range').innerHTML = '318km';
            document.getElementById('top_speed').innerHTML = '135km/h';
            document.getElementById('sixty').innerHTML = '4.8s';
            document.getElementById('name1').innerHTML = 'Model Y Long';
            document.getElementById('price').innerHTML = '$53 510';
            document.getElementById('name1Plaid').innerHTML = 'Model S Plaid';
            document.getElementById('price_plaid').innerHTML = '$58 510';
            document.getElementsByClassName('carusel')[0].src = 'https://static-assets.tesla.com/configurator/compositor?&options=$MTY11,$PBSB,$WY20P,$INPB1&view=FRONT34&model=my&size=1920&bkba_opt=2&version=v0028d202112160416&crop=0,0,0,0&version=v0028d202112160416';

            break;
        case 1:
            document.getElementById('name').innerHTML = 'Model S';
            document.getElementById('range').innerHTML = '375km';
            document.getElementById('top_speed').innerHTML = '155km/h';
            document.getElementById('sixty').innerHTML = '3.1s';
            document.getElementById('name1').innerHTML = 'Model S';
            document.getElementById('price').innerHTML = '$87 510';
            document.getElementById('name1Plaid').innerHTML = 'Model S Plaid';
            document.getElementById('price_plaid').innerHTML = '$127 510';
            document.getElementsByClassName('carusel')[0].src = 'https://static-assets.tesla.com/configurator/compositor?&options=$MTS12,$PPSW,$WS10,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&version=v0028d202112160416&crop=0,0,0,0&version=v0028d202112160416';
            anim();
            break;
        case 3:
            // document.getElementById("bg").background-image = url("img/img2.png");
            document.getElementById('name').innerHTML = 'Model 3';
            document.getElementById('range').innerHTML = '334km';
            document.getElementById('top_speed').innerHTML = '145km/h';
            document.getElementById('sixty').innerHTML = '4.2s';
            document.getElementById('name1').innerHTML = 'Model 3';
            document.getElementById('price').innerHTML = '$39 510';
            document.getElementById('name1Plaid').innerHTML = 'Model 3 Plaid';
            document.getElementById('price_plaid').innerHTML = '$53 510';
            document.getElementsByClassName('carusel')[0].src = 'https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$PPSW,$W41B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202112160416&crop=0,0,0,0&version=v0028d202112160416';
            anim();
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
