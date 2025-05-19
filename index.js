//Abstraction hides the details and complexity and only exposes the essentials
function Circle(radius) {
    // private props and methods
    let defaultLocation = { x: 0, y: 0};
    


    let computeOptimumLocation = function(factor) {
        
    }

    // public props and methods
    this.radius = radius;




    this.draw = function() {
        computeOptimumLocation(0.1)

        console.log('draw')
    }
}

const circle = new Circle(10)

// circle.computeOptimumLocation -> undefined