var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var displayHour = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

for (i=0; i<hour.length; i++){
    var createDiv = $( ` <div id = "hour-${hour[i]}" class = "row time-block" value = ${hour[i]} > ` );
    var createTextArea = $("<textarea>");
    $(".container").append(createDiv);
    var currentTime = displayHour[i];
    createDiv.append($("<div class = 'col-md-1 hour' >").text(currentTime));
    createDiv.append(createTextArea.attr("class", "col-md-10 description").attr("id", "memo-area"));
    createDiv.append($("<button class = 'col-md-1 saveBtn button' >").text("save"));
    
    console.log(hour[i]);

    if(moment().format("H") == hour[i]){
        $("#hour-"+ hour[i]).addClass("present")
        } else if(moment().format("H")> hour[i]){
        $("#hour-"+ hour[i]).addClass("past")
        } else if(moment().format("H")< hour[i]){
        $("#hour-"+ hour[i]).addClass("future")
    }    
}
$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, value);
})
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))

