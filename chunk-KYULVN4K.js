import{A as E,Ab as St,B as z,Bb as Dt,C as w,Cb as di,Db as hi,E as V,Eb as ui,F as pt,Fb as Qe,G as Le,Gb as te,H as K,Ha as M,Hb as he,I as S,Ia as Gt,Ib as Ue,J as Ht,Ja as qt,Jb as ue,K as p,Ka as De,Kb as xt,L as se,La as bt,Lb as pi,M as Ce,Ma as Zt,Mb as kt,N as J,Na as $t,Nb as f,O as Q,Ob as ie,P as Ne,Pb as H,Q as ft,Qb as Ge,R as b,Rb as qe,S as P,Sb as fi,T,Ta as Kt,U as Yt,Ub as mi,V as j,Va as Jt,Vb as xe,W as ze,Wa as ei,Wb as gi,X as mt,Xb as Ot,Y as ee,Ya as ti,Yb as _i,Z as U,_ as G,a as k,b as Ie,c as Nt,ca as I,d as Be,da as g,e as zt,ea as _,f as m,fa as Qt,fb as ii,g as ht,ga as we,h as jt,ha as Se,ia as ae,ib as Ct,j as Fe,ja as je,jb as ni,k as Xt,ka as gt,kb as We,l as Wt,la as X,m as N,ma as B,mb as oi,n as ut,o as re,ob as L,p as be,pb as ri,qa as _t,r as v,ra as vt,rb as de,s as O,sa as yt,sb as si,t as R,ta as Xe,tb as ai,u as l,ua as le,ub as He,va as Ut,vb as wt,w as Ve,wa as D,wb as W,x as Z,xa as ce,xb as Ye,y as $,yb as li,z as y,zb as ci}from"./chunk-53FPVORQ.js";var rn=20,Ze=(()=>{class n{_ngZone=l(w);_platform=l(W);_renderer=l(J).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new m;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=rn){return this._platform.isBrowser?new zt(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(ut(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):jt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let o=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(N(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&i.push(r)}),i}_scrollableContainsElement(e,i){let o=li(i),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yi=(()=>{class n{elementRef=l(S);scrollDispatcher=l(Ze);ngZone=l(w);dir=l(ie,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new m;_renderer=l(Q);_cleanupScroll;_elementScrolled=new m;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),o&&ue()!=he.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),ue()==he.INVERTED?e.left=e.right:ue()==he.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Ue()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?o:i:e=="end"&&(e=s?i:o),s&&ue()==he.INVERTED?e==i?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&ue()==he.NEGATED?e==i?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==i?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(i){return new(i||n)};static \u0275dir=T({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),sn=20,ke=(()=>{class n{_platform=l(W);_listeners;_viewportSize=null;_change=new m;_document=l(E);constructor(){let e=l(w),i=l(J).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[i.listen("window","resize",o),i.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),s=-r.top||e.body?.scrollTop||i.scrollY||o.scrollTop||0,a=-r.left||e.body?.scrollLeft||i.scrollX||o.scrollLeft||0;return{top:s,left:a}}change(e=sn){return e>0?this._change.pipe(ut(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=P({type:n});static \u0275inj=O({})}return n})(),Rt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=P({type:n});static \u0275inj=O({imports:[H,vi,H,vi]})}return n})();var Oe=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},pe=class extends Oe{component;viewContainerRef;injector;projectableNodes;bindings;constructor(t,e,i,o,r){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=o,this.bindings=r||null}},fe=class extends Oe{templateRef;viewContainerRef;context;injector;constructor(t,e,i,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},Et=class extends Oe{element;constructor(t){super(),this.element=t instanceof S?t.nativeElement:t}},me=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof pe)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof fe)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof Et)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},$e=class extends me{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,o=i.get(ft,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,o=t.injector||this._defaultInjector||y.NULL,r=o.get(Ve,i.injector);e=Zt(t.component,{elementInjector:o,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(i);o!==-1&&e.remove(o)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Re=(()=>{class n extends me{_moduleRef=l(ft,{optional:!0});_document=l(E);_viewContainerRef=l(Ne);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new z;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(o,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(i,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||n)};static \u0275dir=T({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[j]})}return n})(),ne=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=P({type:n});static \u0275inj=O({})}return n})();var bi=Ue();function ve(n){return new Ke(n.get(ke),n.get(E))}var Ke=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=f(-this._previousScrollPosition.left),t.style.top=f(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,o=e.style,r=i.scrollBehavior||"",s=o.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),bi&&(i.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),bi&&(i.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function Oi(n,t){return new Je(n.get(Ze),n.get(w),n.get(ke),t)}var Je=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,o){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(N(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ee=class{enable(){}disable(){}attach(){}};function Pt(n,t){return t.some(e=>{let i=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,s=n.left>e.right;return i||o||r||s})}function Ci(n,t){return t.some(e=>{let i=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,s=n.right>e.right;return i||o||r||s})}function Ri(n,t){return new et(n.get(Ze),n.get(ke),n.get(w),t)}var et=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,o){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();Pt(e,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ei=(()=>{class n{_injector=l(y);constructor(){}noop=()=>new Ee;close=e=>Oi(this._injector,e);block=()=>ve(this._injector);reposition=e=>Ri(this._injector,e);static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ge=class{positionStrategy;scrollStrategy=new Ee;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var tt=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Pi=(()=>{class n{_attachedOverlays=[];_document=l(E);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ai=(()=>{class n extends Pi{_ngZone=l(w);_renderer=l(J).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let r=i[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=K(n)))(o||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Mi=(()=>{class n extends Pi{_platform=l(W);_ngZone=l(w);_renderer=l(J).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,"pointerdown",this._pointerDownListener,o),r.listen(i,"click",this._clickListener,o),r.listen(i,"auxclick",this._clickListener,o),r.listen(i,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=wt(e)};_clickListener=e=>{let i=wt(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(wi(a.overlayElement,i)||wi(a.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=K(n)))(o||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wi(n,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Ti=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),ot=(()=>{class n{_platform=l(W);_containerElement;_document=l(E);_styleLoader=l(St);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||xt()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let i=this._document.createElement("div");i.classList.add(e),xt()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Ti)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),At=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,o){this._renderer=e,this._ngZone=i,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Mt(n){return n&&n.nodeType===1}var _e=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new m;_attachments=new m;_detachments=new m;_positionStrategy;_scrollStrategy;_locationChanges=Be.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new m;_outsidePointerEvents=new m;_afterNextRenderRef;constructor(t,e,i,o,r,s,a,c,h,d=!1,u,C){this._portalOutlet=t,this._host=e,this._pane=i,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=h,this._animationsDisabled=d,this._injector=u,this._renderer=C,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=se(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=k(k({},this._config),t),this._updateElementSize()}setDirection(t){this._config=Ie(k({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=f(this._config.width),t.height=f(this._config.height),t.minWidth=f(this._config.minWidth),t.minHeight=f(this._config.minHeight),t.maxWidth=f(this._config.maxWidth),t.maxHeight=f(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Mt(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new At(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let o=Dt(e||[]).filter(r=>!!r);o.length&&(i?t.classList.add(...o):t.classList.remove(...o))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=se(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},Si="cdk-overlay-connected-position-bounding-box",ln=/([A-Za-z%]+)$/;function Ii(n,t){return new it(t,n.get(ke),n.get(E),n.get(W),n.get(ot))}var it=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new m;_resizeSubscription=Be.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,o,r){this._viewportRuler=e,this._document=i,this._platform=o,this._overlayContainer=r,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(Si),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,o=this._containerRect,r=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,o,a),h=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(h,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,h,i)){r.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:h,originPoint:c,position:a,overlayRect:e})}if(r.length){let a=null,c=-1;for(let h of r){let d=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);d>c&&(c=d,a=h)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&oe(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Si),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof S?this._origin.nativeElement:Mt(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let o;if(i.originX=="center")o=t.left+t.width/2;else{let s=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;o=i.originX=="start"?s:a}e.left<0&&(o-=e.left);let r;return i.originY=="center"?r=t.top+t.height/2:r=i.originY=="top"?t.top:t.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(t,e,i){let o;i.overlayX=="center"?o=-e.width/2:i.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return i.overlayY=="center"?r=-e.height/2:r=i.overlayY=="top"?0:-e.height,{x:t.x+o,y:t.y+r}}_getOverlayFit(t,e,i,o){let r=xi(e),{x:s,y:a}=t,c=this._getOffset(o,"x"),h=this._getOffset(o,"y");c&&(s+=c),h&&(a+=h);let d=0-s,u=s+r.width-i.width,C=0-a,A=a+r.height-i.height,x=this._subtractOverflows(r.width,d,u),F=this._subtractOverflows(r.height,C,A),Lt=x*F;return{visibleArea:Lt,isCompletelyWithinViewport:r.width*r.height===Lt,fitsInViewportVertically:F===r.height,fitsInViewportHorizontally:x==r.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let o=i.bottom-e.y,r=i.right-e.x,s=Di(this._overlayRef.getConfig().minHeight),a=Di(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||s!=null&&s<=o,h=t.fitsInViewportHorizontally||a!=null&&a<=r;return c&&h}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let o=xi(e),r=this._viewportRect,s=Math.max(t.x+o.width-r.width,0),a=Math.max(t.y+o.height-r.height,0),c=Math.max(r.top-i.top-t.y,0),h=Math.max(r.left-i.left-t.x,0),d=0,u=0;return o.width<=r.width?d=h||-s:d=t.x<this._getViewportMarginStart()?r.left-i.left-t.x:0,o.height<=r.height?u=c||-a:u=t.y<this._getViewportMarginTop()?r.top-i.top-t.y:0,this._previousPushAmount={x:d,y:u},{x:t.x+d,y:t.y+u}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!cn(this._lastScrollVisibility,i)){let o=new tt(t,i);this._positionChanges.next(o)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=t.overlayY;t.overlayX==="center"?i="center":this._isRtl()?i=t.overlayX==="start"?"right":"left":i=t.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${i} ${o}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,o=this._isRtl(),r,s,a;if(e.overlayY==="top")s=t.y,r=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-a+this._getViewportMarginTop();else{let A=Math.min(i.bottom-t.y+i.top,t.y),x=this._lastBoundingBoxSize.height;r=A*2,s=t.y-A,r>x&&!this._isInitialRender&&!this._growAfterOpen&&(s=t.y-x/2)}let c=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,h=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,d,u,C;if(h)C=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=t.x-this._getViewportMarginStart();else if(c)u=t.x,d=i.right-t.x-this._getViewportMarginEnd();else{let A=Math.min(i.right-t.x+i.left,t.x),x=this._lastBoundingBoxSize.width;d=A*2,u=t.x-A,d>x&&!this._isInitialRender&&!this._growAfterOpen&&(u=t.x-x/2)}return{top:s,left:u,bottom:a,right:C,width:d,height:r}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=f(i.width),o.height=f(i.height),o.top=f(i.top)||"auto",o.bottom=f(i.bottom)||"auto",o.left=f(i.left)||"auto",o.right=f(i.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=f(r)),s&&(o.maxWidth=f(s))}this._lastBoundingBoxSize=i,oe(this._boundingBox.style,o)}_resetBoundingBoxStyles(){oe(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){oe(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let i={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let d=this._viewportRuler.getViewportScrollPosition();oe(i,this._getExactOverlayY(e,t,d)),oe(i,this._getExactOverlayX(e,t,d))}else i.position="static";let a="",c=this._getOffset(e,"x"),h=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),h&&(a+=`translateY(${h}px)`),i.transform=a.trim(),s.maxHeight&&(o?i.maxHeight=f(s.maxHeight):r&&(i.maxHeight="")),s.maxWidth&&(o?i.maxWidth=f(s.maxWidth):r&&(i.maxWidth="")),oe(this._pane.style,i)}_getExactOverlayY(t,e,i){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),t.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;o.bottom=`${s-(r.y+this._overlayRect.height)}px`}else o.top=f(r.y);return o}_getExactOverlayX(t,e,i){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let s;if(this._isRtl()?s=t.overlayX==="end"?"left":"right":s=t.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;o.right=`${a-(r.x+this._overlayRect.width)}px`}else o.left=f(r.x);return o}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ci(t,i),isOriginOutsideView:Pt(t,i),isOverlayClipped:Ci(e,i),isOverlayOutsideView:Pt(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,o)=>i-Math.max(o,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&Dt(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof S)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let i=e.getBoundingClientRect();return t&&(e.style.display=""),i}};function oe(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function Di(n){if(typeof n!="number"&&n!=null){let[t,e]=n.split(ln);return!e||e==="px"?parseFloat(t):null}return n||null}function xi(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function cn(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var ki="cdk-global-overlay-wrapper";function ye(n){return new nt}var nt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(ki),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:s,maxHeight:a}=i,c=(o==="100%"||o==="100vw")&&(!s||s==="100%"||s==="100vw"),h=(r==="100%"||r==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,u=this._xOffset,C=this._overlayRef.getConfig().direction==="rtl",A="",x="",F="";c?F="flex-start":d==="center"?(F="center",C?x=u:A=u):C?d==="left"||d==="end"?(F="flex-end",A=u):(d==="right"||d==="start")&&(F="flex-start",x=u):d==="left"||d==="start"?(F="flex-start",A=u):(d==="right"||d==="end")&&(F="flex-end",x=u),t.position=this._cssPosition,t.marginLeft=c?"0":A,t.marginTop=h?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":x,e.justifyContent=F,e.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(ki),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},Bi=(()=>{class n{_injector=l(y);constructor(){}global(){return ye()}flexibleConnectedTo(e){return Ii(this._injector,e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Fi=new R("OVERLAY_DEFAULT_CONFIG");function rt(n,t){n.get(St).load(Ti);let e=n.get(ot),i=n.get(E),o=n.get(te),r=n.get(mt),s=n.get(ie),a=n.get(Q,null,{optional:!0})||n.get(J).createRenderer(null,null),c=new ge(t),h=n.get(Fi,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,"showPopover"in i.body?c.usePopover=t?.usePopover??h:c.usePopover=!1;let d=i.createElement("div"),u=i.createElement("div");d.id=o.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),u.appendChild(d),c.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let C=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Mt(C)?C.after(u):C?.type==="parent"?C.element.appendChild(u):e.getContainerElement().appendChild(u),new _e(new $e(d,r,n),u,d,c,n.get(w),n.get(Ai),i,n.get($t),n.get(Mi),t?.disableAnimations??n.get(Ht,null,{optional:!0})==="NoopAnimations",n.get(Ve),a)}var Vi=(()=>{class n{scrollStrategies=l(Ei);_positionBuilder=l(Bi);_injector=l(y);constructor(){}create(e){return rt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Pe=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=P({type:n});static \u0275inj=O({providers:[Vi],imports:[H,ne,Rt,Rt]})}return n})();function dn(n,t){}var q=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var It=(()=>{class n extends me{_elementRef=l(S);_focusTrapFactory=l(hi);_config;_interactivityChecker=l(di);_ngZone=l(w);_focusMonitor=l(ci);_renderer=l(Q);_changeDetectorRef=l(De);_injector=l(y);_platform=l(W);_document=l(E);_portalOutlet;_focusTrapped=new m;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(q,{optional:!0})||new q,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),s(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",o),s=this._renderer.listen(e,"mousedown",o)})),e.focus(i)}_focusByCssSelector(e,i){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,i)}_trapFocus(e){this._isDestroyed||se(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let o=He(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=He();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=He()))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=b({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(i,o){if(i&1&&_t(Re,7),i&2){let r;vt(r=yt())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,o){i&2&&ee("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[j],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,o){i&1&&ze(0,dn,0,0,"ng-template",0)},dependencies:[Re],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Ae=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new m;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(t,e){this.overlayRef=t,this.config=e,this.disableClose=e.disableClose,this.backdropClick=t.backdropClick(),this.keydownEvents=t.keydownEvents(),this.outsidePointerEvents=t.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!Qe(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=t.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(t,e){if(this._canClose(t)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(t),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(t="",e=""){return this.overlayRef.updateSize({width:t,height:e}),this}addPanelClass(t){return this.overlayRef.addPanelClass(t),this}removePanelClass(t){return this.overlayRef.removePanelClass(t),this}_canClose(t){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(t,e,this.componentInstance))}},hn=new R("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=l(y);return()=>ve(n)}}),un=new R("DialogData"),pn=new R("DefaultDialogConfig");function fn(n){let t=V(n),e=new z;return{valueSignal:t,get value(){return t()},change:e,ngOnDestroy(){e.complete()}}}var Bt=(()=>{class n{_injector=l(y);_defaultOptions=l(pn,{optional:!0});_parentDialog=l(n,{optional:!0,skipSelf:!0});_overlayContainer=l(ot);_idGenerator=l(te);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new m;_afterOpenedAtThisLevel=new m;_ariaHiddenElements=new Map;_scrollStrategy=l(hn);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Fe(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(be(void 0)));constructor(){}open(e,i){let o=this._defaultOptions||new q;i=k(k({},o),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let r=this._getOverlayConfig(i),s=rt(this._injector,r),a=new Ae(s,i),c=this._attachContainer(s,a,i);if(a.containerInstance=c,!this.openDialogs.length){let h=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(re(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(h)}):this._hideNonDialogContentFromAssistiveTechnology(h)}return this._attachDialogContent(e,a,c,i),this.openDialogs.push(a),a.closed.subscribe(()=>this._removeOpenDialog(a,!0)),this.afterOpened.next(a),a}closeAll(){Tt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){Tt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Tt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new ge({positionStrategy:e.positionStrategy||ye().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,o){let r=o.injector||o.viewContainerRef?.injector,s=[{provide:q,useValue:o},{provide:Ae,useValue:i},{provide:_e,useValue:e}],a;o.container?typeof o.container=="function"?a=o.container:(a=o.container.type,s.push(...o.container.providers(o))):a=It;let c=new pe(a,o.viewContainerRef,y.create({parent:r||this._injector,providers:s}));return e.attach(c).instance}_attachDialogContent(e,i,o,r){if(e instanceof Ce){let s=this._createInjector(r,i,o,void 0),a={$implicit:r.data,dialogRef:i};r.templateContext&&(a=k(k({},a),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new fe(e,null,a,s))}else{let s=this._createInjector(r,i,o,this._injector),a=o.attachComponentPortal(new pe(e,r.viewContainerRef,s));i.componentRef=a,i.componentInstance=a.instance}}_createInjector(e,i,o,r){let s=e.injector||e.viewContainerRef?.injector,a=[{provide:un,useValue:e.data},{provide:Ae,useValue:i}];return e.providers&&(typeof e.providers=="function"?a.push(...e.providers(i,e,o)):a.push(...e.providers)),e.direction&&(!s||!s.get(ie,null,{optional:!0}))&&a.push({provide:ie,useValue:fn(e.direction)}),y.create({parent:s||r,providers:a})}_removeOpenDialog(e,i){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,s)=>{r?s.setAttribute("aria-hidden",r):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let o=i.length-1;o>-1;o--){let r=i[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tt(n,t){let e=n.length;for(;e--;)t(n[e])}var Ni=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=P({type:n});static \u0275inj=O({providers:[Bt],imports:[Pe,ne,ui,ne]})}return n})();function mn(n,t){}var at=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ft="mdc-dialog--open",zi="mdc-dialog--opening",ji="mdc-dialog--closing",gn=150,_n=75,vn=(()=>{class n extends It{_animationStateChanged=new z;_animationsEnabled=!kt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Wi(this._config.enterAnimationDuration)??gn:0;_exitAnimationDuration=this._animationsEnabled?Wi(this._config.exitAnimationDuration)??_n:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Xi,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(zi,Ft)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ft),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ft),this._animationsEnabled?(this._hostElement.style.setProperty(Xi,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ji)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(zi,ji)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(o){return(e||(e=K(n)))(o||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,o){i&2&&(gt("id",o._config.id),ee("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),le("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[j],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,o){i&1&&(g(0,"div",0)(1,"div",1),ze(2,mn,0,0,"ng-template",2),_()())},dependencies:[Re],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),Xi="--mat-dialog-transition-duration";function Wi(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Ye(n.substring(0,n.length-2)):n.endsWith("s")?Ye(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var st=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(st||{}),Me=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ht(1);_beforeClosed=new ht(1);_result;_closeFallbackTimeout;_state=st.OPEN;_closeInteractionType;constructor(t,e,i){this._ref=t,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=t.id,t.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(N(o=>o.state==="opened"),re(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(N(o=>o.state==="closed"),re(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Wt(this.backdropClick(),this.keydownEvents().pipe(N(o=>o.keyCode===27&&!this.disableClose&&!Qe(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),Hi(this,o.type==="keydown"?"keyboard":"mouse"))})}close(t){let e=this._config.closePredicate;e&&!e(t,this._config,this.componentInstance)||(this._result=t,this._containerInstance._animationStateChanged.pipe(N(i=>i.state==="closing"),re(1)).subscribe(i=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=st.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(t){let e=this._ref.config.positionStrategy;return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(t="",e=""){return this._ref.updateSize(t,e),this}addPanelClass(t){return this._ref.addPanelClass(t),this}removePanelClass(t){return this._ref.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=st.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Hi(n,t,e){return n._closeInteractionType=t,n.close(e)}var Vt=new R("MatMdcDialogData"),yn=new R("mat-mdc-dialog-default-options"),bn=new R("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(y);return()=>ve(n)}}),Te=(()=>{class n{_defaultOptions=l(yn,{optional:!0});_scrollStrategy=l(bn);_parentDialog=l(n,{optional:!0,skipSelf:!0});_idGenerator=l(te);_injector=l(y);_dialog=l(Bt);_animationsDisabled=kt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new m;_afterOpenedAtThisLevel=new m;dialogConfigClass=at;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Fe(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(be(void 0)));constructor(){this._dialogRefConstructor=Me,this._dialogContainerType=vn,this._dialogDataToken=Vt}open(e,i){let o;i=k(k({},this._defaultOptions||new at),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,Ie(k({},i),{positionStrategy:ye(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:q,useValue:i}]},templateContext:()=>({dialogRef:o}),providers:(s,a,c)=>(o=new this._dialogRefConstructor(s,i,c),o.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:a.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(o);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Yi=(()=>{class n{dialogRef=l(Me,{optional:!0});_elementRef=l(S);_dialog=l(Te);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Zi(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let i=e._matDialogClose||e._matDialogCloseResult;i&&(this.dialogResult=i.currentValue)}_onButtonClick(e){Hi(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=T({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,o){i&1&&X("click",function(s){return o._onButtonClick(s)}),i&2&&ee("aria-label",o.ariaLabel||null)("type",o.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Le]})}return n})(),Qi=(()=>{class n{_dialogRef=l(Me,{optional:!0});_elementRef=l(S);_dialog=l(Te);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Zi(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=T({type:n})}return n})(),Ui=(()=>{class n extends Qi{id=l(te).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=K(n)))(o||n)}})();static \u0275dir=T({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,o){i&2&&gt("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[j]})}return n})(),Gi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=T({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Yt([yi])]})}return n})(),qi=(()=>{class n extends Qi{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=K(n)))(o||n)}})();static \u0275dir=T({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,o){i&2&&le("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},features:[j]})}return n})();function Zi(n,t){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?t.find(i=>i.id===e.id):null}var $i=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=P({type:n});static \u0275inj=O({providers:[Te],imports:[Ni,Pe,ne,H]})}return n})();var lt=class n{store=l(ii);router=l(Jt);_mode=V("exam");mode=this._mode.asReadonly();categoryId=V(void 0);questions=V([]);finished=!1;_loaded=V(!1);loaded=this._loaded.asReadonly();_currentQuestionIndex=V(0);currentQuestionIndex=this._currentQuestionIndex.asReadonly();_answers=V([]);answers=this._answers.asReadonly();isExam=M(()=>oi(this._mode()));questionsCount=M(()=>this.questions().length);currentQuestion=M(()=>this.questions()[this._currentQuestionIndex()]??null);currentAnswer=M(()=>this._answers()[this._currentQuestionIndex()]??null);setAnswer(t){let e=this.currentQuestion(),i=this._currentQuestionIndex();if(!(this.finished||!e||L(this._answers()[i]))){if(this._answers.update(o=>{let r=[...o];return r[i]={questionId:e.id,categoryId:e.category,answerIndex:t,isCorrect:e.answer===t},r}),this.isExam()&&ri(this._answers())>We){this.finishTest();return}this.saveProgress()}}nextQuestion(){if(this.finished)return;let t=this.answers(),e=this.currentQuestionIndex(),i=t.findIndex((r,s)=>s>e&&!L(r));if(i!==-1){this.updateCurrentQuestionIndex(i);return}let o=t.findIndex(r=>!L(r));if(o!==-1){this.updateCurrentQuestionIndex(o);return}this.finishTest()}updateCurrentQuestionIndex(t){this._currentQuestionIndex.set(t),this.saveProgress()}startTest(t,e){this._mode.set(t),this.categoryId.set(e),this.finished=!1,this._loaded.set(!1),this.questions.set([]),this._answers.set([]),this._currentQuestionIndex.set(0),this.store.dispatch(new mi.Load).subscribe(()=>{if(this.restoreProgress()){this._loaded.set(!0);return}let i=this.selectQuestions(t,e);this._answers.set(Array.from({length:i.length},()=>({}))),this.questions.set(i),this._loaded.set(!0)})}finishTest(){if(this.finished)return;this.finished=!0,this.clearProgress();let t=this.getTestData();if(!t.questions.length){this.router.navigateByUrl(this._mode()==="learning"?"/category-list":"/");return}this.store.dispatch(new si.Save(t)).subscribe(()=>{this.router.navigateByUrl(`/result/${t.id}`)})}getTestData(){let t=this.questions(),e=this.answers();if(!this.isExam()){let i=e.map((o,r)=>L(o)?r:-1).filter(o=>o!==-1);t=i.map(o=>t[o]),e=i.map(o=>e[o])}return t=t.map(s=>{var a=s,{explanation:i,rules:o}=a,r=Nt(a,["explanation","rules"]);return r}),{id:new Date().getTime(),mode:this._mode(),categoryId:this.categoryId(),questions:t,answers:e}}get progressCategoryId(){return this._mode()==="learning"?this.categoryId():void 0}saveProgress(){let t=this.progressCategoryId;if(this.finished||t===void 0||!this._loaded())return;if(!this._answers().some(L)){this.clearProgress();return}let e={categoryId:t,questionIds:this.questions().map(i=>i.id),answers:this._answers(),currentQuestionIndex:this._currentQuestionIndex(),updatedAt:Date.now()};this.store.dispatch(new Ot.Save(e))}clearProgress(){let t=this.progressCategoryId;t!==void 0&&this.store.dispatch(new Ot.Clear(t))}restoreProgress(){let t=this.progressCategoryId;if(t===void 0)return!1;let e=this.store.selectSnapshot(_i.getByCategory(t));if(!e)return!1;let i=this.store.selectSnapshot(xe.getByCategory(t)),o=new Map(i.map(h=>[h.id,h])),r=[],s=[],a=0;e.questionIds.forEach((h,d)=>{let u=o.get(h);u&&(d<=e.currentQuestionIndex&&(a=r.length),r.push(u),s.push(e.answers[d]??{}),o.delete(h))});let c=de([...o.values()]);return r.push(...c),s.push(...c.map(()=>({}))),s.some(L)?(this.questions.set(r),this._answers.set(s),this._currentQuestionIndex.set(a),!0):(this.clearProgress(),!1)}selectQuestions(t,e){let i=()=>e===void 0?[]:this.store.selectSnapshot(xe.getByCategory(e));switch(t){case"exam":return de(this.store.selectSnapshot(xe.getAll)).slice(0,Ct);case"categoryExam":return de(i()).slice(0,Ct);case"learning":return de(i());case"mistakes":{let o=this.store.selectSnapshot(ai.getMistakes);return de(this.store.selectSnapshot(xe.getByRefs(o)))}}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var ct=class n{data=l(Vt);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-confirm-dialog"]],decls:9,vars:5,consts:[["mat-dialog-title",""],["align","end"],["matButton","",3,"mat-dialog-close"],["matButton","filled",3,"mat-dialog-close"]],template:function(e,i){e&1&&(g(0,"h2",0),D(1),_(),g(2,"mat-dialog-content"),D(3),_(),g(4,"mat-dialog-actions",1)(5,"button",2),D(6,"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),_(),g(7,"button",3),D(8),_()()),e&2&&(p(),ce(i.data.title),p(2),ce(i.data.message),p(2),I("mat-dialog-close",!1),p(2),I("mat-dialog-close",!0),p(),ce(i.data.confirmText))},dependencies:[$i,Yi,Ui,qi,Gi,qe,Ge],encapsulation:2,changeDetection:0})};function Sn(n,t){n&1&&ae(0,"div",2)}var Dn=new R("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var en=(()=>{class n{_elementRef=l(S);_ngZone=l(w);_changeDetectorRef=l(De);_renderer=l(Q);_cleanupTransitionEnd;constructor(){let e=pi(),i=l(Dn,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ji(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ji(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new z;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=b({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,o){i&2&&(ee("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),Ut("mat-"+o.color),le("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",bt],bufferValue:[2,"bufferValue","bufferValue",bt],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,o){i&1&&(we(0,"div",0),ae(1,"div",1),U(2,Sn,1,0,"div",2),Se(),we(3,"div",3),ae(4,"span",4),Se(),we(5,"div",5),ae(6,"span",4),Se()),i&2&&(p(),Xe("flex-basis",o._getBufferBarFlexBasis()),p(),G(o.mode==="buffer"?2:-1),p(),Xe("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Ji(n,t=0,e=100){return Math.max(t,Math.min(e,n))}var tn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=P({type:n});static \u0275inj=O({imports:[H]})}return n})();var dt=class n{minutes=qt(20);timeEnd=Gt();initTime=Date.now();totalSeconds=M(()=>this.minutes()*60);tick=ti(Xt(1e3),{initialValue:0});remainingSeconds=M(()=>{let t=this.tick(),e=(Date.now()-this.initTime)/1e3;return Math.max(this.totalSeconds()-e,0)});progress=M(()=>100-this.remainingSeconds()/this.totalSeconds()*100);displayTime=M(()=>{let t=this.remainingSeconds(),e=Math.floor(t/60),i=Math.floor(t%60);return`${e}:${i.toString().padStart(2,"0")}`});constructor(){pt(()=>{this.remainingSeconds()<=0&&this.timeEnd.emit()})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-timer"]],inputs:{minutes:[1,"minutes"]},outputs:{timeEnd:"timeEnd"},decls:3,vars:2,consts:[[1,"timer-display"],["mode","determinate",3,"value"]],template:function(e,i){e&1&&(g(0,"div",0),D(1),_(),Qt(2,"mat-progress-bar",1)),e&2&&(p(),ce(i.displayTime()),p(),I("value",i.progress()))},dependencies:[tn,en],styles:["[_nghost-%COMP%]{display:block;padding:14px 18px 18px;border:1px solid var(--app-border-color);border-radius:var(--app-radius);background:var(--app-card-bg);box-shadow:var(--app-shadow)}.timer-display[_ngcontent-%COMP%]{text-align:center;margin-bottom:12px;font-size:28px;font-weight:800;letter-spacing:-.02em;font-variant-numeric:tabular-nums;color:var(--mat-sys-primary)}"],changeDetection:0})};function kn(n,t){if(n&1){let e=je();g(0,"app-timer",7),X("timeEnd",function(){Z(e);let o=B(3);return $(o.onTimeEnd())}),_()}if(n&2){let e=B(3);I("minutes",e.examMinutes)}}function On(n,t){if(n&1){let e=je();g(0,"button",8),X("click",function(){Z(e);let o=B(3);return $(o.onFinish())}),D(1,"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438"),_()}}function Rn(n,t){if(n&1){let e=je();U(0,kn,1,1,"app-timer",1),g(1,"app-question-switcher",2),X("setQuestionIndex",function(o){Z(e);let r=B(2);return $(r.setQuestionIndex(o))}),_(),g(2,"app-question-card",3),X("setAnswer",function(o){Z(e);let r=B(2);return $(r.onSetAnswer(o))}),_(),g(3,"div",4)(4,"button",5),X("click",function(){Z(e);let o=B(2);return $(o.onPrev())}),D(5,"\u2039 \u041D\u0430\u0437\u0430\u0434"),_(),U(6,On,2,0,"button",6),g(7,"button",5),X("click",function(){Z(e);let o=B(2);return $(o.onNext())}),D(8,"\u0414\u0430\u043B\u0456 \u203A"),_()()}if(n&2){let e=B(2);G(e.isExam()?0:-1),p(),I("answers",e.answers())("currentQuestionIndex",e.currentQuestionIndex())("reveal",!e.isExam()),p(),I("question",e.currentQuestion())("answer",e.currentAnswer())("reveal",!e.isExam())("explain",!e.isExam()),p(2),I("disabled",e.currentQuestionIndex()===0),p(2),G(e.mode()!=="mistakes"||!e.hasUnanswered()?6:-1),p(),I("disabled",e.currentQuestionIndex()>=e.questionsCount()-1)}}function En(n,t){n&1&&(g(0,"p"),D(1,"\u041F\u043E\u043C\u0438\u043B\u043E\u043A \u043D\u0435\u043C\u0430\u0454 \u{1F31E}"),_())}function Pn(n,t){n&1&&(g(0,"p"),D(1,"\u041F\u0438\u0442\u0430\u043D\u044C \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."),_())}function An(n,t){if(n&1&&(g(0,"div",0),U(1,En,2,0,"p")(2,Pn,2,0,"p"),g(3,"a",9),D(4,"\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443"),_()()),n&2){let e=B(2);p(),G(e.mode()==="mistakes"?1:2)}}function Mn(n,t){if(n&1&&U(0,Rn,9,11)(1,An,5,1,"div",0),n&2){let e=B();G(e.questionsCount()?0:1)}}var nn=class n{testService=l(lt);activatedRoute=l(Kt);dialog=l(Te);examMinutes=ni;isExam=this.testService.isExam;mode=this.testService.mode;loaded=this.testService.loaded;questionsCount=this.testService.questionsCount;currentQuestion=this.testService.currentQuestion;currentQuestionIndex=this.testService.currentQuestionIndex;currentAnswer=this.testService.currentAnswer;answers=this.testService.answers;ngOnInit(){let t=this.activatedRoute.snapshot.data.mode,e=this.activatedRoute.snapshot.params.id;this.testService.startTest(t,e?+e:void 0)}hasUnanswered=M(()=>this.answers().some(t=>!L(t)));onSetAnswer(t){this.testService.setAnswer(t),this.isExam()&&this.testService.nextQuestion()}setQuestionIndex(t){this.testService.updateCurrentQuestionIndex(t)}onPrev(){this.setQuestionIndex(this.currentQuestionIndex()-1)}onNext(){this.setQuestionIndex(this.currentQuestionIndex()+1)}onTimeEnd(){this.testService.finishTest()}onFinish(){if(!this.isExam()){this.testService.finishTest();return}let t=this.answers().filter(i=>!L(i)).length,e={title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0456\u0441\u043F\u0438\u0442?",message:t?`\u0411\u0435\u0437 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456: ${t}. \u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0440\u0430\u0445\u0443\u044E\u0442\u044C\u0441\u044F \u044F\u043A \u043F\u043E\u043C\u0438\u043B\u043A\u0438 (\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043D\u0435 \u0431\u0456\u043B\u044C\u0448\u0435 ${We}).`:"\u0412\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043B\u0438 \u043D\u0430 \u0432\u0441\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F.",confirmText:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438"};this.dialog.open(ct,{data:e}).afterClosed().subscribe(i=>{i&&this.testService.finishTest()})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-test"]],decls:1,vars:1,consts:[[1,"empty"],[3,"minutes"],[3,"setQuestionIndex","answers","currentQuestionIndex","reveal"],[3,"setAnswer","question","answer","reveal","explain"],[1,"actions"],["matButton","outlined",3,"click","disabled"],["matButton","outlined"],[3,"timeEnd","minutes"],["matButton","outlined",3,"click"],["matButton","outlined","routerLink","/"]],template:function(e,i){e&1&&U(0,Mn,2,1),e&2&&G(i.loaded()?0:-1)},dependencies:[qe,Ge,ei,dt,fi,gi],styles:["app-timer[_ngcontent-%COMP%], app-question-switcher[_ngcontent-%COMP%]{margin-bottom:14px}.actions[_ngcontent-%COMP%]{gap:10px;display:flex;justify-content:center;margin-top:24px}.empty[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0})};export{nn as TestComponent};
