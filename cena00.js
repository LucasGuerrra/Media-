class joguin00 extends Phaser.Scene{
    constructor(){
            super({key: "joguin00"});
        };
    
        create(){
           
            this.add.text(30, 250, "Vamos jogar esse joguin super bala!", {fill:'#000000', fontSize: '55px'});
            this.add.text(340, 400, "CLIQUE PARA COMEÇAR!", {fill: '#000000', fontSize: '40px'});
            this.input.on('pointerdown',() => {
                this.scene.stop('joguin00'),
                this.scene.start('joguin01');
            
            })
        };
    }
    
