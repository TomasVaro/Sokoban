let isGoal = false;
let keppPlaying = true;
drawMap(tileMap01);
function drawMap(tileMap)
{
    for(let x = 0; x < tileMap.height; x++)
    {
        for(let y = 0; y < tileMap.width; y++)
        {
            if(tileMap.mapGrid[x][y] == "W")
            {
                placeImage(x, y, 'Wall.jpg');
            }
            else if(tileMap.mapGrid[x][y] == "B")
            {
                placeImage(x, y, 'Block.jpg');
            }
            else if(tileMap.mapGrid[x][y] == "G")
            {
                placeImage(x, y, 'Goal.jpg');
            }
            else if(tileMap.mapGrid[x][y] == "P")
            {
                placeImage(x, y, 'Player.jpg');
            }
            else
            {
                placeImage(x, y, 'Background.jpg');
            }
            console.clear;
            console.log("x:" + x + " y:" + y);
            console.log(tileMap.mapGrid[x][y]);
        }
    }
}
function placeImage(x, y, image)
{    
    let img = document.createElement('img');
    img.src = 'img/' + image;
    document.getElementById(x + "," + y).appendChild(img);
}

window.addEventListener("keydown", function(event) {
    
    if (event.defaultPrevented) {
      return;
    }
    if (event.code === "ArrowDown"){
        xComp = 1;
        yComp = 0;
        move(xComp, yComp);
    } else if (event.code === "ArrowUp"){
        xComp = -1;
        yComp = 0;
        move(xComp, yComp);
    } else if (event.code === "ArrowLeft"){
        xComp = 0;
        yComp = -1;
        move(xComp, yComp);
    } else if (event.code === "ArrowRight"){
        xComp = 0;
        yComp = 1;
        move(xComp, yComp);
    }
    event.preventDefault();
    }, true);


function move(xComp, yComp)
{
    let once = true;
    for(let x = 0; x < tileMap01.height; x++)
    {
        for(let y = 0; y < tileMap01.width; y++)
        {
            if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x+xComp][y+yComp] != "W" && once)
            {
                // debugger;
                if((tileMap01.mapGrid[x+xComp][y+yComp] == "B"
                || tileMap01.mapGrid[x+xComp][y+yComp] == "BG")
                && (tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] == "W"
                || tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] == "B"
                || tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] == "BG"))
                {
                    break;
                }
                
                //Move a Block
                if(tileMap01.mapGrid[x+xComp][y+yComp] == "B" 
                || tileMap01.mapGrid[x+xComp][y+yComp] == "BG"
                && tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] != "W"
                && tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] != "B")
                {
                    if(tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] == "G")
                    {
                        placeBlockInGoal(x, y, xComp, yComp);
                        if(tileMap01.mapGrid[x+xComp][y+yComp] == "BG" && (yComp == 0))
                        {
                            placeGoal(x, y, xComp, yComp);
                        }
                        else
                        {
                            placeBackground(x, y, xComp, yComp);
                        }
                        movePlayer(x, y, xComp, yComp);
                        once = false;
                    }
                    else if(tileMap01.mapGrid[x+xComp][y+yComp] == "BG" 
                    || tileMap01.mapGrid[x+xComp][y+yComp] == "B" 
                    && tileMap01.mapGrid[x-xComp][y-yComp] == "G"  
                    && tileMap01.mapGrid[x-xComp-xComp][y-yComp-yComp] == "W" )
                    {
                        moveBlock(x, y, xComp, yComp);
                        movePlayer(x, y, xComp, yComp);
                        placeGoal(x, y, xComp, yComp);
                        isGoal = true;
                        once = false;
                    }
                    else
                    {
                        moveBlock(x, y, xComp, yComp);
                        placeBackground(x, y, xComp, yComp);
                        movePlayer(x, y, xComp, yComp);
                        isGoal = false;
                        once = false;
                    }
                }

                //Only move Player
                else if(tileMap01.mapGrid[x+xComp][y+yComp] == " "
                && tileMap01.mapGrid[x-1][y] != "G" && tileMap01.mapGrid[x-1][y] != "BG"
                && tileMap01.mapGrid[x+1][y] != "G" && tileMap01.mapGrid[x+1][y] != "BG")
                {
                    movePlayer(x, y, xComp, yComp);
                    placeBackground(x, y, xComp, yComp);
                    once = false;
                }
                else if(tileMap01.mapGrid[x+xComp][y+yComp] == "G" 
                || tileMap01.mapGrid[x-xComp][y-yComp] == "G"
                || tileMap01.mapGrid[x-xComp][y-yComp] == "BG")
                {
                    if(tileMap01.mapGrid[x][y+1] == "B")
                    {
                        isGoal = false;
                    }
                    if(isGoal 
                        || tileMap01.mapGrid[x][y+1] == "BG"
                        || tileMap01.mapGrid[x][y+1] == "W"
                        || tileMap01.mapGrid[x][y-1] != " ")
                    {
                        placeGoal(x, y, xComp, yComp);
                    }
                    else
                    {
                        placeBackground(x, y, xComp, yComp);
                    }
                    if(tileMap01.mapGrid[x + xComp][y + yComp] == "G")
                    {
                        isGoal = true;
                    }
                    else
                    {
                        isGoal = false;
                    }
                    movePlayer(x, y, xComp, yComp);
                    once = false;
                }
            }
        }
    }
}

function placeBackground(x, y, xComp, yComp)
{
    let imgBackground = document.createElement('img');
    imgBackground.src = 'img/Background.jpg';
    document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);
    tileMap01.mapGrid[x][y] = [" "];
}
function placeGoal(x, y, xComp, yComp)
{
    let imgGoal = document.createElement('img');
    imgGoal.src = 'img/Goal.jpg';
    document.getElementById(x + "," + y).children[0].replaceWith(imgGoal);    
    tileMap01.mapGrid[x][y] = ["G"];
}
function movePlayer(x, y, xComp, yComp)
{
    let imgPlayer = document.createElement('img');
    imgPlayer.src = 'img/Player.jpg';
    document.getElementById((x + xComp) + "," + (y + yComp)).children[0].replaceWith(imgPlayer);
    tileMap01.mapGrid[x+xComp][y+yComp] = ["P"];
    //once = false;
}
function moveBlock(x, y, xComp, yComp)
{
    let imgBlock = document.createElement('img');
    imgBlock.src = 'img/Block.jpg';
    document.getElementById((x+xComp+xComp) + "," + (y+yComp+yComp)).children[0].replaceWith(imgBlock);    
    tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] = ["B"];
}
function placeBlockInGoal(x, y, xComp, yComp)
{
    let imgBlock = document.createElement('img');
    imgBlock.src = 'img/BlockInGoal.jpg';
    document.getElementById((x+xComp+xComp) + "," + (y+yComp+yComp)).children[0].replaceWith(imgBlock);    
    tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] = ["BG"];
    isGoal = false;   
}
