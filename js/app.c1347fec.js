(function(){"use strict";var t={4474:function(t,e,s){var a=s(5471),i=s(2915),o=s(8047),n=s(8856),l=function(){var t=this,e=t._self._c;return e(i.A,[e(n.A,{staticClass:"pa-1"},[e(o.A,{attrs:{flat:"","max-width":"600px"}},[e("div",{staticClass:"sticky-toolbar"},[t._v("tamashiRamen.com")]),e("router-view")],1)],1)],1)},r=[],c={name:"App"},u=c,d=s(1656),m=(0,d.A)(u,l,r,!1,null,null,null),p=m.exports,h=s(3668);a.Ay.use(h.A);var f=new h.A({theme:{themes:{light:{primary:"#000",secondary:"#fff",accent:"#eef6f5",error:"#b71c1c"}}}}),b=s(173),g=s(8232),v=s(9774),y=s(3430),A=s(1231),C=s(9975),_=s(2369),D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-1"},[e(C.A,{staticClass:"mb-1"}),t._m(0),e(C.A,{staticClass:"my-1"}),e(v.A,{attrs:{"hide-delimiters":"",cycle:"","show-arrows-on-hover":"",height:"250px"}},t._l(t.carouselImages,(function(t,s){return e(y.A,{key:s,attrs:{src:t}})})),1),e("information-tabs-component"),e(_.A,[e(A.A,{staticClass:"text-center mt-2",attrs:{cols:"12"}},[e(g.A,{attrs:{color:"primary",block:""},on:{click:t.submitForm}},[t._v("Prenota")])],1)],1)],1)},x=[function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"text-h4 font-weight-bold"},[t._v("Tamashi Ramen")])])}],k=(s(4114),s(6684)),w=s(5310),S=s(1361),T=s(1013),I=function(){var t=this,e=t._self._c;return e(T.A,{attrs:{"show-arrows":"","align-tabs":"start"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(w.A,[t._v("Info")]),e(w.A,[t._v("Menu")]),e(w.A,[t._v("Faq")]),e(w.A,[t._v("Coupon")]),e(w.A,[t._v("iBook Reviews")]),e(w.A,[t._v("Google Reviews")]),e(S.A,[e("div",{staticClass:"d-flex links flex-row pa-1"},[e(g.A,{attrs:{"x-small":"",color:"primary"}},[t._v("INSIDER")]),e(g.A,{attrs:{"x-small":"",outlined:"",color:"red"}},[t._v("INSIDER")]),e(g.A,{attrs:{"x-small":"",color:"primary"}},[t._v("INSIDER")]),e("span",{staticClass:"link-text text-caption font-weight-bold"},[t._v("CARNE-ROMANTICO-GRUPPI")]),e("span",{staticClass:"ml-auto text-h6 align-content-start"},[t._v("4.6/"),e("span",{staticClass:"text-subtitle-2 align-end"},[t._v("5")])])],1),e("div",{staticClass:"d-flex flex-column pa-1 my-2"},[e("div",{staticClass:"mb-2"},[e(k.A,{attrs:{dense:"",left:""}},[t._v("mdi-map-marker")]),e("span",{staticClass:"font-weight-bold text-subtitle-2"},[t._v("Corso Italia 32er,anglo via zara ")])],1),e("div",{staticClass:"mb-2"},[e(k.A,{attrs:{dense:"",left:""}},[t._v("mdi-silverware-fork-knife")]),e("span",{staticClass:"font-weight-bold text-subtitle-2"},[t._v("Carne ")])],1),e("div",{staticClass:"mb-2"},[e(k.A,{attrs:{left:""}},[t._v("mdi-cash")]),e("span",{staticClass:"font-weight-bold text-subtitle-2"},[t._v("Prezzo Medio 40 ")])],1)]),e(_.A,{staticClass:"justify-center"},[e(A.A,{attrs:{cols:"6",sm:"6"}},[e(g.A,{staticClass:"flexible-btn",attrs:{large:"",block:"",outlined:""}},[t._v("Website")])],1),e(A.A,{attrs:{cols:"6",sm:"6"}},[e(g.A,{staticClass:"flexible-btn",attrs:{large:"",block:"",outlined:""}},[t._v("Vai al Menu Wagyu")])],1)],1)],1),e(S.A,[t._v(" content for menu ")]),e(S.A,[t._v(" content for faq ")]),e(S.A,[t._v(" content for coupon ")]),e(S.A,[t._v(" content for iBook Reviews ")]),e(S.A,[t._v(" content for google reviews ")])],1)},O=[],P={name:"informationTabsComponent",data(){return{tab:0}}},N=P,E=(0,d.A)(N,I,O,!1,null,"4af533d9",null),L=E.exports,M={name:"informationPage",components:{InformationTabsComponent:L},data(){return{carouselImages:[s(2618),s(3109),s(1928),s(5531),s(9694),s(4713),s(364)]}},methods:{submitForm(){this.$router.push({name:"book"})}}},B=M,j=(0,d.A)(B,D,x,!1,null,"61c6d18a",null),R=j.exports,z=s(715),q=s(3812),F=s(5477),$=s(9194),G=s(3016),U=s(1904),H=s(2031),W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-1"},[4!==t.step?e(q.A,{attrs:{height:"180px",cover:"",position:"top",src:s(4137)}}):t._e(),e("div",{staticClass:"text-center font-weight-bold text-h5"},[t._v("Tamashi Ramen")]),e(C.A,{staticClass:"my-1"}),e($.A,{attrs:{dense:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[e(U.vY,{attrs:{dense:""}},t._l(t.steps,(function(s,a){return e("div",{key:a},[e(H.A,{staticClass:"step",class:{"active ":t.step===s.step,completed:t.step>s.step},attrs:{complete:t.step>s.step,step:s.step,editable:t.step>s.step},on:{click:function(e){return t.goToStep(s.step)}}},[s.value?t._e():e(k.A,{attrs:{left:"",color:t.step>=s.step?"white":"",size:"12px"}},[t._v(" "+t._s(s.icon)+" ")]),s.value||t.step!==s.step?e("span",[t._v(t._s(s.value))]):e("span",[t._v(t._s(s.label))])],1)],1)})),0),e(U.WV,[e(C.A,{staticClass:"my-1"}),e(z.A,{directives:[{name:"show",rawName:"v-show",value:t.showAlert,expression:"showAlert"}],attrs:{type:"error",prominent:"",outlined:""}},[e(_.A,{attrs:{align:"center"}},[e(A.A,{staticClass:"grow"},[t._v(" "+t._s(t.alert)+" ")]),e(A.A,{staticClass:"shrink"},[e(g.A,{attrs:{dense:"",outlined:""},on:{click:t.refresh}},[t._v("Ricarica")])],1)],1)],1),t.loading?e(F.A,{attrs:{type:"date-picker-days"}}):t._e(),e(G.A,{attrs:{step:"1"}},[e(_.A,[e(A.A,{attrs:{cols:"12"}},[t.enabledDays.length>0?e("the-calender",{attrs:{"on-day-click":t.onDateChange,"show-outside-days":!1,eventDays:[{date:"2024/06/29",promotionText:"50%"},{date:"2024/06/28",promotionText:"20%"},{date:"2024/06/30",promotionText:"30%"},{date:"2024/06/31",promotionText:"Sale"}],"enabled-days":t.enabledDays,"disabled-days":["30/05/2024"]}}):t._e()],1)],1)],1),e(G.A,{attrs:{step:"2"}},[e(_.A,[e(A.A,{staticClass:"pb-2 d-flex align-center justify-center",attrs:{cols:"12"}},[e(k.A,{staticClass:"mr-2",attrs:{left:""}},[t._v("mdi-account-outline")]),e("h3",{staticClass:"my-0"},[t._v("Numero di Persone")])],1)],1),e(C.A,{staticClass:"my-3"}),e("div",{staticClass:"d-flex flex-wrap justify-center"},t._l(t.numberOfPersons,(function(s,a){return e(g.A,{key:a,staticClass:"personBtn",class:{selected:t.isSelectedNumberOfPersons(s)},attrs:{outlined:""},on:{click:function(e){return t.selectPeople("adults",s)}}},[e("span",{staticClass:"px-sm-5"},[t._v(t._s(s))])])})),1),e(C.A,{staticClass:"my-3"}),e(_.A,[e(A.A,{staticClass:"pb-2 d-flex align-center justify-center",attrs:{cols:"12"}},[e(k.A,{staticClass:"mr-2",attrs:{left:""}},[t._v("mdi-account-outline")]),e("h3",{staticClass:"my-0"},[t._v("Numero di bambni")])],1)],1),e(C.A,{staticClass:"my-3"}),e("div",{staticClass:"d-flex flex-wrap justify-center justify-sm-space-around"},t._l(t.numberOfChildren,(function(s,a){return e(g.A,{key:a,staticClass:"personBtn",class:{selected:t.isSelectedNumberOfChildren(s)},attrs:{outlined:""},on:{click:function(e){return t.selectPeople("children",s)}}},[e("span",{staticClass:"px-sm-5"},[t._v(t._s(s))])])})),1)],1),e(G.A,{attrs:{step:"3"}},[t.locations?.length>1?e("div",[e(_.A,[e(A.A,{staticClass:"pb-2 d-flex align-center justify-center",attrs:{cols:"12"}},[e(k.A,{staticClass:"mr-2",attrs:{left:""}},[t._v("mdi-map-marker")]),e("h3",{staticClass:"my-0"},[t._v("Scegli la sala")])],1)],1),e(C.A,{staticClass:"my-3"}),e("div",{staticClass:"d-flex flex-wrap justify-center"},t._l(t.locations,(function(s){return e(g.A,{key:s.id,staticClass:"font-weight-bold",class:{selected:t.isSelectedLocation(s.id)},attrs:{outlined:"",large:""},on:{click:function(e){return t.selectLocation(s.id)}}},[t._v(" "+t._s(s.name)+" ")])})),1),e(C.A,{staticClass:"my-3"})],1):t._e(),e(_.A,{attrs:{id:"time"}},[e(A.A,{staticClass:"pb-2 d-flex align-center justify-center",attrs:{cols:"12"}},[e(k.A,{staticClass:"mr-2",attrs:{left:""}},[t._v("mdi-clock-outline")]),e("h3",{staticClass:"my-0"},[t._v("Scegli l'orario")])],1)],1),e(C.A,{staticClass:"my-3"}),t._l(t.meals,(function(s,a){return e("div",{key:a},[s.times.length?e(_.A,[e(A.A,{staticClass:"mb-2",attrs:{cols:"12"}},[e("h3",{staticClass:"mb-3"},[t._v(t._s(s.label))]),e(_.A,{staticClass:"justify-sm-start justify-space-around"},t._l(s.times,(function(s,a){return e(A.A,{key:a,attrs:{cols:"6",sm:"3"}},[e(g.A,{staticClass:"position-relative",class:{selected:t.isSelectedTime(s.time)},attrs:{block:"","x-large":"",outlined:""},on:{click:function(e){return t.selectTime(s)}}},[s.promotionText?e("div",{staticClass:"top-text"},[t._v(t._s(s?.promotionText))]):t._e(),e("span",{staticClass:"px-sm-4"},[t._v(t._s(s.time))]),e("div",{staticClass:"time-label",class:t.getStatusClass(s?.status)},[t._v(t._s(s.status))])])],1)})),1)],1)],1):t._e(),s.times.length?e(C.A,{staticClass:"my-3"}):t._e()],1)}))],2),e(G.A,{attrs:{step:"4"}},[e("customer-information-tabs-component",{attrs:{isBookingComplete:t.isBookingComplete}}),e("div",{staticClass:"mx-auto text-center mt-3",staticStyle:{"max-width":"300px"}},[e("div",{staticClass:"text-bottom-caption"},[t._v("Clica qui per cancellare i tuoi dati personali dal nostro database")]),e("a",{staticClass:"text-subtitle-2 my-2 text--accent-1",attrs:{href:"#"}},[e(k.A,{attrs:{left:"",size:"14px"}},[t._v("mdi-account-outline")]),t._v("CANCELLAMI")],1),e("div",{staticClass:"text-bottom-caption font-weight-bold"},[t._v("I dati personali forniti saranno trattati nel respetto della normativa vigente secondo quanto indicato nell'informativa Privacy disponible a questo LINK")])])],1)],1)],1)],1)},Y=[],V=(s(3375),s(9225),s(3972),s(9209),s(5714),s(7561),s(6197),function(){var t=this,e=t._self._c;return e("div",{staticClass:"calendar-container"},[e("div",{staticClass:"calendar-header"},[e(k.A,{on:{click:t.prevMonth}},[t._v("mdi-chevron-left")]),e("h4",[t._v(t._s(t.monthNames[t.currentMonth])+" "+t._s(t.currentYear))]),e(k.A,{on:{click:t.nextMonth}},[t._v("mdi-chevron-right")])],1),e("div",{staticClass:"calendar-grid"},[t._l(t.weekDays,(function(s){return e("div",{key:s,staticClass:"calendar-day header"},[e("span",[t._v(t._s(s))])])})),t._l(t.days,(function(s,a){return e("div",{key:a,staticClass:"calendar-day"},[e("button",{class:["day-content",{"d-none":!s.date},{outside:s.outside},{"disabled-day":t.isDisabledDay(s.date)||t.isPastDay(s.date)||!s.enabled},{"selected-day":t.isSelectedDay(s.date)},{"no-promotion":!t.dateHasPromotion(s.date)}],on:{click:function(e){!t.isDisabledDay(s.date)&&!t.isPastDay(s.date)&&t.handleDayClick(s.date)}}},[e("span",[t._v(t._s(s.date?s.date?.getDate():""))]),t.dateHasPromotion(s.date)?e("span",{staticClass:"promotion-label"},[t._v(" "+t._s(t.getPromotionText(s.date))+" ")]):t._e()])])}))],2)])}),J=[],K={name:"TheCalendar",props:{onDayClick:{type:Function,required:!0},showOutsideDays:{type:Boolean,default:!0},eventDays:{type:Array,default:()=>[]},disabledDays:{type:Array,default:()=>[]},enabledDays:{type:Array,default:()=>[]}},data(){return{currentYear:(new Date).getFullYear(),currentMonth:(new Date).getMonth(),days:[],automaticallyDisabledDays:[],monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],weekDays:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],selectedDate:null}},created(){this.updateDays()},methods:{updateDays(){this.days=this.generateDays(this.currentYear,this.currentMonth)},isDateEnabled(t){return!this.enabledDays.length||this.enabledDays.includes(t?.toLocaleDateString("it-IT"))},generateDays(t,e){const s=[],a=new Date(t,e,1),i=new Date(t,e+1,0),o=i?.getDate();if(this.showOutsideDays)for(let n=a.getDay();n>0;n--)s.unshift({date:new Date(t,e,1-n),outside:!0});else for(let n=0;n<a.getDay();n++)s.push({date:null,outside:!0});for(let n=1;n<=o;n++)s.push({date:new Date(t,e,n),outside:!1,enabled:this.isDateEnabled(new Date(t,e,n))});if(this.showOutsideDays){const a=s.length,i=42-a;for(let o=1;o<=i;o++)s.push({date:new Date(t,e+1,o),outside:!0})}else{const t=s.length,e=35-t;for(let a=1;a<=e;a++)s.push({date:null,outside:!0})}return s},dateHasPromotion(t){if(null===t)return!1;const e=t.toLocaleDateString("it-IT");return this.eventDays.some((t=>{const s=new Date(t.date).toLocaleDateString("en-GB");return s===e}))},getPromotionText(t){if(null===t)return!1;const e=t.toLocaleDateString("it-IT"),s=this.eventDays.find((t=>{const s=new Date(t.date).toLocaleDateString("it-IT");return s===e}));return s?s.promotionText:""},isDisabledDay(t){return this.disabledDays.includes(t?.toLocaleDateString("it-IT"))},nextMonth(){11===this.currentMonth?(this.currentYear++,this.currentMonth=0):this.currentMonth++,this.updateDays()},prevMonth(){0===this.currentMonth?(this.currentYear--,this.currentMonth=11):this.currentMonth--,this.updateDays()},isPastDay(t){const e=new Date;return e.setHours(0,0,0,0),t<e},isSelectedDay(t){return t?.getTime()===this.selectedDate?.getTime()},handleDayClick(t){this.isPastDay(t)||this.isDisabledDay(t)||(this.selectedDate=t,this.onDayClick(t))}}},Q=K,X=(0,d.A)(Q,V,J,!1,null,"4addd503",null),Z=X.exports,tt=s(4335);const et={async authenticate(t){const e=localStorage.getItem("customerId"),s="bellavida.ibookrestaurant.com",a=JSON.stringify({action:"Authenticate",payload:{customerId:e,bookingId:t,hostname:s}});try{const t=await tt.A.post("https://aibooking.it/ajax/booking/selam.php",a);if("0"===t.data.errorid){document.title=t.data.payloads.settings.brand;const e=t.data.payloads.customer;e&&e.customerId&&localStorage.setItem("customerId",e.customerId);const s={customer:e,expired:t.data.payloads.expired,faqs:t.data.payloads.faqs??null,requests:t.data.payloads.requests||[],foodStyles:t.data.payloads.foodStyles||[],meals:t.data.payloads.meals??null,booking:{date:t.data.payloads.bookableDays[0].date,...t.data.payloads.currentBooking||{}},locations:t.data.payloads.locations??null,bookableDays:t.data.payloads.bookableDays,settings:t.data.payloads.settings,currentBooking:t.data.payloads.currentBooking,WAVerification:!!t.data.payloads.currentBooking||e.WASent,newsletter:t.data.payloads.newsletter,gender:t.data.payloads.currentBooking?t.data.payloads.currentBooking.gender:e.gender,birthdate:e?e.birthdate:null};return{loading:!1,result:s,error:null}}if("0006"===t.data.errorid)return{loading:!1,result:null,error:"unknown"}}catch(i){return console.error("Error during authentication:",i),{loading:!1,result:null,error:i.message}}}};var st=et;const at={DISPONIBLE:"Disponible",POSTI_ESAURITI:"Posti Esauriti",LISTA_D_ATTESA:"Lista d'attesa",NON_DISPONIBLE:"Non Disponible"},it={EFFETTUATA:"Effettuata",CONFERMATA:"Confermata",LISTA_D_ATTESA:"Lista d'attesa"},ot=t=>{switch(t){case at.DISPONIBLE:return"status-disponible";case at.POSTI_ESAURITI:return"status-posti-esauriti";case at.LISTA_D_ATTESA:return"status-lista-d-attesa";case at.NON_DISPONIBLE:return"status-non-disponible";default:return""}},nt=(t,e,s,a)=>Array.from({length:s},((s,i)=>{const o=new Date(2024,5,1,t,e);return o.setMinutes(o.getMinutes()+i*a),o.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}));var lt=s(5147),rt=s(877),ct=s(9330),ut=s(4636),dt=function(){var t=this,e=t._self._c;return e(o.A,{attrs:{flat:""}},[e(T.A,{attrs:{"align-tabs":"start"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(w.A,[t._v("Dati")]),e(w.A,[t._v("FAQ")]),e(w.A,[t._v("Parking")]),e(w.A,[t._v("Naviga")]),e(S.A,[t.showBookingComplete?e("BookingComplete",{attrs:{type:t.type}}):e("div",[e(rt.A,{staticClass:"pa-1 d-flex flex-column",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",[e(_.A,[e(A.A,{attrs:{cols:"3",sm:"2"}},[e(ct.A,{attrs:{items:["Mr","Ms","Mrs"],label:"Title",required:"","hide-details":"auto"},model:{value:t.userDetails.title,callback:function(e){t.$set(t.userDetails,"title",e)},expression:"userDetails.title"}})],1),e(A.A,[e(ut.A,{attrs:{label:"Nome ","hide-details":"auto",required:""},model:{value:t.userDetails.nome,callback:function(e){t.$set(t.userDetails,"nome",e)},expression:"userDetails.nome"}})],1),e(A.A,[e(ut.A,{attrs:{label:"Cognome","hide-details":"auto",required:""},model:{value:t.userDetails.cognome,callback:function(e){t.$set(t.userDetails,"cognome",e)},expression:"userDetails.cognome"}})],1)],1)],1),e("div",[e(_.A,[e(A.A,{attrs:{cols:"7"}},[e(ut.A,{attrs:{dense:"",label:"Telefono","hide-details":"auto",required:""},model:{value:t.userDetails.telefono,callback:function(e){t.$set(t.userDetails,"telefono",e)},expression:"userDetails.telefono"}})],1),e(A.A,[e(ut.A,{attrs:{dense:"",label:"CAP Rezisdenza","hide-details":"auto",required:""},model:{value:t.userDetails.cap,callback:function(e){t.$set(t.userDetails,"cap",e)},expression:"userDetails.cap"}})],1)],1)],1),e(ut.A,{attrs:{dense:"",label:"Email","hide-details":"auto",required:""},model:{value:t.userDetails.email,callback:function(e){t.$set(t.userDetails,"email",e)},expression:"userDetails.email"}}),e(ut.A,{attrs:{dense:"",label:"Note","hide-details":"auto",autogrow:""}})],1),e(_.A,{staticClass:"no-gutters my-2"},[e(A.A,{attrs:{cols:"6"}},[e(o.A,{staticClass:"mr-sm-3 mr-2",attrs:{flat:"",outlined:""}},t._l(t.extraItems,(function(s,a){return e(lt.A,{key:a,staticClass:"ma-0",attrs:{"hide-details":"auto",dense:"",label:s.label},model:{value:s.value,callback:function(e){t.$set(s,"value",e)},expression:"item.value"}})})),1)],1),e(A.A,{attrs:{cols:"6"}},[e(o.A,{attrs:{flat:"",outlined:""}},t._l(t.specialThings,(function(s,a){return e(lt.A,{key:a,staticClass:"ma-0",attrs:{"hide-details":"auto",dense:"",label:s.label},model:{value:s.value,callback:function(e){t.$set(s,"value",e)},expression:"item.value"}})})),1)],1)],1),e(lt.A,{attrs:{"hide-details":"auto",label:"Do you want to subscribe to our promotions?"},model:{value:t.subscribePromotions,callback:function(e){t.subscribePromotions=e},expression:"subscribePromotions"}}),e(_.A,[e(A.A,{staticClass:"text-center mt-3",attrs:{cols:"12"}},[e(g.A,{attrs:{color:"primary",block:""},on:{click:t.submitForm}},[t._v("Prenota")])],1)],1)],1)],1),e(S.A,[e("p",[t._v("some frequently asked questions.")])]),e(S.A,[e("p",[t._v("Information about parking.")])]),e(S.A,[e("p",[t._v("Navigation instructions and maps.")])])],1)],1)},mt=[],pt=function(){var t=this,e=t._self._c;return e(_.A,{staticClass:"justify-center pa-1 my-1"},[e(A.A,{attrs:{cols:"12"}},[e("div",{staticClass:"confirmation-title",class:t.confirmationObj.textColorClass},[t._v(t._s(t.confirmationObj.title))])]),e(A.A,{attrs:{cols:"12"}},[e("div",{staticClass:"message text-center"},[e("div",{staticClass:"text-center mb-2"},[t._v(t._s(t.confirmationObj.mainMessage)+" ")]),t._l(this.confirmationObj.description.split("."),(function(s,a){return e("div",{key:a,staticClass:"text-center"},[t._v(t._s(s)+".")])})),t.confirmationObj.extra?e("div",{staticClass:"text-center mt-3 text-decoration-underline"},[t._v(t._s(t.confirmationObj.extra))]):t._e()],2)])],1)},ht=[],ft={name:"BookingComplete",props:{type:{type:String,required:!0}},data(){return{confirmationObj:{title:"",mainMessage:"",textColorClass:"",description:"",extra:""}}},methods:{getMessage(){switch(this.type){case it.EFFETTUATA:return{title:"Richiesta Prenotazione Effettuata",mainMessage:"La tua richiesta di prenotazione è stata inviata al ristorante",description:"Riceverai un messaggio su WhatsAPP.clicca nel messagio per confermare il tuo numero di telefono",textColorClass:"completed-text"};case it.CONFERMATA:return{title:"Richiesta Prenotazione Confermata",mainMessage:"La tua prenotazione è confermata ed il tuo tavolo e riservato",description:"Riceverai un messaggio di conferma su WhatsApp.Grazie per averci scelto",textColorClass:"completed-text"};case it.LISTA_D_ATTESA:return{title:"Richesta di prenotazione in Lista d'Attesa",mainMessage:"La tua prenotazione non confermata",description:"Receverai un messagio su WhatsApp.clicca nel messagio per confermare il tuo numero di telefono",extra:"appena si liberera un tavolo confermeremo la tua richiesta",textColorClass:"waiting-text"};default:return null}}},mounted(){this.confirmationObj=this.getMessage()}},bt=ft,gt=(0,d.A)(bt,pt,ht,!1,null,"5d48daaa",null),vt=gt.exports,yt={name:"customerInformationTabsComponent",components:{BookingComplete:vt},data(){return{tab:null,userDetails:{nome:"",cognome:"",email:"",telefono:""},extraItems:{senzaGluten:{value:!1,label:"Senza Glutine"},senzaLattosio:{value:!1,label:"Senza Lattosio"},vegan:{value:!1,label:"Cibi Vegetarini"},sunio:{value:!1,label:"No carne Sunia"}},specialThings:{birthday:{value:!1,label:"Portero torta "},pets:{value:!1,label:"Presenza Cane"},bambino:{value:!1,label:"Bambino in carrozina"},seggiolino:{value:!1,label:"Seggiolino"}},subscribePromotions:!1,showBookingComplete:!1,type:it.LISTA_D_ATTESA}},props:{isBookingComplete:{type:Boolean}},watch:{isBookingComplete:{immediate:!0,handler(t){this.showBookingComplete=t}},showBookingComplete(t){console.log("showBookingComplete:",t)}},methods:{submitForm(){console.log("Form submitted"),console.log("User Details:",this.userDetails),this.showBookingComplete=!0}}},At=yt,Ct=(0,d.A)(At,dt,mt,!1,null,"1b409092",null),_t=Ct.exports,Dt={name:"BookingPage",data(){return{step:1,selectedDate:null,minDate:(new Date).toISOString().substring(0,10),maxDate:new Date((new Date).setMonth((new Date).getMonth()+3)).toISOString().substring(0,10),lunchTimes:[],dinnerTimes:[],numberOfPersons:Array.from({length:16},((t,e)=>e+1)),numberOfChildren:Array.from({length:5},((t,e)=>e)),steps:[{step:1,icon:"mdi-calendar-month-outline",label:"Data",value:""},{step:2,icon:"mdi-account-outline",label:"Persone",value:""},{step:3,icon:"mdi-clock-outline",label:"Orario",value:""},{step:4,icon:"mdi-information-outline",label:"Dati Prenotazione",value:""}],completedSteps:new Set,bookingId:"",booking:{date:null,mealId:null,optIn:!1,newsletter:!1,gender:null,birthdate:null},locations:null,bookableDays:[],enabledDays:[],selectedLocation:null,selectedChildren:0,selectedNumberOfPeople:0,loading:!1,alert:"Impossibile recuperare le date disponibili, fare clic qui per aggiornare.",showAlert:!1,isBookingComplete:null}},computed:{meals(){return[{label:"Pranzo",times:this.lunchTimes},{label:"Cena",times:this.dinnerTimes}]}},watch:{step(t){this.resetStepsAfter(t)}},components:{CustomerInformationTabsComponent:_t,theCalender:Z},methods:{getStatusClass:ot,goToStep(t){(this.isStepComplete(t-1)||1===t)&&(this.step=t,this.isBookingComplete=!(this.step<4)&&null)},completeStep(t){this.completedSteps.add(t),this.step++},isStepComplete(t){return this.completedSteps.has(t)},resetStepsAfter(t){this.steps.forEach((e=>{e.step>t&&(e.value=null,this.completedSteps.delete(e.step))}))},submitForm(){console.log("Form submitted")},onDateChange(t){const e=this.bookableDays.find((e=>e.date===t.toLocaleDateString("it-IT")));if(e.isLUNCH_OPEN){let t=nt(12,0,6,30);this.lunchTimes=[],this.lunchTimes=t.map((t=>({time:t,status:at.DISPONIBLE,promotionText:"12:00"===t?"Bevanda Omaggio":null})))}if(e.isDINNER_OPEN){let t=nt(19,0,6,30);this.dinnerTimes=[],this.dinnerTimes=t.map((t=>({time:t,status:at.DISPONIBLE,promotionText:"19:00"===t?"Bevanda Omaggio":null})))}t=new Date(t).toLocaleDateString("it-IT",{day:"numeric",month:"short"}),this.steps[0].value=t,this.completeStep(1),this.goToStep(2)},selectTime(t){this.steps[2].value=t.time,this.completeStep(3),this.goToStep(4)},isSelectedTime(t){return this.steps[2].value===t},selectPeople(t,e){"adults"===t?this.selectedNumberOfPeople=e:"children"===t&&(this.selectedChildren=e),this.selectedChildren>0&&this.selectedNumberOfPeople>0?this.steps[1].value=this.selectedNumberOfPeople+" + "+this.selectedChildren+" persone":this.selectedChildren>0?this.steps[1].value=this.selectedChildren+" bambini":this.steps[1].value=this.selectedNumberOfPeople+" persone",this.selectedNumberOfPeople&&(this.completeStep(2),this.goToStep(4))},isSelectedNumberOfPersons(t){return this.selectedNumberOfPeople===t},isSelectedNumberOfChildren(t){return this.selectedChildren===t},selectLocation(t){this.selectedLocation=t},isSelectedLocation(t){return this.selectedLocation===t},refresh(){this.showAlert=!1,window.location.reload()},updateEnabledDays(){this.enabledDays=this.bookableDays.map((t=>t.date))},async authenticate(){this.loading=!0;const{result:t,error:e}=await st.authenticate(this.bookingId);if(this.loading=!1,e)throw this.showAlert=!0,e;{const{locations:e,bookableDays:s,settings:a}=t;return{locations:e,bookableDays:s,settings:a}}}},async created(){const{bookableDays:t,locations:e,settings:s}=await this.authenticate();this.numberOfPersons=Array.from({length:s?.options?.maxBookableCovers},((t,e)=>e+1)),this.bookableDays=t.filter((t=>t.isDAY_OPEN)).map((t=>({date:new Date(t?.date).toLocaleDateString("it-IT"),isDINNER_OPEN:t.isDINNER_OPEN,isLUNCH_OPEN:t.isLUNCH_OPEN}))),this.locations=e,this.updateEnabledDays()}},xt=Dt,kt=(0,d.A)(xt,W,Y,!1,null,"ca7f655e",null),wt=kt.exports;a.Ay.use(b.Ay);var St=new b.Ay({mode:"history",base:"/table_reservation/",routes:[{path:"/",name:"Home",component:R},{path:"/book",name:"book",component:wt}]});a.Ay.config.productionTip=!1,new a.Ay({router:St,vuetify:f,render:t=>t(p)}).$mount("#app")},2618:function(t,e,s){t.exports=s.p+"img/carouselImage1.812a1005.jpg"},3109:function(t,e,s){t.exports=s.p+"img/carouselImage2.3eb1e75a.jpg"},1928:function(t,e,s){t.exports=s.p+"img/carouselImage3.448cd19b.jpg"},5531:function(t,e,s){t.exports=s.p+"img/carouselImage4.b23981d2.jpg"},9694:function(t,e,s){t.exports=s.p+"img/carouselImage5.528c413e.jpg"},4713:function(t,e,s){t.exports=s.p+"img/carouselImage6.551ebee2.jpg"},364:function(t,e,s){t.exports=s.p+"img/carouselImage7.1b8f2c33.jpg"},4137:function(t,e,s){t.exports=s.p+"img/tamashiBookingImage.6ec7231b.jpg"}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,o){if(!a){var n=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],o=t[u][2];for(var l=!0,r=0;r<a.length;r++)(!1&o||n>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[r])}))?a.splice(r--,1):(l=!1,o<n&&(n=o));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,i,o]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/direct_booking/"}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,n=a[0],l=a[1],r=a[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(r)var u=r(s)}for(e&&e(a);c<n.length;c++)o=n[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},a=self["webpackChunktable_reservation"]=self["webpackChunktable_reservation"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(4474)}));a=s.O(a)})();
//# sourceMappingURL=app.c1347fec.js.map