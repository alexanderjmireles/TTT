angular
    .module('tictacApp')
    .controller('TictacController', TictacController);


    TictacController.$inject = ['$firebaseObject'];
        // so these functions are set up and running angularfire and are the basic functions of the tictac toe board. Still need to introduce functions for the two player version.

    function TictacController($firebaseObject, $index){ //constructor functin that builds cntrls my angular app
        var self = this; //reassigning keyword this to a variable called self (cos john papa says so) 
        
        self.board = getBoard(); //retrieves board from firebase and attaches to controller
        createBoxes(); // 
        self.clickYou = clickYou;

        // self.player1 ="x";
        // self.player2 ="o";
        // self.turn ="o";

        
        // self.restart = restart;
        // self.getWinner = getWinner;
        
    
        function getBoard(){
            // counter++;
            // console.log(counter);
            var ref = new Firebase("https://ttt3.firebaseio.com/");
            var board = $firebaseObject(ref);
            return board;
        }

        function createBoxes(){
            // console.log("running createBoxes")
            // console.log(self.board)
            self.board.boxes = [{active: false, p1owns:false }, {active: false}, {active: false}, {active: false}, {active: false}, {active: false}, {active: false}, {active: false}, {active: false}]; 
            self.board.counter = 0; // our game counter
            self.board.$save();  
            console.log(self.board.counter)
        }
        
        
        
        function clickYou($index){
            if (self.board.boxes[$index].active == true) {
                alert("seat's taken")
            } else {
                self.board.boxes[$index].active = true;
                self.board.counter +=1;
                console.log(self.board.counter);
                self.board.$save();
                
            }



        //      function clickedBox(c) {
        // if (self.addBox[c].box == '' && self.turn == "o") {
        //  self.addBox[c].box = "x";
        //  self.turn = "x";
        //  self.addBox.$save(c);
        // }    else if (self.addBox[c].box == '' && self.turn == "x") {
        // self.addBox[c].box = "o";
        // self.turn = "o";
        // self.addBox.$save(c);
        // }      else {
        // null

        



            
         }

    }

