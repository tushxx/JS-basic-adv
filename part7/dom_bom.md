
# DOM
JavaScript can dynamically read, manipulate, and modify content, structure, and styling through the DOM.

🛠️ Key Properties/Methods:

| Category           | Example                                 | Description                   |
| ------------------ | --------------------------------------- | ----------------------------- |
| Accessing elements | `document.getElementById("id")`         | Get a specific element by ID  |
|                    | `document.querySelector(".class")`      | Get first matching element    |
| Modifying content  | `element.innerHTML = "New Text"`        | Change HTML inside an element |
|                    | `element.textContent`                   | Change only text              |
| Modifying style    | `element.style.color = "blue"`          | Change CSS from JS            |
| Attributes         | `element.setAttribute("href", "#")`     | Set or get attributes         |
| Events             | `element.addEventListener("click", fn)` | Attach events                 |


Use Cases:
(1)Creating dynamic content (adding/removing elements)

(2)Form validation

(3)Event-driven interfaces (clicks, keyboard input)

(4)Real-time UI updates (like live search, todo apps)
# example
document.getElementById("btn").addEventListener("click", () => {
  document.querySelector("p").textContent = "Button Clicked!";
});

# nodelist - A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes) , NodeList items can only be accessed by their index number.
you can apply foreach loop on nodelist

# HTMLcollection - HTMLCollection is a collection of document elements. HTMLCollection items can be accessed by their name, id, or index number.
you can not apply foreach loop on nodelist


# BOM
The BOM provides JavaScript access to browser-specific features outside the document — like windows, tabs, history, cookies, and screen. It's not standardized like DOM, but supported by most browsers.


Main BOM Objects:
| Object                       | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `window`                     | The global object in browser JavaScript             |
| `navigator`                  | Info about the browser (user agent, platform, etc.) |
| `screen`                     | Info about screen resolution, size, etc.            |
| `location`                   | Info about current URL; allows redirection          |
| `history`                    | Controls browser history (back/forward navigation)  |
| `alert`, `confirm`, `prompt` | Pop-up interaction boxes                            |

# EXAMPLE OF BOM
if (confirm("Do you want to reload the page?")) {
  location.reload();
}

