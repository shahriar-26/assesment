<script>
    function showDateTime() {
        let now = new Date();

    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML =
    "Current Date: " + date + "<br>Current Time: " + time;
        }
        setInterval(showDateTime, 1000);
</script>