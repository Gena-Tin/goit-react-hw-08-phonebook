"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[648],{4648:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(9439),r=n(2791),s="ContactForm_btnAddContact__AepU1",c="ContactForm_nameInput__QSf3L",o="ContactForm_numberInput__fY5H2",i="ContactForm_form__dhl+T",u=n(9434),l=n(5562),m=n.n(l),d=n(826),f=function(e){return e.contacts.items},h=function(e){return e.filter},p=n(3329);function b(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],h=(0,r.useState)(""),b=(0,a.Z)(h,2),x=b[0],v=b[1],_=(0,u.v9)(f),j=(0,u.I0)(),g=function(e){switch(e.target.name){case"name":l(e.currentTarget.value);break;case"number":v(e.currentTarget.value);break;default:return}},C=function(){l(""),v("")};return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.name.value,a=t.elements.number.value;if(_.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return C(),m().Notify.info("".concat(n," is already in contacts"));j((0,d.uK)({name:n,number:a})),C()},className:i,children:[(0,p.jsxs)("label",{children:["Name",(0,p.jsx)("input",{className:c,value:n,onChange:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)("label",{children:["Number",(0,p.jsx)("input",{className:o,value:x,onChange:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{className:s,type:"submit",children:"Add contact"})]})}var x="ContactItem_contactItem__aUSMv",v="ContactItem_btnDelete__pqKqR";function _(e){var t=e.id,n=e.name,a=e.number,r=(0,u.I0)();return(0,p.jsxs)("li",{className:x,children:[(0,p.jsxs)("span",{children:[n," ",(0,p.jsx)("a",{href:"tel:".concat(a),children:a})]}),(0,p.jsx)("button",{className:v,type:"button",onClick:function(){return r((0,d.GK)(t))},children:"Delete"})]})}function j(){var e=(0,u.I0)(),t=(0,u.v9)(f);(0,r.useEffect)((function(){e((0,d.yF)())}),[e]);var n=(0,u.v9)(h),a=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,p.jsx)(p.Fragment,{children:t.length>0&&(0,p.jsx)("ul",{children:a.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,p.jsx)(_,{id:t,name:n,number:a},t)}))})})}var g="Filter_inputFilter__8QMOp",C=n(4808);function y(){var e=(0,u.v9)(h),t=(0,u.I0)();return(0,p.jsxs)("label",{children:["Find contact by name",(0,p.jsx)("input",{className:g,type:"text",value:e,onChange:function(e){return t((0,C.S)(e.target.value))}})]})}var w=n(8966),N=function(e){return(0,p.jsx)(w.g4,{height:"80",width:"80",radius:"9",color:"#75a7a7",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})},A={title:{color:"#fff3cc",marginBottom:20,fontSize:25,textAlign:"center"},subtitle:{color:"#ffffff",marginBottom:20,textAlign:"center"}};function F(){var e=(0,u.v9)((function(e){return e.contacts})),t=e.isLoading,n=e.error;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{style:A.title,children:"Phonebook"}),(0,p.jsx)(b,{}),(0,p.jsx)("h2",{style:A.subtitle,children:"Contacts"}),(0,p.jsx)(y,{}),t&&(0,p.jsx)(N,{}),n&&(0,p.jsxs)("h2",{children:["An error: ",n]}),(0,p.jsx)(j,{})]})}}}]);
//# sourceMappingURL=648.5b18b3ee.chunk.js.map