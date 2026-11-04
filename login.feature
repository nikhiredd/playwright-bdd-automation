Feature: verify login

Feature Description: verify user is able to login successfully
Scenario: login with valid credentials 
Given user is on orangehrm application
When user enters username and password
When user click login button 
Then user should be able to view the dashboard 

|username|    |password|
|Admin|       |admin123|