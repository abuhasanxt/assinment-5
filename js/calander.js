function updateDate() {
    const dateElement = document.getElementById("calender");
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options); 
    dateElement.innerHTML = formattedDate;
}
window.onload = updateDate;