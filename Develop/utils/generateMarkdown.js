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

function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    case 'Apache':
      return `
      Copyright 2013 Mir Ikram Uddin

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
    case 'GPL':
      return `
      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.

      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <http://www.gnu.org/licenses/>.`;
    case 'BSD':
      return `
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are
      met:

      * Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above

      The name of the author may not be used to endorse or promote products
      derived from this software without specific prior written permission.

      THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY
      EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
      PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
      ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
      GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
      INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
      IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
      OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
      IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    case 'None':
      return 'No license information provided.';
    default:
      return '';
  }
}

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
    `\n\n${renderLicenseBadge(data.projectLicense)}` +
    `\n\n${renderLicenseLink(data.projectLicense)}` +
    `\n\n${renderLicenseSection(data.projectLicense)}` +
    `\n\n## Contributing` +
    `\n\n${data.projectContributing}` +
    `\n\n## Tests` +
    `\n\n${data.projectTests}` +
    `\n\n## Questions` +
    `\n\n### GitHub Profile` +
    `\n\nhttps://github.com/${data.projectQuestions}` +
    `\n\n### Email` +
    `\n\n${data.projectEmail}`;
};

module.exports = generateMarkdown;