(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(13),s=a.n(i),c=a(9),o=a(10),l=a(21),m=a(14),u={},h=Object(o.c)({simpleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return{result:t.payload};default:return e}},trSelectReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"selectTr":return Object(m.a)({},e,{selectedTr:t.payload});default:return e}}});a(31);var d=a(2),g=a(3),p=a(5),b=a(4),f=a(7),y=a(6),v=(a(32),function(e){return function(t){t({type:"selectTr",payload:e})}}),S=a(12);function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;"string"===typeof e&&(e=parseFloat(e));for(var a="",r=0;r<t;r++)a+="0";var n=new RegExp("[.,]"+a);return e.toFixed(t).replace(n,"")}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?[{name:"shot whiskey",category:"spirit",metricSize:30,strength:40},{name:"shot",category:"spirit",metricSize:25,strength:40},{name:"shot",category:"spirit",metricSize:50,strength:40},{name:"lager",category:"beer",metricSize:500,strength:5},{name:"champagne",category:"wine",metricSize:150,strength:11.5},{name:"red wine",category:"wine",metricSize:187.5,strength:13},{name:"lager",category:"beer",metricSize:330,strength:5},{name:"red wine",category:"wine",metricSize:750,strength:14},{name:"white wine",category:"wine",metricSize:125,strength:12.5},{name:"white wine",category:"wine",metricSize:175,strength:12.5},{name:"Craft Beer",category:"beer",metricSize:562,strength:6.2},{name:"Craft Beer",category:"beer",metricSize:330,strength:6.5},{name:"Craft Beer",category:"beer",metricSize:500,strength:8.8},{name:"Craft Beer",category:"beer",metricSize:500,strength:5},{name:"Sake",category:"other",metricSize:30,strength:12},{name:"beer",category:"beer",metricSize:330,strength:4.2},{name:"Highball Can",category:"other",metricSize:330,strength:5},{name:"Highball Can",category:"other",metricSize:500,strength:5},{name:"Highball Can",category:"other",metricSize:330,strength:7},{name:"Highball Can",category:"other",metricSize:500,strength:7},{name:"Kaluah Shot",category:"liqueur",metricSize:30,strength:25},{name:"Drambuie Shot",category:"liqueur",metricSize:30,strength:25},{name:"Gran Mariner Shot",category:"liqueur",metricSize:30,strength:38},{name:"Kaluah Shot",category:"liqueur",metricSize:30,strength:25},{name:"Kaluah Shot",category:"liqueur",metricSize:30,strength:25},{name:"U.S. Beer",category:"beer",imperialSize:12,strength:4.2},{name:"XJ BEER",category:"wine",metricSize:100,strength:13},{name:"Eimear Drink",category:"wine",metricSize:3e3,strength:14},{name:" Mirco Sour",category:"MircoCat",metricSize:60,strength:40}]:function(e){for(var t=[],a=e.feed.entry,r={},n=0;n<a.length;n++){var i=a[n].gs$cell,s=i.$t;switch(i.col){case"1":r.name=s;break;case"2":r.category=s;break;case"3":r.metricSize=Number(s);break;case"4":r.imperialSize=Number(s);break;case"5":r.strength=Number(s),t.push(r),r={}}}return t}(e);var a={};t.forEach(function(e){e.metricSize?e.imperialSize=w("mltofloz",e.metricSize):e.metricSize=w("floztoml",e.imperialSize),a[e.category]||(a[e.category]=[]),a[e.category].push(e)});var r=[],n=["wine","beer","spirit","other"];return n.slice(0,3).forEach(function(e){r.push(Object(S.a)({},e,a[e]))}),Object.keys(a).forEach(function(e){n.includes(e)||r.push(Object(S.a)({},e,a[e]))}),n.slice(3).forEach(function(e){r.push(Object(S.a)({},e,a[e]))}),r}function w(e,t){switch(e){case"floztoml":return t/.033814;case"mltofloz":return.033814*t}}var j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).onSizeChange=a.onSizeChange.bind(Object(f.a)(a)),a.onStrengthChange=a.onStrengthChange.bind(Object(f.a)(a)),a.handleMeasurementSysChange=a.handleMeasurementSysChange.bind(Object(f.a)(a)),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"onSizeChange",value:function(e){this.props.setSize(e.target.value),this.props.selectTr(null)}},{key:"onStrengthChange",value:function(e){this.props.setStrength(e.target.value),this.props.selectTr(null)}},{key:"handleMeasurementSysChange",value:function(e){switch(e.target.id){case"ml-button":this.props.setSystemOfMeasurement("metric"),this.props.selectTr(null);break;case"floz-button":this.props.setSystemOfMeasurement("imperial"),this.props.selectTr(null)}}},{key:"render",value:function(){var e,t="",a="";switch(this.props.systemOfMeasurement){case"metric":t="active",e="ml";break;case"imperial":a="active",e="floz"}return n.a.createElement("div",{className:"container-fluid bar",id:"input"},n.a.createElement("div",{id:"size-wrapper"},n.a.createElement("div",{className:"input-background"},n.a.createElement("div",{className:"text-wrapper"},e)),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{id:"size-input",type:"number",step:"any",className:"form-control",placeholder:"Size","aria-label":"Size","aria-describedby":"basic-addon2",onChange:this.onSizeChange,value:O(this.props.size,1)}),n.a.createElement("div",{className:"btn-group-vertical"},n.a.createElement("button",{id:"ml-button",onClick:this.handleMeasurementSysChange,className:"btn btn-outline-secondary ".concat(t),type:"button"},"ml"),n.a.createElement("button",{id:"floz-button",onClick:this.handleMeasurementSysChange,className:"btn btn-outline-secondary ".concat(a),type:"button"},"fl oz")))),n.a.createElement("div",{id:"strength-wrapper"},n.a.createElement("div",{className:"input-background"},n.a.createElement("div",{className:"text-wrapper"},"%")),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{id:"strength-input",type:"number",className:"form-control",placeholder:"%","aria-label":"Strength","aria-describedby":"basic-addon2",onChange:this.onStrengthChange,value:this.props.strength}))))}}]),t}(n.a.Component),k=Object(c.b)(null,function(e){return{selectTr:function(t){return e(v(t))}}})(j),E=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"result-container result-container-size-1",style:{width:"100px",height:"100px"}},n.a.createElement("div",{className:"result-title"},n.a.createElement("div",{className:"text-wrapper"},this.props.title)),n.a.createElement("div",{className:"result-number"},n.a.createElement("div",{className:"text-wrapper"},this.props.number)))}}]),t}(n.a.Component),N=a(1),C=a.n(N),M=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={currentSize:100,grow:!0},a.makeSureResultCardScrollIsObvious=a.makeSureResultCardScrollIsObvious.bind(Object(f.a)(a)),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"makeSureResultCardScrollIsObvious",value:function(){this.state.currentSize;var e=this.state.grow;function t(){var e=parseFloat("0."+String(C()(window).width()/C()(".result-container:first").outerWidth(!0)).split(".")[1]);return.3<e&&e<.7}for((a=C()(".result-container:first").width())<=100&&(e=!0),a>=110&&(e=!1);!t();){var a=C()(".result-container:first").width();if(e)var r=a+1;else r=a-1;C()(".result-container").width(r),C()(".result-container").height(r)}this.setState({currentSize:r+2,grow:e})}},{key:"componentDidMount",value:function(){this.makeSureResultCardScrollIsObvious(),window.addEventListener("resize",this.makeSureResultCardScrollIsObvious)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.makeSureResultCardScrollIsObvious)}},{key:"render",value:function(){var e=function(e,t){"imperial"===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"metric")&&(e=w("floztoml",e));var a={size:e,strength:t};a.mlAlc=a.size/100*a.strength,a.gAlc=.789*a.mlAlc,a.gpl=a.gAlc/a.size,a.gAlc/10<.75?a.gAlc/10===0?a.cards=0:a.cards=.5:a.cards=O(a.gAlc/10,0);var r=[{title:"cards",number:a.cards}];return[{unitGrams:10,countries:["IE"]},{unitGrams:8,countries:["UK"]},{unitGrams:17.74,countries:["US"]},{unitGrams:20,countries:["JP"]},{unitGrams:12,countries:["IT","FN","DMK"]}].forEach(function(e){var t=.8*a.mlAlc/e.unitGrams;a["unitGramsOf"+e.unitGrams.toString()]=t,e.countries.forEach(function(e){r.push({title:e+" Units",number:O(t,2)})})}),r}(this.props.size,this.props.strength,this.props.systemOfMeasurement);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid bar",id:"results"},e.map(function(e,t){return n.a.createElement(E,{title:e.title,number:e.number,key:t})}),n.a.createElement("div",{id:"results-gradient",className:"result-container",style:{height:"100px",width:"100px"}})))}}]),t}(n.a.Component),T=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid",id:"bottom-stack"},n.a.createElement(M,this.props),n.a.createElement(k,this.props))}}]),t}(n.a.Component),D=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid bar",id:"filter"},n.a.createElement("nav",{id:"navbar-categories",className:"navbar navbar-light bg-light"},n.a.createElement("ul",{className:"nav nav-pills"},this.props.tableData.map(function(e,t){return Object.keys(e).map(function(e){return n.a.createElement("li",{key:t,className:"nav-item category","data-category":e},n.a.createElement("a",{className:"nav-link",href:"#table-".concat(e)},e))})}),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},"more"),n.a.createElement("div",{className:"dropdown-menu"},n.a.createElement("div",{role:"separator",className:"dropdown-divider"}),n.a.createElement("a",{className:"dropdown-item",id:"showOnlyCurrentSystemDrinks-toggle",href:"javascript: toggleShowOnlyCurrentSystemDrinks()"}),n.a.createElement("a",{className:"dropdown-item",href:"#"},"info"))))))}}]),t}(n.a.Component),A=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"handleClick",value:function(e){"imperial"===this.props.systemOfMeasurement?this.props.setSize(e.currentTarget.getAttribute("data-imperial-size")):this.props.setSize(e.currentTarget.getAttribute("data-metric-size")),this.props.setStrength(e.currentTarget.getAttribute("data-strength"));var t=e.currentTarget.getAttribute("id");this.props.selectedTr,this.props.selectTr(t)}},{key:"render",value:function(){var e,t,a=this.props.categoryName,r=this.props.index,i=this.props.drinkObject,s=a+r;return e=this.props.selectedTr===s?"active":null,"metric"===this.props.systemOfMeasurement?t=n.a.createElement("td",{className:"row-size metric"},O(i.metricSize)," ml"):"imperial"===this.props.systemOfMeasurement&&(t=n.a.createElement("td",{className:"row-size imperial"},O(i.imperialSize)," floz")),n.a.createElement("tr",{id:s,onClick:this.handleClick,"data-metric-size":i.metricSize,"data-imperial-size":i.imperialSize,"data-strength":i.strength,className:e},n.a.createElement("td",{className:"row-image"}),n.a.createElement("td",{className:"row-name"},i.name),t,n.a.createElement("td",{className:"row-strength"},i.strength," %"))}}]),t}(n.a.Component),F=Object(c.b)(function(e){return{selectedTr:e.trSelectReducer.selectedTr}},function(e){return{selectTr:function(t){return e(v(t))}}})(A),B=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.categoryObject)[0],a=Object.values(this.props.categoryObject)[0];return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"heading",id:"table-".concat(t)},t),n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,a.map(function(a,r){return n.a.createElement(F,Object.assign({key:r,index:r,categoryName:t,drinkObject:a,selectedTr:e.props.selectedTr},e.props))}))))}}]),t}(n.a.Component),L=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).setLayout=a.setLayout.bind(Object(f.a)(a)),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.setLayout(),window.addEventListener("resize",this.setLayout)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setLayout)}},{key:"setLayout",value:function(){for(C()("body").css("padding-top",C()("#top-stack").height()+10),C()("body").css("padding-bottom",C()("#bottom-stack").height()+10),C()(".heading").css("padding-top",C()("#top-stack").height()),C()(".heading").css("margin-top",-C()("#top-stack").height()),C()("#size-wrapper .input-background").width(C()("#size-input").width()+24),C()("#strength-wrapper .input-background").width(C()("#strength-input").width()+24);C()("#navbar-categories").height()<70&&C()("#navbar-categories ul .nav-item").is(":hidden");){var e=C()("#navbar-categories ul .nav-item.category:hidden:first");e.show();var t=e.attr("data-category");0!==C()("#navbar-categories .dropdown-menu").children("a[data-category='"+t+"']").length&&C()("#navbar-categories .dropdown-menu a[data-category='"+t+"']").remove()}for(;C()("#navbar-categories").height()>=70;){var a=C()("#navbar-categories ul .nav-item.category:visible:last");a.hide();var r=a.attr("data-category");0===C()("#navbar-categories .dropdown-menu").children("a[data-category='"+r+"']").length&&C()("#navbar-categories .dropdown-menu").prepend('<a class="dropdown-item" data-category="'+r+'" href="#table-'+r+'">'+r+"</a>")}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid",id:"main"},this.props.tableData.map(function(t,a){return n.a.createElement(B,Object.assign({categoryObject:t,key:a},e.props))}))}}]),t}(n.a.Component),x=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={error:null,isLoaded:!1,sortedTableData:[]},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://spreadsheets.google.com/feeds/cells/1b5ABg-gOX1WXl5U5FMTIj5oLXS9KyDyvP6w9ium_dN0/1/public/values?alt=json").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,sortedTableData:z(t)})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,r=e.sortedTableData;return t?n.a.createElement("div",{class:"alert alert-danger",role:"alert"},"Couldn't Load Data From the API. :-("):a?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid",id:"top-stack"},n.a.createElement(D,{tableData:r})),n.a.createElement(L,Object.assign({tableData:r},this.props))):n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"spinner-border text-primary",role:"status",style:{height:"20rem",width:"20rem",marginTop:"5rem"}},n.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),t}(n.a.Component);var I=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).simpleAction=function(e){a.props.simpleAction()},a.simpleAction=a.simpleAction.bind(Object(f.a)(a)),a.state={size:500,strength:4.5,systemOfMeasurement:"metric",showDrinksFromBothMSystems:!0},a.setSize=a.setSize.bind(Object(f.a)(a)),a.setStrength=a.setStrength.bind(Object(f.a)(a)),a.setSystemOfMeasurement=a.setSystemOfMeasurement.bind(Object(f.a)(a)),a.toggleShowDrinksFromBothMSystems=a.toggleShowDrinksFromBothMSystems.bind(Object(f.a)(a)),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"setSize",value:function(e){this.setState({size:e})}},{key:"setStrength",value:function(e){this.setState({strength:e})}},{key:"setSystemOfMeasurement",value:function(e){if(this.state.systemOfMeasurement!==e){var t=this.state.size;switch(e){case"metric":t=w("floztoml",this.state.size);break;case"imperial":t=w("mltofloz",this.state.size)}this.setState({size:t}),this.setState({systemOfMeasurement:e})}}},{key:"toggleShowDrinksFromBothMSystems",value:function(){this.setState({toggleShowDrinksFromBothMSystems:!this.state.toggleShowDrinksFromBothMSystems})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"left-side"},n.a.createElement(x,{setSize:this.setSize,setStrength:this.setStrength,systemOfMeasurement:this.state.systemOfMeasurement,showDrinksFromBothMSystems:this.state.showDrinksFromBothMSystems,toggleShowDrinksFromBothMSystems:this.toggleShowDrinksFromBothMSystems})),n.a.createElement("div",{id:"right-side"},n.a.createElement(T,{size:this.state.size,strength:this.state.strength,setSize:this.setSize,setStrength:this.setStrength,systemOfMeasurement:this.state.systemOfMeasurement,setSystemOfMeasurement:this.setSystemOfMeasurement})))}}]),t}(n.a.Component),R=Object(c.b)(function(e){return Object(m.a)({},e)},function(e){return{simpleAction:function(){return e(function(e){e({type:"SIMPLE_ACTION",payload:"result_of_simple_action"})})}}})(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(c.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.d)(h,e,Object(o.a)(l.a))}()},n.a.createElement(R,null)),document.getElementById("react")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.c047cbe2.chunk.js.map