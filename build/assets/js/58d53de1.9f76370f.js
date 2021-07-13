(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[39698],{87746:function(t,n,i){"use strict";i.r(n),i.d(n,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var e=i(22122),l=i(19756),o=(i(67294),i(3905)),a={title:"init",sidebar_label:"init"},p={unversionedId:"cli/commands/init",id:"cli/commands/init",isDocsHomePage:!1,title:"ionic init",description:"Initialize existing projects with Ionic",source:"@site/docs/cli/commands/init.md",sourceDirName:"cli/commands",slug:"/cli/commands/init",permalink:"/docs/cli/commands/init",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/cli/commands/init.md",version:"current",sidebar_label:"init",frontMatter:{title:"init",sidebar_label:"init"},sidebar:"cli",previous:{title:"ionic info",permalink:"/docs/cli/commands/info"},next:{title:"ionic integrations disable",permalink:"/docs/cli/commands/integrations-disable"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Options",id:"options",children:[]},{value:"Advanced Options",id:"advanced-options",children:[]}],r={toc:c};function u(t){var n=t.components,i=(0,l.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,e.Z)({},r,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Initialize existing projects with Ionic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic init [options]\n")),(0,o.kt)("p",null,"This command will initialize an Ionic app within the current directory. Usually, this means an ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic.config.json")," file is created. If used within a multi-app project, the app is initialized in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic.config.json"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ionic init")," will prompt for a project name and then proceed to determine the type of your project. You can specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," argument and ",(0,o.kt)("inlineCode",{parentName:"p"},"--type")," option to provide these values via command-line."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"--multi-app")," flag is specified, this command will initialize your project as a multi-app project, allowing for apps within monorepos and unconventional repository structures. See the multi-app ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/configuration#multi-app-projects"},"docs")," for details. Once a multi-app project is initialized, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic init")," again within apps in your project to initialize them."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic init \n$ ionic init "My App"\n$ ionic init "My App" --type=angular\n$ ionic init --multi-app\n')),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,"name")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"The name of your project (e.g. ",(0,o.kt)("code",null,"myApp"),", ",(0,o.kt)("code",null,'"My App"'),")"))))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-type",id:"option-type"},"--type",(0,o.kt)("span",{class:"option-spec"}," =<type>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Type of project (e.g. ",(0,o.kt)("code",null,"angular"),", ",(0,o.kt)("code",null,"react"),", ",(0,o.kt)("code",null,"vue"),", ",(0,o.kt)("code",null,"custom"),")")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-force",id:"option-force"},"--force"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Initialize even if a project already exists"))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-f")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-multi-app",id:"option-multi-app"},"--multi-app"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Initialize a multi-app project"))))),(0,o.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-project-id",id:"option-project-id"},"--project-id",(0,o.kt)("span",{class:"option-spec"}," =<slug>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Specify a slug for your app"))))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-default",id:"option-default"},"--default"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Mark the initialized app as the default project")))))))}u.isMDXComponent=!0}}]);