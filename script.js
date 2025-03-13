
/*  //// Drawer ////    */
function openDrawer() {
    document.getElementById("myDrawer").style.width = "250px";
}
function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
}


function addComment() {
    const commentInput = document.getElementById("comment");
    const userSelect = document.getElementById("user");
    const chatContainer = document.getElementById("chat-container");
    
    const commentText = commentInput.value.trim();
    if (commentText === "") return;
    
    const userClass = userSelect.value;
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${userClass}`;
    messageDiv.textContent = commentText;
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    commentInput.value = "";
}