(this["webpackJsonpreact-news"]=this["webpackJsonpreact-news"]||[]).push([[0],{27:function(n,t,e){"use strict";e.r(t);var r=e(2),i=e(0),o=e.n(i),c=e(9),a=e.n(c),u=e(7),l=e(3),s={global:{BorderRadius:{none:"0px",sm:"8px",md:"16px",lg:"24px",pill:"500px",circular:"50%"},BorderWidth:{none:"0px",hairline:"1px",thin:"2px",thick:"4px",heavy:"8px"},FontSize:{xxxs:"12px",xxs:"14px",xs:"18px",sm:"20px",md:"24px",lg:"32px",xl:"40px",xxl:"48px",xxxl:"64px",display:"80px",giant:"96px"},LineHeight:{tight:"100%",medium:"110%",distant:"150%",superDistant:"200%"},OpacityLevel:{semiopaque:"0.80",intense:"0.64",medium:"0.32",light:"0.16",semitransparent:"0.08"},ShadowLevel:[{b:8,x:0,y:4},{b:24,x:0,y:8},{b:32,x:0,y:16},{b:48,x:0,y:16}],SpacingStack:{quarck:"4px",nano:"8px",xxxs:"16px",xxs:"24px",xs:"32px",sm:"40px",md:"48px",lg:"56px",xl:"64px",xxl:"80px",xxxl:"120px",huge:"160px",giant:"200px"},SpacingInset:{quarck:"4px",nano:"8px",xs:"16px",sm:"24px",md:"32px",lg:"40px"},SpacingSquish:{quarck:"4px 8px",nano:"8px 16px",xs:"16px 24px",sm:"16px 32px"},SpacingInline:{quarck:"4px",nano:"8px",xxxs:"16px",xxs:"24px",xs:"32px",sm:"40px",md:"48px",lg:"64px",xl:"80px"}},brand:{FontFamily:{highlight:"'Archivo',sans-serif"},FontWeight:{bold:"700",medium:"600",regular:"400"},Color:{primary:["#691C07","#8F260A","#F04E23","#FBD1C6","#FEF0EC"],neutral:["#000000","#70747B","#A6AAAF","#E4E5E7","#FFFFFF"]}}},x=Object(u.b)({key:"@NEWS_STATES",default:{status:"ok",totalResult:0,articles:[]},effects_UNSTABLE:[function(n){var t=n.setSelf;fetch("".concat("http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-news",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GNEWS)).then((function(n){return n.json()})).then((function(n){return t(n)}))}]}),h=e(4);function m(){var n=Object(h.a)(["\n  margin: 0;\n  ","\n"]);return m=function(){return n},n}function p(){var n=Object(h.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n"]);return p=function(){return n},n}var d=Object(l.b)(p(),(function(n){return n.theme.global.FontSize.lg}),(function(n){return n.theme.global.LineHeight.distant}),(function(n){return n.theme.brand.FontFamily.highlight}),(function(n){return n.theme.brand.FontWeight.bold}),(function(n){return n.theme.brand.Color.neutral[0]})),f=l.c.h1(m(),(function(n){return"small"===n.size&&d})),b=function(n){var t=n.className,e=n.children;return Object(r.jsx)(f,{className:t,size:"small",children:e})};function g(){var n=Object(h.a)(["\n  margin: 0;\n  ","\n"]);return g=function(){return n},n}function j(){var n=Object(h.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n"]);return j=function(){return n},n}var O=Object(l.b)(j(),(function(n){return n.theme.global.FontSize.md}),(function(n){return n.theme.global.LineHeight.medium}),(function(n){return n.theme.brand.FontFamily.highlight}),(function(n){return n.theme.brand.FontWeight.medium}),(function(n){return n.theme.brand.Color.neutral[1]})),v=l.c.h3(g(),(function(n){return"small"===n.size&&O})),S=function(n){var t=n.className,e=n.children;return Object(r.jsx)(v,{className:t,size:"small",children:e})};function y(){var n=Object(h.a)(["\n  margin: 0;\n  font-size: ",";\n  line-height: ",";\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n"]);return y=function(){return n},n}var F=l.c.p(y(),(function(n){return n.theme.global.FontSize.xs}),(function(n){return n.theme.global.LineHeight.distant}),(function(n){return n.theme.brand.FontFamily.highlight}),(function(n){return n.theme.brand.FontWeight.regular}),(function(n){return n.theme.brand.Color.neutral[1]})),k=function(n){var t=n.className,e=n.children;return Object(r.jsx)(F,{className:t,children:e})};function C(){var n=Object(h.a)(["\n  border-style: solid;\n  border-radius: ",";\n  padding: ",";\n  border-width: ",";\n  border-color: ",";\n  background-color: ",";\n"]);return C=function(){return n},n}var E=l.c.article(C(),(function(n){return n.theme.global.BorderRadius.none}),(function(n){return n.theme.global.SpacingInset.lg}),(function(n){return n.theme.global.BorderWidth.thin}),(function(n){return n.theme.brand.Color.neutral[3]}),(function(n){return n.theme.brand.Color.neutral[4]})),w=function(n){var t=n.className,e=n.children;return Object(r.jsx)(E,{className:t,"data-testid":"article",role:"article",children:e})},N=e(1);function A(){var n=Object(h.a)(["\n  appearance: none;\n  border: none;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  ","\n"]);return A=function(){return n},n}function _(){var n=Object(h.a)(["\n  font-size: ",";\n  line-height: ",";\n  border-radius: ",";\n  padding: ",";\n\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n  background-color: ",';\n\n  &[aria-pressed="true"] {\n    background-color: ',";\n  }\n"]);return _=function(){return n},n}var z=Object(l.b)(_(),(function(n){return n.theme.global.FontSize.sm}),(function(n){return n.theme.global.LineHeight.tight}),(function(n){return n.theme.global.BorderRadius.none}),(function(n){return n.theme.global.SpacingSquish.xs}),(function(n){return n.theme.brand.FontFamily.highlight}),(function(n){return n.theme.brand.FontWeight.medium}),(function(n){return n.theme.brand.Color.neutral[4]}),(function(n){return n.theme.brand.Color.primary[2]}),(function(n){return n.theme.brand.Color.primary[1]})),L=l.c.button(A(),(function(n){return n.primary&&z})),T=function(n){var t=n.buttonType,e=void 0===t?"button":t,o=n.type,c=void 0===o?"primary":o,a=n.children,u=n.className,l=n.onClick,s=Object(i.useState)(!1),x=Object(N.a)(s,2),h=x[0],m=x[1];return Object(r.jsx)(L,{onClick:l,className:u,type:e,primary:"primary"===c,"data-color":c,"aria-pressed":h,onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:a})};function W(){var n=Object(h.a)(["\n  && {\n    margin-top: auto;\n  }\n"]);return W=function(){return n},n}function B(){var n=Object(h.a)(["\n  && {\n    margin-bottom: ",";\n  }\n"]);return B=function(){return n},n}function R(){var n=Object(h.a)(["\n  && {\n    margin-bottom: ",";\n  }\n"]);return R=function(){return n},n}function H(){var n=Object(h.a)(["\n  && {\n    margin-bottom: ",";\n  }\n"]);return H=function(){return n},n}function q(){var n=Object(h.a)(["\n  && {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n"]);return q=function(){return n},n}var D=Object(l.c)(w)(q()),I=Object(l.c)(b)(H(),(function(n){return n.theme.global.SpacingStack.xxxs})),P=Object(l.c)(S)(R(),(function(n){return n.theme.global.SpacingStack.xxs})),K=Object(l.c)(k)(B(),(function(n){return n.theme.global.SpacingStack.sm})),M=Object(l.c)(T)(W()),U=function(n){var t=n.article,e=n.onActions;return Object(r.jsxs)(D,{children:[Object(r.jsx)(I,{children:t.title}),Object(r.jsx)(P,{children:t.description}),Object(r.jsx)(K,{children:t.content}),Object(r.jsx)(M,{onClick:function(){"function"===typeof e&&e(t)},children:"Ver mais"})]})};function J(){var n=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: ",";\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (min-width: 1440px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]);return J=function(){return n},n}var V=l.c.div(J(),(function(n){return n.theme.global.SpacingInline.xs})),G=function(){var n=Object(u.c)(x),t=function(n){window.open(n.url,"_blank")};return Object(r.jsx)(V,{children:n.articles.map((function(n){return Object(r.jsx)(U,{article:n,onActions:t},"".concat(n.source.name,"-").concat(n.source.id))}))})},Q=function(){return Object(r.jsx)(u.a,{children:Object(r.jsx)(o.a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(l.a,{theme:s,children:Object(r.jsx)(G,{})})})})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.63e695d7.chunk.js.map