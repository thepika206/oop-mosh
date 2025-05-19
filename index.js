// There are two ways to create the circle object


// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: () => {
            console.log('draw')
        }
    }
}

const circle = createCircle(1)

// Constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw')
    }
}

// important, without the new key word, reference to this is the window object or global object.
const another = new Circle(1);