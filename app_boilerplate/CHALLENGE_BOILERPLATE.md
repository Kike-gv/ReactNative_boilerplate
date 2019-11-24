1. Create new repository on github 'Cristiam-CRA-Boilerplate'

2. Create develop branch
3. init React (create-react-app)

4. -develop- Setup eslint (npm install -g eslint && eslint --init)
5. -develop- Delete unused images and files (App.css, logo.svg)

5. Create sass branch
6. -sass- install sass (npm install --save-dev node-sass)
7. Merge sass branch into develop (git checkout develop ;; git merge sass)

8. Create test branch
9. -test- install cypress
10. -test- install enzyme

11. Create router branch
12. -router- install router (npm install --save react-router-dom)
13. -router- Create pages dir with `Home` and `About`
14. -router- Create `Header` component and define a layout on app with a fixed header and both pages
15. Merge router branch into develop (git checkout develop ;; git merge router)

16. Create redux branch
17. -redux- install redux (npm install --save redux react-redux)
18. -redux- Set a generic action and reducer for a `counter` state
19. -redux- Develop a component using dispatch and state from redux 
20. Merge redux branch into develop (git checkout develop ;; git merge redux)