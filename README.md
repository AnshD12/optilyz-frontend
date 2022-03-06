# Optilyz front end challenge

## steps to run the project

### prerequisite

1. git
2. node v17.5.0
3. npm v8.4.1

### via npm

1. git clone https://github.com/AnshD12/optilyz-frontend.git
2. npm install
3. npm start

### public url

1. https://anshd12.github.io/optilyz-frontend/

## Approach

First thing I started was to test and get the knowledge of omdb API.
I broke down the application to as many components as possible based on the data and the requirement

for example -
i needed a search text field so that would be one component
I saw page query param so got the idea that pagination would be required
to display the results I went with card and grid system

I further broke down the bigger components to smaller styled components
for example Title, Year, Type, Poster etc (if in future we want to style something different,
this would be useful)

after all the ui development I created a service to call the omdb api

Finally to connect the components I used context api from react

declared the variables required as the states on page level and used it across the components
