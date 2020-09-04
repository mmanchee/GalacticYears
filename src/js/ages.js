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
  mercuryYear() {
    let lifeDays = this.daysAlive;
    let planetDays = 88;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.mercury = [years, days];
  }
  venusYear() {
    let lifeDays = this.daysAlive;
    let planetDays = 25;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.venus = [years, days];
  }
  earthYear() {
    let lifeDays = this.daysAlive;
    let planetDays = 365.25;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.earth = [years, days];
  }
  marsYear() {
    let lifeDays = this.daysAlive;
    let planetDays = 687;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.mars = [years, days];
  }
}
