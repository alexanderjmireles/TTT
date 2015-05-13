angular
    .module('tictacApp')
    .controller('TictacController', TictacController);


    //TictacController.$inject = ['$firebaseObject'];


    function TictacController(){
        var self = this;
        var counter = 1;
        self.changeColor = changeColor;

        function changeColor(){
          counter ++;
          console.log(counter);
        }

    }
