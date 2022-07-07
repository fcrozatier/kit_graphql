import{S as k,i as A,s as B,e as m,t as O,k as C,c as _,a as v,h as G,d as s,m as N,b as g,g as E,J as c,K as U,L as $,M as H,N as M,n as w,O as I,P as J}from"../chunks/index-9c74b31a.js";function R(o){let l,p,h,e,a,b,n,y,r,f,u,d,T,L;return{c(){l=m("h1"),p=O("Graphql fetch anilist api"),h=C(),e=m("form"),a=m("label"),b=O(`Select Character id
    `),n=m("input"),y=C(),r=m("button"),f=O("Grab data"),u=C(),d=m("output"),this.h()},l(t){l=_(t,"H1",{});var i=v(l);p=G(i,"Graphql fetch anilist api"),i.forEach(s),h=N(t),e=_(t,"FORM",{});var S=v(e);a=_(S,"LABEL",{});var q=v(a);b=G(q,`Select Character id
    `),n=_(q,"INPUT",{type:!0,name:!0}),q.forEach(s),y=N(S),r=_(S,"BUTTON",{type:!0});var P=v(r);f=G(P,"Grab data"),P.forEach(s),S.forEach(s),u=N(t),d=_(t,"OUTPUT",{}),v(d).forEach(s),this.h()},h(){g(n,"type","number"),g(n,"name","char_id"),g(r,"type","submit")},m(t,i){E(t,l,i),c(l,p),E(t,h,i),E(t,e,i),c(e,a),c(a,b),c(a,n),U(n,o[0]),c(e,y),c(e,r),c(r,f),E(t,u,i),E(t,d,i),o[4](d),T||(L=[$(n,"input",o[3]),$(e,"submit",H(o[2]))],T=!0)},p(t,[i]){i&1&&M(n.value)!==t[0]&&U(n,t[0])},i:w,o:w,d(t){t&&s(l),t&&s(h),t&&s(e),t&&s(u),t&&s(d),o[4](null),T=!1,I(L)}}}function j(o,l,p){const h=`query ($id: Int) {
  Character(id: $id){
    name {
      full
    }
    description
    gender
    age
  }
}
`;let e=1,a;async function b(r){try{const f=await fetch("/graphql",{method:"POST",body:JSON.stringify({query:h,variables:{id:e}})}),{Character:u}=await f.json();p(1,a.innerHTML=`
      <p>Name: ${u.name.full}</p>
      <p>Age: ${u.age}</p>
      <p>Gender: ${u.gender}</p>
      <p>Description: ${u.description}</p>
      `,a)}catch(f){console.error("Error while fetching",f)}}function n(){e=M(this.value),p(0,e)}function y(r){J[r?"unshift":"push"](()=>{a=r,p(1,a)})}return[e,a,b,n,y]}class F extends k{constructor(l){super(),A(this,l,j,R,B,{})}}export{F as default};
