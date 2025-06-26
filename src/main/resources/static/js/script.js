        let fullist =[];
        var displayguesses = document.querySelectorAll('.displayguesses');
        var numberofguesses=0;
        var therightanswer = "Hajime";
        var characterexists=false;
        var guessedindex=0;
        var more_lessheight="";


        


        let correctindex = 0; //Math.floor(Math.random()*40);

        function searchengine(){

            var highlightopt = document.getElementById("dropdown").querySelectorAll("div");

            console.log(highlightopt.length);

            var count =1;
           /* highlightopt.forEach(x=>{
                    
            });*/

            



            var theguess= document.getElementById("theguess").value;
             document.getElementById("dropdown").innerHTML = "";

             if(theguess==""){ //If user hasn't type anything
                return;
             }

            var dropdown = fullist.filter( letssee=>
            letssee.firstname.toLowerCase().includes(theguess.toLowerCase())
            );
            console.log(dropdown);

           dropdown.forEach(match=>{
                var showresult = document.createElement("div");
                showresult.innerHTML = match.firstname + " " + match.lastname;
                showresult.style.cursor="pointer";
                showresult.style.color="black";
                showresult.innerHTML = match.firstname + " " + match.lastname;
                //showresult.id= match.firstname + " " + match.lastname;
                showresult.onclick = () =>{
                        document.getElementById("dropdown").innerHTML="";
                        userguessed(match.firstname);
                };
                showresult.onmouseover = function(){
                    showresult.style.backgroundColor="pink";
                    showresult.style.color="black";
                    showresult.style.fontWeight="bolder";
                };

                showresult.onmouseleave = function(){
                    showresult.style.backgroundColor="white";
                    showresult.style.color="black";
                    showresult.style.fontWeight="normal";
                };
                document.getElementById("dropdown").appendChild(showresult);
            });

        }



        function userguessed(theguess){
                 //var theguess= document.getElementById("theguess").value;
                console.log(theguess);
            //theguess = theguess.toLowerCase();


            console.log(fullist);
            console.log(correctindex);


            if(numberofguesses==5){
                //NO MORE GUESSES FOR THE DAY
            }
            else{

                for(let x=0;x<fullist.length;x++){
                    //console.log(fullist[x].firstname);
                        if(theguess==fullist[x].firstname){
                            console.log("WE FOUND THE CHARACTER");
                            guessedindex=x;
                            characterexists=true;

                        }
                    }

                    if(characterexists==false){
                        console.log(theguess);
                        console.log("PLEASE PUT A VALID CHARACTER????????");
                    }
                    else{
                        displayguesses[numberofguesses].style.display="table-row";
                        document.getElementsByClassName("displayfirstname")[numberofguesses].textContent=theguess;

                        if(theguess==fullist[correctindex].firstname){
                            document.getElementsByClassName("displayfirstname")[numberofguesses].style.backgroundColor="green";
                        }
                        else{
                            document.getElementsByClassName("displayfirstname")[numberofguesses].style.backgroundColor="red";
                        }

                        document.getElementsByClassName("displaylastname")[numberofguesses].textContent=fullist[guessedindex].lastname;
                         if(fullist[guessedindex].lastname==fullist[correctindex].lastname){
                            document.getElementsByClassName("displaylastname")[numberofguesses].style.backgroundColor="green";
                        }
                        else{
                            document.getElementsByClassName("displaylastname")[numberofguesses].style.backgroundColor="red";
                        }

                        document.getElementsByClassName("displaysex")[numberofguesses].textContent=fullist[guessedindex].sex;
                         if(fullist[guessedindex].sex==fullist[correctindex].sex){
                            document.getElementsByClassName("displaysex")[numberofguesses].style.backgroundColor="green";
                        }
                        else{
                            document.getElementsByClassName("displaysex")[numberofguesses].style.backgroundColor="red";
                        }

                        compareheights();
                        document.getElementsByClassName("displayheight")[numberofguesses].textContent=fullist[guessedindex].height + more_lessheight;
                        if(fullist[guessedindex].height==fullist[correctindex].height){
                            document.getElementsByClassName("displayheight")[numberofguesses].style.backgroundColor="green";

                        }
                        else{
                            document.getElementsByClassName("displayheight")[numberofguesses].style.backgroundColor="red"; //more_lessheight
                        }


                        document.getElementsByClassName("displayeyecolor")[numberofguesses].textContent=fullist[guessedindex].eyecolor;
                        if(fullist[guessedindex].eyecolor==fullist[correctindex].eyecolor){
                            document.getElementsByClassName("displayeyecolor")[numberofguesses].style.backgroundColor="green";
                        }
                        else{
                            document.getElementsByClassName("displayeyecolor")[numberofguesses].style.backgroundColor="red";
                        }
                        
                        document.getElementsByClassName("displayhaircolor")[numberofguesses].textContent=fullist[guessedindex].haircolor;
                         if(fullist[guessedindex].haircolor==fullist[correctindex].haircolor){
                            document.getElementsByClassName("displayhaircolor")[numberofguesses].style.backgroundColor="green";
                        }
                        else{
                            document.getElementsByClassName("displayhaircolor")[numberofguesses].style.backgroundColor="red";
                        }

                        document.getElementsByClassName("displaymaingame")[numberofguesses].textContent=fullist[guessedindex].maingame;
                         if(fullist[guessedindex].maingame==fullist[correctindex].maingame){
                            document.getElementsByClassName("displaymaingame")[numberofguesses].style.backgroundColor="green";
                        }
                        else{
                            document.getElementsByClassName("displaymaingame")[numberofguesses].style.backgroundColor="red";
                        }

                        numberofguesses++;
                        characterexists=false;
                    }

            }
        }


    function gettodaysanswer(){
        correctindex = Math.floor(Math.random()*fullist.length);
        console.log(correctindex);
        console.log(fullist[correctindex].firstname);
    }

    function compareheights(){ //WORK ON THIS
        //fullist[guessedindex].height==fullist[correctindex].height

        var guesscheight=fullist[guessedindex].height;
        console.log(guesscheight.length);
        guesscheight = guesscheight.slice(0,1) + guesscheight.slice(2,guesscheight.length); //cutting out the ' in the height

        var correctcheight=fullist[correctindex].height;  
        correctcheight = correctcheight.slice(0,1) + correctcheight.slice(2,correctcheight.length);

        if(guesscheight<correctcheight){
            more_lessheight="  (Taller)";
            console.log(guessedindex, " vs ", correctcheight);
        }
        if(guesscheight>correctcheight){
            more_lessheight="  (Shorter)";
        }
        if(correctcheight==""){ //WORK ON THIS
            more_lessheight="Height UNKNOWN";
        }
        if(guesscheight==correctcheight){
            more_lessheight="";
            console.log("Equal height");
        }

    }


        fetch("/dgrtojson")//fetch("http:/localhost:8080/dgrtojson")
        .then(res=>res.json())
        .then(data=>{
            fullist = data;
            for(let x=0;x<fullist.length;x++){
                var charactername = document.createElement("div");
                charactername.innerHTML=fullist[x].firstname;
                charactername.style.color="white";

                charactername.style.display="none";

                document.getElementById("listofcharacters").appendChild(charactername);
            }
            //testfunction();
            gettodaysanswer();
        });

    