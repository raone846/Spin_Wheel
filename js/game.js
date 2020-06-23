//How to create the basic skeleton for the game -> Game Loop
let config = {
    type : Phaser.CANVAS,
    width : 800,
    height : 600,
    backgroundColor : 0xffcc00,
    
    scene : {
        preload : preload,
        create : create,
        update : update,
    }
};

let game = new Phaser.Game(config);

function preload(){
    console.log("Preload");
    //load objects and images
    this.load.image('background','file:///D:/spin_wheel/Spin_Wheel/Assets/back.jpg');
    console.log(this);
    this.load.image('wheel','file:///D:/spin_wheel/Spin_Wheel/Assets/wheel.png');
    this.load.image('pin','file:///D:/spin_wheel/Spin_Wheel/Assets/pin.png');
    this.load.image('stand','file:///D:/spin_wheel/Spin_Wheel/Assets/stand.png');
}
function create(){
    console.log("Create");
    //create the background image
    let W = game.config.width;
    let H = game.config.height;
    
    let background = this.add.sprite(0,0,'background');
    background.setPosition(W/2,H/2);
    background.setScale(0.20);
    
    //lets create stand
    let stand = this.add.sprite(W/2,H/2+250,'stand');
    stand.setScale(0.25);
    
    //lets create wheel
    let wheel = this.add.sprite(W/2,H/2,'wheel');
    wheel.setScale(0.25);
    
    //lets create a pin 
    let pin = this.add.sprite(W/2,H/2-250,'pin');
    pin.setScale(0.25);
    
}
//Game Loop
function update(){
    console.log("Update");
}