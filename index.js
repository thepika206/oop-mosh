//Abstraction hides the details and complexity and only exposes the essentials
function Circle(radius) {
    // private props and methods
    let defaultLocation = { x: 0, y: 0};

    let computeOptimumLocation = function(factor) {
        
    }

    // public props and methods
    this.radius = radius;

    this.getDefaultLocation = function() {
        return defaultLocation
    }

    // define getter and setter
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid Location.');
            }
            defaultLocation = value;
        } 
    })

    this.draw = function() {
        computeOptimumLocation(0.1)

        console.log('draw')
    }
}

const circle = new Circle(10)
circle.defaultLocation // {x:1, y:1}
circle.defaultLocation = {x:2, y:2} // {x:2, y:2}
circle.defaultLocation = 1;  // error invalid location
