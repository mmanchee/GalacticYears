export class Ages {
  constructor() {
    this.user = {},     // {name: , dob: , expAge: }
    this.days = {},     // {alive: , total: , left: }
    this.date = {},     // {today: , exp: }
    this.planets = {Mercury: 88, Venus: 25, Earth: 365.25, Mars: 687, Jupiter: 4333, Saturn: 10759}
  }

  addUserData(user) {
    this.user = user;
    this.addDaysAlive();
    this.expectancy();
  }

  adjDate(date) {
    let mm = date.slice(5, 7);
    let dd = date.slice(8, 10);
    let yyyy = date.slice(0, 4);
    return `${mm}/${dd}/${yyyy}`;
  }

  addDaysAlive() {
    let date = new Date();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let day = String(date.getDate()).padStart(2, '0');
    this.date.today = month + "/" + day + "/" + year;
    
    let tDate = new Date(this.date.today);
    let ddob = new Date(this.user.dob);

    let timeDiff = tDate.getTime() - ddob.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);

    this.days.alive = dayDiff;
  }
  
  expectancy() {
    let d = this.user.dob.slice(6, 10);
    let y = this.user.dob.slice(0, 6);
    let year = String(parseInt(d) + this.user.expAge);
    this.date.exp = y + year;

    let eDate = new Date(this.date.exp);
    let ddob = new Date(this.user.dob);

    let timeDiff = eDate.getTime() - ddob.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);

    this.days.total = dayDiff;
    this.days.left = this.days.total - this.days.alive;
  }
  // Refactored code for below 
  planetYear() {
    let textToHTML = "";
    for (let key in this.planets) {
      textToHTML += `<p> ${key} has ${this.planets[key]} days in one cycle. <br> For you; <br>`;
      for (let type in this.days) {
        let years = Math.floor(this.days[type] / this.planets[key]);
        let days = Math.floor(this.days[type] % this.planets[key]);
        let under = `${type}: ${years} years and ${days} days<br>`;
        let over = `Congratulations, you are ${years * -1} and ${days * -1} days over your expectancy!`
        years < 0 ? years = textToHTML += over : textToHTML += under;
      }
    }
    return textToHTML;
  }

  mercuryYear() {
    let lifeDays = this.days.alive;
    let planetDays = ages.planets.Mercury;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.mercury = [years, days];
  }
  venusYear() {
    let lifeDays = this.days.alive;
    let planetDays = ages.planets.Venus;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.venus = [years, days];
  }
  earthYear() {
    let lifeDays = this.days.alive;
    let planetDays = ages.planets.Earth;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.earth = [years, days];
  }
  marsYear() {
    let lifeDays = this.days.alive;
    let planetDays = ages.planets.Mars;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.mars = [years, days];
  }
  jupiterYear() {
    let lifeDays = this.days.alive;
    let planetDays = ages.planets.Jupiter;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.jupiter = [years, days];
  }
  saturnYear() {
    let lifeDays = this.days.alive;
    let planetDays = ages.planets.Saturn;

    let years = Math.floor(lifeDays / planetDays);
    let days = Math.floor(lifeDays % planetDays);

    this.saturn = [years, days];
  }
}

export let ages = new Ages();
