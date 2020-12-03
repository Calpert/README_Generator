function getLicenses(license){
if (license != "none"){
return(`## License
this project is licensed under ${license}`)


    }

}
function licenseLink(license){
if (license != "none"){
return(`* [License](#license)`)

    }
else {
return ""
    }

}

function licenseBadge(license){
if (license != "none"){
return `
![badgeImage](https://img.shields.io/badge/license-${license}-blue)`
    }

}


function generateMarkdown(responses){
    return `# ${responses.title}
    ${licenseBadge(responses.license)}
## Description
${responses.description}
## Table of contents
*[Installation](#installation)
*[Usage](#usage)
${licenseLink(responses.license)}
*[Contributing](#contributing)
*[Test](#test)

## Installation
To install dependancies, run the following commands:
\`\`\`
${responses.installation}
\`\`\`
## Usage
${responses.usage}

${getLicenses(responses.license)}
## Contributing
${responses.contributing}
## Test
\`\`\`
${responses.test}
\`\`\`
If you have questions about this repository, please contact me at ${responses.email}
You can see any of my other work at [${responses.github}](https://github.com/${responses.github}/)
`
}

module.exports = generateMarkdown;


