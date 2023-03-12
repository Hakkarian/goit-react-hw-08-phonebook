"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[272],{3323:function(n,e,t){t.d(e,{A:function(){return r}});var r=function(n){return n.filter}},6255:function(n,e,t){t.d(e,{DI:function(){return i},oy:function(){return a},xU:function(){return o}});var r=t(3323),a=function(n){var e;return null===(e=n.contacts)||void 0===e?void 0:e.contacts},o=function(n){return n.contacts.loading},i=function(n){var e=a(n),t=(0,r.A)(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase()!==t?n.name.toLowerCase().includes(t)||n.number.includes(t):console.log("NO")}))}},6593:function(n,e,t){t.d(e,{NR:function(){return f},p0:function(){return d}});var r,a,o,i=t(168),l=t(6088),u=t(7715),c=t(8029),s=t(4169),d=(0,l.default)(u.Z)(r||(r=(0,i.Z)(["\n  margin-bottom: 20px;\n  color: orange;\n  text-align: center;\n\n  &.MuiFormLabel-root {\n    color: orange;\n  }\n\n  .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {\n    color: orange;\n  }\n  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:hover:not(\n      .Mui-disabled,\n      .Mui-error\n    ):before {\n    border-bottom: 1px solid #000;\n  }\n  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:after {\n    border-bottom: 1px dashed orange;\n  }\n"]))),f=((0,l.default)(c.Z)(a||(a=(0,i.Z)(["\n\n"]))),(0,l.default)(s.Oh)(o||(o=(0,i.Z)(["\n    margin-top: 20px;\n"]))))},2127:function(n,e){e.Z={name:{label:"Name",name:"name",variant:"filled",type:"text",placeholder:"Enter name...",required:!0},email:{label:"Email",name:"email",variant:"filled",type:"email",placeholder:"Enter email...",required:!0},password:{label:"Password",name:"password",variant:"filled",type:"password",placeholder:"Enter password...",required:!0},contact:{label:"Contact",name:"name",variant:"filled",type:"text",placeholder:"Enter the contact...",required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},number:{label:"Number",name:"number",variant:"filled",type:"tel",placeholder:"Enter the number...",required:!0,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}}},6272:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,o,i=t(2791),l=t(7762),u=t(4942),c=t(1413),s=t(9439),d=(t(5828),t(168)),f=t(6088),p=t(4169),m=f.default.form(r||(r=(0,d.Z)(["\n  display: flex;\n  row-gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: 250px;\n  padding: 20px;\n\n  margin-top: 100px;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1;\n\n  background-color: #313131;\n\n  border-radius: 5px;\n\n  transition: box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    box-shadow: 1px 1px 1px 3px #292929;\n  }\n"]))),b=(f.default.label(a||(a=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    row-gap: 5px;\n    max-width: 300px;\n"]))),(0,f.default)(p.Oh)(o||(o=(0,d.Z)(["\n  &:hover,\n  &:focus {\n    background-color: green;\n  }\n"])))),h=t(9434),x=t(6255),g=t(5235),v=t(6593),w=t(2127),y=t(5218),Z=t(184),C=function(){var n=(0,h.v9)(x.oy),e=(0,h.I0)(),t=(0,i.useState)({name:"",number:""}),r=(0,s.Z)(t,2),a=r[0],o=r[1],d=a.name,f=a.number,C={name:d,number:f},j=function(n){return o((0,c.Z)((0,c.Z)({},a),{},(0,u.Z)({},n.target.name,n.target.value)))},k=function(){return o({name:"",number:""})};return(0,Z.jsx)(p.f1,{children:(0,Z.jsxs)(m,{onSubmit:function(t){t.preventDefault();var r,a=(0,l.Z)(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;if(console.log(o),o.name.toLowerCase()===d.toLowerCase())return void alert("".concat(o.name," is already in contacts"));if(o.number.toLowerCase()===f.toLowerCase())return void alert("".concat(o.number," is already in contacts"))}}catch(i){a.e(i)}finally{a.f()}console.log(C),e((0,g.xe)(C)),(0,y.Am)("A contact was created succefully!",{icon:"\u2714\ufe0f",style:{borderRadius:"10px",background:"black",color:"#fff"}}),k()},children:[(0,Z.jsx)(p.N0,{children:"Enter your contact"}),(0,Z.jsx)(v.p0,(0,c.Z)((0,c.Z)({},w.Z.contact),{},{onChange:j,value:d})),(0,Z.jsx)(v.p0,(0,c.Z)((0,c.Z)({},w.Z.number),{},{pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:j,value:f})),(0,Z.jsx)(b,{type:"submit",children:"Add to contact"})]})})},j=t(3323),k=t(6425),A=function(){var n=(0,h.v9)(j.A),e=(0,h.I0)();return(0,Z.jsx)(v.p0,{variant:"filled",label:"Filter",type:"text",value:n,onChange:function(n){return e(k.F.actions.settedFilter(n.target.value))},placeholder:"Type to find..."})},M=(0,i.lazy)((function(){return t.e(664).then(t.bind(t,3664))})),L=function(){return(0,Z.jsxs)(p.Rc,{children:[(0,Z.jsx)(C,{}),(0,Z.jsx)("h2",{children:"Contacts"}),(0,Z.jsx)(A,{}),(0,Z.jsx)(M,{})]})}}}]);
//# sourceMappingURL=272.db4b2189.chunk.js.map