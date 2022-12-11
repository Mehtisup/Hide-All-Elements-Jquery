<script>
function timeFunction() {
    const timer = new Date();
    var h = timer.getHours();
    var m = timer.getMinutes();
    var s = timer.getSeconds();
    m = checkTime(m);;
    s = checkTime(s);
    setTimeout(timeFunction, 1000);
    document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

$(document).ready(function() {
    $("button").click(function() {
        $("*").hide();
    })
})
</script>
