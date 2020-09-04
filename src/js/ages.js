export class Ages {
  constructor() {
    this.user = "",
    this.daysAlive = 0
  }

  addUserData(user) {
    this.user = user;
    this.addDaysAlive();
  }

  addDaysAlive() {
    let date = new Date();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let day = String(date.getDate()).padStart(2, '0');
    let tDate = month + "/" + day + "/" + year;
    let today = new Date(tDate);
    let ddob = new Date(this.user.dob);

    let timeDiff = today.getTime() - ddob.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);

    this.daysAlive = dayDiff;
  }
}
