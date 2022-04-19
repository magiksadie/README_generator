// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD':
      return '[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return '';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'None':
      return '';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`;
    case 'Apache':
      return `## License

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;
    case 'GPL':
      return `## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`;
    case 'BSD':
      return `## License

[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
`;
    case 'None':
      return '';
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}` +
    `\n\n${data.projectDescription}` +
    `\n\n## Table of Contents` +
    `\n\n* [Installation](#installation)` +
    `\n* [Usage](#usage)` +
    `\n* [License](#license)` +
    `\n* [Contributing](#contributing)` +
    `\n* [Tests](#tests)` +
    `\n* [Questions](#questions)` +
    `\n\n## Installation` +
    `\n\n${data.projectInstallation}` +
    `\n\n## Usage` +
    `\n\n${data.projectUsage}` +
    `\n\n## License` +
    `\n\n${data.projectLicense}` +
    `\n\n## Contributing` +
    `\n\n${data.projectContributing}` +
    `\n\n## Tests` +
    `\n\n${data.projectTests}` +
    `\n\n## Questions` +
    `\n\nhttps://github.com/${data.projectQuestions}` +
    `\n\n### Email` +
    `\n\n${data.projectEmail}`;
};


module.exports = generateMarkdown;
