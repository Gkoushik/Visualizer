(this.webpackJsonpvisulaizer=this.webpackJsonpvisulaizer||[]).push([[0],{19:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),s=(a(34),a(2)),i=a(3),c=a(5),u=a(4),m=(a(35),a(12)),h=(a(36),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.col,a=e.isFinish,n=e.isStart,l=e.isWall,o=e.onMouseDown,s=e.onMouseEnter,i=e.onMouseUp,c=e.row,u=e.isVisitednode,m=e.isShortestPath,h=a?"node-finish":n?"node-start":l?"node-wall":m?"node-shortest-path":u?"node-visited":"";return r.a.createElement("div",{id:"node-".concat(c,"-").concat(t),className:"node ".concat(h,"  "),onMouseDown:function(){return o(c,t)},onMouseEnter:function(){return s(c,t)},onMouseUp:function(){return i()}})}}]),a}(n.Component)),p=a(16);function d(e,t,a){var n=[];t.distance=0;for(var r=function(e){var t,a=[],n=Object(p.a)(e);try{for(n.s();!(t=n.n()).done;){var r,l=t.value,o=Object(p.a)(l);try{for(o.s();!(r=o.n()).done;){var s=r.value;a.push(s)}}catch(i){o.e(i)}finally{o.f()}}}catch(i){n.e(i)}finally{n.f()}return a}(e);r.length;){f(r);var l=r.shift();if(!l.isWall){if(l.distance===1/0)return n;if(l.isVisited=!0,n.push(l),l===a)return n;v(l,e)}}}function f(e){e.sort((function(e,t){return e.distance-t.distance}))}function v(e,t){var a,n=function(e,t){var a=[],n=e.col,r=e.row;r>0&&a.push(t[r-1][n]);r<t.length-1&&a.push(t[r+1][n]);n>0&&a.push(t[r][n-1]);n<t[0].length-1&&a.push(t[r][n+1]);return a.filter((function(e){return!e.isVisited}))}(e,t),r=Object(p.a)(n);try{for(r.s();!(a=r.n()).done;){var l=a.value;l.distance=e.distance+1,l.previousNode=e}}catch(o){r.e(o)}finally{r.f()}}function g(e,t,a){var n=new E;n.enqueue(t),t.distance=0,t.isVisited=!0,t.previousNode=null;for(var r=[];!n.isEmpty();){var l=n.front();if(n.dequeue(),e[l.row][l.col].isFinish)return r;for(var o=[[-1,0],[1,0],[0,1],[0,-1]],s=0;s<o.length;s++)l.row+o[s][0]>=0&&l.row+o[s][0]<20&&l.col+o[s][1]>=0&&l.col+o[s][1]<50&&!e[l.row+o[s][0]][l.col+o[s][1]].isVisited&&!e[l.row+o[s][0]][l.col+o[s][1]].isWall&&(n.enqueue(e[l.row+o[s][0]][l.col+o[s][1]]),e[l.row+o[s][0]][l.col+o[s][1]].isVisited=!0,e[l.row+o[s][0]][l.col+o[s][1]].distance=e[l.row][l.col].distance+1,e[l.row+o[s][0]][l.col+o[s][1]].previousNode=e[l.row][l.col],console.log(e[l.row+o[s][0]][l.col+o[s][1]]),r.push(e[l.row+o[s][0]][l.col+o[s][1]]))}}var E=function e(){Object(s.a)(this,e);var t=[],a=0,n=-1,r=0;this.enqueue=function(e){t[++n]=e,r++},this.dequeue=function(){var e=a++,n=t[e];return t[e]=null,r--,n},this.front=function(){return t[a]},this.rear=function(){return t[n]},this.isEmpty=function(){return 0===r},this.size=function(){return r},this.print=function(){var e=t.filter((function(e){return null!==e}));console.log(e.toString())}};function b(e,t,a){var n=[];return function e(t,a,n,r){var l=a;if(a.isVisitedNode=!0,r.push(l),n===a)return 1;if(l.col+1<50&&!t[l.row][l.col+1].isVisitedNode&&!t[l.row][l.col+1].isWall&&(t[l.row][l.col+1].previousNode=t[l.row][l.col],e(t,t[l.row][l.col+1],n,r)))return 1;if(l.row-1>=0&&!t[l.row-1][l.col].isVisitedNode&&!t[l.row-1][l.col].isWall&&(t[l.row-1][l.col].previousNode=t[l.row][l.col],e(t,t[l.row-1][l.col],n,r)))return 1;if(l.row+1<20&&!t[l.row+1][l.col].isVisitedNode&&!t[l.row+1][l.col].isWall&&(t[l.row+1][l.col].previousNode=t[l.row][l.col],e(t,t[l.row+1][l.col],n,r)))return 1;if(l.col-1>=0&&!t[l.row][l.col-1].isVisitedNode&&!t[l.row][l.col-1].isWall&&(t[l.row][l.col-1].previousNode=t[l.row][l.col],e(t,t[l.row][l.col-1],n,r)))return 1}(e,t,a,n),n}function y(e,t,a){var n=[],r=[],l=[];for(r.push(t),t.distance=0;r.length;){r.sort((function(e,t){return e.distance+e.hdistance-(t.distance+t.hdistance)}));var o=r.shift();if(l.push(o),o.isVisitedNode=!0,n.push(o),o===a)return n;for(var s=w(o,e),i=0;i<s.length;i++){var c=s[i];if(!c.isWall&&!l.includes(c)){var u=o.distance+N(o,c);console.log(u),console.log(c.distance),(u<c.distance||!r.includes(c))&&(c.distance=u,c.hdistance=N(c,a),c.previousNode=o,r.includes(c)||(r.push(c),console.log(c)))}}}}function w(e,t){var a=[],n=e.col,r=e.row;return r>0&&a.push(t[r-1][n]),r<t.length-1&&a.push(t[r+1][n]),n>0&&a.push(t[r][n-1]),n<t[0].length-1&&a.push(t[r][n+1]),a}function N(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}function j(e,t,a){var n=[];n.push(t),t.distance=0,t.isVisited=!0,t.previousNode=null;for(var r=[];n.length;){var l=n.shift();if(e[l.row][l.col].isFinish)return r;for(var o=[[-1,0],[1,0],[0,1],[0,-1]],s=0;s<o.length;s++)l.row+o[s][0]>=0&&l.row+o[s][0]<20&&l.col+o[s][1]>=0&&l.col+o[s][1]<50&&!e[l.row+o[s][0]][l.col+o[s][1]].isVisited&&!e[l.row+o[s][0]][l.col+o[s][1]].isWall&&(n.push(e[l.row+o[s][0]][l.col+o[s][1]]),e[l.row+o[s][0]][l.col+o[s][1]].isVisited=!0,e[l.row+o[s][0]][l.col+o[s][1]].distance=e[l.row][l.col].distance+1,e[l.row+o[s][0]][l.col+o[s][1]].previousNode=e[l.row][l.col],console.log(e[l.row+o[s][0]][l.col+o[s][1]]),r.push(e[l.row+o[s][0]][l.col+o[s][1]]));n.sort((function(e,t){return e.distance-t.distance}))}}var O=a(6),k=a(1),S=(a(19),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={path:"./"},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.running?this.setState({path:" "}):this.setState({path:" ./"}),console.log(this.state.path)}},{key:"render",value:function(){this.state.path;return r.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Visulaizer"),r.a.createElement(k.b,{className:" Container home ",to:{pathname:"./"}},"Home"))}}]),a}(n.Component)),x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"node node-start ",style:{margin:"7px"}})),r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("p",{style:{padding:"5px"}},"Represents Start Node"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"node node-wall ",style:{margin:"7px"}})),r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("p",{style:{padding:"5px"}},"Represents wall"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"node node-finish ",style:{margin:"7px"}})),r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("p",{style:{padding:"5px"}},"Represents Finish Node"))))}}]),a}(n.Component),A=(a(42),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={grid:[],mouseIsPressed:!1,isRunning:!1,algo:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=C(20,50);this.setState({grid:e}),this.state.algo.push(d),this.state.algo.push(g),this.state.algo.push(b),this.state.algo.push(y),this.state.algo.push(j)}},{key:"handleMouseDown",value:function(e,t){if(!this.state.isRunning){var a=V(this.state.grid,e,t);this.setState({grid:a,mouseIsPressed:!0})}}},{key:"handleMouseEnter",value:function(e,t){if(!this.state.isRunning){if(!this.state.mouseIsPressed)return;var a=V(this.state.grid,e,t);this.setState({grid:a})}}},{key:"handleMouseUp",value:function(){this.state.isRunning||this.setState({mouseIsPressed:!1})}},{key:"animate",value:function(e,t){var a=this;if(null!==e.length)for(var n=function(n){if(n===e.length)return setTimeout((function(){a.animateShortestPath(t)}),5*n),{v:void 0};setTimeout((function(){var t=e[n],r=q(a.state.grid,t.row,t.col);a.setState({grid:r})}),5*n)},r=0;r<=e.length;r++){var l=n(r);if("object"===typeof l)return l.v}else this.setState({isRunning:!1})}},{key:"animateShortestPath",value:function(e){for(var t=this,a=function(a){setTimeout((function(){var n=e[a],r=I(t.state.grid,n.row,n.col);t.setState({grid:r})}),25*a)},n=0;n<e.length;n++)a(n);this.setState({isRunning:!1})}},{key:"visualize",value:function(){if(!this.state.isRunning){var e=this.props.location.state.algonum;console.log(e);var t=this.state.grid;this.setState({isRunning:!0});var a=t[10][15],n=t[10][35],r=this.state.algo[e](t,a,n),l=function(e){for(var t=[],a=e;null!==a;)console.log(a),console.log(a.isWall),console.log(a.previousNode),t.unshift(a),a=a.previousNode,console.log(a);return t}(n);this.animate(r,l)}}},{key:"reset",value:function(){if(!this.state.isRunning){var e=C(20,50);this.setState({grid:e}),this.setState({mouseIsPressed:!1}),this.setState({isRunning:!1})}}},{key:"render",value:function(){var e=this,t=this.state.grid,a=this.state.mouseIsPressed;return this.props.location.state?r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"rules"}," ",r.a.createElement(x,null)),r.a.createElement("div",{className:"h-100 row align-items-center"},r.a.createElement("div",{className:"grid "},t.map((function(t,n){return r.a.createElement("div",{key:n},t.map((function(t,n){var l=t.row,o=t.col,s=t.isFinish,i=t.isStart,c=t.isWall,u=t.isVisitednode,m=t.isShortestPath;return r.a.createElement(h,{key:n,col:o,isFinish:s,isStart:i,isWall:c,mouseIsPressed:a,isVisitednode:u,isShortestPath:m,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseUp:function(){return e.handleMouseUp()},row:l})})))})))),r.a.createElement("button",{style:{position:"fixed",top:"100px",right:"50px"},onClick:function(){return e.visualize()},className:"btn btn-primary"},"Visualize"),r.a.createElement("button",{className:"btn btn-primary",style:{position:"fixed",top:"200px",right:"50px"},onClick:function(){return e.reset()}},"Reset")):r.a.createElement(O.a,{to:"/Homepage"})}}]),a}(n.Component)),C=function(e,t){for(var a=[],n=0;n<e;n++){for(var r=[],l=0;l<t;l++)r.push(M(l,n));a.push(r)}return a},M=function(e,t){return{col:e,row:t,isStart:10===t&&15===e,isFinish:10===t&&35===e,distance:1/0,hdistance:1/0,isVisitednode:!1,isShortestPath:!1,isWall:!1,previousNode:null}},V=function(e,t,a){var n=e.slice(),r=n[t][a],l=Object(m.a)(Object(m.a)({},r),{},{isWall:!r.isWall});return n[t][a]=l,n},q=function(e,t,a){var n=e.slice(),r=n[t][a],l=Object(m.a)(Object(m.a)({},r),{},{isVisitednode:!0});return n[t][a]=l,n},I=function(e,t,a){var n=e.slice(),r=n[t][a],l=Object(m.a)(Object(m.a)({},r),{},{isShortestPath:!0});return n[t][a]=l,n},B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"roe"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card pathcard shadow-sm p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.title),r.a.createElement("p",{className:"card-text text-center font-weight-bold"},"Path finding algorithms"),r.a.createElement("ul",{class:"list-group list-group-flush"},r.a.createElement("li",{class:"list-group-item"}," ",r.a.createElement(k.b,{className:" link",to:{pathname:"/BFS"}},"BFS")),r.a.createElement("li",{class:"list-group-item"},r.a.createElement(k.b,{className:"link",to:{pathname:"/BestFS"}},"BestFS")),r.a.createElement("li",{class:"list-group-item"}," ",r.a.createElement(k.b,{className:" link",to:{pathname:"/Astar"}},"Astar")),r.a.createElement("li",{class:"list-group-item"},r.a.createElement(k.b,{className:" link",to:{pathname:"/Dijkstra"}},"Dijkstra")),r.a.createElement("li",{class:"list-group-item"},r.a.createElement(k.b,{className:" link",to:{pathname:"/DFS"}},"DFS")))))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card  sortingcard shadow p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.title),r.a.createElement("p",{className:"card-text text-center font-weight-bold"},"Sorting algorithms"),r.a.createElement("ul",{class:"list-group list-group-flush"},r.a.createElement("li",{class:"list-group-item"},r.a.createElement(k.b,{className:" link",to:{pathname:"/MergeSort"}},"MergeSort")),r.a.createElement("li",{class:"list-group-item"},r.a.createElement(k.b,{className:" link",to:{pathname:"/BubbleSort"}},"BubbleSort")),r.a.createElement("li",{class:"list-group-item"},r.a.createElement(k.b,{className:" link",to:{pathname:"./QuickSort"}},"QuickSort")),r.a.createElement("li",{class:"list-group-item"}," ",r.a.createElement(k.b,{className:" link",to:{pathname:"./InsertionSort"}},"InsertionSort"))))))))}}]),a}(n.Component),P=a(28);function F(e){var t=[];if(e.length<=1)return e;var a=e.slice();return function e(t,a,n,r,l){if(a===n)return;var o=Math.floor((a+n)/2);e(r,a,o,t,l),e(r,o+1,n,t,l),function(e,t,a,n,r,l){var o=t,s=t,i=a+1;for(;s<=a&&i<=n;)l.push([s,i]),l.push([s,i]),r[s]<=r[i]?(l.push([o,r[s]]),e[o++]=r[s++]):(l.push([o,r[i]]),e[o++]=r[i++]);for(;s<=a;)l.push([s,s]),l.push([s,s]),l.push([o,r[s]]),e[o++]=r[s++];for(;i<=n;)l.push([i,i]),l.push([i,i]),l.push([o,r[i]]),e[o++]=r[i++]}(t,a,o,n,r,l)}(e,0,e.length-1,a,t),t}a(43);function T(e){var t=[];return function e(t,a,n,r){if(a<n){var l=function(e,t,a,n){for(var r=e[a],l=t-1,o=t;o<=a-1;o++)if(n.push([o,a,1]),n.push([o,a,2]),e[o]<r){l++;var s=e[o];e[o]=e[l],e[l]=s,n.push([l,o,0])}n.push([l+1,a,0]);var i=e[a];return e[a]=e[l+1],e[l+1]=i,l+1}(t,a,n,r);e(t,a,l-1,r),e(t,l+1,n,r)}}(e,0,e.length-1,t),t}var D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={array:[],running:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e,t,a=[],n=0;n<300;n++)a.push((e=5,t=600,Math.floor(Math.random()*(t-e+1)+e)));this.setState({array:a})}},{key:"sort",value:function(){var e=this.props.location.state.algonum;console.log(e),0===e?this.mergeSort():1===e?this.quickSort():2===e?this.Inserion():this.bubbleSort()}},{key:"mergeSort",value:function(){console.log("doing merge sort");for(var e=F(this.state.array),t=function(t){var a=document.getElementsByClassName("array-bar");if(t%3!==2){var n=Object(P.a)(e[t],2),r=n[0],l=n[1],o=a[r].style,s=a[l].style,i=t%3===0?"red":"turquoise";setTimeout((function(){o.backgroundColor=i,s.backgroundColor=i}),1*t)}else setTimeout((function(){var n=e[t][0],r=e[t][1];a[n].style.height="".concat(r,"px")}),1*t)},a=0;a<e.length;a++)t(a)}},{key:"Inserion",value:function(){console.log("doing Isertio sort sort"),console.log(this.state.array);var e=function(e,t,a){var n,r,l=[];for(n=1;n<e.length;n++){r=e[n];for(var o=n-1;o>=0&&(l.push([o,n,1]),l.push([o,n,2]),e[o]>r);)l.push([o+1,e[o],0]),e[o+1]=e[o],o-=1;l.push([o+1,r,0]),e[o+1]=r}return l}(this.state.array);console.log(this.state.array),console.log(e);for(var t=function(t){var a=document.getElementsByClassName("array-bar");if(e[t][2]){var n,r=e[t][0],l=e[t][1],o=a[r].style,s=a[l].style;n=1===e[t][2]?"red":"turquoise",setTimeout((function(){o.backgroundColor=n,s.backgroundColor=n}),1*t)}else setTimeout((function(){var n=e[t][0],r=e[t][1];a[n].style.height="".concat(r,"px")}),1*t)},a=0;a<e.length;a++)t(a)}},{key:"quickSort",value:function(){this.setState({running:!0}),console.log("doing quick sort"),console.log(this.state.array);var e=T(this.state.array);console.log(this.state.array),console.log(e);for(var t=function(t){var a=document.getElementsByClassName("array-bar");if(e[t][2]){var n,r=e[t][0],l=e[t][1],o=a[r].style,s=a[l].style;n=1===e[t][2]?"red":"turquoise",setTimeout((function(){o.backgroundColor=n,s.backgroundColor=n}),1*t)}else setTimeout((function(){var n=e[t][0],r=e[t][1],l=a[n].style,o=a[r].style,s=l.height,i=o.height;l.height="".concat(i),o.height="".concat(s)}),1*t)},a=0;a<e.length;a++)t(a)}},{key:"heapSort",value:function(){}},{key:"bubbleSort",value:function(){console.log("doing Bubble sort"),console.log(this.state.array);var e=function(e){var t,a,n=[];for(t=1;t<e.length;t++)for(a=0;a<e.length-t;a++)if(n.push([a,a+1,1]),n.push([a,a+1,2]),e[a]>e[a+1]){n.push([a,a+1,0]);var r=e[a];e[a]=e[a+1],e[a+1]=r}return n}(this.state.array);console.log(this.state.array),console.log(e);for(var t=function(t){var a=document.getElementsByClassName("array-bar");if(!a)return{v:void 0};if(e[t][2]){var n,r=e[t][0],l=e[t][1],o=a[r].style,s=a[l].style;n=1===e[t][2]?"red":"turquoise",setTimeout((function(){o.backgroundColor=n,s.backgroundColor=n}),1*t)}else setTimeout((function(){var n=e[t][0],r=e[t][1],l=a[n].style,o=a[r].style,s=l.height,i=o.height;l.height="".concat(i),o.height="".concat(s)}),1*t)},a=0;a<e.length;a++){var n=t(a);if("object"===typeof n)return n.v}}},{key:"render",value:function(){var e=this,t=this.state.array;return this.props.location.state?r.a.createElement("div",null,r.a.createElement(S,{running:"{this.state.running}"}),r.a.createElement("div",{className:"array-container"},t.map((function(e,t){return r.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:"turquoise",height:"".concat(e,"px")}})})),r.a.createElement("button",{className:"btn btn-primary link1 ",onClick:function(){return e.resetArray()}},"Generate New Array"),r.a.createElement("button",{className:"btn btn-primary link2 ",onClick:function(){return e.sort()}},"Sort"))):r.a.createElement(O.a,{to:"/Homepage"})}}]),a}(r.a.Component);var W=a(240),R=a(239),z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 float-left"},r.a.createElement("div",{className:"CodeBLock"},r.a.createElement("p",{className:"text-center font-weight-bold"},"Code"),r.a.createElement(W.a,{language:"cpp",style:R.a},"\n    int ShortestPath(char grid[N][M]) \n{ \n    QItem source(0, 0, 0); \n  \n    // To keep track of visited QItems. Marking \n    // blocked cells as visited. \n    bool visited[N][M]; \n    for (int i = 0; i < N; i++) { \n        for (int j = 0; j < M; j++) \n        { \n            if (grid[i][j] == '0') \n                visited[i][j] = true; \n            else\n                visited[i][j] = false; \n  \n            // Finding source \n            if (grid[i][j] == 's') \n            { \n               source.row = i; \n               source.col = j; \n            } \n        } \n    } \n  \n    // applying BFS on matrix cells starting from source \n    queue<QItem> q; \n    q.push(source); \n    visited[source.row][source.col] = true; \n    while (!q.empty()) { \n        QItem p = q.front(); \n        q.pop(); \n  \n        // Destination found; \n        if (grid[p.row][p.col] == 'd') \n            return p.dist; \n  \n        // moving up \n        if (p.row - 1 >= 0 && \n            visited[p.row - 1][p.col] == false) { \n            q.push(QItem(p.row - 1, p.col, p.dist + 1)); \n            visited[p.row - 1][p.col] = true; \n        } \n  \n        // moving down \n        if (p.row + 1 < N && \n            visited[p.row + 1][p.col] == false) { \n            q.push(QItem(p.row + 1, p.col, p.dist + 1)); \n            visited[p.row + 1][p.col] = true; \n        } \n  \n        // moving left \n        if (p.col - 1 >= 0 && \n            visited[p.row][p.col - 1] == false) { \n            q.push(QItem(p.row, p.col - 1, p.dist + 1)); \n            visited[p.row][p.col - 1] = true; \n        } \n  \n         // moving right \n        if (p.col + 1 < M && \n            visited[p.row][p.col + 1] == false) { \n            q.push(QItem(p.row, p.col + 1, p.dist + 1)); \n            visited[p.row][p.col + 1] = true; \n        } \n    } \n    return -1; \n} \n"))),r.a.createElement("div",{className:"col-5 "},r.a.createElement("div",{className:"Explanation"},r.a.createElement("p",{className:"text-center font-weight-bold"},"Explanation"),r.a.createElement("ol",null,r.a.createElement("li",null,"Store each cell as a node with their row, column values and distance from source cell."),r.a.createElement("li",null,"Start BFS with source cell."),r.a.createElement("li",null,"Make a visited array with all having \u201cfalse\u201d values except \u20180\u2019cells which are assigned \u201ctrue\u201d values as they can not be traversed."),r.a.createElement("li",null,"Keep updating distance from source value in each move."),r.a.createElement("li",null,"Return distance when destination is met, else return -1 (no path exists in between source and destination).")))))),r.a.createElement(k.b,{className:" btn btn-primary",style:{position:"fixed",top:"100px",right:"50px"},to:{pathname:"./PathfindingVisualizer",state:{algonum:1}}},"Visualize BFS"))}}]),a}(n.Component),Q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,r.a.createElement("h1",null,"Title One"),r.a.createElement("p",null,"A line of sample text"),r.a.createElement("p",null,"Another line of sample text"),r.a.createElement("p",null,"Yet another line of sample text")))),r.a.createElement(k.b,{className:"container",to:{pathname:"./PathfindingVisualizer",state:{algonum:2}}},"DFS"))}}]),a}(n.Component),Y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,r.a.createElement("h1",null,"Title One"),r.a.createElement("p",null,"A line of sample text"),r.a.createElement("p",null,"Another line of sample text"),r.a.createElement("p",null,"Yet another line of sample text")))),r.a.createElement(k.b,{className:"container",to:{pathname:"./PathfindingVisualizer",state:{algonum:3}}},"Astar"))}}]),a}(n.Component),U=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,r.a.createElement("h1",null,"Title One"),r.a.createElement("p",null,"A line of sample text"),r.a.createElement("p",null,"Another line of sample text"),r.a.createElement("p",null,"Yet another line of sample text")))),r.a.createElement(k.b,{className:"container",to:{pathname:"./PathfindingVisualizer",state:{algonum:4}}},"Best first search"))}}]),a}(n.Component),H=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,r.a.createElement("h1",null,"Title One"),r.a.createElement("p",null,"A line of sample text"),r.a.createElement("p",null,"Another line of sample text"),r.a.createElement("p",null,"Yet another line of sample text")))),r.a.createElement(k.b,{className:"container",to:{pathname:"./PathfindingVisualizer",state:{algonum:0}}},"Dijkstra"))}}]),a}(n.Component),J=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,r.a.createElement("h1",null,"Title One"),r.a.createElement("p",null,"A line of sample text"),r.a.createElement("p",null,"Another line of sample text"),r.a.createElement("p",null,"Yet another line of sample text")))),r.a.createElement(k.b,{className:"container",to:{pathname:"./Sorting",state:{algonum:3}}},"BubbleSort"))}}]),a}(n.Component),G=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,r.a.createElement("h1",null,"Title One"),r.a.createElement("p",null,"A line of sample text"),r.a.createElement("p",null,"Another line of sample text"),r.a.createElement("p",null,"Yet another line of sample text")))),r.a.createElement(k.b,{className:"container",to:{pathname:"./Sorting",state:{algonum:1}}},"QuickSort"))}}]),a}(n.Component),K=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,r.a.createElement("h1",null,"Title One"),r.a.createElement("p",null,"A line of sample text"),r.a.createElement("p",null,"Another line of sample text"),r.a.createElement("p",null,"Yet another line of sample text")))),r.a.createElement(k.b,{className:"container",to:{pathname:"./Sorting",state:{algonum:0}}},"MergeSort"))}}]),a}(n.Component),L=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,r.a.createElement("h1",null,"Title One"),r.a.createElement("p",null,"A line of sample text"),r.a.createElement("p",null,"Another line of sample text"),r.a.createElement("p",null,"Yet another line of sample text")))),r.a.createElement(k.b,{className:"container",to:{pathname:"./Sorting",state:{algonum:2}}},"InsertionSort"))}}]),a}(n.Component),$=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{basename:"/"},r.a.createElement(O.b,{path:"/",exact:!0,component:B}),r.a.createElement(O.b,{path:"/PathfindingVisualizer",component:A}),r.a.createElement(O.b,{path:"/Homepage",component:B}),r.a.createElement(O.b,{path:"/Sorting",component:D}),r.a.createElement(O.b,{path:"/BFS",component:z}),r.a.createElement(O.b,{path:"/DFS",component:Q}),r.a.createElement(O.b,{path:"/BestFS",component:U}),r.a.createElement(O.b,{path:"/Astar",component:Y}),r.a.createElement(O.b,{path:"/Dijkstra",component:H}),r.a.createElement(O.b,{path:"/MergeSort",component:K}),r.a.createElement(O.b,{path:"/QuickSort",component:G}),r.a.createElement(O.b,{path:"/BubbleSort",component:J}),r.a.createElement(O.b,{path:"/InsertionSort",component:L}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(235);o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,a){e.exports=a(236)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.ee47557b.chunk.js.map