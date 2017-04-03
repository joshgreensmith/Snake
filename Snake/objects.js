//SNAKE AND ITS FUNCTIONS
function SnakePart(x,y) {

    this.x = x;
    this.y = y;
    this.col = 255;
    this.lifespan = level*100

    this.display = function() {
        stroke(0);
        fill(this.col);
        rect(this.x,this.y,25,25);
    }

    this.isFinished = function() {
        if(this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.intersects = function(other) {
        var d = dist(this.x,this.y,other.x,other.y);
        if (d < 5) {
            return true;
        } else {
            return false;
        }
    }

}

//FOOD PART AND ITS FUNCTIONS
function FoodPart(x,y) {

    this.x = x;
    this.y = y;
    this.col = 150;
    this.lifespan = 1

    this.display = function() {
        noStroke();
        fill(this.col);
        image(imgfood0,this.x,this.y);
    }

    this.isEaten = function() {
        if(this.lifespan < 1) {
            return true;
        } else {
            return false;
        }
    }

    this.intersects = function() {
        var d = dist(this.x,this.y,snakeposx,snakeposy);
        if (d < 5) {
            return true;
        } else {
            return false;
        }
    }
}
