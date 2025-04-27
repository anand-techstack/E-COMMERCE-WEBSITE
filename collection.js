/*sidenav-script*/
var sidenav =document.getElementById("nav-side-bar")
function show()
{
    sidenav.style.left="0%"
}
function cancel()
{
    sidenav.style.left="-50%"
}

    var entertext=""
    var input = document.getElementById("input-1")
    var div = document.getElementById("div-1")
    var element = div.querySelectorAll("div")
    
    function update(event)
    {
       entertext=event.target.value.toUpperCase()
        for(var i=0; i<element.length;i++)
        {
            var productname = element[i].querySelectorAll("p").textContent
            if( element[i].textContent.toUpperCase().indexOf(entertext)<0)
            {
            element[i].style.display="none"
            }
            else
            {
                element[i].style.display="block"
            }
        }
    }

