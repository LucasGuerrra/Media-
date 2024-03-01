window.onload =  function(){
    const config = {
        type: Phaser.AUTO,
        width: 1200,
        height: 801,
        backgroundColor: "77ddf5",
        physics: {
            default: "arcade",
            arcade: {
                gravity:{y:300},  //gravidade no eixo y 
                debug: true,
            }
        },
        scene: [joguin00,joguin01]
    }
    let game  = new Phaser.Game(config); 
};
