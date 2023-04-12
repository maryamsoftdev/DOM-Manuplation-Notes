// DOM
// First we have to select element we can select element by 5 ways:
// - [ ] Get element by id()
// - [ ] Get emergent by classname()
// - [ ] Get emelenet by tag name()
// - [ ] query selector()
// - [ ] Query selctorAll()
// Styling element by query selector
// CreateElement:
// First we have to select parent item using query selector then wen can create Element with in parent element using create element property then we use append method to add child element with in parent element
// 1. Const ul=  document.querySelector(ul);// selection of parent elements
// 2. Const li = document.creatElement(“li”);//creation of element within parent element
// 3. Ul.append(li);// adding li within ul (append mean add)
// 4. Li.innerText = ‘text’
// 5. Li.setAttribute(‘id’,’main-heading’)//Li.setAttribute(‘name’,’attribute name’)
// 6. Li.classList(main-heading)
// 7. Li.remove()

// Modifying  content
// Inner text
// Text content
// Inner HTML
// Modify classes and attributes
// setAttribute
// RemoveAttribute
// getAttribute
// classList.add()
// classList.remove()
// classList.contains()//we check for weather stated class is add or not , its a boolean value
// DOM TREE
// Transfers the nodes
// Parent node transvers
// .parentNode//this is recomended property 
// .parentElememt
// Child node transfers
// .childNode
// .firstChild
// .lastChild
// .firstElemetChild
// .lastElemetChild
// Sibling node transvers
// .previousSibling
// .nextSibling
// Event Listener
// We can add event listener in two ways
// In html(onClick)
// In javascript(addEventListner)
// Event Probagation
// 1. Event capturing
// 2. Target
// 3. Event bubbling
// Event Delegation
element.addEventListener("click", function(){ alert("Hello World!"); });