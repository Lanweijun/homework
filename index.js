

onload=function(){
	var bor = document.querySelector('.bor');
	var music=document.querySelector('.music');
	var go=document.querySelector('.go');
	var move=document.querySelector('.move');
	var all=document.querySelector('.all');
	var d1a = document.querySelector('.d1a');
	var d2a = document.querySelector('.d2a');
	var d3a = document.querySelector('.d3a');
	var d4a = document.querySelector('.d4a');
	var d5a = document.querySelector('.d5a');
	var d6a = document.querySelector('.d6a');
	var num = 0;

	bor.onclick=function(){
		go.style.display='block';	
		music.style.display='block';
		move.style.transform='translateY(-14.3%)';
		d1a.style.display='block';
		onmousewheel=function(e){
			if(e.wheelDelta>0){
				num--;
			}else{
				num++;
			}
			if(num<=0){
				num = 1;
			}
			if(num==1){
				d1a.style.display='block';
			}else{
				d1a.style.display='none';
			}
			if(num==2){
				d2a.style.display='block';
			}else{
				d2a.style.display='none';
			}
			if(num==3){
				d3a.style.display='block';
			}else{
				d3a.style.display='none';
			}
			if(num==4){
				d4a.style.display='block';
			}else{
				d4a.style.display='none';
			}
			if(num==5){
				d5a.style.display='block';
			}else{
				d5a.style.display='none';
			}
			if(num>=6){
				d6a.style.display='block';
				num = 6;
			}else{
				d6a.style.display='none';
			}
			move.style.transform='translateY(-'+num*14.3+'%)';
		}
		
	}

	go.onclick = function(){
		num++;
		move.style.transform='translateY(-'+num*14.3+'%)';
		if(num==2){
			d2a.style.display='block';
		}else{
			d2a.style.display='none';
		}
		if(num==3){
			d3a.style.display='block';
		}else{
			d3a.style.display='none';
		}
		if(num==4){
			d4a.style.display='block';
		}else{
			d4a.style.display='none';
		}
		if(num==5){
			d5a.style.display='block';
		}else{
			d5a.style.display='none';
		}
		if(num>=6){
			num=6;
			move.style.transform='translateY(-'+num*14.3+'%)';
			d6a.style.display='block';
		}else{
			d6a.style.display='none';
		}
	}

	music.onclick=function(){
		if(mp3.paused){
			mp3.play();
			music.style['background-position']='-632px 42px';
		}else{
			mp3.pause();
			music.style['background-position']='-661px 42px';
		}
	}
}
















