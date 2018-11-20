# Census Survey Runner - Universal Javascript Prototype

This is a basic proof of concept application to investigate the viability of developing an electronic questionnaire application for the census which can allow logic to be executed by client browsers.

The high level goals of the application are to:
- Reduce the amount of server-side resource required
- Function without Javascript - server-side rendering and form post handling
- Function if client is offline - starting a session and submitting data would always require a server connection

Outstanding points to investigate:

- Security implications and mitigations for storing answers in IndexedDB
- Validation logic (including validation dependent on other answers)
- Routing logic
- Questions repeated for each household member
- Better solution for when to sync data with the server
- Gracefully handling submission when offline
- Translations

20 November 2018: No further work is being carried out on this POC. The code is being left here for reference.