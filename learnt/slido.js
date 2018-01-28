
	var curr=1;
	var x;
/*	var c = getElementsByClassName("tobe");*/

	function slider(x) {
		if(x<curr){
			goleft(x);
		}else if(x>curr){
			goright(x);
		}
	}

	function goleft(x) {
		switch (x){
			case 1: {
						document.getElementById('optwo').style.float="left";
						document.getElementById('optwo').style.width="0px";
						document.getElementById('opthree').style.float="left";
						document.getElementById('opthree').style.width="0px";
						document.getElementById('opfour').style.width="0px";
						document.getElementById('opone').style.float="right";
						document.getElementById('opone').style.width="100%";

						document.getElementById('pagetwo').style.display="none";
						document.getElementById('pagethree').style.display="none";
						document.getElementById('pagefour').style.display="none";
						document.getElementById('pageone').style.display="block";
						curr=1;
						document.getElementById('butt1').style.backgroundColor="tomato";
						document.getElementById('butt4').style.backgroundColor="hotpink";
						document.getElementById('butt3').style.backgroundColor="hotpink";
						document.getElementById('butt2').style.backgroundColor="hotpink";
						break;
					}
			case 2: {
						document.getElementById('opthree').style.float="left";
						document.getElementById('opthree').style.width="0px";
						document.getElementById('opfour').style.width="0px";
						document.getElementById('opone').style.width="0px";
						document.getElementById('optwo').style.float="right";
						document.getElementById('optwo').style.width="100%";

						document.getElementById('pageone').style.display="none";
						document.getElementById('pagethree').style.display="none";
						document.getElementById('pagefour').style.display="none";
						document.getElementById('pagetwo').style.display="block";

						/*if((curr-x)>=2){													//need to know how to take absolute value

							c[0].style.transition="0s";				
							c[1].style.transition="0s";				
							c[2].style.transition="0s";
							c[3].style.transition="0s";

							document.getElementById('opthree').style.width="100%";

							c.style.transition="0.5s";										//transition value reset


							document.getElementById('opfour').style.float="left";
							document.getElementById('opfour').style.width="0px";
							document.getElementById('optwo').style.float="right";
							document.getElementById('optwo').style.width="100%";

							c.style.transition="0s";				

							document.getElementById('opthree').style.width="0px";

						}																		//un comment getelementbyclassname above
	*/		
						curr=2;
						document.getElementById('butt2').style.backgroundColor="tomato";
						document.getElementById('butt1').style.backgroundColor="hotpink";
						document.getElementById('butt3').style.backgroundColor="hotpink";
						document.getElementById('butt4').style.backgroundColor="hotpink";
						break;
					}
			case 3: {
						document.getElementById('opfour').style.float="left";
						document.getElementById('opfour').style.width="0px";
						document.getElementById('optwo').style.width="0px";
						document.getElementById('opone').style.width="0px";
						document.getElementById('opthree').style.float="right";
						document.getElementById('opthree').style.width="100%";

						document.getElementById('pageone').style.display="none";
						document.getElementById('pagetwo').style.display="none";
						document.getElementById('pagethree').style.display="block";
						curr=3;
						document.getElementById('butt3').style.backgroundColor="tomato";
						document.getElementById('butt4').style.backgroundColor="hotpink";
						document.getElementById('butt2').style.backgroundColor="hotpink";
						document.getElementById('butt1').style.backgroundColor="hotpink";
						break;
					}			
						document.getElementById('pagefour').style.display="none";
		}
	}


	function goright(x) {
		switch (x){
			case 2: {
						document.getElementById('opone').style.float="right";
						document.getElementById('opone').style.width="0px";
						document.getElementById('opthree').style.width="0px";
						document.getElementById('opfour').style.width="0px";
						document.getElementById('optwo').style.float="left";
						document.getElementById('optwo').style.width="100%";

						document.getElementById('pageone').style.display="none";
						document.getElementById('pagethree').style.display="none";
						document.getElementById('pagefour').style.display="none";
						document.getElementById('pagetwo').style.display="block";
						document.getElementById('butt2').style.backgroundColor="tomato";

						document.getElementById('butt4').style.backgroundColor="hotpink";
						document.getElementById('butt3').style.backgroundColor="hotpink";
						document.getElementById('butt1').style.backgroundColor="hotpink";
						curr=2;
						break;
					}
			case 3: {
						document.getElementById('optwo').style.float="right";
						document.getElementById('optwo').style.width="0px";
						document.getElementById('opone').style.width="0px";
						document.getElementById('opfour').style.width="0px";
						document.getElementById('opthree').style.float="left";
						document.getElementById('opthree').style.width="100%";

						document.getElementById('pageone').style.display="none";
						document.getElementById('pagetwo').style.display="none";
						document.getElementById('pagefour').style.display="none";
						document.getElementById('pagethree').style.display="block";
						curr=3;
						document.getElementById('butt3').style.backgroundColor="tomato";
						document.getElementById('butt1').style.backgroundColor="hotpink";
						document.getElementById('butt2').style.backgroundColor="hotpink";
						document.getElementById('butt4').style.backgroundColor="hotpink";
						break;
					}
			case 4: {
						document.getElementById('opthree').style.float="right";
						document.getElementById('optwo').style.float="right";
						document.getElementById('opthree').style.width="0px";
						document.getElementById('opone').style.width="0px";
						document.getElementById('optwo').style.width="0px";
						document.getElementById('opfour').style.float="left";
						document.getElementById('opfour').style.width="100%";

						document.getElementById('pageone').style.display="none";
						document.getElementById('pagetwo').style.display="none";
						document.getElementById('pagethree').style.display="none";
						document.getElementById('pagefour').style.display="block";
						curr=4;
						document.getElementById('butt4').style.backgroundColor="tomato";
						document.getElementById('butt1').style.backgroundColor="hotpink";
						document.getElementById('butt2').style.backgroundColor="hotpink";
						document.getElementById('butt3').style.backgroundColor="hotpink";
						break;
					}
			
		}
	}
