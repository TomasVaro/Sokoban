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


let isBase = false;
document.onkeydown = function arrowKeys(e) {
    let xComp;
    let yComp;
    switch (e.keyCode) {
        case 37:
            //move left
            xComp = 0;
            yComp = -1;
            move(xComp, yComp)
            // moveLeft();
            break;
        case 38:
            //move up
            xComp = -1;
            yComp = 0;
            move(xComp, yComp)
            // moveUp();
            break;
        case 39:
            //move right
            xComp = 0;
            yComp = 1;
            move(xComp, yComp)
            // moveRight();
            break;
        case 40:
            //move down
            xComp = 1;
            yComp = 0;
            move(xComp, yComp)
            // moveDown();
            break;
    }
};

function move(xComp, yComp)
{
    event.preventDefault();
    let once = true;
    for(let x = 0; x < tileMap01.height; x++)
    {
        for(let y = 0; y < tileMap01.width; y++)
        {
            if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x+xComp][y+yComp] != "W" && once)
            {
                //debugger;
                if(tileMap01.mapGrid[x+xComp][y+yComp] == "B" 
                && tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] != "W"
                && tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] != "B")
                {
                    //Move Block
                    let ingBlock = document.createElement('img');
                    ingBlock.src = 'img/Block.jpg';
                    document.getElementById((x+xComp+xComp) + "," + (y+yComp+yComp)).children[0].replaceWith(ingBlock);    
                    tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] = ["B"];

                    //Replace element with Player
                    let imgPlayer = document.createElement('img');
                    imgPlayer.src = 'img/Player.jpg';
                    document.getElementById((x + xComp) + "," + (y + yComp)).children[0].replaceWith(imgPlayer);
                    tileMap01.mapGrid[x+xComp][y+yComp] = ["P"];
                    once = false;

                    //Replace element with Background
                    let imgBackground = document.createElement('img');
                    imgBackground.src = 'img/Background.jpg';
                    document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);
                    tileMap01.mapGrid[x][y] = [" "];
                }
                else if(tileMap01.mapGrid[x+xComp][y+yComp] == " " || tileMap01.mapGrid[x+xComp][y+yComp] == "G" )
                {
                    if(isBase)
                    {
                        //Replace element with Goal
                        let imgGoal = document.createElement('img');
                        imgGoal.src = 'img/Goal.jpg';
                        document.getElementById(x + "," + y).children[0].replaceWith(imgGoal);    
                        tileMap01.mapGrid[x][y] = ["G"];
                    }
                    else
                    {
                        //Replace element with Background
                        let imgBackground = document.createElement('img');
                        imgBackground.src = 'img/Background.jpg';
                        document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);
                        tileMap01.mapGrid[x][y] = [" "];
                    }
                    if(tileMap01.mapGrid[x + xComp][y + yComp] == "G")
                    {
                        isBase = true;
                    }
                    else
                    {
                        isBase = false;
                    }

                    //Move Player
                    let imgPlayer = document.createElement('img');
                    imgPlayer.src = 'img/Player.jpg';
                    document.getElementById((x + xComp) + "," + (y + yComp)).children[0].replaceWith(imgPlayer);
                    tileMap01.mapGrid[x+xComp][y+yComp] = ["P"];
                    once = false;
                }                
            }
        }
    }
    // debugger;
}


function placeBackground()
{
    
}
function placeGoal()
{
    
}
function placePlayer()
{
    
}
function placeBlock()
{
    
}
function placeBackground()
{
    
}




// function moveLeft()
// {
//     event.preventDefault();
//     for(let x = 0; x < tileMap01.height; x++)
//     {
//         for(let y = 0; y < tileMap01.width; y++)
//         {
//             if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x][y-1] != "W")
//             {
//                 // debugger;
//                 let imgPlayer = document.createElement('img');
//                 imgPlayer.src = 'img/Player.jpg';
//                 document.getElementById(x + "," + (y - 1)).children[0].replaceWith(imgPlayer);

//                 let imgBackground = document.createElement('img');
//                 imgBackground.src = 'img/Background.jpg';
//                 document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);

//                 tileMap01.mapGrid[x][y] = [" "];
//                 tileMap01.mapGrid[x][y-1] = ["P"];
//             }
//         }
//     }
// }

// function moveUp()
// {
//     event.preventDefault();
//     for(let x = 0; x < tileMap01.height; x++)
//     {
//         for(let y = 0; y < tileMap01.width; y++)
//         {
//             if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x-1][y] != "W")
//             {
//                 let imgPlayer1 = document.createElement('img');
//                 imgPlayer1.src = 'img/Player.jpg';
//                 document.getElementById((x - 1) + "," + y).children[0].replaceWith(imgPlayer1);

//                 let imgBackground1 = document.createElement('img');
//                 imgBackground1.src = 'img/Background.jpg';
//                 document.getElementById(x + "," + y).children[0].replaceWith(imgBackground1);

//                 tileMap01.mapGrid[x][y] = [" "];
//                 tileMap01.mapGrid[x-1][y] = ["P"];
//             }
//         }
//     }
// }

// function moveRight()
// {
//     event.preventDefault();
//     for(let x = 0; x < tileMap01.height; x++)
//     {
//         let once = true;
//         for(let y = 0; y < tileMap01.width; y++)
//         {
//             if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x][y+1] != "W" && once)
//             {
//                 let imgPlayer = document.createElement('img');
//                 imgPlayer.src = 'img/Player.jpg';
//                 document.getElementById(x + "," + (y + 1)).children[0].replaceWith(imgPlayer);

//                 let imgBackground = document.createElement('img');
//                 imgBackground.src = 'img/Background.jpg';
//                 document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);

//                 tileMap01.mapGrid[x][y] = [" "];
//                 tileMap01.mapGrid[x][y+1] = ["P"];
//                 once = false;
//             }
//         }
//     }
// }

// function moveDown()
// {
//     event.preventDefault();
//     let once = true;
//     for(let x = 0; x < tileMap01.height; x++)
//     {
//         for(let y = 0; y < tileMap01.width; y++)
//         {
//             if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x+1][y] != "W" && once)
//             {
//                 let imgPlayer = document.createElement('img');
//                 imgPlayer.src = 'img/Player.jpg';
//                 document.getElementById((x + 1) + "," + y).children[0].replaceWith(imgPlayer);

//                 let imgBackground = document.createElement('img');
//                 imgBackground.src = 'img/Background.jpg';
//                 document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);

//                 tileMap01.mapGrid[x][y] = [" "];
//                 tileMap01.mapGrid[x+1][y] = ["P"];
//                 once = false;
//             }
//         }
//     }
// }