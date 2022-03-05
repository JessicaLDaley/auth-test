(()=>{"use strict";const e=document.createElement("template");e.innerHTML=' <div class="auth-page-wrapper" style="display:none"> <div class="auth-page"> <path d="M19.0659 9.06586L8.93413 19.1976" stroke="#595B86" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.0659 19.1976L8.93413 9.0659" stroke="#595B86" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>  <div class="__loading"> </div> <div class="__header"> <div id="status-icon"></div> <h2 class="status-title"> <strong id="status-type"></strong> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="10" r="10" fill="#313450"/> <path d="M8.91091 11.9553H10.5991V11.7935C10.608 10.8658 10.9198 10.4329 11.6236 9.98097C12.4566 9.4529 13 8.75357 13 7.63558C13 5.9705 11.7439 5 9.9755 5C8.35857 5 7.04009 5.9039 7 7.80685H8.81737C8.8441 7.0314 9.38307 6.61751 9.96659 6.61751C10.5679 6.61751 11.0535 7.04567 11.0535 7.70695C11.0535 8.33016 10.6303 8.74405 10.0824 9.11513C9.33408 9.61941 8.91537 10.1284 8.91091 11.7935V11.9553ZM9.78842 15C10.3586 15 10.853 14.491 10.8575 13.8582C10.853 13.235 10.3586 12.726 9.78842 12.726C9.20045 12.726 8.71492 13.235 8.71938 13.8582C8.71492 14.491 9.20045 15 9.78842 15Z" fill="white"/> </svg> </h2> <p id="status-message" class="text-muted m-0"></p> </div> <div id="__status-box"> <div class="d-flex align-items-center justify-content-between"> <span class="tag">Status</span> <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <rect width="25" height="25" rx="6" fill="white"/> <rect x="2" y="5" width="21" height="17" fill="url(#pattern0)"/> <defs> <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0" transform="translate(-0.118598) scale(0.015274 0.0188679)"/> </pattern> <image id="image0" width="81" height="53" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAA1CAYAAAA56gd6AAAClklEQVR4Ae2ZgW3CMBBFWYENmCB0AZgAJoAJYAKYgAlgApgAJoAJ2IAN2MDVj3SSFcVOdP52gnSRKrfYOZ9f/j87dOLsSiYwSY5gAZxBJIjAIBpEAgFCCFOiQSQQIIQwJRpEAgFCCFOiQSQQIIQwJRpEAgFCCFOiQSQQIIQwJXZA/Hw+HSNcnm9x7ve7+36/nZOPcQDyfjwe7nQ6ub7roCvx/X678/k8Rj7BnF6vlzsej265XLrValXDCw5u6aBCBMDZbDZ6FSLPy+Xittutm06ndc673c71sW4LQ56dYYN59ec2m03bPIN+Bji3283t9/saGMDhp6qq2jWppYemxPV6XSeGWjL0JXUNFsWDFWjSaiwbWxMFIsBJgs/nMzZftj7UNeSBuia5+C3KTIplY4knQwQ0P9lSEP26BkB+Dv7vsOz1es1ap5Mhio0lcRwLclx+XWuzqMwvLWpzqQeaBLGpQiwAlmFdOK/J0UPgxFoo8nA4qHdZbd5JEEOKgNU0F+5DXWuqOwYOfSUsG1uPGiIWHFocFNEHJCwq57VYXQvNU9KyWSD6O3JokVAUxsGW2D3ldQqH3JCKQ7Hk86EsmwUizlqysBLtYrGod9nYYobqU9tZYz8NbGxUpXZZ7UNQQ9QA6XsPHhDKgPZdVgtDe58aInbEvlD6jhuzZWOA1RBxHusLp2vcL1g2C0RYLaUuQsmwbOo3KLHFlepTKxEJ4p20S2V+P6BDdbleDUtBa86TBBHBcKjuOu7gUJz7S4Dmwkr+nQxRkoW9cRTBvwagtLEfSyRvRkuDyEjmV2MYRMKTM4gGkUCAEMKUaBAJBAghTIkGkUCAEMKUaBAJBAghTIkGkUCAEMKUaBAJBAghTIkGkUCAEOIfjkVn82jxDnIAAAAASUVORK5CYII="/> </defs> </svg> </div> <h1 class="item" data-value="tag.product_name"></h1> <div class="description hide"> <p class="text-muted" data-value="tag.description"></p> </div> <div class="row align-items-center justify-content-between"> <div class="key col-5 p-0">UID</div> <div class="value col-7 p-0" data-value="tag.uid"></div> </div> <div class="row align-items-center justify-content-between"> <div class="key col-5 p-0">Token ID</div> <div class="value col-7 p-0" data-value="tag.nft_token_id"></div> </div> <div class="row align-items-center justify-content-between"> <div class="key col-5 p-0">Owner Address</div> <a class="value col-7 p-0" target="_blank" id="owner-address" data-value="tag.nft_owner_address"></a> </div> <div class="row align-items-center justify-content-between"> <div class="key col-5 p-0">Contract Address</div> <a class="value col-7 p-0" target="_blank" id="contract-address" data-value="tag.nft_contract_address"></a> </div> </div> <a id="redeem" class="btn btn-blue" target="_blank">Redeem NFT</a> <div class="__copyright"> <a href="https://www.smartseal.io/" target="_blank">Powered by <strong>SmartSeal</strong></a> </div> </div> </div> ';const t=e;function a(e,t){var a=t.getAttribute("data-value");t.innerText=function(e,t){return t.split(".").reduce((function(e,t){return e&&e[t]}),e)}(e,a)}const s='<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M59 47.2872C49.0992 53.0034 43 63.5675 43 75C43 86.4325 49.0992 96.9965 59 102.713C68.9008 108.429 81.0991 108.429 91 102.713C100.901 96.9965 107 86.4325 107 75C107 63.5675 100.901 53.0034 91 47.2872C81.0991 41.5709 68.9008 41.5709 59 47.2872ZM92.5 44.6891C81.6709 38.437 68.329 38.437 57.5 44.6891C46.671 50.9412 40 62.4957 40 75C40 87.5043 46.671 99.0587 57.5 105.311C68.329 111.563 81.6709 111.563 92.5 105.311C103.329 99.0587 110 87.5043 110 75C110 62.4957 103.329 50.9412 92.5 44.6891Z" fill="#FF4D4D"/>\n</g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M88.4186 65.4128C89.3933 64.4349 89.3907 62.852 88.4128 61.8773C87.4349 60.9026 85.8519 60.9052 84.8773 61.8831L74.9942 71.799L65.0782 61.9159C64.1003 60.9412 62.5174 60.9438 61.5427 61.9218C60.568 62.8997 60.5707 64.4826 61.5486 65.4573L71.4645 75.3404L61.5814 85.2563C60.6067 86.2342 60.6094 87.8172 61.5873 88.7919C62.5652 89.7665 64.1481 89.7639 65.1228 88.786L75.0059 78.8701L84.9218 88.7531C85.8997 89.7278 87.4826 89.7252 88.4573 88.7473C89.432 87.7693 89.4294 86.1864 88.4514 85.2117L78.5356 75.3287L88.4186 65.4128Z" fill="white"/>\n<defs>\n<filter id="filter0_d" x="0" y="0" width="150" height="150" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n<feOffset/>\n<feGaussianBlur stdDeviation="20"/>\n<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.3 0 0 0 0 0.3 0 0 0 1 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n</filter>\n</defs>\n</svg>\n',n='<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M59 47.2872C49.0992 53.0034 43 63.5675 43 75C43 86.4325 49.0992 96.9965 59 102.713C68.9008 108.429 81.0991 108.429 91 102.713C100.901 96.9965 107 86.4325 107 75C107 63.5675 100.901 53.0034 91 47.2872C81.0991 41.5709 68.9008 41.5709 59 47.2872ZM92.5 44.6891C81.6709 38.437 68.329 38.437 57.5 44.6891C46.671 50.9412 40 62.4957 40 75C40 87.5043 46.671 99.0587 57.5 105.311C68.329 111.563 81.6709 111.563 92.5 105.311C103.329 99.0587 110 87.5043 110 75C110 62.4957 103.329 50.9412 92.5 44.6891Z" fill="#B4FFC9"/>\n</g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M90.9301 65.2875C91.9064 66.2638 91.9064 67.8468 90.9301 68.8231L72.6227 87.1305C71.6464 88.1068 70.0635 88.1068 69.0872 87.1305L59.7607 77.8041C58.7844 76.8278 58.7844 75.2448 59.7607 74.2685C60.737 73.2922 62.32 73.2922 63.2963 74.2685L70.8549 81.8272L87.3946 65.2875C88.3709 64.3112 89.9538 64.3112 90.9301 65.2875Z" fill="white"/>\n<defs>\n<filter id="filter0_d" x="0" y="0" width="150" height="150" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n<feOffset/>\n<feGaussianBlur stdDeviation="20"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0.466667 0 0 0 0 1 0 0 0 0 0.616 0 0 0 1 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n</filter>\n</defs>\n</svg>\n';class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(t.content.cloneNode(!0)),this.injectFont()}connectedCallback(){this.description=this.shadowRoot.querySelector(".description"),this.description.addEventListener("click",(()=>{this.toggleDescription()}));var e={useragent:"useragent string goes here",ip_address:"111.111.111.111",url_payload:this.getQueryVariable("pl")};e&&e.url_payload&&this.getTagData(e)}getQueryVariable(e){for(var t=window.location.search.substring(1).split("&"),a=0;a<t.length;a++){var s=t[a].split("=");if(decodeURIComponent(s[0])==e)return decodeURIComponent(s[1])}console.log("Query variable %s not found",e)}toggleDescription(){this.description.classList.toggle("hide")}show(){this.shadowRoot.querySelector(".auth-page-wrapper").style.display="block"}hide(){this.shadowRoot.querySelector(".auth-page-wrapper").style.display="none"}setNftAddress(e,t,a){if(e){let s;1===e?s="https://etherscan.io/address/":137===e?s="https://polygonscan.com/address/":3===e&&(s="https://ropsten.etherscan.io/address/"),this.shadowRoot.getElementById("owner-address").href=s+t,this.shadowRoot.getElementById("contract-address").href=s+a}}setRedemptionUrl(e){e?this.shadowRoot.getElementById("redeem").href=e:this.shadowRoot.getElementById("redeem").classList.add("disabled")}async getTagData(e){let t,i,o,d=await fetch("https://staging.smartseal.io/api/authenticate/",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify(e)}),l=await d.text();switch(l=JSON.parse(l),l.scan.auth_stat){case 0:t=s,i="Error",o="There was a problem authenticating this tag. Please contact info@smartseal.io for more information";break;case 1:t=n,i="Authenticated",this.shadowRoot.getElementById("status-message").style.display="none",this.shadowRoot.getElementById("__status-box").style.display="block",this.shadowRoot.getElementById("redeem").style.display="block",this.setNftAddress(l.tag.chain_id,l.tag.nft_owner_address,l.tag.nft_contract_address),this.setRedemptionUrl(l.tag.nft_redemption_url);break;case 2:t=n,i="Authenticated and Sealed",this.shadowRoot.getElementById("status-message").style.display="none",this.shadowRoot.getElementById("__status-box").style.display="block",this.setNftAddress(l.tag.chain_id,l.tag.nft_owner_address,l.tag.nft_contract_address),this.setRedemptionUrl(l.tag.nft_redemption_url);break;case 3:t=n,i="Authenticated and Unsealed",this.shadowRoot.getElementById("status-message").style.display="none",this.shadowRoot.getElementById("__status-box").style.display="block",this.setNftAddress(l.tag.chain_id,l.tag.nft_owner_address,l.tag.nft_contract_address);break;case 4:case 5:case 6:t=s,i="Tag Not Active",o="Here is where we can have the error message on this screen and the next action";break;case 7:t='<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M91 47.2872C81.0991 41.5709 68.9008 41.5709 59 47.2872C49.0992 53.0034 43 63.5675 43 75C43 86.4325 49.0992 96.9965 59 102.713C68.9008 108.429 81.0992 108.429 91 102.713C100.901 96.9965 107 86.4325 107 75C107 63.5675 100.901 53.0034 91 47.2872ZM92.5 44.6891C81.6709 38.437 68.329 38.437 57.5 44.6891C46.671 50.9412 40 62.4957 40 75C40 87.5043 46.671 99.0587 57.5 105.311C68.329 111.563 81.6709 111.563 92.5 105.311C103.329 99.0587 110 87.5043 110 75C110 62.4957 103.329 50.9412 92.5 44.6891Z" fill="#FEB12B"/>\n</g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M54.5 75C54.5 73.067 56.067 71.5 58 71.5L92 71.5C93.933 71.5 95.5 73.067 95.5 75C95.5 76.933 93.933 78.5 92 78.5L58 78.5C56.067 78.5 54.5 76.933 54.5 75Z" fill="white"/>\n<defs>\n<filter id="filter0_d" x="0" y="0" width="150" height="150" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n<feOffset/>\n<feGaussianBlur stdDeviation="20"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.694118 0 0 0 0 0.168627 0 0 0 1 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n</filter>\n</defs>\n</svg>\n',i="Authentication Token Expired",o="Please rescan tag";break;case 8:t=s,i="Authentication Code Not Valid",o="Here is where we can have the error message on this screen and the next action";break;default:t=s,i="Error",o="There was a problem authenticating this tag. Please contact info@smartseal.io for more information"}return this.shadowRoot.getElementById("status-icon").innerHTML=t,this.shadowRoot.getElementById("status-type").innerText=i,this.shadowRoot.getElementById("status-message").innerText=o,function(e,t){var s=t.querySelectorAll("[data-value]");[].forEach.call(s,a.bind(null,e))}(l,this.shadowRoot.querySelector(".auth-page")),this.show(),l}injectFont(){document.getElementById("smartSealFont")||(document.head||document.getElementsByTagName("head")[0],document.createElement("style").id="smartSealFont")}}window.customElements.define("smartseal-auth",i)})();