# SHULENI API
Shuleni is a basic API built with Ruby rails.
It serves as a backend API link
The application has been built with the MVC design pattern.
## Pre-Requisites
In order to use this repository you will need the following:
Operating System (Windows 10+, Linux 3.8+, or MacOS X 10.7+)
RAM >= 4GB
Free Space >= 2GB
## Technologies-used
   ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)   ![render](https://img.shields.io/badge/Render-430091?style=for-the-badge&logo=render&logoColor=white)     ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)   ![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
   ![Ruby](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)    ![Sqlite](https://img.shields.io/badge/SQLite3-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
   ![mark-down](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
   ![stack](https://aleen42.github.io/badges/src/stackoverflow.svg)
         * Ruby v2.7.+
         * SQlite3 v1.6
         * ActiveRecord v7.0.4
         * Rake v13.0.6
         * Puma v6.1
         * rerun v0.14
         * Ruby on Rails v3.0.5
         * Serializer v5.3.0
## Setup
You can setup this repository locally by following this manual

https://github.com/Shuleni-Project/Shuleni.git


Clone the repository

Ensure the ruby gems are setup in your machine

bundle install

Perform any pending database migrations

rails db:migrate

Run the application

rails s

Open the application from your browser
http://localhost:3000

Application

This application is a simple web API that allows :

    A school owner/ manager/ facilitator can come to the website and create a new school. Also, another different school owner/ manager/ facilitator can create another school. But the different schools will not interact or collide in any way.


    The school owner can add students and educators. The educators have some more functionality like taking attendance, adding resources, etc.


    There is a place to store notes, books, resources, etc. Kind of a Google Drive for the student resources all in 1 place. Different classes may have different permissions to access it.


    Attendance is done regularly and it has to be signed by the teacher/educator responsible for the student/class

    The students take exams, tests, and assessments online. The process should be timed. The system should also try to find ways to avoid plagiarism

    The students have class-based chats. In order to interact as a class


# MODELS
Database schema definitions.

## Video_conference
| Column      | Data Type    | Description   |
| :---        |    :----:   |          ---: |
|id            |Integer     | Unique identifier |
|updated_at | Date | The date the meeting was updated |
|created_at | Date | The date the meeting was created |
## User
| Column      | Data Type | Description     |
| :---        |    :----:   |          ---: |
|id            | integer    | unique idenitifier |
|username    | text          | name of the user|
|email     |  text     |email of the user |
|role   | string | role of the user |
|course  | string | course taken|
|password_digest |text    | password |
## School
| Column      | Data Type | Description     |
| :---        |    :----:   |          ---: |
|id           | Integer      | unique identifier |
|name         | text         | name of the school |
|contact_details | integer    | contact of the school|
|address       | text         | address of the school |
## Chat
| Column      | Data Type    | Description   |
| :---        |    :----:   |          ---: |
|id           | Integer      | Unique identifier |
| message      | String       | chat message  |
|updated_at | Date | The date the chat was updated|
|created_at | Date | The date the chat was created |
# Attendance
 |Column      | Data Type    | Description   |
| :---        |    :----:   |          ---: |
|id           | Integer      | Unique identifier |
|updated_at | Date | The date the attendance was updated|
|created_at | Date | The date the attendance was created |

## resource
| Column      | Data Type    | Description   |
| :---        |    :----:   |          ---: |
|id           | Integer      | Unique identifier |
| Role      | String       | resources role  |
|book         |string         | books ,pdf |
|study_materials |string      |revision materials  |
|updated_at | Date | The date the resource was updated|
|created_at | Date | The date the resource was created |

## exam
| Column      | Data Type    | Description   |
| :---        |    :----:   |          ---: |
|id            |Integer     | Unique identifier |
|duration      |integer      | timed examination |
|updated_at | Date | The date the exam was updated |
|created_at | Date | The date the exam was created |

## unit
| Column      | Data Type    | Description   |
| :---        |    :----:   |          ---: |
|id            |Integer     | Unique identifier |
|name     |string     | name of the unit |
|section  | string    |section of the unit |
|updated_at | Date | The date the unit was updated |
|created_at | Date | The date the unit was created |

## LICENSE
This repository is distributed under the MIT License
Copyright 2023 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Author

This repository is maintained by:

.Samwel Githimu

.Leweel Muchiri

.Joy Kirui

.Tracy Mumbi

.Raphael Murangiri

.Brian Wambua
