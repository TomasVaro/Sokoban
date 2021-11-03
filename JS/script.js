function drawMap(tileMap)
{
    for(let x = 0; x < tileMap.height; x++)
    {
        for(let y = 0; y < tileMap.width; y++)
        {
            if(tileMap.mapGrid[x][y] == "W")
            {
                var img = document.createElement('img');
                img.src = 'img/Wall.jpg';
                document.getElementById(x + "," + y).appendChild(img);

                // var src = document.getElementById(x + "," + y);
                // var img = document.createElement("img");
                // img.src = "img/"+this.apparel+"/"+this.facing+"Wall.jpg";
                // src.appendChild(img);

                // document.getElementById(x + "," + y).innerHTML = "WWW";
            }
            else if(tileMap.mapGrid[x][y] == "B")
            {
                var img = document.createElement('img');
                img.src = 'img/Block.jpg';
                document.getElementById(x + "," + y).appendChild(img);

                // document.getElementById(x + "," + y).innerHTML = "BBB";
            }
            else if(tileMap.mapGrid[x][y] == "G")
            {
                var img = document.createElement('img');
                img.src = 'img/Goal.jpg';
                document.getElementById(x + "," + y).appendChild(img);

                // document.getElementById(x + "," + y).innerHTML = "GGG";
            }
            else if(tileMap.mapGrid[x][y] == "P")
            {
                var img = document.createElement('img');
                img.src = 'img/Player.jpg';
                document.getElementById(x + "," + y).appendChild(img);

                // document.getElementById(x + "," + y).innerHTML = "PPP";
            }
            else
            {
                var img = document.createElement('img');
                img.src = 'img/Background.jpg';
                document.getElementById(x + "," + y).appendChild(img);

                // document.getElementById(x + "," + y).innerHTML = "000";
            }
            console.log("x:" + x + " y:" + y);
            console.log(tileMap.mapGrid[x][y]);
            // document.getElementById(x + "," + y).innerHTML = "Hej";

        }
    }
}
drawMap(tileMap01);
