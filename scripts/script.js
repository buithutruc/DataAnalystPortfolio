function getCurrentDate() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let monthTxt;

  switch (month) {
    case 1:
      monthTxt = "January";
    case 2:
      monthTxt = "February";
  }

  let todayTxt = monthTxt + " " + day + ", " + year;

  let currentDate = document.querySelectorAll(".now");
  for (let i = 0; i < currentDate.length; i++) {
    currentDate[i].innerText = todayTxt;
  }
}

getCurrentDate();
