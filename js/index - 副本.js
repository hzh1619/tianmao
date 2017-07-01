
function $(selector,rander=document){
   	let type=typeof selector;
   	if(type=='string'){
        let select=selector.trim();
        let first=select.charAt(0);
        if(first=='.'){
        	return rander.getElementsByClassName(select.substring(1));
        }else if(first=='#'){
        	return document.getElementById(select.substring(1));
        }
        else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
        	return rander.getElementsByTagName(select);
        }

   	}
    if(type=='function'){
      window.onload=function(){
      selector()
    }
    }

   }

// 获取某一个对象指定的样式属性
 function getStyle(obj,attr){

      if(window.getComputedStyle){
        return getComputedStyle(obj,null)[attr];

      }else{
        return obj.currentStyle[attr];
      }

     }

// html 设置或获取某一元素的内容
function html(obj,content){
  if(content){
     obj.innerHTML=content;
  }else{
    return obj.innerHTML;
  }
}


//开始
$(function(){

   //banner轮播
   let bannerImg=$('.bannerImg')[0];
   let li=$('li');
   let bli=$('li',bannerImg);
   let bannerImg2=$('.bannerImg2')[0];
   let banli2=$('li',bannerImg2);
   let index=0;
   let banner=$('.banner')[0];
   console.log(banner);
    let current=0;
   let next=0;
   // banli2[0].style.background='red';

   let t=setInterval(move,2000);
   banner.onmouseenter=function(){
        clearInterval(t);
      }
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
      } 
   let imgwidth=parseInt(getComputedStyle(bannerImg,null).width+'px');
     
   for(let i=0;i<bli.length;i++){
    
    if(i==0){
      continue;
    }
    bli[i].style.left=imgwidth+'px';
    }
   var j=-1;
   banli2[0].style.background='red';
   function move(){
    if(j==bli.length){
      j=-1;
    }
    next++;
    if(next==bli.length){
      next=0;
    }
    console.log(next);
    bli[next].style.left=imgwidth+'px';
    animate(bli[current],{left:-imgwidth})
    animate(bli[next],{left:0})
    banli2[current].className='';
    banli2[next].className='hot';
    current=next;
    
   
    // setTimeout(function(){(banli2[j].style.background='');},1000)
    // setTimeout(function(){(banli2[j].style.background='red');},2000)
    
    console.log(banli2[j]);
    
    j++;


    }
   

   // }


 

    
   //  let t=setInterval(move2,2000);
    
   //  moveStart();
   // function move2(){
   //    index++;
   //    if(index==bli.length){
   //    index=0;
   //  }
   //  for(let i=0;i<bli.length;i++){
   //    bli[i].style.display='none'; 
   //  }
   //  bli[index].style.display='block';  
   // }

   // function moveStart(){
   //   for(let i=0;i<bli.length;i++){
   //    banli2[i].onmouseenter=function(){
   //      for(let j=0;j<bli.length;j++){
   //        bli[j].style.display='none'; 
   //       }
   //        bli[index].style.display='block';
   //        banli2[i].style.background='red';
   //        // index=i;
   //    }
   //     banli2[i].onmouseleave=function(){    
   //        // bli[index].style.display='none';
   //        banli2[i].style.background='';
   //       }  
   //  }
   // }
  


  // function  moveDown=function(){

  // }
  //  for(let i=0;i<bli.length;i++){
  //     banli2[i].onmouseenter=function(){
  //       for(let i=0;i<bli.length;i++){
  //         bli[i].style.display='none'; 
  //        }
  //        bli[index].style.display='block';
  //        banli2[i].style.background='#9ACDBB';
  //     }
  //      for(let i=0;i<bli.length;i++){
  //      banli2[i].onmouseleave=function(){
  //         for(let j=0;j<bli.length;j++){}
  //         bli[i].style.display='none'; 
  //        }
  //        bli[index].style.display='block';
  //        banli2[i].style.background='#9ACDBB';
  //     }
      
  //   }
  //   bli[index].style.display='block';
   // }

  //猫耳朵
  // let banner=$('.banner')[0];
  // let bimg=$('img',banner);
  // let bkImg=banner.bimg;
  // console.log(bkImg);
  // for(let i=0;i<bkImg.length;i++){
  // back.onmouseenter=function(){
  //     bkImg[i].style.transform='translateX(0px)';
  // }
  //  back.onmouseleave=function(){
  //     bkImg[i].style.transform='';
  // }
  // }


  //左list
  let list =$('.list')[0];
  for(let i=0;i<11;i++){
  let l2=$('.l2',list)[i];
  let licategory=$('.category',l2);
    l2.onmouseenter=function(){
      licategory[0].style.display='block';
  }
   l2.onmouseover=function(){
      licategory[0].style.display='';
  }
  }































  // let imgbox=$('.imgbox')[0];
  // let lis=$('li',imgbox);
  // lis[0].style.zIndex=10;



  // let index=0;
  // // 所有消失 下一张出现
  // let t=setInterval(move,1000);



  // function move(){
  //   index++;
  //   //判断index
  //   if(index==lis.length){
  //     index=0;
  //   }
  //   for(let i=0;i<lis.length;i++){
  //     lis[0].style.display='none';
  //   }
  //   lis[index].style.display='block';
  // }









})