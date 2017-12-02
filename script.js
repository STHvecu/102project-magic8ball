$(document).ready(function () {

  var magic8Ball = {};
  var theQuestion = "no question entered";
  magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it – yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
  $("#answer").hide();
	
// Select the random answer
  magic8Ball.getAnswer = function (theQuestion)
    {
      var randomNumber = Math.random();
      var randomNumberArray = randomNumber * this.listOfAnswers.length;
      var randomIndex = Math.floor(randomNumberArray);
      var randomAnswer = this.listOfAnswers[randomIndex];
      $("#answer").text(theQuestion + ">>> " + randomAnswer);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");	

      setTimeout(
        function () 
          {
            $("#answer").fadeIn(4000);	
	          console.log(theQuestion);
            console.log(randomAnswer);	  
          }, 
        500);	

    };
	
// Prompt for the question
  var onClick = function () 
      {
        $("#answer").hide();	
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

        setTimeout(
          function () 
            {
              var theQuestion = prompt("Enter your question and hit OK");	
              $("#8ball").effect("shake");  
              magic8Ball.getAnswer(theQuestion);
            }, 
          500);
    
      };
  
  $("#questionButton").click(onClick);

});
