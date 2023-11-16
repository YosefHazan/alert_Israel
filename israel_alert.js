var allAlram;
function getAllAlram() {
    $.getJSON("http://localhost:8080", function (data) {
        allAlram = data;
        $(allAlram).each(function () {
            $("body > div:nth-child(4)").append(`<div class="w3-bar">
                <span onclick="this.parentElement.style.display='none'" class="w3-button w3-xlarge w3-left">×</span>
                
                <div class="w3-bar-item">
                    <img src="city.png" class="w3-bar-item w3-circle" style="width:85px">
                    <span>עיר</span><span> : </span><span class="w3-large">${this.city}</span>
                </div>
                <div class="w3-bar-item">
                    <img src="Screenshot from 2023-11-14 00-38-54.png" class="w3-bar-item w3-circle" style="width:85px">
                    <span>תאריך</span><span> : </span><span class="w3-large">${this.date}</span>
                </div>
                <div class="w3-bar-item">
                    <img src="1069885.png" class="w3-bar-item w3-circle" style="width:85px">
                    <span>מזהה</span><span> : </span><span class="w3-large">${this.id}</span>
                </div>
            </div>`)
        });
    });
}
$(document).ready(function () { getAllAlram(); })