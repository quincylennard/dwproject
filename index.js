
// Define click handler

var colorClasses = {
    "color0": "color1",
    "color1": "color2", 
    "color2": "color0"
    
};

var services = {
    "id0" : { ColorClass : "color0", ServiceName : "StockPricing" },
    "id1" : { ColorClass : "color2", ServiceName : "Website" },
    "id2" : { ColorClass : "color1", ServiceName : "Database" },
    "id3" : { ColorClass : "color0", ServiceName : "Facebook" },
}


function changeColor(event)
{
    var target = $(event.target)
    for (var color in colorClasses)
    {
        if (target.hasClass(color))
        {
            target.removeClass(color)
            
            var value = colorClasses[color]
            
            target.addClass(value)
            
            break
        }
    }
}

function createBox(idName, colorClass, serviceName)
{
    var something = $("<li>")
    something.attr("id", idName)
    something.addClass(colorClass)
    something.addClass("box")
    something.append(serviceName)
    return something
}

function doSearch()
{
    var storeSearch = $("#searchtext").val().toLowerCase()
    var allBoxes = $(".box")
    
   for (var currentBoxIndex = 0 ; allBoxes.length  > currentBoxIndex; ++ currentBoxIndex) {
       var currentBox = $(allBoxes[currentBoxIndex])
       var boxText = currentBox.text().toLowerCase()
       
       if (storeSearch === boxText.substring(0, storeSearch.length)) {
           
           
           currentBox.show()
       }
       else {
           currentBox.hide()
       }
   }
}

function clearSearch() {
    var allBoxes = $(".box")
    allBoxes.show()
    $("#searchtext").val()
}

// At page load function
$(document).ready(function() {

     // generate the boxes from an array
     for (var serviceId in services) 
    {
        var serviceAttributes = services[serviceId]
        
        var newBox = createBox(serviceId, serviceAttributes.ColorClass, serviceAttributes.ServiceName)
        newBox.on("click", changeColor)
        $("#borderBox").append(newBox)
    }
    
   // $(".box").draggable();

    
    // attach button handlers
    $("#searchbutton").on("click", doSearch)
    $("#clearbutton").on("click", clearSearch)
    $("#borderBox").sortable();
})

