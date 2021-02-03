<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="./js/chat1.js"></script>
    <link rel="stylesheet" href="chat1.css">
</head>
<body>
    <center>
        <h1>Welcome to Our Chats Center</h1>
    </center>
    <div class="headercontainer">
        <div class="userSection">
            <h2>USERS</h2>
            <ul class="users">
                <li class="user1">Brad</li>
                <li class="user2">Bob</li>
                <li class="user3">Johny</li>
            </ul>
        </div>

        <div class="imgSection">
            <img src="images/paris.jpg" alt="" class="image1" width="500px"><p>
            <img src="images/bandmember.jpg" alt="" class="image2" width="500px"><p>
            <img src="images/pulpit.jpg" alt="" class="image3" width="500px"><p>
            <button class="img-btn1">Image1</button>
            <button class="img-btn2">Image2</button>
            <button class="img-btn3">Image3</button></p>
        </div>
    </div>
    <center>
        <div class="dummy">
            <h2>CHAT FORUM</h2>
            <P>FEEL FREE TO SEND AND RECEIVE MESSAGES FOR FREE</P>
        </div>
        <div class="chats">
            <div class="user1chats">
                <img src="images/paris.jpg" alt="" class="userImg">
                <h3>Brad's Chats</h3>
                <div id="messages"></div>
                <div class="sending">
                    <input type="text" id="text">
                    <button class="btn">Send</button>
                </div>
                <div class="receiving">
                    <input type="text" id="text1">
                    <button class="btn1">Send</button>
                </div>
            </div>

            <div class="user2chats">
                <img src="images/bird.jpg" alt="" class="userImg">
                <h3>Bob's Chats</h3>
                <div id="2messages"></div>
                <div class="2sending">
                    <input type="text" id="2text">
                    <button class="2btn">Send</button>
                </div>
                <div class="2receiving">
                    <input type="text" id="2text1">
                    <button class="2btn1">Send</button>
                </div>
            </div>

            <div class="user3chats">
                <img src="images/Brad.jpg" alt="" class="userImg">
                <h3>Johny's Chats</h3>
                <div id="3messages"></div>
                <div class="3sending">
                    <input type="text" id="3text">
                    <button class="3btn">Send</button>
                </div>
                <div class="3receiving">
                    <input type="text" id="3text1">
                    <button class="3btn1">Send</button>
                </div>
            </div>
            
        </div>
    </center>

    
</body>
</html>