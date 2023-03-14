let rotateBox = document.getElementById("rotate-box");
let manager = new Hammer.Manager(rotateBox);

let rotate = new Hammer.Rotate();

rotateBox.add([rotate]);

manager.get('rotate').set({enable: true});
manager.on("rotate", function (event) {
    rotateBox.style.color = "red";
});
// manager.get('drag').set({enable: true});
// manager.on("drag", function(event) {
//     rotateBox.style.color = "red";
// })