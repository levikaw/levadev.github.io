$('document').ready(function() {
    var typeSpeed = 55
    var typed = new Typed("#typed", {
        strings: ["Приветствуем!", "Дорогие гости!", "Приглашаем Вас на свадьбу Дмитрия и Кристины!"],
        typeSpeed: typeSpeed,

        onComplete: function(self) {
            $( ".add" ).append('guest@Macintosh ~ %  <span id="typed1">');
            
            var typed1 = new Typed("#typed1", {
                strings: ["28.07.2023 в 16:00"],
                typeSpeed: typeSpeed,
            
                onComplete: function(self) {
                    $( ".link1" ).text( "guest@Macintosh ~ %  Чтобы узнать подробности, пожалуйста, перейдите по ссылкам" );
                    $( ".link2" ).append( '<a href="https://t.me/Wedding_DK_Bot" target="_blank">confirmation_link > Чтобы подтвердить, что вы придете и узнать место, нажмите <span>здесь!</span></a>' );
                    $( ".link3" ).append( '<a href="https://t.me/+aoe3Pa6aC9swOTY6" target="_blank">media_link > Посмотреть фотографии после/во время мероприятия можно <span>здесь!</span></a>' );
                    $( ".last" ).text( "guest@Macintosh ~ % " );
                }
            });
        }
    });
});

