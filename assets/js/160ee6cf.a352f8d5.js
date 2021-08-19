"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[661],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=p(n),g=r,c=k["".concat(d,".").concat(g)]||k[g]||u[g]||i;return n?a.createElement(c,o(o({ref:e},m),{},{components:n})):a.createElement(c,o({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6754:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:7},d={unversionedId:"configuration/configTypes_tokenPermissions",id:"version-1.5.2/configuration/configTypes_tokenPermissions",isDocsHomePage:!1,title:"Configuration Types and Token Permissions",description:"These are the supported configuration types, their API endpoints and the token permissions required for interacting with any of endpoint.",source:"@site/versioned_docs/version-1.5.2/configuration/configTypes_tokenPermissions.md",sourceDirName:"configuration",slug:"/configuration/configTypes_tokenPermissions",permalink:"/dynatrace-monitoring-as-code/1.5.2/configuration/configTypes_tokenPermissions",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.5.2/configuration/configTypes_tokenPermissions.md",version:"1.5.2",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-1.5.2/tutorialSidebar",previous:{title:"Delete Configuration",permalink:"/dynatrace-monitoring-as-code/1.5.2/configuration/delete_config"}},p=[],m={toc:p};function u(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These are the supported configuration types, their API endpoints and the token permissions required for interacting with any of endpoint."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,i.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,i.kt)("th",{parentName:"tr",align:null},"Token Permission(s)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alerting-profile"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/alertingProfiles")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"anomaly-detection-metrics"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/metricEvents")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"app-detection-rule"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/applicationDetectionRules")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"application ",(0,i.kt)("strong",{parentName:"td"},"deprecated in 2.0.0!")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/applications/web")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"application-web ",(0,i.kt)("strong",{parentName:"td"},"replaces application")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/applications/web")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"application-mobile"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/applications/mobile")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"auto-tag"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/autoTags")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aws-credentials"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/aws/credentials")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"azure-credentials"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/azure/credentials")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"calculated-metrics-log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/calculatedMetrics/log")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"calculated-metrics-service"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/calculatedMetrics/service")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"conditional-naming-host"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/conditionalNaming/host")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"conditional-naming-processgroup"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/conditionalNaming/processGroup")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"conditional-naming-service"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/conditionalNaming/service")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"credential-vault"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/credentials")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Credential Vault Entries")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Credential Vault Entries"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"custom-service-java"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/java")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"custom-service-dotnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/dotnet")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"custom-service-go"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/go")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"custom-service-nodejs"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/nodejs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"custom-service-php"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/php")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dashboard"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/dashboards")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"extension"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/extensions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kubernetes-credentials"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/kubernetes/credentials")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maintenance-window"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/maintenanceWindows")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuratio"),"  & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"management-zone"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/managementZones")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/notifications")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"request-attributes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/service/requestAttributes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Capture request data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"request-naming-service"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/config/v1/service/requestNaming")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"slo"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/v2/slo")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read SLO")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Write SLOs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"synthetic-location"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/v1/synthetic/locations")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Access problem and event feed, metrics, and topology")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"Create and read synthetic monitors, locations, and nodes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"synthetic-monitor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"/api/v1/synthetic/monitors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Create and read synthetic monitors, locations, and nodes"))))),(0,i.kt)("p",null,"For reference, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.dynatrace.com/support/help/dynatrace-api/basics/dynatrace-api-authentication"},"this")," page for a detailed\ndescription to each token permission."))}u.isMDXComponent=!0}}]);