"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[154],{6154:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(9439),s="addContact_main_title__ISaX-",r="addContact_form__-QRua",c="addContact_name_input__2C3N3",i="addContact_add_btn__EqwQM",o=n(2791),l=n(9434),u=n(208),d=n(6916),m=function(e){return e.contacts.items},_=function(e){return e.filter.value},h=function(e){return e.contacts.isLoading},f=function(e){return e.contacts.error},p=(0,d.createSelector)([m,_],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),x=n(3329),j=function(){var e=(0,l.v9)(m),t=(0,o.useState)(""),n=(0,a.Z)(t,2),d=n[0],_=n[1],h=(0,o.useState)(""),f=(0,a.Z)(h,2),p=f[0],j=f[1],v=(0,l.I0)(),b=function(e){"name"===e.target.name&&_(e.target.value),"number"===e.target.name&&j(e.target.value)},N=(0,o.useId)(),C=(0,o.useId)();return(0,x.jsx)("div",{children:(0,x.jsxs)("form",{className:r,onSubmit:function(t){t.preventDefault(),e.find((function(e){return e.name.toLowerCase()===d.toLowerCase()}))?alert("".concat(d," is already in contacts")):(v((0,u.el)({name:d,number:p})),_(""),j(""))},children:[(0,x.jsxs)("label",{htmlFor:N,children:[(0,x.jsx)("h1",{className:s,children:"Name"}),(0,x.jsx)("input",{className:c,type:"text",name:"name",value:d,id:N,onChange:b,pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces.  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)("label",{htmlFor:C,children:[(0,x.jsx)("h1",{className:s,children:"Number"}),(0,x.jsx)("input",{className:c,type:"text",name:"number",value:p,onChange:b,id:C,pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"number number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})})},v="contacts_main__H2WAR",b="contacts_title__ryyzt",N="contacts_list__QBWBd",C="contacts_list_item__ScWpd",g="contacts_delete_btn__pdpZW",y="Notification_notification__SfISU",w=function(){return(0,x.jsx)("div",{children:(0,x.jsx)("h1",{className:y,children:"You don't have any contacts yet!!!"})})},F=function(){var e=(0,l.I0)(),t=(0,l.v9)(p),n=(0,l.v9)(_),a=function(t){e((0,u._f)(t.target.value))};return t.length>0?(0,x.jsx)("div",{className:v,children:(0,x.jsx)("ul",{className:N,children:t.filter((function(e){return e.name.includes(n)})).map((function(e){var t=e.name,n=e.id,s=e.number;return(0,x.jsxs)("li",{className:C,children:[t,": ",s,(0,x.jsx)("button",{type:"button",className:g,onClick:a,children:"Delete"})]},n)}))})}):(0,x.jsx)(w,{})},S=n(3377),A="filter_container__8MH92",I="filter_find_title__vblU4",Z="filter_find_input__L9SKS",k=function(){var e=(0,l.I0)();return(0,x.jsxs)("div",{className:A,children:[(0,x.jsx)("h2",{className:I,children:"Find contacts by name"}),(0,x.jsx)("input",{type:"text",className:Z,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:function(t){e((0,S.j)(t.target.value))}})]})},z=n(6716);var L=function(){var e=(0,l.I0)(),t=(0,l.v9)(h),n=(0,l.v9)(f);return(0,o.useEffect)((function(){e((0,u.yF)())}),[e]),(0,x.jsxs)("div",{className:"App",children:[(0,x.jsx)(j,{}),(0,x.jsx)("h1",{className:b,children:"Find contacts by name"}),(0,x.jsx)(k,{}),t&&!n&&(0,x.jsx)(z.Z,{}),(0,x.jsx)("h1",{className:"main_title",children:"Contacts"}),(0,x.jsx)(F,{})]})}}}]);
//# sourceMappingURL=154.ec9935c4.chunk.js.map