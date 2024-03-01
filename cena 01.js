var player;
var vscode;
var chao;
var chao1;
var chao2;
var note1;
var note2;
var playerChao = false;

class joguin01 extends Phaser.Scene{
    constructor(){
        super({key: "joguin01"});
    };
    
    preload(){
        this.load.image('bg', 'assetss/joguinbala_inteli.png');
        this.load.image('personagem','assetss/joguinbala_carinha.png');
        this.load.image('vscode','assetss/joguinbala_vscode.png');
        this.load.image('chao','assetss/joguinbala_retangulo.png');
        this.load.image('note','assetss/joguinbala_note.png');
    };
    
    create(){
        this.cursors = this.input.keyboard.createCursorKeys();
       
        //adiciona o plano de fundo
        this.add.image(600,400, 'bg');
        
        vscode = this.physics.add.image(750,100,'vscode').setScale(0.175);

        player = this.physics.add.image(600,790,'personagem').setScale(0.25);
        player.setCollideWorldBounds(true);

        chao = this.physics.add.staticImage(600,801,'chao').setVisible(false).setSize(1200,1);
        chao1 = this.physics.add.staticImage(200,620,'chao').setVisible(false).setSize(230,1);
        chao2 = this.physics.add.staticImage(1000,620,'chao').setVisible(false).setSize(230,1);

        note1 = this.physics.add.staticImage(200,700,'note').setSize(230,160).setScale(0.6);
        note2 = this.physics.add.staticImage(1000,700,'note').setSize(230,160).setScale(0.6);
        
        this.physics.add.collider(player,note1);
        this.physics.add.collider(player,note2);

        this.physics.add.collider(player,chao1, () => {
            playerChao = true;
        });
        this.physics.add.collider(player,chao2, () => {
            playerChao = true;
        });
        this.physics.add.collider(player, chao, () => {
            playerChao = true;
        });
        this.physics.add.collider(vscode, chao, () => {
            vscode.setPosition(Phaser.Math.RND.between(50, 1150),100);
        });



        this.physics.add.collider(vscode,note1, () => {
            vscode.setPosition(Phaser.Math.RND.between(50, 1150),100);
        });
        this.physics.add.collider(vscode,note2, () => {
            vscode.setPosition(Phaser.Math.RND.between(50, 1150),100);
        });

        this.physics.add.overlap(player, vscode, () => {
            this.scene.switch('joguin00');
        });
    };
    
    update(){

        if(this.cursors.left.isDown && this.cursors.right.isDown){
            //quando as duas teclas são pressionada, o player para
            player.setVelocityX(0);    
        }else if(this.cursors.left.isDown){
            player.setFlip(true);
            player.setVelocityX(-300);
        }else if (this.cursors.right.isDown){                  
            player.setFlip(false);
            player.setVelocityX(300);
        }else{
            //quando nenhuma tecla eh pressionada, o player para
            player.setVelocityX(0);
        };

        if(this.cursors.up.isDown && playerChao == true){
            player.setVelocityY(-300);
            playerChao = false;
        };
    };
};
