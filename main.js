canvas=new fabric.Canvas("myCanvas")
block_width=30
block_height=30
player_x=10
player_y=10
player_object=""
function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object)
    })
}
player_update()
function block_update(newimg){
    fabric.Image.fromURL(newimg,function(img){
        block_object=img
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_heigth)
        block_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_object)
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    key=e.keyPressed
    if(key=="37"){
        left()
    }
     if(key=="38"){
        up()
    }
     if(key=="39"){
        right()
    }
     if(key=="40"){
        down()
    }
     if(key=="87"){
        block_update("wall.jpg")
    }
    if(key=="71"){
        block_update("ground.png")
    }
    if(key=="76"){
        block_update("light_green.png")
    }
    if(key=="84"){
        block_update("trunk.jpg")
    }
    if(key=="82"){
        block_update("roof.jpg")
    }
    if(key=="89"){
        block_update("yellow_wall.png")
    }
    if(key=="68"){
        block_update("dark_green.png")
    }
    if(key=="85"){
        block_update("unique.png")
    }
    if(key=="67"){
        block_update("cloud.jpg")
    }
}
function up(){
    if(player_y>0){
        player_y=player_y-block_height
        canvas.remove(player_object)
    player_update()
    }
}
function down(){
    if(player_y<500){
        player_y=player_y+block_height
        canvas.remove(player_object)
    player_update()
    }
}