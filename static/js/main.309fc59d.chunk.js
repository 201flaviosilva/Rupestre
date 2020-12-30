(this.webpackJsonprupestre=this.webpackJsonprupestre||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('{"name":"rupestre","version":"0.9.2","private":false,"description":"","author":{"name":"Fl\xe1vio Silva","email":"flavioandre.2001.9.7@gmail.com","url":"https://201flaviosilva.github.io"},"license":"MIT","keywords":[],"homepage":"./","main":"public/electron.js","repository":{"type":"git","url":"git+https://github.com/201flaviosilva/Rupestre"},"bugs":{"url":"https://github.com/201flaviosilva/Rupestre/issues"},"scripts":{"clear":"rm -rf build && rm -rf out && rm -rf dist","start":"react-scripts start","dev":"concurrently -k \\"BROWSER=none npm start\\" \\"npm:electron\\"","electron":"wait-on tcp:3000 && electron-forge start","eject":"react-scripts eject","build":"react-scripts build","predeploy":"npm run build","deploy":"gh-pages -d build","package":"react-scripts build && electron-forge package","make":"react-scripts build && electron-forge make"},"dependencies":{"color-convert":"^2.0.1","electron-builder":"^22.9.1","electron-is-dev":"^1.2.0","electron-squirrel-startup":"^1.0.0","get-canvas-pixel-color":"^2.0.1","q-floodfill":"^1.3.1","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"4.0.1"},"devDependencies":{"@electron-forge/cli":"^6.0.0-beta.54","@electron-forge/maker-deb":"^6.0.0-beta.54","@electron-forge/maker-rpm":"^6.0.0-beta.54","@electron-forge/maker-squirrel":"^6.0.0-beta.54","@electron-forge/maker-zip":"^6.0.0-beta.54","concurrently":"^5.3.0","electron":"^11.1.1","electron-devtools-installer":"^3.1.1","gh-pages":"^3.1.0","wait-on":"^5.2.1"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"config":{"forge":{"packagerConfig":{"icon":"./build/favicon.ico","name":"Rupestre","executableName":"rupestre"},"makers":[{"name":"@electron-forge/maker-squirrel","config":{"name":"rupestre"}},{"name":"@electron-forge/maker-zip","platforms":["darwin"]},{"name":"@electron-forge/maker-deb","config":{"icon":"./build/favicon.ico"}},{"name":"@electron-forge/maker-rpm","config":{}}]}},"build":{"appId":"com.github.rupestre","productName":"Rupestre","copyright":"Copyright \xa9 2020 Fl\xe1vio Silva","mac":{"category":"public.app-category.graphics-design"},"files":["build/**/*","node_modules/**/*"],"directories":{"buildResources":"assets"}}}')},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(8),o=n.n(i),l=n(2),s=Object(r.createContext)();function u(e){var t=e.children,n=Object(r.useState)("en"),c=Object(l.a)(n,2),i=c[0],o=c[1];Object(r.useEffect)((function(){localStorage.getItem("lang")||localStorage.setItem("lang","en")})),Object(r.useEffect)((function(){localStorage.setItem("lang",i)}),[i]);var u=Object(r.useState)("Unnamed - Rupestre"),j=Object(l.a)(u,2),b=j[0],d=j[1],g=Object(r.useState)("draw"),m=Object(l.a)(g,2),h=m[0],x=m[1],f=Object(r.useState)(""),p=Object(l.a)(f,2),O=p[0],v=p[1];return Object(r.useEffect)((function(){console.log(O)}),[O]),Object(a.jsx)(s.Provider,{value:{name:b,setName:d,projectType:h,setProjectType:x,language:i,setLanguage:o,modalTitle:O,setModalTitle:v},children:t})}function j(){var e=Object(r.useContext)(s);return{name:e.name,setName:e.setName}}function b(){var e=Object(r.useContext)(s);return{language:e.language,setLanguage:e.setLanguage}}function d(){var e=Object(r.useContext)(s);return{modalTitle:e.modalTitle,setModalTitle:e.setModalTitle}}var g=Object(r.createContext)();function m(e){var t=e.children,n=Object(r.useState)(null),c=Object(l.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)(null),u=Object(l.a)(s,2),j=u[0],b=u[1],d=Object(r.useState)(500),m=Object(l.a)(d,2),h=m[0],x=m[1],f=Object(r.useState)(500),p=Object(l.a)(f,2),O=p[0],v=p[1];return Object(a.jsx)(g.Provider,{value:{canvas:i,setCanvas:o,ctx:j,setCtx:b,canvasWidth:h,setCanvasWidth:x,canvasHeight:O,setCanvasHeight:v},children:t})}function h(){var e=Object(r.useContext)(g);return{canvas:e.canvas,ctx:e.ctx,canvasWidth:e.canvasWidth,canvasHeight:e.canvasHeight}}var x=Object(r.createContext)();function f(e){var t=e.children,n=Object(r.useState)("Pencil"),c=Object(l.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)("#ff0000"),u=Object(l.a)(s,2),j=u[0],b=u[1],d=Object(r.useState)(20),g=Object(l.a)(d,2),m=g[0],h=g[1],f=Object(r.useState)("Square"),p=Object(l.a)(f,2),O=p[0],v=p[1],C=Object(r.useState)([]),T=Object(l.a)(C,2),y=T[0],S=T[1],F=Object(r.useState)(5),P=Object(l.a)(F,2),k=P[0],A=P[1],B=Object(r.useState)(!1),L=Object(l.a)(B,2),w=L[0],z=L[1],N=Object(r.useState)("Text"),R=Object(l.a)(N,2),W=R[0],E=R[1],I=Object(r.useState)("Serif"),H=Object(l.a)(I,2),M=H[0],D=H[1];return Object(a.jsx)(x.Provider,{value:{brush:i,setBrush:o,color:j,setColor:b,size:m,setSize:h,format:O,setFormat:v,colorsPicked:y,setColorsPicked:S,colorTolerance:k,setColorTolerance:A,paintFill:w,setPaintFill:z,text:W,setText:E,fontFamily:M,setFontFamily:D},children:t})}function p(){var e=Object(r.useContext)(x);return{brush:e.brush,setBrush:e.setBrush}}function O(){var e=Object(r.useContext)(x);return{color:e.color,setColor:e.setColor}}function v(){var e=Object(r.useContext)(x);return{colorsPicked:e.colorsPicked,setColorsPicked:e.setColorsPicked}}n(18);function C(){var e=j().name;return Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:e})})}var T={ArrowDown:n.p+"static/media/ArrowDown.1eca03ef.svg",ArrowLeft:n.p+"static/media/ArrowLeft.8edfe59d.svg",ArrowRight:n.p+"static/media/ArrowRight.f030f9db.svg",ArrowUp:n.p+"static/media/ArrowUp.70d8ca82.svg",Circle:n.p+"static/media/Circle.aeb8a724.svg",ColorPicker:n.p+"static/media/ColorPicker.8d8944dd.svg",Eraser:n.p+"static/media/Eraser.5996d15c.svg",Line:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAYElEQVRIie3VMQqAMAxG4Xc9ty7i4O3NMSLUIZ2k4GAiDv+DrF+gQwrqoxpgY5ZsfAMc6GOsEu/AUYk78VyvWyf4CezChQv/Ad4muBNnISWrxO8L0nGIz8KIk5tyFdVjF/TaWyMHVSMPAAAAAElFTkSuQmCC",PaintBucket:n.p+"static/media/PaintBucket.69c02f62.svg",Pencil:n.p+"static/media/Pencil.015e8044.svg",Rectangle:n.p+"static/media/Rectangle.8c2fd5ee.svg",Settings:n.p+"static/media/Settings.8588567d.svg",Text:n.p+"static/media/Text.c8ca5bc8.svg",XImage:n.p+"static/media/x.6c9a4ba7.svg"},y={en:{Settings:{Title:"Settings",ProjectType:{Label:"Project Type",Title:"Project Type",Animation:"Animation",Comics:"Comics",Draw:"Draw",StoryBoard:"Story Board"},NameInput:"Project Nome",WidthInput:"Width",HeightInput:"Height",Confirm:"Confirm"},Brushes:{Title:"Brushes",Pencil:"Pencil",Eraser:"Eraser",PaintBucket:"Paint Bucket",ColorPicker:"Color Picker",Line:"Line",Rectangle:"Rectangle",Circle:"Circle",Text:"Text"},ToolBox:{Title:"ToolBox",Color:{Label:"Color",Title:"Choose Color"},Size:{Label:"Size",Title:"Choose Size"},Format:{Label:"Format",Title:"Select format",Formats:{Square:"Square",Circle:"Circle"}},ColorTolerance:{Label:"Color Tolerance",Title:"Color Tolerance"},Clear:"Clear Canvas",PaintFill:{Fill:"Fill",Stroke:"Stroke(Border)"},Text:{Label:"Text"},FontFamily:{Label:"Family"}},Footer:{Width:"Width",Height:"Height",Settings:"Settings"}},pt:{Settings:{Title:"Configura\xe7\xf5es",ProjectType:{Label:"Tipo de Projeto",Title:"Tipo de Projeto",Animation:"Anima\xe7\xe3o",Comics:"Banda Desenhada",Draw:"Desenho",StoryBoard:"Story Board"},NameInput:"Nome do Projeto",WidthInput:"Largura",HeightInput:"Altura",Confirm:"Confirmar"},Brushes:{Title:"Pinceis",Pencil:"L\xe1piz",Eraser:"Borracha",PaintBucket:"Balde de Tinta",ColorPicker:"Selecionador de Cor",Line:"Linha",Rectangle:"Ret\xe2ngulo",Circle:"C\xedrculo",Text:"Texto"},ToolBox:{Title:"Ferramentas de ",Color:{Label:"Cor",Title:"Selecionar Cor"},Size:{Label:"Tamanho",Title:"Defenir Tamanho"},Format:{Label:"Formato",Title:"Selecionar Formato",Formats:{Square:"Quadrado",Circle:"C\xedrculo"}},ColorTolerance:{Label:"Tolerancia de Cor",Title:"Tolerancia de Cor"},Clear:"Limpar Tela",PaintFill:{Fill:"Preencher",Stroke:"Borda"},Text:{Label:"Texto"},FontFamily:{Label:"Familia"}},Footer:{Width:"Largura",Height:"Altura",Settings:"Defini\xe7\xf5es"}}};n(19);function S(){var e=j(),t=e.name,n=e.setName,c=function(){var e=Object(r.useContext)(s);return{projectType:e.projectType,setProjectType:e.setProjectType}}(),i=c.projectType,o=c.setProjectType,u=function(){var e=Object(r.useContext)(g);return{canvasWidth:e.canvasWidth,setCanvasWidth:e.setCanvasWidth}}(),d=u.canvasWidth,m=u.setCanvasWidth,x=function(){var e=Object(r.useContext)(g);return{canvasHeight:e.canvasHeight,setCanvasHeight:e.setCanvasHeight}}(),f=x.canvasHeight,p=x.setCanvasHeight,O=h().canvas,v=b(),C=v.language,T=v.setLanguage,S=Object(r.useState)(y[C].Settings),F=Object(l.a)(S,2),P=F[0],k=F[1];Object(r.useEffect)((function(){k(y[C].Settings)}),[C]);var A=Object(r.useState)(),B=Object(l.a)(A,2),L=B[0],w=B[1],z=Object(r.useState)(),N=Object(l.a)(z,2),R=N[0],W=N[1];return Object(r.useEffect)((function(){O&&(W((function(){return O.toDataURL("image/png")})),w((function(){return O.toDataURL("image/jpeg")})))}),[O]),Object(a.jsxs)("div",{className:"SettingsContainer",children:[Object(a.jsxs)("label",{htmlFor:"Name",children:[P.NameInput,":",Object(a.jsx)("input",{id:"Name",name:"Name",type:"text",title:"Project Name",placeholder:"Project Name",value:t,onChange:function(e){return n(e.target.value)}})]}),Object(a.jsxs)("label",{htmlFor:"ProjectType",children:[" ",P.ProjectType.Label,":",Object(a.jsxs)("select",{id:"ProjectType",name:"Project Type",title:P.ProjectType.Title,defaultValue:i,onChange:function(e){return o(e.target.value)},children:[Object(a.jsx)("option",{value:"animation",disabled:!0,children:P.ProjectType.Animation}),Object(a.jsx)("option",{value:"comics",disabled:!0,children:P.ProjectType.Comics}),Object(a.jsx)("option",{value:"draw",children:P.ProjectType.Draw}),Object(a.jsx)("option",{value:"pixelArt",disabled:!0,children:"Pixel Art"}),Object(a.jsx)("option",{value:"storyBoard",disabled:!0,children:P.ProjectType.StoryBoard}),Object(a.jsx)("option",{value:"svg",disabled:!0,children:"SVG"})]})]}),Object(a.jsxs)("label",{htmlFor:"width",children:[P.WidthInput,":",Object(a.jsx)("input",{id:"width",name:"Width",type:"number",title:"Paper Width",placeholder:"Paper Width",value:d,onChange:function(e){return m(e.target.value)}})," px"]}),Object(a.jsxs)("label",{htmlFor:"height",children:[P.HeightInput,":",Object(a.jsx)("input",{id:"height",name:"Height",type:"number",title:"Paper Height",placeholder:"Paper Height",value:f,onChange:function(e){return p(e.target.value)}})," px"]}),Object(a.jsxs)("label",{htmlFor:"language",children:["Language:",Object(a.jsxs)("select",{id:"language",name:"language",title:"App Language",placeholder:"App Language",value:C,onChange:function(e){return T(e.target.value)},children:[Object(a.jsx)("option",{value:"en",children:"English"}),Object(a.jsx)("option",{value:"pt",children:"Portug\xeas"})]})]}),Object(a.jsxs)("div",{className:"Export",children:[Object(a.jsx)("h3",{children:"Export"}),Object(a.jsxs)("a",{href:L,download:"".concat(t,".jpg"),children:[t,".jpg"]}),Object(a.jsxs)("a",{href:R,download:"".concat(t,".png"),children:[t,".png"]})]})]})}n(20);function F(){var e=d(),t=e.modalTitle,n=e.setModalTitle;return Object(a.jsx)("div",{className:"modalContainerAll",style:t?{display:"grid"}:{display:"none"},children:Object(a.jsxs)("div",{className:"modalContainer",children:[Object(a.jsxs)("div",{className:"Header",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("button",{onClick:function(){return n("")},children:Object(a.jsx)("img",{src:T.XImage,alt:"Close"})})]}),Object(a.jsx)("div",{className:"Main",children:"Settings"===t&&Object(a.jsx)(S,{})})]})})}n(21);function P(e){var t=e.visible,n=e.setVisible;return Object(a.jsx)("button",{className:"HideButton",onClick:function(){return n(!t)},children:Object(a.jsx)("img",{src:t?T.ArrowUp:T.ArrowDown,alt:"Close/Open"})})}n(22);function k(){var e=p(),t=e.brush,n=e.setBrush,c=b().language,i=Object(r.useState)(y[c].Brushes),o=Object(l.a)(i,2),s=o[0],u=o[1];Object(r.useEffect)((function(){u(y[c].Brushes)}),[c]);var j=Object(r.useState)(!0),d=Object(l.a)(j,2),g=d[0],m=d[1],h={backgroundColor:"#90defd"},x={backgroundColor:"white"};return Object(a.jsxs)("aside",{className:"BrushesContainer",children:[Object(a.jsxs)("div",{className:"BrushesHeader",children:[Object(a.jsx)("h2",{children:s.Title}),Object(a.jsx)(P,{visible:g,setVisible:m})]}),Object(a.jsx)("ul",{style:g?{display:"grid"}:{display:"none"},children:["Pencil","Eraser","PaintBucket","ColorPicker","Line","Rectangle","Circle","Text"].map((function(e,r){return Object(a.jsx)("li",{children:Object(a.jsx)("button",{title:s[e],onClick:function(){return n(e)},style:t===e?h:x,children:Object(a.jsx)("img",{src:T[e],alt:e})})},e)}))})]})}function A(e){var t=e.mensage,n=O(),r=n.color,c=n.setColor;return Object(a.jsxs)("label",{htmlFor:"color",children:[Object(a.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(a.jsx)("input",{id:"color",type:"color",title:t.Title,value:r,onChange:function(e){return c(e.target.value)}})]})}function B(e){var t=e.mensage,n=function(){var e=Object(r.useContext)(x);return{size:e.size,setSize:e.setSize}}(),c=n.size,i=n.setSize;return Object(a.jsxs)("label",{htmlFor:"size",children:[Object(a.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(a.jsx)("input",{id:"size",type:"range",title:t.Title,min:1,max:100,value:c,onChange:function(e){return i(e.target.value)}}),Object(a.jsxs)("span",{className:"value",children:["[",c,"]"]})]})}function L(e){var t=e.mensage,n=function(){var e=Object(r.useContext)(x);return{format:e.format,setFormat:e.setFormat}}(),c=n.format,i=n.setFormat;return Object(a.jsxs)("label",{htmlFor:"square",children:[Object(a.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(a.jsxs)("select",{id:"format",name:"format",title:t.Title,checked:c,value:c,onChange:function(e){return i(e.target.value)},children:[Object(a.jsx)("option",{value:"Square",children:t.Formats.Square}),Object(a.jsx)("option",{value:"Circle",children:t.Formats.Circle})]})]})}function w(e){var t=e.mensage;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{mensage:t.Color}),Object(a.jsx)(B,{mensage:t.Size}),Object(a.jsx)(L,{mensage:t.Format})]})}function z(e){var t=e.mensage,n=h(),r=n.ctx,c=n.canvasWidth,i=n.canvasHeight;return Object(a.jsx)("button",{onClick:function(){return r.clearRect(0,0,c,i)},children:t})}function N(e){var t=e.mensage;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B,{mensage:t.Size}),Object(a.jsx)(z,{mensage:t.Clear})]})}function R(e){var t=e.mensage,n=function(){var e=Object(r.useContext)(x);return{colorTolerance:e.colorTolerance,setColorTolerance:e.setColorTolerance}}(),c=n.colorTolerance,i=n.setColorTolerance;return Object(a.jsxs)("label",{htmlFor:"ColorTolerance",title:t.Title,children:[Object(a.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(a.jsx)("input",{id:"ColorTolerance",type:"range",min:0,max:150,value:c,onChange:function(e){return i(e.target.value)}}),"[",c,"]"]})}function W(e){var t=e.mensage;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{mensage:t.Color}),Object(a.jsx)(R,{mensage:t.ColorTolerance})]})}function E(){var e=v().colorsPicked,t=O().setColor;return Object(a.jsx)("div",{children:e.map((function(e,n){return Object(a.jsx)("button",{style:{backgroundColor:e,textShadow:"0 0 2px white"},onClick:function(){return t(e)},title:e,children:e},n)}))})}function I(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(E,{})})}function H(e){var t=e.mensage;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{mensage:t.Color}),Object(a.jsx)(B,{mensage:t.Size})]})}function M(e){var t=e.mensage,n=function(){var e=Object(r.useContext)(x);return{paintFill:e.paintFill,setPaintFill:e.setPaintFill}}(),c=n.paintFill,i=n.setPaintFill;return Object(a.jsxs)("div",{onChange:function(){return i(!c)},className:"StrokeFillContainer",children:[Object(a.jsxs)("label",{htmlFor:"Stroke",children:[Object(a.jsx)("input",{type:"radio",id:"Stroke",name:"paintFill",value:"false",defaultChecked:!c}),Object(a.jsx)("span",{children:t.Stroke})]}),Object(a.jsxs)("label",{htmlFor:"Fill",children:[Object(a.jsx)("input",{type:"radio",id:"Fill",name:"paintFill",value:"true",defaultChecked:c}),Object(a.jsx)("span",{children:t.Fill})]})]})}function D(e){var t=e.mensage;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{mensage:t.Color}),Object(a.jsx)(B,{mensage:t.Size}),Object(a.jsx)(M,{mensage:t.PaintFill})]})}function q(e){var t=e.mensage;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{mensage:t.Color}),Object(a.jsx)(B,{mensage:t.Size}),Object(a.jsx)(M,{mensage:t.PaintFill})]})}function U(e){var t=e.mensage,n=function(){var e=Object(r.useContext)(x);return{text:e.text,setText:e.setText}}(),c=n.text,i=n.setText;return Object(a.jsxs)("label",{htmlFor:"text",title:t.Title,children:[Object(a.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(a.jsx)("input",{id:"text",type:"text",value:c,onChange:function(e){return i(e.target.value)}})]})}function V(e){var t=e.mensage,n=function(){var e=Object(r.useContext)(x);return{fontFamily:e.fontFamily,setFontFamily:e.setFontFamily}}(),c=n.fontFamily,i=n.setFontFamily;return Object(a.jsxs)("label",{htmlFor:"square",children:[t.Label,":",Object(a.jsxs)("select",{id:"format",name:"format",title:t.Title,checked:c,value:c,onChange:function(e){return i(e.target.value)},children:[Object(a.jsx)("option",{value:"Arial",children:"Arial"}),Object(a.jsx)("option",{value:"Serif",children:"Serif"}),Object(a.jsx)("option",{value:"Times",children:"Times"}),Object(a.jsx)("option",{value:"Monospace",children:"monospace"})]})]})}function Q(e){var t=e.mensage;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(U,{mensage:t.Text}),Object(a.jsx)(A,{mensage:t.Color}),Object(a.jsx)(B,{mensage:t.Size}),Object(a.jsx)(V,{mensage:t.FontFamily})]})}n(23);function Y(){var e=p().brush,t=b().language,n=Object(r.useState)(y[t]),c=Object(l.a)(n,2),i=c[0],o=c[1];Object(r.useEffect)((function(){o(y[t])}),[t]);var s=Object(r.useState)(!0),u=Object(l.a)(s,2),j=u[0],d=u[1];return Object(a.jsxs)("aside",{className:"ToolBoxContainer",children:[Object(a.jsxs)("div",{className:"ToolBoxHeader",children:[Object(a.jsxs)("h2",{children:[i.ToolBox.Title," ",i.Brushes[e]]}),Object(a.jsx)(P,{visible:j,setVisible:d})]}),Object(a.jsxs)("div",{className:"ToolBoxMain",style:j?{display:"flex"}:{display:"none"},children:["Pencil"===e&&Object(a.jsx)(w,{mensage:i.ToolBox}),"Eraser"===e&&Object(a.jsx)(N,{mensage:i.ToolBox}),"PaintBucket"===e&&Object(a.jsx)(W,{mensage:i.ToolBox}),"ColorPicker"===e&&Object(a.jsx)(I,{}),"Line"===e&&Object(a.jsx)(H,{mensage:i.ToolBox}),"Rectangle"===e&&Object(a.jsx)(D,{mensage:i.ToolBox}),"Circle"===e&&Object(a.jsx)(q,{mensage:i.ToolBox}),"Text"===e&&Object(a.jsx)(Q,{mensage:i.ToolBox})]})]})}function G(e){var t=e.ctx,n=e.actual,a=e.size,r=(e.color,e.format);if(t.beginPath(t),"Square"===r)t.rect(n.x,n.y,a,a);else{var c=a/2;t.arc(n.x+c,n.y+c,c,0,2*Math.PI,!1)}t.fill()}var X=n(9),J=n(6),K=n.n(J);function Z(e){return(e=String(e).toLowerCase()).includes("#")||(e.includes("rgb")?(e=e.replace("rgb","").replace("(","").replace(")","").replace(" ","").split(","),e="#"+K.a.rgb.hex(e)):e.includes("hsl")?(e=e.replace("hsl","").replace("(","").replace(")","").replace(" ","").split(","),e="#"+K.a.hsl.hex(e)):console.log("Fail!!")),e}function _(e,t,n,a){var r=parseInt(n.x),c=parseInt(n.y),i=a.color,o=a.colorTolerance,l=Z(i);if(t.fillStyle=l,r&&c&&l&&o){var s=t.getImageData(0,0,e.width,e.height),u=new X.a(s);u.fill(l,r,c,o),t.putImageData(u.imageData,0,0)}}var $=n(12),ee=n(10),te=n.n(ee);function ne(e,t,n){var a=n.colorsPicked,r=n.setColorsPicked,c=function(e,t,n){return Z(te()(e,t,n).rgb)}(e,t.x,t.y);r([].concat(Object($.a)(a),[c]))}var ae={},re={},ce=null,ie=null,oe=null,le=null,se=null;function ue(e,t,n,a){re={},ce=null,le=null,oe=e,ae=n,se=t,ie=a,function(){var e=oe,t=e.width,n=e.height,a=oe.getBoundingClientRect(),r=a.top,c=a.left;(ce=document.createElement("canvas")).width=t,ce.height=n,ce.style.position="fixed",ce.style.top=r+"px",ce.style.left=c+"px",ce.style.zIndex=100,ce.style.background="none",le=ce.getContext("2d"),document.body.appendChild(ce),ce.addEventListener("mousemove",(function(e){var t=oe,n=t.width,a=t.height;le.clearRect(0,0,n,a),je(e),be(le)})),ce.addEventListener("mouseup",(function(e){je(e),be(se),ce.remove()}))}()}function je(e){var t=ce.getBoundingClientRect(),n=t.top,a=t.left,r=e.clientX-a,c=e.clientY-n;re={x:r,y:c}}function be(e){switch(ie.brush){case"Line":!function(e){var t=ie,n=t.color,a=t.size;e.beginPath(),e.strokeStyle=n,e.lineWidth=a,e.moveTo(ae.x,ae.y),e.lineTo(re.x,re.y),e.stroke()}(e);break;case"Rectangle":!function(e){var t=ie,n=t.color,a=t.size,r=t.paintFill;re.x-=ae.x,re.y-=ae.y,r?(e.fillStyle=n,e.lineWidth=0,e.fillRect(ae.x,ae.y,re.x,re.y)):(e.beginPath(),e.strokeStyle=n,e.lineWidth=a,e.rect(ae.x,ae.y,re.x,re.y),e.stroke())}(e);break;case"Circle":!function(e){var t=ie,n=t.color,a=t.size,r=t.paintFill;re.x-=ae.x,re.y-=ae.y;var c=ae.x-re.x,i=ae.y-re.y,o=c<i?c:i,l=o>1?o:1;r?(e.beginPath(),e.fillStyle=n,e.lineWidth=0,e.arc(ae.x,ae.y,l,0,2*Math.PI),e.fill()):(e.beginPath(),e.strokeStyle=n,e.lineWidth=a,e.arc(ae.x,ae.y,l,0,2*Math.PI),e.stroke())}(e)}}n(32);function de(){var e=h(),t=e.canvasWidth,n=e.canvasHeight,c=function(){var e=Object(r.useContext)(x);return{brush:e.brush,color:e.color,size:e.size,format:e.format,colorsPicked:e.colorsPicked,colorTolerance:e.colorTolerance,paintFill:e.paintFill,text:e.text,fontFamily:e.fontFamily}}(),i=c.brush,o=c.color,s=c.size,u=c.format,j=c.colorTolerance,b=c.paintFill,d=c.text,m=c.fontFamily,f=v(),p=f.colorsPicked,O=f.setColorsPicked,C=Object(r.useRef)(null),T=function(){var e=Object(r.useContext)(g);return{canvas:e.canvas,setCanvas:e.setCanvas}}(),y=T.canvas,S=T.setCanvas,F=function(){var e=Object(r.useContext)(g);return{ctx:e.ctx,setCtx:e.setCtx}}(),P=F.ctx,k=F.setCtx;Object(r.useEffect)((function(){var e=C.current,t=e.getContext("2d");S(e),k(t),e&&t&&function(e,t){_(e,t,{x:1,y:1},{color:"#ffffff",colorTolerance:j})}(e,t)}),[]);var A=Object(r.useState)(!1),B=Object(l.a)(A,2),L=B[0],w=B[1],z=Object(r.useState)(null),N=Object(l.a)(z,2),R=N[0],W=N[1],E=Object(r.useState)(null),I=Object(l.a)(E,2),H=I[0],M=I[1],D=Object(r.useState)(null),q=Object(l.a)(D,2),U=q[0],V=q[1],Q=Object(r.useState)(null),Y=Object(l.a)(Q,2),X=Y[0],J=Y[1],K=Object(r.useState)(null),Z=Object(l.a)(K,2),$=Z[0],ee=Z[1],te=Object(r.useState)(null),ae=Object(l.a)(te,2),re=ae[0],ce=ae[1];function ie(e){var t=y.getBoundingClientRect(),n=t.top,a=t.left,r=e.clientX-a,c=e.clientY-n;$&&re||!L||(ee(r),ce(c)),W(U),M(X),V(r),J(c)}function oe(){w(!1),W(null),M(null),V(null),J(null),ee(null),ce(null)}return Object(r.useEffect)((function(){U&&X&&function(e){switch(i){case"Pencil":!function(e,t,n){t.last;var a=t.actual,r=n.color,c=n.size,i=n.format;e.fillStyle=r,G({ctx:e,actual:a,size:c,format:i})}(P,e,{color:o,size:s,format:u});break;case"Eraser":!function(e,t,n){var a=t.x,r=t.y;e.clearRect(a,r,n,n)}(P,e.actual,s);break;case"PaintBucket":_(y,P,e.real,{color:o,colorTolerance:j});break;case"ColorPicker":ne(y,e.real,{colorsPicked:p,setColorsPicked:O});break;case"Line":L&&ue(y,P,e.start,{color:o,size:s,brush:i});break;case"Rectangle":case"Circle":L&&ue(y,P,e.start,{color:o,size:s,paintFill:b,brush:i});break;case"Text":!function(e,t,n){var a=t.x,r=t.y,c=n.color,i=n.size,o=n.text,l=n.fontFamily;e.font="".concat(i,"px ").concat(l),e.fillStyle=c,e.fillText(o,a,r)}(P,e.real,{color:o,size:s,text:d,fontFamily:m})}}({last:{x:R,y:H},actual:{x:U-s/2,y:X-s/2},real:{x:U,y:X},start:{x:$,y:re}})}),[U,X]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("canvas",{width:t,height:n,ref:C,onClick:function(e){return ie(e)},onMouseDown:function(){return w(!0)},onMouseUp:oe,onMouseOut:oe,onMouseMove:function(e){return L&&ie(e)}})})}n(33);function ge(){return Object(a.jsxs)("main",{children:[Object(a.jsx)(F,{}),Object(a.jsx)(k,{}),Object(a.jsx)(Y,{}),Object(a.jsx)(de,{})]})}var me=n(11);n(34);function he(){var e=function(){var e=Object(r.useContext)(s);return{name:e.name,projectType:e.projectType,language:e.language,modalTitle:e.modalTitle}}().language,t=d().setModalTitle,n=h(),c=n.canvasWidth,i=n.canvasHeight,o=Object(r.useState)(y[e].Footer),u=Object(l.a)(o,2),j=u[0],b=u[1];return Object(r.useEffect)((function(){b(y[e].Footer)}),[e]),Object(a.jsxs)("footer",{children:[Object(a.jsxs)("h3",{children:["Rupestre \u2192 ",me.version]}),Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{title:j.Width,children:[c,"px"]}),Object(a.jsx)("span",{children:"X"}),Object(a.jsxs)("span",{title:j.Height,children:[i,"px"]})]}),Object(a.jsx)("button",{onClick:function(){return t("Settings")},children:Object(a.jsx)("img",{src:T.Settings,alt:j.Settings,title:j.Settings})})]})}n(35),n(36);function xe(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u,{children:Object(a.jsx)(m,{children:Object(a.jsxs)(f,{children:[Object(a.jsx)(C,{}),Object(a.jsx)(ge,{}),Object(a.jsx)(he,{})]})})})})}o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(xe,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.309fc59d.chunk.js.map