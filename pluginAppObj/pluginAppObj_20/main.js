function init_pluginAppObj_20(param){function boot_pluginAppObj_20(){render_journal_pluginAppObj_20();addLink_pluginAppObj_20($("#testimonial_pluginAppObj_20_container"));resizeObject_pluginAppObj_20();$("#imContent").on("breakpointChangedOrFluid",function(e,breakpoint){breakpoint.fluid?$("#testimonial_pluginAppObj_20").addClass("fluid"):$("#testimonial_pluginAppObj_20").removeClass("fluid");resizeObject_pluginAppObj_20()});if($("#testimonial_pluginAppObj_20").hasClass("modern")&&!0)400<=$("#testimonial_pluginAppObj_20").find(".img").width()&&400<=$("#testimonial_pluginAppObj_20").find(".img").height()&&$("#testimonial_pluginAppObj_20").find(".img").css({"background-size":"auto"})}function isIE(){return navigator.userAgent.indexOf("MSIE")!==-1||navigator.appVersion.indexOf("Trident/")>0}function resizeObject_pluginAppObj_20(){var userWidth=500,userHeight=400,dimensions=getObject_Dimensions_pluginAppObj_20(),container=$("#testimonial_pluginAppObj_20_container"),testimonial=$("#testimonial_pluginAppObj_20"),imgSize,availableSpace,imageTitleSize,scaledImgSize;if(1)if(testimonial.css({width:dimensions[0],height:"auto","min-height":dimensions[1]}),testimonial.hasClass("modern")){if(isIE()&&testimonial.css({height:dimensions[1]}),testimonial.removeClass("column"),testimonial.find(".img").css({height:"auto",width:"50%"}),testimonial.find(".data").width()<200){isIE()&&testimonial.css({height:""});var containerWidth=container.width(),newWidth=Math.min(userWidth/2,containerWidth),newHeight=userHeight*newWidth/userWidth;testimonial.addClass("column");testimonial.css({width:newWidth,"min-height":newHeight});testimonial.find(".img").css({height:userHeight*newWidth/(userWidth/2),width:"100%"})}}else testimonial.hasClass("comics")?(testimonial.find(".speech-bubble").css({"min-height":dimensions[1]}),isIE()&&testimonial.find(".speech-bubble").css({height:dimensions[1]}),testimonial.find(".speech-bubble").width()>200?(testimonial.removeClass("column"),testimonial.find(".img").removeClass("small"),testimonial.find(".data .ratings-container").removeClass("small"),imageTitleSize=30*dimensions[0]/100,scaledImgSize=imageTitleSize-dimensions[0]*6/100-25,testimonial.find(".img_mask").css({height:scaledImgSize,width:scaledImgSize})):(isIE()&&testimonial.find(".speech-bubble").css({height:""}),testimonial.addClass("column"),testimonial.find(".img").addClass("small"),testimonial.find(".data .ratings-container").addClass("small"),imageTitleSize=30*userWidth/100,scaledImgSize=imageTitleSize-dimensions[0]*6/100-25,testimonial.find(".img_mask").css({height:scaledImgSize,width:scaledImgSize}))):testimonial.hasClass("journal")?(imgSize=testimonial.find(".img_mask").css("max-width").replace(/[^-\d\.]/g,""),availableSpace=dimensions[0]-dimensions[0]*6/100,imgSize>availableSpace?testimonial.find(".img_mask").css({height:availableSpace,width:availableSpace}):testimonial.find(".img_mask").css({height:imgSize,width:imgSize})):testimonial.hasClass("card")&&(imageTitleSize=30*dimensions[0]/100,scaledImgSize=imageTitleSize-dimensions[0]*6/100-30,testimonial.removeClass("column"),testimonial.find(".img_mask").css({height:scaledImgSize,width:scaledImgSize}),testimonial.find(".data").width()<200&&(imageTitleSize=30*userWidth/100,scaledImgSize=imageTitleSize-userWidth*6/100-30,testimonial.addClass("column"),testimonial.find(".img_mask").css({height:scaledImgSize,width:scaledImgSize})));else resizeObject_uipreview(testimonial,dimensions)}function resizeObject_uipreview(testimonial,dimensions){var imgSize,imageTitleSize,scaledImgSize;testimonial.hasClass("comics")?(testimonial.css({width:dimensions[0],height:dimensions[1]}),imageTitleSize=30*dimensions[0]/100,scaledImgSize=imageTitleSize-dimensions[0]*6/100-25,testimonial.find(".img_mask").css({height:scaledImgSize,width:scaledImgSize})):testimonial.hasClass("journal")?(imgSize=testimonial.find(".img").width(),testimonial.find(".img_mask").css({height:imgSize,width:imgSize})):testimonial.hasClass("card")&&(imageTitleSize=30*dimensions[0]/100,scaledImgSize=imageTitleSize-dimensions[0]*6/100-30,testimonial.find(".img_mask").css({height:scaledImgSize,width:scaledImgSize}))}function getObject_Dimensions_pluginAppObj_20(){var pageWidth=500,containerWidth=$("#pluginAppObj_20").width(),fact=containerWidth<pageWidth?containerWidth/pageWidth:1,dimensions=[pageWidth*fact,400*fact];return!1&&(dimensions=dimensions[0]<=485&&dimensions[1]<=340?[dimensions[0],dimensions[1]]:newDimensions(dimensions[0],dimensions[1],485,340)),dimensions}function newDimensions(w,h,contW,contH){return w<=contW&&h<=contH?[Math.round(w),Math.round(h)]:(w>h?(w=contW,h=h*(contH/w)):w<h?(w=w*(contW/h),h=contH):(w=contW,h=contH),[Math.round(w),Math.round(h)])}function addLink_pluginAppObj_20(obj){if(0){var objLink=decodeHtml(""+obj.html()+"");obj.html(objLink)}}function getIcon_stars(i,state){var svg='<svg viewBox="0 0 51 48" xmlns="http://www.w3.org/2000/svg" class="star icon" data-state="'+state+'" data-rating="'+(i+1)+'">';return svg+='<path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>',svg+"<\/svg>"}function getRatingContainer(){var ratingContainer,i,state;if(param.ratingScore!=0){for(ratingContainer='<div class="rating-container '+param.ratingStyle+" "+param.style+'">',i=0;i<5;i++)state=i+1<=param.ratingScore?"on":"off",ratingContainer+=getIcon_stars(i,state);return ratingContainer+="<\/div>",$(ratingContainer)}}function render_journal_pluginAppObj_20(){var divTop=$('<div class="top"><\/div>'),divBottom=$('<div class="bottom"><\/div>'),divSeparator=$('<div class="separator"><\/div>'),divRating=getRatingContainer(),divRatingsC=$('<div class="ratings-container"><\/div>');divRatingsC.append(divRating);divTop.append(getImg_pluginAppObj_20(!0));divTop.append(getSignature_pluginAppObj_20("div",1));divTop.append(divSeparator);divTop.append(getSignature_pluginAppObj_20("div",2));divTop.append(divRatingsC);divBottom.append(getTitle_pluginAppObj_20());divBottom.append(getCitation_pluginAppObj_20());divBottom.append(getDate_pluginAppObj_20());$("#testimonial_pluginAppObj_20").append(divTop);(param.haveTitle||param.haveCitation||param.haveDate)&&$("#testimonial_pluginAppObj_20").append(divBottom)}function getTitle_pluginAppObj_20(){if(0){var div=$('<div class="title"><\/div>');return div.html(""),div}return null}function br(text){var brRegex=new RegExp("(<br\\s/>|<br>)","g");return text.replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/\r/g,"").replace(/\n/g,"").replace(brRegex,"<br>")}function getCitation_pluginAppObj_20(){var div=$('<div class="citation"><\/div>');return!0&&div.html(br("&amp;lt;font color=&quot;#FFFFFF&quot;&amp;gt;Ноготочки прям Вау, всем так нравится, а мне главное что держится лак на ура, прям как новенький. Так что Большое спасибо, я ими довольна!&amp;lt;/font&amp;gt;")),div}function getDate_pluginAppObj_20(){return null}function getSignature_pluginAppObj_20(tag,which){var elem;return which==1&&!1?null:which==2&&!1?null:(tag=tag||"div",which=which||1,elem=tag=="div"?$("<div><\/div>"):$("<span><\/span>"),elem.addClass("signature"+which),which==1?elem.html("Ольга"):elem.html("Одесса"),elem)}function getImg_pluginAppObj_20(onlyImgMask){var div=$('<div class="img"><\/div>');return!0&&(onlyImgMask!=undefined&&(onlyImgMask==!0||onlyMask==1)?div.html('<div class="img_mask"><\/div>'):div.html('<div class="img_mask"><img src="pluginAppObj/pluginAppObj_20/otzivi-proba44.webp"><\/div>')),div}function decodeHtml(encoded){return encoded=replaceAll("&amp;gt;",">",encoded),encoded=replaceAll("&amp;lt;","<",encoded),encoded=replaceAll("\\'","'",encoded),encoded=replaceAll("&quot;",'"',encoded),encoded=replaceAll("&lt;br /&gt;","\n",encoded),encoded=replaceAll("&amp;","&",encoded),replaceAll("\\\\","\\",encoded)}function replaceAll(find,replace,str){return str.replace(new RegExp(find,"g"),replace)}x5engine.boot.push(function(){boot_pluginAppObj_20()})}