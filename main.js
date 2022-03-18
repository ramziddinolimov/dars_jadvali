var typed = new Typed(".typing", {
    strings: ["Html", "Css", "Sass", "Bootstrap", "JavaScript", "Vue js", "React js", "Angular js"],
    typeSpeed: 200,
    backSpeed: 60,
    loop: true
});



const DATA = [
    {
        id: 1,
        lesson: ["1. HTML Elements", "2. HTML Global Attributes", "3. HTML Canvas Reference", "4. HTML Reference - Browser Support",
             "5. HTML Audio/Video Properties", "6. HTML Language Code Reference", "7. Pixels to Ems Conversion",
            "8. HTML Attribute Reference", "9. HTML Color Names", "10. Keyboard Shortcuts For Windows and Mac", "11. HTML Styles - CSS"]
    },
     {
         id: 2,
         lesson: ["1. CSS Reference", "2. CSS Functions Reference", "3. CSS Animatable", "4. CSS Units", "5. CSS 2D Transforms",
        "6. CSS 3D Transforms", "7. CSS Variables", "8. CSS Media Queries", "9. CSS Flexbox", "10. CSS Responsive",] 
     },
     {
        id: 3,
        lesson: ["1. CSS Grid", "2. CSS SASS","3. Bootstrap 5 Containers", "4. Bootstrap Customize", "5. Bootstrap Layout", 
        "6. Bootstrap Content", "7. Bootstrap Forms", "8. Bootstrap Components", "9. JavaScript", "10. JS Objects"] 
    },
    {
        id: 4,
        lesson: ["1. JS Functions", "2. JS Classes", "3. JS Async", "4. JS Versions", "5. JS HTML DOM"
        , "6. JS Browser BOM", "7. JS Web API", "8. JS JSON", "9. JS vs jQuery"] 
    },
    {
        id: 5,
        lesson: ["1. JS Examples", "2. JS References", "3. React JS", "4. React JS Main Concepts", "5. React JS Advanced Guides",
            "6. React JS Api Reference", "7. React JS Hooks", "8. React JS Contributing"] 
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