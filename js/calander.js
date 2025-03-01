function updateDate() {
    const dateElement = document.getElementById("calender");

    // বর্তমান তারিখ ও সময় পাওয়া
    const now = new Date();

    // দিন, মাস ও বছর বের করা
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options); 

    // তারিখ সেট করা
    dateElement.innerHTML = formattedDate;
}

// পেজ লোড হওয়ার সাথে সাথে তারিখ আপডেট হবে
window.onload = updateDate;