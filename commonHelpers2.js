import"./assets/style-db4cc085.js";const a=document.querySelector(".feedback-form"),o="feedback-form-state";a.addEventListener("input",t=>{const e=a.elements.email.value.trim(),s=a.elements.message.value.trim();r(o,{email:e,message:s})});a.addEventListener("submit",t=>{t.preventDefault();const{email:e,message:s}=n(o)||{};e&&s&&(console.log({email:e,message:s}),localStorage.removeItem(o),a.reset())});function r(t,e){const s=JSON.stringify(e);localStorage.setItem(t,s)}function n(t="empty"){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}function m(){const{email:t,message:e}=n(o)||{};a.elements.email.value=t||"",a.elements.message.value=e||""}m();
//# sourceMappingURL=commonHelpers2.js.map