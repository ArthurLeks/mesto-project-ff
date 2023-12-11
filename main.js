/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-1",headers:{authorization:"e97cd106-a556-4c5e-8436-23b6ca9a55f6","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(n,o){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{headers:e.headers,method:"DELETE"}).then(t)})(n).then((function(e){o.remove()})).catch((function(e){console.log(e)}))}function o(n,o){var c=o.closest(".places__item").querySelector(".card__like-counter");o.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{headers:e.headers,method:"DELETE"}).then(t)}(n).then((function(e){o.classList.toggle("card__like-button_is-active"),r(c,e)})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{headers:e.headers,method:"PUT"}).then(t)}(n).then((function(e){o.classList.toggle("card__like-button_is-active"),r(c,e)})).catch((function(e){console.log(e)}))}function r(e,t){e.textContent=t.likes.length>0?t.likes.length:""}function c(e,t){var n=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0);n.querySelector(".card__title").textContent=e.card.name;var o=n.querySelector(".card__image");o.setAttribute("src",e.card.link),o.setAttribute("alt",e.card.name),o.addEventListener("click",e.handleImageClick);var c=n.querySelector(".card__delete-button");e.card.owner._id==t._id&&c.addEventListener("click",(function(){return e.deleteCard(e.card._id,n)}));var a=n.querySelector(".card__like-button");return a.addEventListener("click",(function(){return e.likeCard(e.card._id,a)})),r(n.querySelector(".card__like-counter"),e.card),e.card.likes.some((function(e){return e._id==t._id}))&&a.classList.toggle("card__like-button_is-active"),n}var a=document.forms["edit-profile"],i=document.forms["new-place"],u=document.forms["edit-avatar"],l=document.querySelector(".profile__image"),s=document.querySelector(".profile__title"),d=document.querySelector(".profile__description"),p=document.querySelector(".places__list"),f=document.querySelector(".popup_type_image"),m=document.querySelector(".popup__image"),v=document.querySelector(".popup__caption"),_=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup_type_new-card"),y=document.querySelector(".popup_type_edit-avatar");function b(e){e.classList.add("popup_is-opened"),document.addEventListener("keyup",C)}function S(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keyup",C)}function C(e){"Escape"===e.key&&S(document.querySelector(".popup_is-opened"))}function g(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)}function k(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}function q(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var L,x,B,A=[{openBtn:document.querySelector(".profile__edit-button"),popupWnd:_,openCallBack:function(){a.name.value=s.textContent,a.description.value=d.textContent}},{openBtn:document.querySelector(".profile__add-button"),popupWnd:h,openCallBack:function(){}},{openBtn:document.querySelector(".profile__image"),popupWnd:y,openCallBack:function(){}}],U=[{form:a,popupWnd:_,closeCallBack:function(n){var o,r,c=a.name,i=a.description;a.save.textContent="Сохранение...",(o=c.value,r=i.value,fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers,method:"PATCH",body:JSON.stringify({name:o,about:r})}).then(t)).then((function(e){s.textContent=c.value,d.textContent=i.value,n()})).catch((function(e){console.log(e)})).finally((function(){a.save.textContent="Сохранить"}))}},{form:i,popupWnd:h,closeCallBack:function(n){var o=i["place-name"].value,r=i.link.value;i.save.textContent="Сохранение...",function(n,o){return fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n,link:o})}).then(t)}(o,r).then((function(e){var t=c(O(e),L);p.prepend(t),i["place-name"].value="",i.link.value="",n()})).catch((function(e){console.log(e)})).finally((function(){i.save.textContent="Создать"}))}},{form:u,popupWnd:y,closeCallBack:function(n){var o=u.link.value;u.save.textContent="Сохранение...",function(n){return fetch("".concat(e.baseUrl,"/users/me/avatar"),{headers:e.headers,method:"PATCH",body:JSON.stringify({avatar:n})}).then(t)}(o).then((function(e){l.style.backgroundImage="url(".concat(e.avatar,")"),u.link.value="",n()})).catch((function(e){console.log(e)})).finally((function(){u.save.textContent="Сохранить"}))}}],w={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function j(e){var t=e.target;m.src=t.src,m.alt=t.alt,v.textContent=t.alt,b(f)}function O(e){return{card:e,likeCard:o,deleteCard:n,handleImageClick:j}}x=fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),B=fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),Promise.all([x,B]).then((function(e){var t,n,o,r=(o=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(n,o)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=r[1];t=i,s.textContent=t.name,d.textContent=t.about,l.style.backgroundImage="url(".concat(t.avatar,")"),L=i,function(e){e.forEach((function(e){var t=c(O(e),L);p.append(t)}))}(a)})).catch((function(e){console.log(e)})),function(e){e.forEach((function(e){var t=e.openBtn,n=e.popupWnd,o=e.openCallBack;t.addEventListener("click",(function(e){b(n),o(),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){k(e,n,t)})),g(n,o,t)}(n,w)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&S(e),t.target.classList.contains("popup__close")&&S(e)}))}))}(A),U.forEach((function(e){var t=e.form,n=e.popupWnd,o=e.closeCallBack;t.addEventListener("submit",(function(e){e.preventDefault(),o((function(){return S(n)}))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);g(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?q(e,t,t.dataset.errorMessage,n):t.validity.valid?k(e,t,n):q(e,t,t.validationMessage,n)}(e,r,t),g(n,o,t)}))}))}(t,e)}))}(w)})();