import{d as a,o as l,c as n,h as t,t as s}from"./C4aR-lbb.js";const r={class:"my-4"},i={class:"flex w-full items-end justify-between"},o={class:"w-full break-words break-all text-5xl font-black transition-all ease-in"},c=["datetime"],d=t("hr",{class:"m-1 h-1 w-1/4 bg-current"},null,-1),h=a({__name:"TitlePrimary",props:{title:String,date:Number},setup(e){return(m,u)=>(l(),n("div",r,[t("div",i,[t("h1",o,s(e.title),1),t("time",{datetime:e.date,class:"border-r-4 border-current pr-2 text-lg font-thin"},[t("i",null,s(e.date),1)],8,c)]),d]))}});export{h as default};