![AWS User Groups Logo](./static/images/uglogo.png)
# Website Template for AWS User Groups

## Introduction
### Purpose
This is a website theme designed and built for official AWS User Groups to deploy in their domains. The project aims to encourage user groups to build their own websites, have a better online presence and maintain additional communication channels.

### Demo
visit [AWS UG Berlin website](https://aws-user-group.berlin/) to examine the latest version of the template.

### Contributors
| Name    | Contributes Since |
| -------- | ------- |
| Kadir Keles  | October 2023   |
| Aaron Walker | December 2023    |
| Jacob Moracha    | January 2024   |

*Want to contribute? Mail us with a short introduction:* kadir@berlinawsug.de

### Next Steps
* Develop responsive design
* Improve single blog page cosmetics
* Activate subscription button
* Develop forms pages
* Re-organize data sources
* Accept additional partial requests

## Installation
### Prerequisites
* [Hugo](https://gohugo.io/installation/)
* any IDE: [*](https://www.jetbrains.com/webstorm/download) [*](https://code.visualstudio.com/download) [*](https://www.vim.org/download.php) [*](https://atom-editor.cc/)
* [git](https://git-scm.com/downloads) 

### Quick Start
* clone the project to your local device: `git clone https://github.com/kkeles/awsug-hugo`
* navigate to project folder in your terminal. Test by running: `hugo server` - visit `localhost:1313` in your web browser. You should see the website up & running
* You can also use `hugo server` for development. Change content, edit templates and layout in /themes/awsug folder and follow the updates at localhost:1313 

## Usage
### Configuration
*Please ignore theme.toml as it's related to this project but can remain as is for your website.*
**hugo.toml** is your main configuration file:  
- baseURL: main domain you use for your website ('https://example.com').  
- languageCode: to define the language(s) of your website. Use ISO 639-1 convention ('en-us','de-at').   
- title: title of your website ('AWS User Group Brussels')  
- theme = "awsug" *please keep it as is*  
- summaryLength: number of words to appear in blog summary ('35').

<br> [menu]: define menu elements for navigation. [[menu.main]] refers to a particular menu element used, main is the identifier of the menu. In future, you can create [[menu.mobile]] or [[menu.french]] for example.
	```[[menu.main]]  
	    identifier = "about"  
	    name = "About"  
	    url = "/about/"  
	    weight = 20```


## License
This project is licensed under the terms of the GNU General Public License. For additional details, see the LICENSE file included. 
