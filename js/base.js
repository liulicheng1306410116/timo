 $(function(){  
        //锚点跳转滑动效果  
        $('a[href*=#],area[href*=#]').click(function() {  
            console.log(this.pathname)  
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
                var $target = $(this.hash);  
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');  
                if ($target.length) {  
                    var targetOffset = $target.offset().top;  
                    $('html,body').animate({  
                                scrollTop: targetOffset  
                            },  
                            600,'swing');  
                    return false;  
                }  
            }  
        });  
    }) ;
 (function(){
 	var arr=[];
 	var bl=[false,false,false];
 	var func=[
 		function(bl){
 			if(bl){
 				home.children[0].children[0].className="fadeInRight animated";
 				home.children[0].children[1].className="fadeInRight animated";
 				home.children[0].children[2].className="content fadeInLeft animated";
 				home.children[0].children[3].className="fadeInRight animated";
 			}else{
 				home.children[0].children[0].className="";
 				home.children[0].children[1].className="";
 				home.children[0].children[2].className="content";
 				home.children[0].children[3].className="";
 			}
 		},
 		function(bl){
 			if(bl){
 				service.children[0].children[0].children[0].className="cube right fadeInLeft animated";
 				service.children[0].children[0].children[1].className="content zoomIn animated"
 				service.children[0].children[0].children[2].className="cube down fadeInDown animated";
 				service.children[0].children[1].children[0].className="content zoomIn animated"
 				service.children[0].children[1].children[1].className="cube left fadeInRight animated";
 				service.children[0].children[1].children[2].className="content zoomIn animated"
 			}else{
 				service.children[0].children[0].children[0].className="cube right";
 				service.children[0].children[0].children[1].className="content"
 				service.children[0].children[0].children[2].className="cube down";
 				service.children[0].children[1].children[0].className="content"
 				service.children[0].children[1].children[1].className="cube left";
 				service.children[0].children[1].children[2].className="content"
 			}
 		},
 		function(bl){
 			if(bl){
 				about.children[0].children[0].className="content flipInX animated";
 			}else{
 				about.children[0].children[0].className="content";
 			}
 		}
 	]
 	arr.push(home);
 	arr.push(service);
 	arr.push(about);
 	var posy=window.innerHeight;
	 window.onscroll=function(){
	 	posy=window.innerHeight+document.body.scrollTop;
	 	for(var i=0;i<arr.length;i++){
	 		if(posy>arr[i].offsetTop&&posy-window.innerHeight<arr[i].offsetTop+arr[i].offsetHeight-50){
	 			if(!bl[i]){
	 				bl[i]=true;
	 				func[i](bl[i]);
	 			}
	 		}else{
	 			if(bl[i]){
	 				bl[i]=false;
	 				func[i](bl[i]);
	 			}
	 		}
	 	}
	 };
	 for(var i=0;i<4;i++){
	 	(function(i){
		 	navbar.children[i].children[0].onclick=function(){
		 		for(var j=0;j<4;j++)
		 			navbar.children[j].children[0].className="";
		 		navbar.children[i].children[0].className="active";
		 	}
		 })(i);
	 }
 })();