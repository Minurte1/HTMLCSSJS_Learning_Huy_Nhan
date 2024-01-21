
function confirmForm() {
    var tk = document.getElementById('tk').value;
    var mk = document.getElementById('mk').value;

    if (tk != "" && mk != "") {
        if (tk == "nguyenhoangnhan" && mk == "nguyenhoangnhan") {
            window.location = "../CV/index.html"
            alert("OKe");
            return false;

        } else {
            alert('that bai');
            return false
        }

    } else {
        alert('bi trong pass tk');
        return false;
    }


}




function hienmk() {
    mk.type = (mk.type === 'password') ? 'text' : 'password';
}

