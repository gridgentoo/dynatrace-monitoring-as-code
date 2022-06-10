"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[5756],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2:function(e,n,t){t.r(n),t.d(n,{default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:3},l={unversionedId:"commands/experimental-new-cli",id:"commands/experimental-new-cli",isDocsHomePage:!1,title:"Experimental New CLI",description:"Monaco version 1.2.0+ includes the Beta version of the new CLI that is planned for a future release.",source:"@site/docs/commands/experimental-new-cli.md",sourceDirName:"commands",slug:"/commands/experimental-new-cli",permalink:"/dynatrace-monitoring-as-code/next/commands/experimental-new-cli",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/docs/commands/experimental-new-cli.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploy projects",permalink:"/dynatrace-monitoring-as-code/next/commands/deploying-projects"},next:{title:"Download configuration",permalink:"/dynatrace-monitoring-as-code/next/commands/downloading-configuration"}},s=[{value:"Deploy",id:"deploy",children:[]},{value:"Download",id:"download",children:[]}],d={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Monaco version 1.2.0+ includes the Beta version of the new CLI that is planned for a future release.\nThe new CLI is based around commands rather than being flag based.\nCurrently, the following commands are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"deploy"),(0,a.kt)("li",{parentName:"ul"},"download")),(0,a.kt)("p",null,"To activate the new experimental CLI, set an the env variable NEW_CLI to 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="shell"',title:'"shell"'},"\n NEW_CLI=1 monaco\n\n")),(0,a.kt)("h3",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"This command is basically doing what the old tool did. It is used to deploy a specified config to a Dynatrace environment. The flags to things like the environments files are mostly the same. Read more about it here: ",(0,a.kt)("a",{parentName:"p",href:"/dynatrace-monitoring-as-code/next/commands/deploying-projects"},"Deploy projects")),(0,a.kt)("h3",{id:"download"},"Download"),(0,a.kt)("p",null,"This command allows you to download the configuration from a Dynatrace tenant as Monaco files. Use this command to avoid starting from scratch when using Monaco. Read more about it here: ",(0,a.kt)("a",{parentName:"p",href:"/dynatrace-monitoring-as-code/next/commands/downloading-configuration"},"Download configuration")))}m.isMDXComponent=!0}}]);