$(document).ready(function(){
	//$('h1').hide(5000);

	for (var i = 0; i < 5; i++) {
		$( '<div class="col-1 boite">').appendTo( '#effets' );
	}
$("#effets div" ).click(function() {
 $(this).hide( 2000, function() {
	//$(this).remove();
	});
});
	$("#show").click(function(){
		$("#effets div").show();
		$("#tests div").show();

	});

	$('#box1').click(function(){
		$(this).css('background-color','blue').hide(4000);
	});

	$('#box2').click(function(){
		$(this).css('background-color','black').fadeOut(2000);
	});

	$('#box3').click(function(){
		$(this).css('background-color','brown').slideUp('fast');
	});

	$('#animate div').click(function(){
		$(this).animate({
			"left":"300px"
		},3000);
		$(this).animate({
			"top":"-1000px"
		}, 400).css('background-color','black');
	});

	$('li').addClass('alerte');
	$('#no-alerte').click(function(){
		$('li').removeClass();
	});
	$('li a').click(function(){
		$(this).parent('li').removeClass();
	});
	var i = $('li').length + 1;
	console.log('i = ' + i);
	//alert(i);
	$('#plus').click(function(){
		$('<li>ligne ' + i + '</li>').appendTo('ul');
		i++;
		if(i > 1){
			$('#moins').show();
		}
		console.log(i);
	});

	$('#moins').click(function(){
		if(i > 1){
			$('li:last').remove();
			i--;
			if(i==1){
				$(this).hide();
			} 
		 }
		 console.log(i);
	});

	//TOGGLE EFFECTS
	$('#theToggle').click(function(){
		//$('#maBoite').toggle(2000);
		$('#maBoite').toggleClass('bordure');
	});

	$('#toggle p').click(function(){
		$(this).toggleClass('highlight');
	});
	$('#toggle p').hover(function(){
		$('#maBoite').toggleClass('vert');
	});

	$('button.taille').click(function(){
		var os = $('#toggle p').css('font-size');
		var number = parseFloat(os);
		var uom = os.slice(-2);
		if(this.id=='pluspetit'){
			number /= 1.4;
		} else{
			number *= 1.4;
		}
		console.log(number);
		$('#toggle p').css('font-size',number + uom);
	})

	
	//photos

	$('#photos nav li').click(function(){
		var numeroLigne = $(this).index();
		console.log(numeroLigne);
		$('#photos div img').hide(2000);
		$('#photos div img').eq(numeroLigne).show(2000);
	});

});

//https://github.com/erwantanguy/B1MDSDevFront