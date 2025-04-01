    [01basicreact] 

1. manifest.json is a file which is used to get meta information for mobile interface. 
2. robots.json is a file which is used for search engine.
3. index.html is the main file which is loaded. That is why it is called spa (single page application) because there is only one file and all the work is going to be done in that file only. 

4. React is the core foundational library which is used to take all the references.
    React DOM is its implementation for web.
    React Native is its implementation for mobile apps.

5. React makes a dom of its own called virtual dom and it then compares it with the existing main dom. The changes in comparison to the main dom are manipulated and in this way only selected dom structure is changed.

6. App is a function which returns a html.
7. React gave an interesting syntax:
    Take a function -> Return html -> Render that HTML 
8. The breakthrough point is that programming capability was introduced to html which was not present before.

9. react-scripts (dependecy) in the package.json file is responsible for linking index.js to the main index.html file.

    [01vitereact]

1. javascript is directly loaded in main index.html file (with script tag)
2. vite project is lighter as compared to create-react-app because the testing libraries and all other functionalities which are not necessary, are not loaded.

3. When we create components in vite, we create the file inside src file as .jsx 
    It is a rule for vite library. #cool
4. For creating components, the first letter of the funciton should be uppercase.

5. In .jsx, only one element is returned. In order to return multiple elements, enclose it with <div> tag. But hey, using <div> tag is a little overrated. Instead use an empty tag i.e. <> </> This is called fragment.

6. It is a good practice to name files inside of scr with uppercase as first letter. The main file i.e. index.jsx or main.jsx is named with lowercase.