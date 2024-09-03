const todayDiv = document.getElementById("today")
const timeDiv = document.getElementById("time")

todayDiv.textContent = "DAY and TIME"
timeDiv.textContent = "V"

function getTime(){
    let now = new Date();
    timeDiv.textContent = now;
    let year = now.getFullYear();
    let month = now.getFullMonth() + 1;
    let date = now.getFullDate();
    let hour = now.getFullHour();
    let minute = now.getFullMinute();

    month = month < 10 ? `0${month}` : month
    date = date < 10 ? `0${date}` : date
    hour = hour < 10 ? `0${hour}` : hour
    minute = minute < 10 ? `0${minute}` : minute


    todayDiv.textContent = `${year}년 ${month}월 ${date}일`
    timeDiv.textContent = `${hour}시 ${minute}분`

}

getTime()
setInterval(getTime, 1000)