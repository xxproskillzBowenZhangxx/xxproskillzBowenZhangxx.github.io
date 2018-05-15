
// JavaScript Document
var x = 6;
var y =7;
var og=8;
var dr = 10;
window.onload = function() {
	document.getElementById("B-armor").style.display="none";
	document.getElementById("ogre_bar").style.display="none";
	document.getElementById("player_bar").style.display="none";
	document.getElementById("health_bar").style.display="none";
	document.getElementById("startBtn").addEventListener("click", function()  {
		start_game();
	});
	document.getElementById("run").addEventListener("click", function() {
		run_away();
	});
	document.getElementById("fight").addEventListener("click", function() {
		fight_deer();
	});
	document.getElementById("fight").addEventListener("click", function() {
		neg_health();
	});
	document.getElementById("run2").addEventListener("click", function() {
		encounter();
	});
	document.getElementById("eat").addEventListener("click", function() { 
		heal_up();
	});
	document.getElementById("hide").addEventListener("click",function(){ 
		hiding();
	});
	document.getElementById("forest").addEventListener("click",function(){ 
		mr_ogre();
	});
	document.getElementById("claw5").addEventListener("click", function() {
		ogre_neg_health();
	});
	document.getElementById("run3").addEventListener("click", function() {
		dragon_hunt();
	});
	document.getElementById("hiding2").addEventListener("click", function() {
		dragon_death();
	});
	document.getElementById("anvil").addEventListener("click", function() {
		fix();
	});
	document.getElementById("fight4").addEventListener("click", function() {
		deth();
	});
};
function deth(){
				y-=Math.floor(Math.random() * 4);
				// player health bar
				document.getElementById("player_bar").value = y;
				document.getElementById("sheild").addEventListener("click",function(){ 
					add_sheild();
				});
	
}
function fix() {
			document.getElementById("B-armor").style.display = "none";
			document.getElementById("G-armor").style.display = "inline";
			y=y+12;
			document.getElementById("story").innerHTML = "Suddenly, the dragon lands in front of you with a thump.<p>You're ready.</p> ";
			document.getElementById("fight4").style.display = "inline";
			document.getElementById("sheild").style.display = "none";
			document.getElementById("dragon").style.display = "inline";
			
			
}
function dragon_death() {
			document.getElementById("story").innerHTML = "you're dead</p> ";
}
function dragon_hunt() {
			document.getElementById("story").innerHTML = "<p>Boil the ogre fat and eat it to heal yourself.</p>You can also use the ogre's thick skin to make armor";
			document.getElementById("run3").style.display = "none";
			document.getElementById("anvil").style.display="inline";
			
}

function mr_ogre() {
			//alert
			alert("KABOOM!");
			//show story
			document.getElementById("story").innerHTML = "<p> Oh,No</p><p>It's an ogre</p><p>fight it</p>";
			//show bars
			document.getElementById("player_bar").style.display = "inline";
			document.getElementById("ogre_bar").style.display = "inline";
			//show buttons
			document.getElementById("claw5").style.display = "inline";
			document.getElementById("sheild").style.display = "inline";
			//hide buttons
			document.getElementById("hiding2").style.display = "none";
			document.getElementById("forest").style.display = "none";
			//show ogre
			document.getElementById("ogre").style.display = "inline";
}
function ogre_neg_health(){
				//ogre bar
				og-=Math.floor(Math.random() * 6);
				document.getElementById("ogre_bar").value = og;
				y-=Math.floor(Math.random() * 4);
				// player health bar
				document.getElementById("player_bar").value = y;
				document.getElementById("sheild").addEventListener("click",function(){ 
					add_sheild();
				});
				//death
				if( y == 0 ) {			
					document.getElementById("story").innerHTML = "<p>boo hoo you died</p>";
					document.getElementById("player_bar").style.display = "none";
					document.getElementById("ogre_bar").style.display = "none";
					document.getElementById("sheild").style.display = "none";
					document.getElementById("claw5").style.display = "none";
					document.getElementById("ogre").style.display = "none";
				}
				
				if( og == 0 ) {			
					document.getElementById("story").innerHTML = "<p>yesss the ogre is dead </p><p> Now lets hunt down that dragon";
					document.getElementById("player_bar").style.display = "none";
					document.getElementById("ogre_bar").style.display = "none";
					document.getElementById("sheild").style.display = "none";
					document.getElementById("claw5").style.display = "none";
					document.getElementById("ogre").style.display = "none";
					document.getElementById("Run3").style.display = "inline";
				}
	}
function hiding() {
			//show buttons
			document.getElementById("run").style.display="none";
			document.getElementById("hiding2").style.display ="inline";
			document.getElementById("hide").style.display ="none";
			document.getElementById("forest").style.display ="inline";
			//story growth
			document.getElementById("story").innerHTML = "<p> You decide to hide in a cave. You see the dragon leave.</p><p> Go explore the forest or stay in the cave until nightfall </p>";
}
function fight_deer() {
			// show hide button
			document.getElementById("health_bar").style.display = "inline";
			document.getElementById("sheild").style.display = "inline";
		    document.getElementById("run").style.display = "none";
			document.getElementById("deer").style.display = "inline";
			//grow storyline
			document.getElementById("story").innerHTML = "you chose to fight a deer";
			//fighting deer
}
function heal_up(){
 			y = y + 7;
 			document.getElementById("player_bar").value = y;
			//hide eat button and run button
			document.getElementById("eat").style.display = "none";
			document.getElementById("run").style.display = "inline";
			//hiding player and health bars
			document.getElementById("player_bar").style.display = "none";
			document.getElementById("health_bar").style.display = "none";
			// image
			document.getElementById("sword").style.display = "inline";
			//grow storyline
			document.getElementById("story").innerHTML = "you see something glitter under a bush <p> It's a sword, a magic sword </p> As you pick it up the runes start to glow it shrinks to the perfect size and weight.<p> you have something to protect yourself with, keep moving</p> ";
			
}

function neg_health() {
			document.getElementById("player_bar").style.display = "inline";
			y-=Math.floor(Math.random() * 3);
			// player health bar
			document.getElementById("player_bar").value = y;
			document.getElementById("sheild").addEventListener("click",function(){ 
				add_sheild();
			});
			if( y == 0 ) {			
				document.getElementById("story").innerHTML = "<p>boo hoo you died</p>";
				document.getElementById("player_bar").style.display = "none";
				document.getElementById("fight").style.display = "none";
				document.getElementById("sheild").style.display = "none";
				document.getElementById("player_bar").style.display = "none";
				document.getElementById("health_bar").style.display = "none";
				document.getElementById("deer").style.display = "none";
			}
			x-=Math.floor(Math.random() * 3);
			// deer health bar
			document.getElementById("health_bar").value = x;
		
			//hiding and showin button
			if( x == 0 ) {
				document.getElementById("deer").style.display = "none";				
				document.getElementById("story").innerHTML = "you beat the deer, nice work<p>let's go home</p>";
				document.getElementById("fight").style.display = "none";
				document.getElementById("sheild").style.display = "none";
				document.getElementById("run2").style.display = "inline";
				document.getElementById("health_bar").style.display = "none"; 
			}
			

}
function add_sheild(){
		y-=Math.floor(Math.random() * 3);
		y = y+Math.floor(Math.random() * 2);
}
function encounter(){
		document.getElementById("story").innerHTML = "<p>you are low on health</p>eat the deer meat to regain health";	
		document.getElementById("eat").style.display = "inline"; 
		document.getElementById("run2").style.display = "none"; 
}

			
function run_away() {
			// hide fight button and run button
			document.getElementById("fight").style.display = "none";
			
			document.getElementById("run").style.display="none";
			// hide deer
 
			document.getElementById("deer").style.display = "none";
			// show hide button
			document.getElementById("hide").style.display = "inline";
			//grow storyline
			alert("Roar!");
			document.getElementById("story").innerHTML = "<p> There's an explosion right behind you, it's your village, you mutter curse words under your breath and scream</p><p>DRAGON!!</p><p>  Hide! </p>";
}
function start_game() {
	//show bad armor
	document.getElementById("B-armor").style.display="inline";
	// hide the start button
	document.getElementById("startBtn").style.display = "none";
	// show the buttons
		// button1
			document.getElementById("fight").style.display = "inline";
			// button2
			document.getElementById("run").style.display = "inline";
			// showing deer  
			document.getElementById("deer").style.display = "inline";
	// load the first scene
	updateScene("s1");
}

function updateScene(s) {
	switch(s) {
		case "s1":
			document.getElementById("story").innerHTML = "<p>You live in a small village in the forest.</p><p> you have been sent to hunt. After walking through the wood, you find a deer drinking water.</p><p> kill it or let it live and look for smaller game</p>";
			
			break;
		case "s2":
			break;
	}
}
