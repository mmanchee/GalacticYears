export class Ages {
  constructor() {
    this.user = "",
    this.daysAlive = 0,
    this.daysLeft = 0
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
    this.today = month + "/" + day + "/" + year;
    let tDate = new Date(this.today);
    let ddob = new Date(this.user.dob);

    let timeDiff = tDate.getTime() - ddob.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);

    this.daysAlive = dayDiff;
  }
  
  expectancy() {
    let d = this.user.dob.slice(6, 10);
    let y = this.user.dob.slice(0, 6);
    let year = String(parseInt(d) + this.user.expAge);
    this.expDate = y + year;

    let eDate = new Date(this.expDate);
    let ddob = new Date(this.user.dob);

    let timeDiff = eDate.getTime() - ddob.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);

    this.expInDays = dayDiff;
    this.daysLeft =  this.expInDays - this.daysAlive;
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
  jupiterYear() {
    let lifeDays = this.daysAlive;
    let planetDays = 4333;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.jupiter = [years, days];
  }
  saturnYear() {
    let lifeDays = this.daysAlive;
    let planetDays = 10759;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.saturn = [years, days];
  }
}
