
## one way to call event but should not use
//document.getElementById('owl').onclick = function(){
       // alert("owl click")
    //} 

##  past methods
    //attachEvent () --->for internet explorer
    //jQuery --> on event listener

## some events
    type, timestamps, preventdefault
    target, toElement, srcElement, currentTarget,
    clientX, clientY, screenX, screenY
    altKey, ctrlKey, shifTKey, keyCode


## why we write false/ true

false/ true ==>reason
#### event propgation-==> 
(1)event bubbling -false- default
(2)event capturing

## (1)-event bubbling
```
document.getElementById('images').addEventListener("click", function(event){ 
        console.log("clicked inside the ul"); 
    }, false)
```
owl is in images, if we clicked owl, above code will also execute,, lets seee which one will first take place

```
document.getElementById('owl').addEventListener("click", function(event){ 
        console.log("owl clicked"); 
    }, false)
```
if we click owl ====>>>>>>
output===> owl clicked
           clicked inside the ul

#####   this is event bubbling
   that means first small bubble then bigger
   first inside li was executed then bigger ul was executed


## (2)event capturing

```
document.getElementById('images').addEventListener("click", function(event){ 
        console.log("clicked inside the ul"); 
    }, true)
    

document.getElementById('owl').addEventListener("click", function(event){ 
        console.log("owl clicked"); 
    }, true)
```
here event takes place from top to bottom
OUTPUT ===>
clicked inside the ul
owl clicked

### if we dont want bubbling that means do not want to pass same script to above element then

```

document.getElementById('owl').addEventListener("click", function(event){ 
        console.log("owl clicked"); 
        event.stopPropagation()
    }, false)
```

here output will just be from that element not from top element

## preventdefault
    ```document.getElementById('google').addEventListener("click", function(event){
        event.preventDefault()
        console.log("google clicked")
        console.log(event.defaultPrevented); // Output: true
    })
    ```
preventDefault() is a method that, when called on an Event object, prevents the default action associated with that event from occurring. For instance, if preventDefault() is called on a click event of a link, it will stop the browser from navigating to the link's URL.
#### defaultPrevented
 is a read-only property of the Event interface. It returns a boolean value that indicates whether or not preventDefault() was called on the event. If preventDefault() was called, defaultPrevented will be true; otherwise, it will be false. 

