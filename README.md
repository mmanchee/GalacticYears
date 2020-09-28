# _Galactic Year Converter_

#### _Week 5 Solo Project for Epicodus, September 4th, 2020_

#### Published at: [Galactic Years](https://mmanchee.github.io/GalacticYears/)

#### By _**Mike Manchee**_

## Description

This project is designed to calculate the current age of the user over multiple planets in this solar system. These planets include Mercury, Venus, Mars, Jupiter and Neptune. calculation of these days is based on NASA facts website located [Here](https://spaceplace.nasa.gov/years-on-other-planets/en/). The user will enter their birth date and life expectancy with help from [Here](https://www.blueprintincome.com/tools/life-expectancy-calculator-how-long-will-i-live/) and [Here](https://media.nmfn.com/tnetwork/lifespan/), into the project. The project will calculate their age, as of today, as well as their life expectancy on each planet.

<!-- Brainstorming
User enters name, birth date, age expectancy 
age is determined to today, in days, with birth date
birth date is sent through a function for each planet
  if over expectancy, congratulate them on X years over
the return is displayed for user for each planet

 -->
### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|  1. Create a constructor to take in user info | user input | user object |
|  2. Create a years class for calculations | user object | solar class |
|  3. Age Function, calculate age in days | birth date | age in days |
|  4. Mercury Function, use days to calculate mercury years (88 days) | age in days | mercury years |
|  5. Venus Function, use days to calculate venus years (25 days) | age in days | venus years |
|  6. Earth Function, use days to calculate earth years (365.25 days) | age in days | earth years |
|  7. Mars Function, use days to calculate mars years (687 days) | age in days | mars years |
|  8. Jupiter Function, use days to calculate Jupiter years (4,333 days) | age in days | jupiter years |
|  9. Saturn Function, use days to calculate Saturn years (10,759 days) | age in days | saturn years |
|  10. Expectancy Function, calculate the days total left and days left from today | expAge | total days left and days from today |
|  11. Refactor Code, Clean up code | Same | Same |
|  12. PlanetExp Functionality, use each planet year to determine life expectancy on that planet | age in days | planet expectancy years |
|  13. Report Function, use ages object to report to JQuery | ages object | jquery ready HTML |

## Setup/Installation Requirements

* Download option
  * Download files from GitHub repository by click Code and Download Zip
  * Extract files into a single directory 
  * Run GitBASH in directory
    * Type "npm install" - to install Node Package Manager and additional files
    * Type "npm run start" - to open compiled browser and view project
  * Have fun with Galactic Years!

* Cloning options
  * For cloning please use the following GitHub [tutorial](https://docs.github.com/en/enterprise/2.16/user/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
  * Place files into a single directory 
  * Run GitBASH in directory
    * Type "npm install" - to install Node Package Manager and additional files
    * Type "npm run start" - to open compiled browser and view project
  * Have fun with Galactic Years!

## Known Bugs

No known bugs

## Technologies Used
Project Specific
* Jest for TDD
* JSON - WebPack Creation
* Class and Object manipulation

Main Programs
* HTML
* CSS
  * Bootstrap
* JavaScript
  * JQuery

### Other Links
[GitHub](https://github.com/mmanchee)
[Portfolio](https://mmanchee.github.io/portfolio/)

### License

Copyright (c) 2020 **_{Mike Manchee}_**
Licensed under MIT