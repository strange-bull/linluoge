window.onload=function (){
	var sbb=document.getElementById('subor-bottom-butt');
	var pp=document.getElementById('pay-page');
	var wpb=document.getElementById('wx-pay-butt');
	var zpb=document.getElementById('zhi-pay-butt')
	var wcp=document.getElementById('we-chat-pay');
	var zp=document.getElementById('zhi-pay')
	var cp=document.getElementById('close-page');
	
	sbb.onclick=function (){
		pp.style.display="block";
	}
	
	cp.onclick=function (){
		pp.style.display="none";
	}
	
	wpb.onclick=function (){
		wcp.style.display="block";
		zp.style.display="none";
		wpb.style.borderBottom="5px solid #62b900"
		zpb.style.borderBottom="5px solid white"
	}
	
	zpb.onclick=function (){
		wcp.style.display="none";
		zp.style.display="block";
		wpb.style.borderBottom="5px solid white"
		zpb.style.borderBottom="5px solid #108ee9"
	}
	
	var aa=document.getElementById('ad-address')
	 var aaqx=document.getElementById('add-address-quxiao');
	var aaqd=document.getElementById('add-address-queding');
	var adp=document.getElementById('add-address-page');
	
	aa.onclick = function (){
		adp.style.display= 'block';
	}
	aaqx.onclick=function (){
		adp.style.display='none';
	}
	aaqd.onclick=function (){
		adp.style.display='none';
	}
	
	// 修改个人资料
	var rp=document.getElementById('re-per');
	var pr=document.getElementById('personal-repear');
	
	pr.onclick =function (){
		// pr.style.display= 'block';
		alert('1')
	}
	
	// var check_bt = $(".check-repear>ul>li");
	// 	var form_type = $(".repear>form");
	// 	var index_c = 0;
	// 	
	// 	check_bt.on("click",function(){
	// 		for(i=0;i<check_bt.length;i++){
	// 			check_bt.eq(i).removeClass("c-hover");
	// 		}
	// 		for(j=0;j<form_type.length;j++){
	// 			form_type.eq(j).removeClass("reactive");
	// 		}
	// 		$(this).addClass("c-hover");
	// 		index_c = $(this).index();
	// 		form_type.eq(index_c).addClass("reactive");
	// 	});
		
}