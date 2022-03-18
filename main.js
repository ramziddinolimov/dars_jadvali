var typed = new Typed(".typing", {
    strings: ["Html", "Css", "Sass", "Bootstrap", "JavaScript", "Vue js", "React js", "Angular js"],
    typeSpeed: 200,
    backSpeed: 60,
    loop: true
});



const DATA = [
    {
        id: 1,
        lesson: ["1. HTML Elements", "2. HTML Global Attributes", "3. HTML Iframe", "4. HTML Reference - Browser Support",
             "5. HTML Audio/Video Properties", "6. HTML Language Code", "7. HTML Forms",
            "8. HTML Attribute", "9. HTML Color", "10. HTML Class", "11. HTML Tables", "12. HTML Styles - CSS"]
    },
     {
         id: 2,
         lesson: ["1. CSS Colors", "2. CSS Backgrounds", "3. CSS Borders", "4. CSS Margins", "5. CSS Padding",
        "6. CSS Fonts", "7. CSS Icons", "8. CSS Tables", "9. CSS Display", "10. CSS Container", "11. CSS Input", "12. CSS Position", "13. CSS Dropdowns", "14. CSS 2D Transforms", "15. CSS 3D Transforms", "16. CSS Animations", "17. CSS Responsive", "18. CSS Grid", "19. CSS Properties", "20. CSS SASS" ] 
     },
     {
        id: 3,
        lesson: ["1. Customize", "2. Content", "3. Forms", "4. Accordion", "5. Alerts", "6. Badge", "7. Breadcrumb", "8. Buttons", "9. Card", "10. Carousel", "11. Collapse", "12. Dropdowns", "13. List Group", "14. Modal", "15. Navbar", "16. Offcanvas", "17. Pagination", "18. Popovers", "19. Spinners", "20. API", "21. Responsive"] 
    },
    {
        id: 4,
        lesson: ["1. Statements", "2. Syntax", "3. Variables", "4. Arithmetic", "5. Data Types", "6. Numbers", "7. Strings", "8. Functions", "9. Objects", "10. Arrays", "11. Date Objects", "12. Math Object", "13. Booleans", "14. if else and else if", "15. Switch Statement", "16. Loops", "17. Maps", "18. Hoisting", "19. Modules", "20. JSON", "21. Async", "22. HTML DOM", "23. Browser BOM", "24. Web APIs", "25. JS vs jQuery", "26. Graphics"] 
    },
    {
        id: 5,
        lesson: ["1. Vue.js 3 Fundamentals with the Composition API", "2. Vue.js 3 Fundamentals with the Options API", "3. TypeScript with Vue.js 3", "4. Application Monitoring in Vue.js with Sentry", "5. Vue Router 4 for Everyone", "6. Vue 3 Single File Components", "7. Vue 3 Composition API", "8. Reusable Vue.js Components with Slots", "9. Functional Components", "10. Vue.js Form Validation", "11. Vue.js + Firebase Realtime Database"] 
    },

    {
        id: 6,
        lesson: ["1. React Tutorial", "2. Render HTML", "3. JSX", "4. Components", "5. Class Components", "6. Props", "7. Events", "8. React Using CSS", "9. React Using Sass", "10. Conditional Rendering", "11. React Forms", "12. React Router", "13. React Memo", "14. React Hooks", "15. React API", "16. React LifeCycle"] 
    },

    {
        id: 7,
        lesson: ["1. Adding Navigation", "2. Managing Data", "3. Forms for Input", "4. Components", "5. Templates", "6. Directives", "7. Angular Tools", "8. Tutorials"] 
    }
]


lesson1.addEventListener('click', () => {
    lessonElement.textContent = ""
    DATA.forEach( (item) => {
        
        if(item.id == 1) {

            item.lesson.forEach( (i) =>{
                let newLiElement = document.createElement('li')
                let newTextElement = document.createElement('p')
                newLiElement.textContent = lesson1.value
        
                
            newLiElement.textContent = i
    

            lessonElement.appendChild(newLiElement)
            newLiElement.appendChild(newTextElement)
            })

            
        }
    })
})



lesson2.addEventListener('click', () => {
    lessonElement.textContent = ""
    DATA.forEach( (item) => {
        
        if(item.id == 2) {

            item.lesson.forEach( (i) =>{
                let newLiElement = document.createElement('li')
                let newTextElement = document.createElement('p')
                newLiElement.textContent = lesson2.value
        
                
            newLiElement.textContent = i
    

            lessonElement.appendChild(newLiElement)
            newLiElement.appendChild(newTextElement)
            })

            
        }
    })
})



lesson3.addEventListener('click', () => {
    lessonElement.textContent = ""
    DATA.forEach( (item) => {
        
        if(item.id == 3) {

            item.lesson.forEach( (i) =>{
                let newLiElement = document.createElement('li')
                let newTextElement = document.createElement('p')
                newLiElement.textContent = lesson3.value
        
                
            newLiElement.textContent = i
    

            lessonElement.appendChild(newLiElement)
            newLiElement.appendChild(newTextElement)
            })

            
        }
    })
})




lesson4.addEventListener('click', () => {
    lessonElement.textContent = ""
    DATA.forEach( (item) => {
        
        if(item.id == 4) {

            item.lesson.forEach( (i) =>{
                let newLiElement = document.createElement('li')
                let newTextElement = document.createElement('p')
                newLiElement.textContent = lesson4.value
        
                
            newLiElement.textContent = i
    

            lessonElement.appendChild(newLiElement)
            newLiElement.appendChild(newTextElement)
            })

            
        }
    })
})




lesson5.addEventListener('click', () => {
    lessonElement.textContent = ""
    DATA.forEach( (item) => {
        
        if(item.id == 5) {

            item.lesson.forEach( (i) =>{
                let newLiElement = document.createElement('li')
                let newTextElement = document.createElement('p')
                newLiElement.textContent = lesson5.value
        
                
            newLiElement.textContent = i
    

            lessonElement.appendChild(newLiElement)
            newLiElement.appendChild(newTextElement)
            })

            
        }
    })
})


lesson6.addEventListener('click', () => {
    lessonElement.textContent = ""
    DATA.forEach( (item) => {
        
        if(item.id == 6) {

            item.lesson.forEach( (i) =>{
                let newLiElement = document.createElement('li')
                let newTextElement = document.createElement('p')
                newLiElement.textContent = lesson5.value
        
                
            newLiElement.textContent = i
    

            lessonElement.appendChild(newLiElement)
            newLiElement.appendChild(newTextElement)
            })

            
        }
    })
})



lesson7.addEventListener('click', () => {
    lessonElement.textContent = ""
    DATA.forEach( (item) => {
        
        if(item.id == 7) {

            item.lesson.forEach( (i) =>{
                let newLiElement = document.createElement('li')
                let newTextElement = document.createElement('p')
                newLiElement.textContent = lesson5.value
        
                
            newLiElement.textContent = i
    

            lessonElement.appendChild(newLiElement)
            newLiElement.appendChild(newTextElement)
            })

            
        }
    })
})