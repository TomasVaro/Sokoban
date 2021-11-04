function drawMap(tileMap)
{
    // debugger;
    for(let x = 0; x < tileMap.height; x++)
    {
        for(let y = 0; y < tileMap.width; y++)
        {
            if(tileMap.mapGrid[x][y] == "W")
            {
                let img = document.createElement('img');
                img.src = 'img/Wall.jpg';
                document.getElementById(x + "," + y).appendChild(img);
                // document.getElementById(x + "," + y).innerHTML = "WWW";
            }
            else if(tileMap.mapGrid[x][y] == "B")
            {
                let = document.createElement('img');
                let.src = 'img/Block.jpg';
                document.getElementById(x + "," + y).appendChild(let);
                // document.getElementById(x + "," + y).innerHTML = "BBB";
            }
            else if(tileMap.mapGrid[x][y] == "G")
            {
                let = document.createElement('img');
                let.src = 'img/Goal.jpg';
                document.getElementById(x + "," + y).appendChild(let);
                // document.getElementById(x + "," + y).innerHTML = "GGG";
            }
            else if(tileMap.mapGrid[x][y] == "P")
            {
                let = document.createElement('img');
                let.src = 'img/Player.jpg';
                document.getElementById(x + "," + y).appendChild(let);
                // document.getElementById(x + "," + y).innerHTML = "PPP";
            }
            else
            {
                let = document.createElement('img');
                let.src = 'img/Background.jpg';
                document.getElementById(x + "," + y).appendChild(let);
                // document.getElementById(x + "," + y).innerHTML = "000";
            }
            console.clear;
            console.log("x:" + x + " y:" + y);
            console.log(tileMap.mapGrid[x][y]);
        }
    }
}
drawMap(tileMap01);



document.onkeydown = function arrowKeys(e) {
    switch (e.keyCode) {
        case 37:
            moveLeft();           
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
};

function moveLeft()
{
    event.preventDefault();
    for(let x = 0; x < tileMap01.height; x++)
    {
        for(let y = 0; y < tileMap01.width; y++)
        {
            if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x][y-1] != "W")
            {
                // debugger;
                let imgPlayer = document.createElement('img');
                imgPlayer.src = 'img/Player.jpg';
                document.getElementById(x + "," + (y - 1)).children[0].replaceWith(imgPlayer);

                let imgBackground = document.createElement('img');
                imgBackground.src = 'img/Background.jpg';
                document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);

                tileMap01.mapGrid[x][y] = [" "];
                tileMap01.mapGrid[x][y-1] = ["P"];
            }
        }
    }
}

function moveUp()
{
    event.preventDefault();
    for(let x = 0; x < tileMap01.height; x++)
    {
        for(let y = 0; y < tileMap01.width; y++)
        {
            if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x-1][y] != "W")
            {
                let imgPlayer1 = document.createElement('img');
                imgPlayer1.src = 'img/Player.jpg';
                document.getElementById((x - 1) + "," + y).children[0].replaceWith(imgPlayer1);

                let imgBackground1 = document.createElement('img');
                imgBackground1.src = 'img/Background.jpg';
                document.getElementById(x + "," + y).children[0].replaceWith(imgBackground1);

                tileMap01.mapGrid[x][y] = [" "];
                tileMap01.mapGrid[x-1][y] = ["P"];
            }
        }
    }
}

function moveRight()
{
    event.preventDefault();
    for(let x = 0; x < tileMap01.height; x++)
    {
        for(y = tileMap01.width; y > 0; y--)
        {
            if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x][y+1] != "W")
            {
                let imgPlayer = document.createElement('img');
                imgPlayer.src = 'img/Player.jpg';
                document.getElementById(x + "," + (y + 1)).children[0].replaceWith(imgPlayer);

                let imgBackground = document.createElement('img');
                imgBackground.src = 'img/Background.jpg';
                document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);

                tileMap01.mapGrid[x][y] = [" "];
                tileMap01.mapGrid[x][y+1] = ["P"];
            }
        }
    }
}

function moveDown()
{
    event.preventDefault();
    let once = true;
    for(let x = 0; x < tileMap01.height; x++)
    {
        for(let y = 0; y < tileMap01.width; y++)
        {
            if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x+1][y] != "W" && once)
            {
                let imgPlayer = document.createElement('img');
                imgPlayer.src = 'img/Player.jpg';
                document.getElementById((x + 1) + "," + y).children[0].replaceWith(imgPlayer);

                let imgBackground = document.createElement('img');
                imgBackground.src = 'img/Background.jpg';
                document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);

                tileMap01.mapGrid[x][y] = [" "];
                tileMap01.mapGrid[x+1][y] = ["P"];
                once = false;
            }
        }
    }
}