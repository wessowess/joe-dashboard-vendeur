// var linkContact = document.querySelector("#link-contact");
// var imgIconContact = document.querySelector("#link-contact > img");

// console.log(imgIconContact);

// linkContact.onmouseover = function()
// {
// 	imgIconContact.setAttribute("src", "image/conversationRed.png");
// };

// linkContact.onmouseout = function()
// {
// 	imgIconContact.setAttribute("src", "image/conversation.png");
// };

// document.location.reload(true);

var lastConnection = document.querySelector("#info-last-connection");

var timeCounterDispayLastConnection = setInterval(function() 
{
	lastConnection.style.display = "none";
	lastConnection.removeAttribute("id");
}, 10000);