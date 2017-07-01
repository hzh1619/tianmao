

//开始
$(function(){




//    三角旋转
    let sanjiao=$('.sanJiao');
    let background1=$('.background1');
    background1[0].onmouseenter=function(){
        animate(sanjiao[0],{transform:'translate(58px, -15px)'+' rotate(-180deg)'},20)
    }
    background1[0].onmouseleave=function(){
        animate(sanjiao[0],{transform:'translate(58px, -15px)'+' rotate(0deg)'},20)
    }

    background1[3].onmouseenter=function(){
        animate(sanjiao[1],{transform:'translate(47px, -15px)'+' rotate(-180deg)'},20)
    }
    background1[3].onmouseleave=function(){
        animate(sanjiao[1],{transform:'translate(47px, -15px)'+' rotate(0deg)'},20)
    }

    background1[7].onmouseenter=function(){
        animate(sanjiao[2],{transform:'translate(58px, -15px)'+' rotate(-180deg)'},20)
    }
    background1[7].onmouseleave=function(){
        animate(sanjiao[2],{transform:'translate(58px, -15px)'+' rotate(0deg)'},20)
    }

    background1[8].onmouseenter=function(){
        animate(sanjiao[3],{transform:'translate(80px, 17px)'+' rotate(-180deg)'},20)
    }
    background1[8].onmouseleave=function(){
        animate(sanjiao[3],{transform:'translate(80px, 17px)'+' rotate(0deg)'},20)
    }












//加载内容初始化
  let content1=$('.content1')[0];
  let content2=$('.content2')[0];
  let content3=$('.content3');
  let content4=$('.content4')[0];
  let like=$('.like');
   

  content1.style['display']='none';
  content2.style['display']='none';
  for(let i=0;i<content3.length;i++){
  content3[i].style['display']='none';
  }
  content4.style['display']='none';
  for(let i=0;i<like.length;i++){
  like[i].style['display']='none';
  }
  let louCeng=[content1,content2,content3[0],content4,content3[1],content3[2],content3[3],content3[4],like[0],like[1],like[2],like[3],like[4],like[5],like[6],like[7],like[8],like[9],like[10],like[11],like[12],like[13],like[14],like[15],like[16],like[17]]
  let louCengHeight=[200,670,1200,1800,2350,2950,3500,4100,4700,5100,5347,5594,6141,6488,6835,7182,7529,7876,8223,8570,8917,9264,9811,9958,10305,10652]
 
 



   //banner轮播



   let bannerImg=$('.bannerImg')[0];
   let li=$('li');
   let bli=$('li',bannerImg);
   let bannerImg2=$('.bannerImg2')[0];
   let banli2=$('li',bannerImg2);
   let index=0;
   let banner=$('.banner')[0];
   let t=setInterval(move,2000);
   let n=0;
   let banimg=[];
    for(var i=0;i<bli.length;i++){
    banimg.push(bli[i].getElementsByTagName('img')[0]);
    }


   //暂停动画
   banner.onmouseenter=function(){
        clearInterval(t);
      }
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
      } 


   //banner图片切换
   let current=0,next=0;  
   bli[0].style['display']='block';

    function move(){
        next++;
        if(next==bli.length){
            next=0;
        }
        setTimeout(function(){banimg[current].src=banimg[current].title;},200)
        bli[current].style['display']='none';
        bli[current].src=bli[current].title;
        bli[next].style['display']='block';
        banli2[current].className='';
        banli2[next].className='hot';
        back(current);
        current=next;

    }



    //banner背景切换设置
    function back(current){
    switch(current){
      case 7:banner.style.background='#E8E8E8';
      break;
      case 0:banner.style.background='#E8E8E8';
      break;
      case 1:banner.style.background='#FB0102';
      break;
      case 2:banner.style.background='#E8E8E8';
      break;
      case 3:banner.style.background='#4C2EFE';
      break;
      case 4:banner.style.background='#E8E8E8';
      break;
      case 5:banner.style.background='#D9123D'
      break;
      case 6:banner.style.background='#FFEF01'
      break;
      default:;
      }
   }





    
 // 点击事件开始
    for(let i=0;i<banli2.length;i++){
  
      //点击小圆事件
      banli2[i].onmouseenter=function(){
        let n=i-1;
        if(n<0){
          n=0;
        }
        back(n)
        next=i;
        //同步小圆
        setTimeout(function(){banimg[current].src=banimg[current].title;},200)
        for(let j=0;j<banli2.length;j++){
          banli2[j].className='';
          banner.style.opacity='0';
          bli[j].style.display='none';
        }  
        banli2[i].className='hot';
        //同步banner图
        bli[i].style.display='block';
        banner.style.opacity='1';
        n=i;
        current=i;
        
      }


      }//点击事件结束


    



   
 
   

  // 左list
  let list =$('.list')[0];
  let l2=$('.l2',list);
  let licategory=[]
  for(let i=0;i<l2.length;i++){
    if(i==16){
      i=0;
    }
    licategory.push(l2[i].childNodes[5])
    licategory[i].style.display='none';
    l2[i].onmouseenter=function(){
      licategory[i].style.display='block';
  }
    l2[i].onmouseleave=function(){
      licategory[i].style.display='none';
  }
     }









//     直播预告
    let imgboxx=document.querySelector('.imgboxx')
    let shang=imgboxx.querySelector('.shang')
    let shangli=shang.querySelectorAll('li')
    let lun=imgboxx.querySelector('.lun')
    let lunli=lun.querySelectorAll('li')
    let catbot=lun.querySelectorAll('.cathead')
    let index11=0;
    // let leftl=490;
    let zhibo=setInterval(bos,2000)


    //轮播
    function bos() {
        index11++;
        if(index11>shangli.length-1){
            index11=0;
        }
        shangli.forEach(function (value,ind) {
            value.classList.remove('active');
            catbot[ind].classList.remove('active');
        })
        if(index11<3){
            lun.style.left='0px'
        }else if(index11>=3){
            lun.style.left='-493px'
        }
        maotou(index11)
    }


    function maotou(index11) {
        shangli[index11].classList.add('active')
        catbot[index11].classList.add('active')
        animate(catbot[index11],{height:41,width:50},200,function () {
            catbot[index11].style.width=40+'px';
            catbot[index11].style.height=33+'px';
        })
    }

    //大图猫头效果
    let damao=shang.querySelector('.cathead')
    shang.onmouseenter=function () {
        animate(damao,{height:81,width:100},200,function () {
            damao.style.width='80px'
            damao.style.height='65px'
        })
    }

    //鼠标移上去的暂停效果
    imgboxx.onmouseenter=function () {
        clearInterval(zhibo)
    }

    //暂停后的鼠标移入，图片切换效果
    lunli.forEach(function (value,index) {
        value.onmouseenter=function () {
            shangli.forEach(function (val,ind) {
                val.classList.remove('active');
                catbot[ind].classList.remove('active');
            })
            shangli[index].classList.add('active')
            catbot[index].classList.add('active')
            maotou(index)
        }
    })


    //点击左移 右移
    let lastt=document.querySelector('.lastt')
    let nextt=document.querySelector('.nextt')

    lastt.onclick=function () {
        lun.style.left='0px'
    }
    nextt.onclick=function () {
        lun.style.left='-493px'
    }

    //文字轮播
    let foreshow=document.querySelector('.foreshow')
    let foreli=foreshow.querySelectorAll('li')

    let ttt=setInterval(fore,6000)
    function fore() {
        setTimeout(function () {
            foreli[0].style['margin-top']='-40px'
        },2000)
        setTimeout(function () {
            foreli[0].style['margin-top']='0px'
        },5000)

        // animate(foreli[0],{top:-60},500);
        // animate(foreli[1],{top:0},function () {
        //     setTimeout(foreli[0],{top:0},500,function () {
        //         foreli[1].style.top='60px'
        //     })
        // })


    }














//中间图片向左移动效果
for(let i=0;i<content3.length;i++){
  let cdian=content3[i].getElementsByClassName('dian')
  for(let j=0;j<cdian.length;j++){
    let dianimg=cdian[j].getElementsByTagName('img')[0];
    cdian[j].onmouseenter=function(){
       dianimg.style.right='7.5px';
    }
    cdian[j].onmouseleave=function(){
       dianimg.style.right='0px';
    }
  }
}
let cdian2=content4.getElementsByClassName('dian')
  for(let j=0;j<cdian2.length;j++){
    let dianimg=cdian2[j].getElementsByTagName('img')[0];
    cdian2[j].onmouseenter=function(){
       dianimg.style.right='7.5px';
    }
    cdian2[j].onmouseleave=function(){
       dianimg.style.right='0px';
    }
  }










//图片文字轮播

let zhuan=$('.zhuan');
let zhuana=[];
let bao1=$('.bao1');
let next2=1;
let flag4=1;
for(let i=0;i<zhuan.length;i++){
 zhuana.push($('a',zhuan[i]));
}


let h=setInterval(move5,1500)
function move5(){
    if(flag4){
   for(let i=0;i<zhuan.length;i++){
    if(i==zhuan.length){
      i=0;
    }
    next2=i+1;
    if(next2==zhuan.length){
      next2=0;
    }

    zhuan[i].style.top=0+'px';
    zhuan[next2].style.top=30+'px';

    animate(zhuan[i],{top:-30});
    animate(zhuan[next2],{top:0});
    bao1[Math.floor(i/2)].appendChild(zhuan[i]);
  }
    }
}
// clearInterval(h)

//字体颜色变化
for(let i=0;i<zhuan.length;i++){
zhuan[i].onmouseenter=function(){
  flag4=0;
    zhuana[i][0].style.color='red';
}
zhuan[i].onmouseleave=function(){
    flag4=1;
    zhuana[i][0].style.color='';

}
}





















  





















let tsuspend=document.getElementsByClassName('t-suspend')[0];
let ch=window.innerHeight,cw=window.innerWidth;
let gap=$('.gap1');
let likeT=$('.like-title')[0];
let flag1=0,flag2=0,flag3=0,flag5=0,flag6=1;

 







//窗口滑动函数
window.onscroll=function(){
let tops=document.body.scrollTop;



  //更新窗口高度 宽度
  window.onresize=function(){
      ch=window.innerHeight;
      cw=window.innerWidth;
    }







  //楼层加载

  for(let i=0;i<louCeng.length;i++){
    if(tops>louCengHeight[i]){
      louCeng[i].style['display']='block';
        switch(i){
            case 1:gap[0].style['display']='block';
            break;
            case 3:gap[1].style['display']='block';
            break;
            case 6:gap[2].style['display']='block';
            break;
            case 7:gap[3].style['display']='block';
                   likeT.style['display']='block';
            break;
            default:;
        }
    }


  }















  //上悬框 （出现 消失） 效果
   if(tops>750&&(!flag5)){
     flag5=1;
    animate(tsuspend,{height:55},500,function(){
        flag6=0;
    })
   }else if((tops<=750)&&(!flag6)){
       flag6=1;
    animate(tsuspend,{height:0},500,function(){
        flag5=0;
    })
   }










//左侧悬框效果

//悬框 （出现 消失） 
let zsuspend=$('.z-suspend')[0];
let zclick=zsuspend.getElementsByClassName('click');
for(let i=0;i<zclick.length;i++){
if(tops>570){
  zclick[0].style['margin-top']=0;
  zclick[i].style['margin-left']=0;
}else{
  zclick[0].style['margin-top']=332+'px';
  zclick[i].style['margin-left']=-37+'px';
}
}

//楼层跳转
//1、xkBack[]背景色集合  zHeight[]楼层高度集合
//2、点击模块跳转
//3、楼层滚动 模块颜色变化
//4、鼠标事件 

let xkback=['','#F54D86','#0393D6','#4BA21C','#E53131','#059D83','#F2901A','#000000',''];
let zHeight=[0,1755,2255,2855,3360,3962,4465,5065,5056]
let zHeight2=[0,1755,2255,2855,3360,3962,4465,5065,0]


//2、点击模块跳转
for(let i=0;i<zclick.length;i++){
  zclick[i].onclick=function(){
    flag1=1;

    flag3=1;
    clearColor()
    zclick[i].style.background=xkback[i];
    animate(document.body,{scrollTop:zHeight2[i]},function(){flag3=0})     
    mouse2(i)
  } 
     
}


//清除模块颜色
function clearColor(){
  for(let j=0;j<zclick.length;j++){
      zclick[j].style.background='';
      }
}


//3、楼层滚动的模块效果
if(flag3==0){
for(let i=0;i<zclick.length;i++){
  if(document.body.scrollTop<zHeight[1]-ch+300){
    flag2=0;
    clearColor()
  }
  else if((document.body.scrollTop>zHeight[i]+100)&&(document.body.scrollTop<zHeight[6]+100)){
    flag2=1;
    clearColor()
    zclick[i+1].style.background=xkback[i+1];
    mouse2(i+1)
  }
  else if(document.body.scrollTop>zHeight[6]+100){
    flag2=1;
    clearColor()
    zclick[7].style.background='red';

    mouse2(7)
    zclick[7].onmouseleave=function(){
        zclick[7].style.background='red';
        }
        
  }  
}
}//楼层滚动结束



//4、鼠标事件1 模块颜色变化
if(flag1!=1&&flag2!=1){
for(let j=0;j<zclick.length;j++){
  zclick[j].onmouseenter=function(){
    zclick[j].style.background=xkback[j];
    }
  zclick[j].onmouseleave=function(){
    zclick[j].style.background='';
     }
     }
}//鼠标事件1 结束


//鼠标事件2
function mouse2(n){
      for(let j=0;j<zclick.length;j++){
      zclick[j].onmouseenter=function(){
        zclick[j].style.background=xkback[j];
        }
      zclick[j].onmouseleave=function(){
        if(j!=n){
        zclick[j].style.background='';
          }else{return}
         }
         }
      }//鼠标事件2 结束 













//右悬框效果
let kuang10=$('.kuang10')[0]
let k10Img=$('img',kuang10)
for(let i=0;i<k10Img.length;i++){
  k10Img[i].style.opacity='0'
  if(tops>200){
    k10Img[i].style.opacity='1'
  }
}










}//滚动事件结束

})//总事件结束



