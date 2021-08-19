"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[5323],{3905:function(e,n,o){o.d(n,{Zo:function(){return s},kt:function(){return u}});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),p=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(o),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return o?t.createElement(f,a(a({ref:n},s),{},{components:o})):t.createElement(f,a({ref:n},s))}));function u(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1449:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={sidebar_position:2},c={unversionedId:"commands/deploying-projects",id:"version-1.6.0/commands/deploying-projects",isDocsHomePage:!1,title:"Deploying Projects",description:"The tool allows for deploying a configuration or a set of configurations in the form of project(s). A project is a folder containing files that define configurations to be deployed to a environment or a group of environments. This is done by passing the --project flag (or -p for short).",source:"@site/versioned_docs/version-1.6.0/commands/deploying-projects.md",sourceDirName:"commands",slug:"/commands/deploying-projects",permalink:"/dynatrace-monitoring-as-code/commands/deploying-projects",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.6.0/commands/deploying-projects.md",version:"1.6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-1.6.0/tutorialSidebar",previous:{title:"Validating Configuration",permalink:"/dynatrace-monitoring-as-code/commands/validating-configuration"},next:{title:"Experimental New CLI",permalink:"/dynatrace-monitoring-as-code/commands/experimental-new-cli"}},p=[{value:"Running The Tool",id:"running-the-tool",children:[]}],s={toc:p};function d(e){var n=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The tool allows for deploying a configuration or a set of configurations in the form of project(s). A project is a folder containing files that define configurations to be deployed to a environment or a group of environments. This is done by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--project")," flag (or ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," for short)."),(0,i.kt)("h2",{id:"running-the-tool"},"Running The Tool"),(0,i.kt)("p",null,"Below you find a few samples on how to run the tool to deploy your configurations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="shell"',title:'"shell"'},'$ monaco -e=environments.yaml (deploy all projects in the current folder to all environments)\n\n$ monaco -e=environments.yaml -p="project" projects-root-folder (deploy projects-root-folder/project and any projects in projects-root-folder it depends on to all environments)\n\n$ monaco -e=environments.yaml -p="projectA, projectB" projects-root-folder (deploy projects-root-folder/projectA, projectB and dependencies to all environments)\n\n$ monaco -e=environments.yaml -se dev (deploy all projects in the current folder to the "dev" environment defined in environments.yaml)\n')),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"project")," contains additional sub-projects, then all projects are deployed recursively. If ",(0,i.kt)("inlineCode",{parentName:"p"},"project")," depends on different projects under the same root,\nthose are also deployed."),(0,i.kt)("p",null,"Multiple projects could be specified by ",(0,i.kt)("inlineCode",{parentName:"p"},'-p="projectA, projectB, projectC/subproject"'),"."),(0,i.kt)("p",null,"To deploy configuration the tool will need a valid API Token(s) for the given environments defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"environment variables")," - you can define the name of that env var in the environments file."),(0,i.kt)("p",null,"To deploy to 1 specific environment within a ",(0,i.kt)("inlineCode",{parentName:"p"},"environments.yaml")," file, the ",(0,i.kt)("inlineCode",{parentName:"p"},"-specific-environment")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-se")," flag can be passed:"),(0,i.kt)("p",null,"Add metadatas to customize the sidebar label and position:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="shell"',title:'"shell"'},'\n$ monaco -e=environments.yaml -se=my-environment -p="my-environment" cluster\n\n')))}d.isMDXComponent=!0}}]);