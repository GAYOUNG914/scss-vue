$(function(){
  $(".wrap").each(function(){
    let thisWrap = $(this);//현재 .wrap을 가져오기
    let itemsNum = $(this).find(".items");// 현재 .wrap의 items 선택  $(".items",this);
    let itemsLeng = itemsNum.length; // 현재 .wrap의 자식요소인 items의 개수 가져오기
    itemsNum.mouseenter(function(){
      //.items에 마우스를 올렸을때
      let thisIndex = $(this).index();
      $(this).addClass("on");
      if( thisIndex == 0 ){//첫번째 .items 마우스를 올렸을때
        thisWrap.css("margin-left","0px");
      }else if( thisIndex == itemsLeng - 1 ){//마지막 .items 마우스를 올렸을때
        thisWrap.css("margin-left","-100px");
      }else{
        thisWrap.css("margin-left","-50px");
      }
    }).mouseleave(function(){
      //.items에 마우스를 내렸을때
      itemsNum.removeClass("on");
      thisWrap.css("margin-left","0px");
    });

    /*.wrap 에서 마우스 내렸을때 스크립트 구현*/
    // thisWrap.mouseleave(function(){
    //     $(this).css("margin-left","0px");
    //     itemsNum.removeClass("on");
    // });
  });

//each를 사용하지 않을 경우
// let thisWrap = $(".wrap");//현재 .wrap을 가져오기
// let itemsNum = $(".wrap").find(".items");// 현재 .wrap의 items 선택  $(".items",this);
// let itemsLeng = itemsNum.length; // 현재 .wrap의 자식요소인 items의 개수 가져오기
// itemsNum.mouseenter(function(){
//   //.items에 마우스를 올렸을때
//   let thisIndex = $(this).index();
//   $(this).addClass("on");
//   if( thisIndex == 0 ){//첫번째 .items 마우스를 올렸을때
//     thisWrap.css("margin-left","0px");
//   }else if( thisIndex == itemsLeng - 1 ){//마지막 .items 마우스를 올렸을때
//     thisWrap.css("margin-left","-100px");
//   }else{
//     thisWrap.css("margin-left","-50px");
//   }
// }).mouseleave(function(){
//   //.items에 마우스를 내렸을때
//   itemsNum.removeClass("on");
// });

});
