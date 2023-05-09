// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//Function that creates a License Badge based on the choice the user made in the License question in the index.js file
function renderLicenseBadge(license) {
    let licenseBadge = ["MIT", "GPLv2", "Apache", "BSD 3-clause", "BSD 2-clause", "LGPLv3", "AGPLv3", "none"]
      if(license === licenseBadge[0]) {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      } else if (license === licenseBadge[1]) {
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      } else if (license === licenseBadge[2]) {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    
      } else if (license === licenseBadge[3]) {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    
      } else if (license === licenseBadge[4]) {
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    
      } else if (license === licenseBadge[5]) {
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    
      } else if (license === licenseBadge[6]) {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    
      } else {
        return ``
      }
    }
    // Renders the License information text in the README to make sense based on the License option the user chose
    function renderLicenseInfo(data){
      let licenseInfo
      if (data !== "none") {
        licenseInfo = `This project is licensed under the ${data} license.`
     } else {
        licenseInfo = "This project is not licensed."
     }
      return licenseInfo
    }
    // TODO: Create a function to generate markdown for README
    //Function that generates Markdown text as a README file based on input from the user
    function MarkDownGen(data) {
      const badge = renderLicenseBadge(data.license)
      let licenseInfo = renderLicenseInfo(data.license)
      
      const template = `# ${data.title} ${badge}
      
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## License
    
    ${licenseInfo}
    
    ## Contributing
    
    ${data.contributing}
    
    ## Tests
    
    ${data.tests}
    
    ## Questions
    
    Github username: [${data.gitHub}](https://www.github.com/${data.gitHub})
    
    Email: ${data.email}
    
    `;
    return template;
    };
    
    //Exports the generateMarkdown function
    module.exports = MarkDownGen;