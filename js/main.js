var clock,timeRange = 5400;

function clockInit() {
    clock = new FlipClock($('.your-clock'), {
        // ... your options here
        autoStart: false,
        countdown: true,
        clockFace:'MinuteCounter'
       
    });
}
clockInit();
clock.setTime(timeRange);
//clock.start();

$(".start").click(function() {
    clock.start();
});

$(".reset").click(function() {
    clock.stop();
    clock.setTime(timeRange);
});

