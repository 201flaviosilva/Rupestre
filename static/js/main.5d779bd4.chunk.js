(this.webpackJsonprupestre=this.webpackJsonprupestre||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('{"name":"rupestre","version":"1.0.0","private":false,"description":"","author":{"name":"Fl\xe1vio Silva","email":"flavioandre.2001.9.7@gmail.com","url":"https://201flaviosilva.github.io"},"license":"MIT","keywords":[],"homepage":"http://201flaviosilva.github.io/Rupestre","main":"public/electron.js","repository":{"type":"git","url":"git+https://github.com/201flaviosilva/Rupestre"},"bugs":{"url":"https://github.com/201flaviosilva/Rupestre/issues"},"scripts":{"clear":"rm -rf build && rm -rf out && rm -rf dist","start":"react-scripts start","dev":"concurrently -k \\"BROWSER=none npm start\\" \\"npm:electron\\"","electron":"wait-on tcp:3000 && electron-forge start","eject":"react-scripts eject","build":"react-scripts build","predeploy":"npm run build","deploy":"gh-pages -d build","package":"react-scripts build && electron-forge package","make":"react-scripts build && electron-forge make"},"dependencies":{"color-convert":"^2.0.1","electron-builder":"^22.9.1","electron-is-dev":"^1.2.0","electron-squirrel-startup":"^1.0.0","get-canvas-pixel-color":"^2.0.1","q-floodfill":"^1.3.1","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"4.0.1"},"devDependencies":{"@electron-forge/cli":"^6.0.0-beta.54","@electron-forge/maker-deb":"^6.0.0-beta.54","@electron-forge/maker-rpm":"^6.0.0-beta.54","@electron-forge/maker-squirrel":"^6.0.0-beta.54","@electron-forge/maker-zip":"^6.0.0-beta.54","concurrently":"^5.3.0","electron":"^11.1.1","electron-devtools-installer":"^3.1.1","gh-pages":"^3.1.0","wait-on":"^5.2.1"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"config":{"forge":{"packagerConfig":{"icon":"./build/favicon.ico","name":"Rupestre","executableName":"rupestre"},"makers":[{"name":"@electron-forge/maker-squirrel","config":{"name":"rupestre"}},{"name":"@electron-forge/maker-zip","platforms":["darwin"]},{"name":"@electron-forge/maker-deb","config":{"icon":"./build/favicon.ico"}},{"name":"@electron-forge/maker-rpm","config":{}}]}},"build":{"appId":"com.github.rupestre","productName":"Rupestre","copyright":"Copyright \xa9 2020 Fl\xe1vio Silva","mac":{"category":"public.app-category.graphics-design"},"files":["build/**/*","node_modules/**/*"],"directories":{"buildResources":"assets"}}}')},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),i=a(8),o=a.n(i),l=a(2),s={en:{Settings:{Title:"Settings",NameInput:"Project Nome",ProjectType:{Label:"Project Type",Title:"Project Type",Animation:"Animation",Comics:"Comics",Draw:"Draw",StoryBoard:"Story Board"},Size:{Label:"Size",WidthInput:{Title:"Canvas Width",placeholder:"Width"},HeightInput:{Title:"Canvas Height",placeholder:"Height"}},Export:{Label:"Export",png:"Export as PNG",jpg:"Export as JPG"},Confirm:"Confirm"},Brushes:{Title:"Brushes",Pencil:"Pencil",Eraser:"Eraser",PaintBucket:"Paint Bucket",ColorPicker:"Color Picker",Line:"Line",Rectangle:"Rectangle",Circle:"Circle",Text:"Text"},ToolBox:{Title:"ToolBox",Color:{Label:"Color",Title:"Choose Color"},Size:{Label:"Size",Title:"Choose Size"},Format:{Label:"Format",Title:"Select format",Formats:{Square:"Square",Circle:"Circle"}},ColorTolerance:{Label:"Color Tolerance",Title:"Color Tolerance"},Clear:"Clear Canvas",PaintFill:{Fill:"Fill",Stroke:"Stroke(Border)"},Text:{Label:"Text"},FontFamily:{Label:"Family"}},Footer:{Width:"Width",Height:"Height",Settings:"Settings"}},pt:{Settings:{Title:"Configura\xe7\xf5es",ProjectType:{Label:"Tipo de Projeto",Title:"Tipo de Projeto",Animation:"Anima\xe7\xe3o",Comics:"Banda Desenhada",Draw:"Desenho",StoryBoard:"Story Board"},NameInput:"Nome do Projeto",Size:{Label:"Size",WidthInput:{Title:"Canvas Largura",placeholder:"Largura"},HeightInput:{Title:"Canvas Altura",placeholder:"Altura"}},Export:{Label:"Exportar",png:"Exportar como PNG",jpg:"Exportar como JPG"},Confirm:"Confirmar"},Brushes:{Title:"Pinceis",Pencil:"L\xe1piz",Eraser:"Borracha",PaintBucket:"Balde de Tinta",ColorPicker:"Selecionador de Cor",Line:"Linha",Rectangle:"Ret\xe2ngulo",Circle:"C\xedrculo",Text:"Texto"},ToolBox:{Title:"Ferramentas de ",Color:{Label:"Cor",Title:"Selecionar Cor"},Size:{Label:"Tamanho",Title:"Defenir Tamanho"},Format:{Label:"Formato",Title:"Selecionar Formato",Formats:{Square:"Quadrado",Circle:"C\xedrculo"}},ColorTolerance:{Label:"Tolerancia de Cor",Title:"Tolerancia de Cor"},Clear:"Limpar Tela",PaintFill:{Fill:"Preencher",Stroke:"Borda"},Text:{Label:"Texto"},FontFamily:{Label:"Familia"}},Footer:{Width:"Largura",Height:"Altura",Settings:"Defini\xe7\xf5es"}}},u=Object(r.createContext)();function j(e){var t=e.children,a=Object(r.useState)("en"),c=Object(l.a)(a,2),i=c[0],o=c[1],j=Object(r.useState)(s[i]),b=Object(l.a)(j,2),d=b[0],g=b[1];Object(r.useEffect)((function(){localStorage.getItem("lang")?o(localStorage.getItem("lang")):localStorage.setItem("lang","en")}),[]),Object(r.useEffect)((function(){localStorage.setItem("lang",i),g(s[i])}),[i]);var m=Object(r.useState)("Name"),x=Object(l.a)(m,2),h=x[0],p=x[1],f=Object(r.useState)("draw"),O=Object(l.a)(f,2),v=O[0],C=O[1],T=Object(r.useState)(""),S=Object(l.a)(T,2),y=S[0],F=S[1];return Object(n.jsx)(u.Provider,{value:{language:i,setLanguage:o,translation:d,setTranslation:g,name:h,setName:p,projectType:v,setProjectType:C,modalTitle:y,setModalTitle:F},children:t})}function b(){var e=Object(r.useContext)(u);return{name:e.name,setName:e.setName}}function d(){var e=Object(r.useContext)(u);return{modalTitle:e.modalTitle,setModalTitle:e.setModalTitle}}function g(){var e=Object(r.useContext)(u);return{translation:e.translation,setTranslation:e.setTranslation}}var m=Object(r.createContext)();function x(e){var t=e.children,a=Object(r.useState)(null),c=Object(l.a)(a,2),i=c[0],o=c[1],s=Object(r.useState)(null),u=Object(l.a)(s,2),j=u[0],b=u[1],d=Object(r.useState)(500),g=Object(l.a)(d,2),x=g[0],h=g[1],p=Object(r.useState)(500),f=Object(l.a)(p,2),O=f[0],v=f[1];return Object(n.jsx)(m.Provider,{value:{canvas:i,setCanvas:o,ctx:j,setCtx:b,canvasWidth:x,setCanvasWidth:h,canvasHeight:O,setCanvasHeight:v},children:t})}function h(){var e=Object(r.useContext)(m);return{canvas:e.canvas,ctx:e.ctx,canvasWidth:e.canvasWidth,canvasHeight:e.canvasHeight}}var p=Object(r.createContext)();function f(e){var t=e.children,a=Object(r.useState)("Pencil"),c=Object(l.a)(a,2),i=c[0],o=c[1],s=Object(r.useState)("#ff0000"),u=Object(l.a)(s,2),j=u[0],b=u[1],d=Object(r.useState)(20),g=Object(l.a)(d,2),m=g[0],x=g[1],h=Object(r.useState)("Square"),f=Object(l.a)(h,2),O=f[0],v=f[1],C=Object(r.useState)([]),T=Object(l.a)(C,2),S=T[0],y=T[1],F=Object(r.useState)(5),P=Object(l.a)(F,2),k=P[0],A=P[1],L=Object(r.useState)(!1),B=Object(l.a)(L,2),z=B[0],w=B[1],N=Object(r.useState)("Text"),E=Object(l.a)(N,2),R=E[0],I=E[1],W=Object(r.useState)("Serif"),H=Object(l.a)(W,2),M=H[0],D=H[1];return Object(n.jsx)(p.Provider,{value:{brush:i,setBrush:o,color:j,setColor:b,size:m,setSize:x,format:O,setFormat:v,colorsPicked:S,setColorsPicked:y,colorTolerance:k,setColorTolerance:A,paintFill:z,setPaintFill:w,text:R,setText:I,fontFamily:M,setFontFamily:D},children:t})}function O(){var e=Object(r.useContext)(p);return{brush:e.brush,setBrush:e.setBrush}}function v(){var e=Object(r.useContext)(p);return{color:e.color,setColor:e.setColor}}function C(){var e=Object(r.useContext)(p);return{colorsPicked:e.colorsPicked,setColorsPicked:e.setColorsPicked}}a(18);function T(){var e=b().name;return Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:e})})}var S={ArrowDown:a.p+"static/media/ArrowDown.1eca03ef.svg",ArrowLeft:a.p+"static/media/ArrowLeft.8edfe59d.svg",ArrowRight:a.p+"static/media/ArrowRight.f030f9db.svg",ArrowUp:a.p+"static/media/ArrowUp.70d8ca82.svg",Circle:a.p+"static/media/Circle.aeb8a724.svg",ColorPicker:a.p+"static/media/ColorPicker.8d8944dd.svg",Eraser:a.p+"static/media/Eraser.5996d15c.svg",Line:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAYElEQVRIie3VMQqAMAxG4Xc9ty7i4O3NMSLUIZ2k4GAiDv+DrF+gQwrqoxpgY5ZsfAMc6GOsEu/AUYk78VyvWyf4CezChQv/Ad4muBNnISWrxO8L0nGIz8KIk5tyFdVjF/TaWyMHVSMPAAAAAElFTkSuQmCC",PaintBucket:a.p+"static/media/PaintBucket.69c02f62.svg",Pencil:a.p+"static/media/Pencil.015e8044.svg",Rectangle:a.p+"static/media/Rectangle.8c2fd5ee.svg",Settings:a.p+"static/media/Settings.8588567d.svg",Text:a.p+"static/media/Text.c8ca5bc8.svg",XImage:a.p+"static/media/x.6c9a4ba7.svg"};a(19);function y(){var e=b(),t=e.name,a=e.setName,c=function(){var e=Object(r.useContext)(u);return{projectType:e.projectType,setProjectType:e.setProjectType}}(),i=c.projectType,o=c.setProjectType,s=function(){var e=Object(r.useContext)(m);return{canvasWidth:e.canvasWidth,setCanvasWidth:e.setCanvasWidth}}(),j=s.canvasWidth,d=s.setCanvasWidth,x=function(){var e=Object(r.useContext)(m);return{canvasHeight:e.canvasHeight,setCanvasHeight:e.setCanvasHeight}}(),p=x.canvasHeight,f=x.setCanvasHeight,O=function(){var e=Object(r.useContext)(u);return{language:e.language,setLanguage:e.setLanguage}}(),v=O.language,C=O.setLanguage,T=h().canvas,S=g().translation,y=Object(r.useState)(S.Settings),F=Object(l.a)(y,2),P=F[0],k=F[1];Object(r.useEffect)((function(){k(S.Settings)}),[S]);var A=Object(r.useState)(),L=Object(l.a)(A,2),B=L[0],z=L[1],w=Object(r.useState)(),N=Object(l.a)(w,2),E=N[0],R=N[1];return Object(r.useEffect)((function(){T&&(R((function(){return T.toDataURL("image/png")})),z((function(){return T.toDataURL("image/jpeg")})))}),[T]),Object(n.jsxs)("div",{className:"SettingsContainer",children:[Object(n.jsxs)("label",{htmlFor:"Name",children:[P.NameInput,":",Object(n.jsx)("input",{id:"Name",name:"Name",type:"text",title:"Project Name",placeholder:"Project Name",value:t,onChange:function(e){return a(e.target.value)}})]}),Object(n.jsxs)("label",{htmlFor:"ProjectType",children:[" ",P.ProjectType.Label,":",Object(n.jsxs)("select",{id:"ProjectType",name:"Project Type",title:P.ProjectType.Title,defaultValue:i,onChange:function(e){return o(e.target.value)},children:[Object(n.jsx)("option",{value:"animation",disabled:!0,children:P.ProjectType.Animation}),Object(n.jsx)("option",{value:"comics",disabled:!0,children:P.ProjectType.Comics}),Object(n.jsx)("option",{value:"draw",children:P.ProjectType.Draw}),Object(n.jsx)("option",{value:"pixelArt",disabled:!0,children:"Pixel Art"}),Object(n.jsx)("option",{value:"storyBoard",disabled:!0,children:P.ProjectType.StoryBoard}),Object(n.jsx)("option",{value:"svg",disabled:!0,children:"SVG"})]})]}),Object(n.jsxs)("label",{htmlFor:"width",className:"CanvasSize",children:[P.Size.Label,":",Object(n.jsx)("input",{id:"width",name:"Width",type:"number",title:P.Size.WidthInput.Title,placeholder:P.Size.WidthInput.Placeholder,value:j,onChange:function(e){return d(e.target.value)}}),"X",Object(n.jsx)("input",{id:"height",name:"Height",type:"number",title:P.Size.HeightInput.Title,placeholder:P.Size.HeightInput.Placeholder,value:p,onChange:function(e){return f(e.target.value)}})]}),Object(n.jsxs)("label",{htmlFor:"language",children:["Language:",Object(n.jsxs)("select",{id:"language",name:"language",title:"App Language",placeholder:"App Language",value:v,onChange:function(e){return C(e.target.value)},children:[Object(n.jsx)("option",{value:"en",children:"English"}),Object(n.jsx)("option",{value:"pt",children:"Portug\xeas"})]})]}),Object(n.jsxs)("div",{className:"Export",children:[Object(n.jsx)("h3",{children:P.Export.Label}),Object(n.jsxs)("a",{href:B,title:P.Export.Label.jpg,download:"".concat(t,".jpg"),children:[t,".jpg"]}),Object(n.jsxs)("a",{href:E,title:P.Export.Label.png,download:"".concat(t,".png"),children:[t,".png"]})]})]})}a(20);function F(){var e=d(),t=e.modalTitle,a=e.setModalTitle;return Object(n.jsx)("div",{className:"modalContainerAll",style:t?{display:"grid"}:{display:"none"},children:Object(n.jsxs)("div",{className:"modalContainer",children:[Object(n.jsxs)("div",{className:"Header",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("button",{onClick:function(){return a("")},children:Object(n.jsx)("img",{src:S.XImage,alt:"Close"})})]}),Object(n.jsx)("div",{className:"Main",children:"Settings"===t&&Object(n.jsx)(y,{})})]})})}a(21);function P(e){var t=e.visible,a=e.setVisible;return Object(n.jsx)("button",{className:"HideButton",onClick:function(){return a(!t)},children:Object(n.jsx)("img",{src:t?S.ArrowUp:S.ArrowDown,alt:"Close/Open"})})}a(22);function k(){var e=O(),t=e.brush,a=e.setBrush,c=g().translation,i=Object(r.useState)(c.Brushes),o=Object(l.a)(i,2),s=o[0],u=o[1];Object(r.useEffect)((function(){u(c.Brushes)}),[c]);var j=Object(r.useState)(!0),b=Object(l.a)(j,2),d=b[0],m=b[1],x={backgroundColor:"#90defd"},h={backgroundColor:"white"};return Object(n.jsxs)("aside",{className:"BrushesContainer",children:[Object(n.jsxs)("div",{className:"BrushesHeader",children:[Object(n.jsx)("h2",{children:s.Title}),Object(n.jsx)(P,{visible:d,setVisible:m})]}),Object(n.jsx)("ul",{style:d?{display:"grid"}:{display:"none"},children:["Pencil","Eraser","PaintBucket","ColorPicker","Line","Rectangle","Circle","Text"].map((function(e,r){return Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:s[e],onClick:function(){return a(e)},style:t===e?x:h,children:Object(n.jsx)("img",{src:S[e],alt:e})})},e)}))})]})}function A(e){var t=e.mensage,a=v(),r=a.color,c=a.setColor;return Object(n.jsxs)("label",{htmlFor:"color",children:[Object(n.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(n.jsx)("input",{id:"color",type:"color",title:t.Title,value:r,onChange:function(e){return c(e.target.value)}})]})}function L(e){var t=e.mensage,a=function(){var e=Object(r.useContext)(p);return{size:e.size,setSize:e.setSize}}(),c=a.size,i=a.setSize;return Object(n.jsxs)("label",{htmlFor:"size",children:[Object(n.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(n.jsx)("input",{id:"size",type:"range",title:t.Title,min:1,max:100,value:c,onChange:function(e){return i(e.target.value)}}),Object(n.jsxs)("span",{className:"value",children:["[",c,"]"]})]})}function B(e){var t=e.mensage,a=function(){var e=Object(r.useContext)(p);return{format:e.format,setFormat:e.setFormat}}(),c=a.format,i=a.setFormat;return Object(n.jsxs)("label",{htmlFor:"square",children:[Object(n.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(n.jsxs)("select",{id:"format",name:"format",title:t.Title,checked:c,value:c,onChange:function(e){return i(e.target.value)},children:[Object(n.jsx)("option",{value:"Square",children:t.Formats.Square}),Object(n.jsx)("option",{value:"Circle",children:t.Formats.Circle})]})]})}function z(e){var t=e.mensage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{mensage:t.Color}),Object(n.jsx)(L,{mensage:t.Size}),Object(n.jsx)(B,{mensage:t.Format})]})}function w(e){var t=e.mensage,a=h(),r=a.ctx,c=a.canvasWidth,i=a.canvasHeight;return Object(n.jsx)("button",{onClick:function(){return r.clearRect(0,0,c,i)},children:t})}function N(e){var t=e.mensage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{mensage:t.Size}),Object(n.jsx)(w,{mensage:t.Clear})]})}function E(e){var t=e.mensage,a=function(){var e=Object(r.useContext)(p);return{colorTolerance:e.colorTolerance,setColorTolerance:e.setColorTolerance}}(),c=a.colorTolerance,i=a.setColorTolerance;return Object(n.jsxs)("label",{htmlFor:"ColorTolerance",title:t.Title,children:[Object(n.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(n.jsx)("input",{id:"ColorTolerance",type:"range",min:0,max:150,value:c,onChange:function(e){return i(e.target.value)}}),"[",c,"]"]})}function R(e){var t=e.mensage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{mensage:t.Color}),Object(n.jsx)(E,{mensage:t.ColorTolerance})]})}function I(){var e=C().colorsPicked,t=v().setColor;return Object(n.jsx)("div",{className:"ColorsPickerList",children:e.map((function(e,a){return Object(n.jsx)("button",{style:{backgroundColor:e,textShadow:"0 0 2px white"},onClick:function(){return t(e)},title:e,children:e},a)}))})}function W(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(I,{})})}function H(e){var t=e.mensage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{mensage:t.Color}),Object(n.jsx)(L,{mensage:t.Size})]})}function M(e){var t=e.mensage,a=function(){var e=Object(r.useContext)(p);return{paintFill:e.paintFill,setPaintFill:e.setPaintFill}}(),c=a.paintFill,i=a.setPaintFill;return Object(n.jsxs)("div",{onChange:function(){return i(!c)},className:"StrokeFillContainer",children:[Object(n.jsxs)("label",{htmlFor:"Stroke",children:[Object(n.jsx)("input",{type:"radio",id:"Stroke",name:"paintFill",value:"false",defaultChecked:!c}),Object(n.jsx)("span",{children:t.Stroke})]}),Object(n.jsxs)("label",{htmlFor:"Fill",children:[Object(n.jsx)("input",{type:"radio",id:"Fill",name:"paintFill",value:"true",defaultChecked:c}),Object(n.jsx)("span",{children:t.Fill})]})]})}function D(e){var t=e.mensage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{mensage:t.Color}),Object(n.jsx)(L,{mensage:t.Size}),Object(n.jsx)(M,{mensage:t.PaintFill})]})}function q(e){var t=e.mensage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{mensage:t.Color}),Object(n.jsx)(L,{mensage:t.Size}),Object(n.jsx)(M,{mensage:t.PaintFill})]})}function V(e){var t=e.mensage,a=function(){var e=Object(r.useContext)(p);return{text:e.text,setText:e.setText}}(),c=a.text,i=a.setText;return Object(n.jsxs)("label",{htmlFor:"text",title:t.Title,children:[Object(n.jsxs)("span",{className:"mensage",children:[t.Label,":"]}),Object(n.jsx)("input",{id:"text",type:"text",value:c,onChange:function(e){return i(e.target.value)}})]})}function G(e){var t=e.mensage,a=function(){var e=Object(r.useContext)(p);return{fontFamily:e.fontFamily,setFontFamily:e.setFontFamily}}(),c=a.fontFamily,i=a.setFontFamily;return Object(n.jsxs)("label",{htmlFor:"square",children:[t.Label,":",Object(n.jsxs)("select",{id:"format",name:"format",title:t.Title,checked:c,value:c,onChange:function(e){return i(e.target.value)},children:[Object(n.jsx)("option",{value:"Arial",children:"Arial"}),Object(n.jsx)("option",{value:"Serif",children:"Serif"}),Object(n.jsx)("option",{value:"Times",children:"Times"}),Object(n.jsx)("option",{value:"Monospace",children:"monospace"})]})]})}function U(e){var t=e.mensage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(V,{mensage:t.Text}),Object(n.jsx)(A,{mensage:t.Color}),Object(n.jsx)(L,{mensage:t.Size}),Object(n.jsx)(G,{mensage:t.FontFamily})]})}a(23);function Q(){var e=O().brush,t=g().translation,a=Object(r.useState)(t),c=Object(l.a)(a,2),i=c[0],o=c[1];Object(r.useEffect)((function(){o(t)}),[t]);var s=Object(r.useState)(!0),u=Object(l.a)(s,2),j=u[0],b=u[1];return Object(n.jsxs)("aside",{className:"ToolBoxContainer",children:[Object(n.jsxs)("div",{className:"ToolBoxHeader",children:[Object(n.jsx)("h2",{children:i.Brushes[e]}),Object(n.jsx)(P,{visible:j,setVisible:b})]}),Object(n.jsxs)("div",{className:"ToolBoxMain",style:j?{display:"flex"}:{display:"none"},children:["Pencil"===e&&Object(n.jsx)(z,{mensage:i.ToolBox}),"Eraser"===e&&Object(n.jsx)(N,{mensage:i.ToolBox}),"PaintBucket"===e&&Object(n.jsx)(R,{mensage:i.ToolBox}),"ColorPicker"===e&&Object(n.jsx)(W,{}),"Line"===e&&Object(n.jsx)(H,{mensage:i.ToolBox}),"Rectangle"===e&&Object(n.jsx)(D,{mensage:i.ToolBox}),"Circle"===e&&Object(n.jsx)(q,{mensage:i.ToolBox}),"Text"===e&&Object(n.jsx)(U,{mensage:i.ToolBox})]})]})}function X(e){var t=e.ctx,a=e.actual,n=e.size,r=(e.color,e.format);if(t.beginPath(t),"Square"===r)t.rect(a.x,a.y,n,n);else{var c=n/2;t.arc(a.x+c,a.y+c,c,0,2*Math.PI,!1)}t.fill()}var Y=a(9),J=a(6),K=a.n(J);function Z(e){return(e=String(e).toLowerCase()).includes("#")||(e.includes("rgb")?(e=e.replace("rgb","").replace("(","").replace(")","").replace(" ","").split(","),e="#"+K.a.rgb.hex(e)):e.includes("hsl")?(e=e.replace("hsl","").replace("(","").replace(")","").replace(" ","").split(","),e="#"+K.a.hsl.hex(e)):console.log("Fail!!")),e}function _(e,t,a,n){var r=parseInt(a.x),c=parseInt(a.y),i=n.color,o=n.colorTolerance,l=Z(i);if(t.fillStyle=l,r&&c&&l&&o){var s=t.getImageData(0,0,e.width,e.height),u=new Y.a(s);u.fill(l,r,c,o),t.putImageData(u.imageData,0,0)}}var $=a(12),ee=a(10),te=a.n(ee);function ae(e,t,a){var n=a.colorsPicked,r=a.setColorsPicked,c=function(e,t,a){return Z(te()(e,t,a).rgb)}(e,t.x,t.y);r([].concat(Object($.a)(n),[c]))}var ne={},re={},ce=null,ie=null,oe=null,le=null,se=null;function ue(e,t,a,n){re={},ce=null,le=null,oe=e,ne=a,se=t,ie=n,function(){var e=oe,t=e.width,a=e.height,n=oe.getBoundingClientRect(),r=n.top,c=n.left;(ce=document.createElement("canvas")).width=t,ce.height=a,ce.style.position="fixed",ce.style.top=r+"px",ce.style.left=c+"px",ce.style.zIndex=100,ce.style.background="none",le=ce.getContext("2d"),document.body.appendChild(ce),ce.addEventListener("mousemove",(function(e){var t=oe,a=t.width,n=t.height;le.clearRect(0,0,a,n),je(e),be(le)})),ce.addEventListener("mouseup",(function(e){je(e),be(se),ce.remove()}))}()}function je(e){var t=ce.getBoundingClientRect(),a=t.top,n=t.left,r=e.clientX-n,c=e.clientY-a;re={x:r,y:c}}function be(e){switch(ie.brush){case"Line":!function(e){var t=ie,a=t.color,n=t.size;e.beginPath(),e.strokeStyle=a,e.lineWidth=n,e.moveTo(ne.x,ne.y),e.lineTo(re.x,re.y),e.stroke()}(e);break;case"Rectangle":!function(e){var t=ie,a=t.color,n=t.size,r=t.paintFill;re.x-=ne.x,re.y-=ne.y,r?(e.fillStyle=a,e.lineWidth=0,e.fillRect(ne.x,ne.y,re.x,re.y)):(e.beginPath(),e.strokeStyle=a,e.lineWidth=n,e.rect(ne.x,ne.y,re.x,re.y),e.stroke())}(e);break;case"Circle":!function(e){var t=ie,a=t.color,n=t.size,r=t.paintFill;re.x-=ne.x,re.y-=ne.y;var c=ne.x-re.x,i=ne.y-re.y,o=c<i?c:i,l=o>1?o:1;r?(e.beginPath(),e.fillStyle=a,e.lineWidth=0,e.arc(ne.x,ne.y,l,0,2*Math.PI),e.fill()):(e.beginPath(),e.strokeStyle=a,e.lineWidth=n,e.arc(ne.x,ne.y,l,0,2*Math.PI),e.stroke())}(e)}}a(32);function de(){var e=h(),t=e.canvasWidth,a=e.canvasHeight,c=function(){var e=Object(r.useContext)(p);return{brush:e.brush,color:e.color,size:e.size,format:e.format,colorsPicked:e.colorsPicked,colorTolerance:e.colorTolerance,paintFill:e.paintFill,text:e.text,fontFamily:e.fontFamily}}(),i=c.brush,o=c.color,s=c.size,u=c.format,j=c.colorTolerance,b=c.paintFill,d=c.text,g=c.fontFamily,x=C(),f=x.colorsPicked,O=x.setColorsPicked,v=Object(r.useRef)(null),T=function(){var e=Object(r.useContext)(m);return{canvas:e.canvas,setCanvas:e.setCanvas}}(),S=T.canvas,y=T.setCanvas,F=function(){var e=Object(r.useContext)(m);return{ctx:e.ctx,setCtx:e.setCtx}}(),P=F.ctx,k=F.setCtx;Object(r.useEffect)((function(){var e=v.current,t=e.getContext("2d");y(e),k(t),e&&t&&function(e,t){_(e,t,{x:1,y:1},{color:"#ffffff",colorTolerance:j})}(e,t)}),[]);var A=Object(r.useState)(!1),L=Object(l.a)(A,2),B=L[0],z=L[1],w=Object(r.useState)(null),N=Object(l.a)(w,2),E=N[0],R=N[1],I=Object(r.useState)(null),W=Object(l.a)(I,2),H=W[0],M=W[1],D=Object(r.useState)(null),q=Object(l.a)(D,2),V=q[0],G=q[1],U=Object(r.useState)(null),Q=Object(l.a)(U,2),Y=Q[0],J=Q[1],K=Object(r.useState)(null),Z=Object(l.a)(K,2),$=Z[0],ee=Z[1],te=Object(r.useState)(null),ne=Object(l.a)(te,2),re=ne[0],ce=ne[1];function ie(e){var t=S.getBoundingClientRect(),a=t.top,n=t.left,r=e.clientX-n,c=e.clientY-a;$&&re||!B||(ee(r),ce(c)),R(V),M(Y),G(r),J(c)}function oe(){z(!1),R(null),M(null),G(null),J(null),ee(null),ce(null)}return Object(r.useEffect)((function(){V&&Y&&function(e){switch(i){case"Pencil":!function(e,t,a){t.last;var n=t.actual,r=a.color,c=a.size,i=a.format;e.fillStyle=r,X({ctx:e,actual:n,size:c,format:i})}(P,e,{color:o,size:s,format:u});break;case"Eraser":!function(e,t,a){var n=t.x,r=t.y;e.clearRect(n,r,a,a)}(P,e.actual,s);break;case"PaintBucket":_(S,P,e.real,{color:o,colorTolerance:j});break;case"ColorPicker":ae(S,e.real,{colorsPicked:f,setColorsPicked:O});break;case"Line":B&&ue(S,P,e.start,{color:o,size:s,brush:i});break;case"Rectangle":case"Circle":B&&ue(S,P,e.start,{color:o,size:s,paintFill:b,brush:i});break;case"Text":!function(e,t,a){var n=t.x,r=t.y,c=a.color,i=a.size,o=a.text,l=a.fontFamily;e.font="".concat(i,"px ").concat(l),e.fillStyle=c,e.fillText(o,n,r)}(P,e.real,{color:o,size:s,text:d,fontFamily:g})}}({last:{x:E,y:H},actual:{x:V-s/2,y:Y-s/2},real:{x:V,y:Y},start:{x:$,y:re}})}),[V,Y]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("canvas",{width:t,height:a,ref:v,onClick:function(e){return ie(e)},onMouseDown:function(){return z(!0)},onMouseUp:oe,onMouseOut:oe,onMouseMove:function(e){return B&&ie(e)}})})}a(33);function ge(){return Object(n.jsxs)("main",{children:[Object(n.jsx)(F,{}),Object(n.jsx)(k,{}),Object(n.jsx)(Q,{}),Object(n.jsx)(de,{})]})}var me=a(11);a(34);function xe(){var e=g().translation,t=d().setModalTitle,a=h(),c=a.canvasWidth,i=a.canvasHeight,o=Object(r.useState)(e.Footer),s=Object(l.a)(o,2),u=s[0],j=s[1];return Object(r.useEffect)((function(){j(e.Footer)}),[e]),Object(n.jsxs)("footer",{children:[Object(n.jsxs)("h3",{children:["Rupestre \u2192 ",me.version]}),Object(n.jsxs)("p",{children:[Object(n.jsxs)("span",{title:u.Width,children:[c,"px"]}),Object(n.jsx)("span",{children:"X"}),Object(n.jsxs)("span",{title:u.Height,children:[i,"px"]})]}),Object(n.jsx)("button",{onClick:function(){return t("Settings")},children:Object(n.jsx)("img",{src:S.Settings,alt:u.Settings,title:u.Settings})})]})}a(35),a(36);function he(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(j,{children:Object(n.jsx)(x,{children:Object(n.jsxs)(f,{children:[Object(n.jsx)(T,{}),Object(n.jsx)(ge,{}),Object(n.jsx)(xe,{})]})})})})}o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(he,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.5d779bd4.chunk.js.map