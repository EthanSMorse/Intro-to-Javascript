
let aquarium = document.getElementById("straw-free_zone")
let tortle = new RealTurtle.default(aquarium, {autoStart: true})

tortle.setFillStyle ('gold')

tortle.setPosition (180, 45)

tortle.beginPath ()

tortle.arc (20, 360)

tortle.closePath ()

tortle.fill ()

tortle.setPosition (50, 40)

tortle.setFillStyle ('brown')

tortle.beginPath ()

for (let i = 0; i < 4; i ++) {
    tortle.right (90)
    tortle.forward (100)
}

tortle.closePath ()

tortle.fill ()

tortle.setPosition (90, 100)

tortle.beginPath ()

for (let i = 0; i < 2; i ++) {
    tortle.right (90)
    tortle.forward (25)
    tortle.right (90)
    tortle.forward (40)
}

tortle.closePath ()

tortle.setFillStyle ('black')

tortle.setPosition (105, 120)

tortle.beginPath ()

tortle.arc (4, 360)

tortle.closePath ()

tortle.fill ()

tortle.setPosition (47, 40)

tortle.setFillStyle ('black')

tortle.beginPath ()

tortle.right (55)
tortle.forward (65)
tortle.right (70)
tortle.forward (65)
tortle.right (145)
tortle.forward (100)

tortle.closePath ()

tortle.fill ()

tortle.setPosition (60, 90)

tortle.setFillStyle ('blue')

tortle.beginPath ()

for (let i = 0; i < 4; i ++) {
    tortle.right (90)
    tortle.forward (25)
}

tortle.closePath ()

tortle.fill ()

tortle.beginPath ()

tortle.right (90)
tortle.forward (12.5)
tortle.right (90)
tortle.forward (25)
tortle.left (90)
tortle.forward (12.5)
tortle.left (90)
tortle.forward (12.5)
tortle.left (90)
tortle.forward (25)
tortle.right (90)
tortle.forward (12.5)

for (let i = 0; i < 4; i ++) {
    tortle.right (90)
    tortle.forward (25)
}

tortle.closePath ()

tortle.setPosition (117, 90)

tortle.setFillStyle ('blue')

tortle.beginPath ()

for (let i = 0; i < 4; i ++) {
    tortle.right (90)
    tortle.forward (25)
}

tortle.closePath ()

tortle.fill ()

tortle.beginPath ()

tortle.right (90)
tortle.forward (12.5)
tortle.right (90)
tortle.forward (25)
tortle.left (90)
tortle.forward (12.5)
tortle.left (90)
tortle.forward (12.5)
tortle.left (90)
tortle.forward (25)
tortle.right (90)
tortle.forward (12.5)

for (let i = 0; i < 4; i ++) {
    tortle.right (90)
    tortle.forward (25)
}

tortle.closePath ()