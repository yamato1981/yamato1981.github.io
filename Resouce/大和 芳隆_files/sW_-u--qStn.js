if (self.CavalryLogger) { CavalryLogger.start_js(["PTxam"]); }

__d("EventUIActions",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNKNOWN:"unknown",ADD_COVER_PHOTO:"add_cover_photo",ADD_TO_CALENDAR:"add_to_calendar",ARCHIVE:"archive",BLOCK_INVITER:"block_inviter",CANCEL:"cancel",CHECKIN:"checkin",CREATE:"create",CREATE_REPEAT:"create_repeat",DECLINE:"decline",DELETE:"delete",DISMISS_CONFIRMATION:"dismiss_confirmation",EDIT:"edit",EDIT_HOST:"edit_host",EXPORT:"export",EXPORT_ATTENDEES:"export_attendees",GET_TICKET:"get_ticket",HIDE_SUBSCRIBED_CALENDAR_EVENT:"hide_subscribed_calendar_event",INVITE:"invite",JOIN:"join",MANAGE_EVENT:"manage_event",MAYBE:"maybe",MESSAGE_GUEST:"message_guest",NOTIFICATIONS:"notifications",POST:"post",PROMOTE:"promote",PROMOTE_BUTTON:"promote_button",PROMOTE_ON_FB_TICKET:"promote_on_fb_ticket",PROMOTE_TICKET:"promote_ticket",PUBLISH:"publish",PURCHASE:"purchase",QRCODE:"qr_code",REMOVE:"remove",REMOVE_FROM_CALENDAR:"remove_from_calendar",REMOVE_SELF:"remove_self",REPORT:"report",SAVE:"save",SET_FEED_SUBSCRIPTION:"set_feed_subscription",SET_NOTIFICATION:"set_notification",SET_REMINDER:"set_reminder",SHARE:"share",SHARE_TIMELINE:"share_timeline",SOCIAL_ADS_OUT:"social_ads_out",UNSUBSCRIBE:"unsubscribe",UNSUBSCRIBE_EVENTS_CALENDAR:"unsubscribe_events_calendar",UNWATCH:"unwatch",WATCH:"watch"};}),null);
__d('FBTilesStaticReportButton.react',['React','FBTilesReportButton.react'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this.$FBTilesStaticReportButton1=function(){return this.props.staticMapConfig;}.bind(this);}j.prototype.render=function(){'use strict';return c('React').createElement(c('FBTilesReportButton.react'),{className:this.props.className,mapConfig:this.$FBTilesStaticReportButton1});};f.exports=j;}),null);
__d('EventsToggle',['CSS','Event'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l,m){'use strict';this.$EventsToggle1=j;this.$EventsToggle2=k;this.$EventsToggle3=i;this.$EventsToggle4=l;this.$EventsToggle5=m;var n=this.toggle.bind(this);if(this.$EventsToggle5&&this.$EventsToggle5.href)c('Event').listen(this.$EventsToggle5,'click',this.clickTitle);if(this.$EventsToggle4){c('Event').listen(this.$EventsToggle4,'click',n);}else if(this.$EventsToggle1)c('Event').listen(this.$EventsToggle1,'click',n);}h.prototype.toggle=function(){'use strict';if(this.$EventsToggle3)c('CSS').toggleClass(this.$EventsToggle3,'hidden_elem');if(this.$EventsToggle1)c('CSS').toggle(this.$EventsToggle1);if(this.$EventsToggle2)c('CSS').toggle(this.$EventsToggle2);};h.prototype.clickTitle=function(i){'use strict';i.stopPropagation();};f.exports=h;}),null);
__d('EventPageletController',['Run'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={_pagelets:{},_initialized:false,register:function i(j){this._pagelets[j.controller]=j.actionContext;if(!this._initialized)c('Run').onLeave(function(){this._pagelets={};}.bind(this));},getPageletNames:function i(){var j=[];for(var k in this._pagelets){if(!this._pagelets.hasOwnProperty(k))continue;j.push(k);}return j;},remove:function i(j){j.forEach(function(k){if(this._pagelets.hasOwnProperty(k))delete this._pagelets[k];}.bind(this));}};f.exports=h;}),null);
__d('EventsPermalinkTabBar',['csx','cx','CSS','DOMQuery','Event','Parent','React','ReactDOM','XUISpinner.react','collectDataAttributes','ge'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='event_tabs',k='data-active-tab',l=null,m={setup:function n(o){c('Event').listen(o,'click',function(p){var q=p.srcElement||p.target,r=c('DOMQuery').scry(o,"._45hc");r.forEach(function(v){c('CSS').removeClass(v,"_1hqh");c('CSS').removeClass(v,"_5vwy");});var s=c('Parent').bySelector(q,"._45hc");c('CSS').addClass(s,"_1hqh");c('CSS').addClass(s,"_5vwy");var t=s.firstChild.getAttribute('href');if(t)window.history.replaceState({},document.title,t);var u=c('collectDataAttributes')(q,[],[k]);if(u.normal&&u.normal[k])m.setCurrentTab(u.normal[k]);m.showWait();p.preventDefault();});},showWait:function n(){c('ReactDOM').render(c('React').createElement('div',{className:"_df9"},c('React').createElement(c('XUISpinner.react'),{size:'large'})),c('ge')(j));},getCurrentTab:function n(){return l;},setCurrentTab:function n(o){l=o;}};f.exports=m;}),null);
__d("XEventPermalinkAssociateController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/events\/permalink\/associate\/",{event_id:{type:"Int"},acontext:{type:"StringToStringMap"},active_tab:{type:"String"},pagelets_to_update:{type:"StringSet"}});}),null);
__d("XEventPermalinkDeclineController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/events\/permalink\/decline\/",{event_id:{type:"Int"},acontext:{type:"StringToStringMap"},active_tab:{type:"String"},pagelets_to_update:{type:"StringSet"}});}),null);
__d("XEventPermalinkGoingController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/events\/permalink\/going\/",{event_id:{type:"Int"},acontext:{type:"StringToStringMap"},active_tab:{type:"String"},pagelets_to_update:{type:"StringSet"}});}),null);
__d("XEventPermalinkRemoveController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/events\/permalink\/remove\/",{event_id:{type:"Int"},acontext:{type:"StringToStringMap"},active_tab:{type:"String"},pagelets_to_update:{type:"StringSet"}});}),null);
__d("XEventPermalinkUnwatchController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/events\/permalink\/unwatch\/",{event_id:{type:"Int"},acontext:{type:"StringToStringMap"},active_tab:{type:"String"},pagelets_to_update:{type:"StringSet"}});}),null);
__d("XEventPermalinkWatchController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/events\/permalink\/watch\/",{event_id:{type:"Int"},acontext:{type:"StringToStringMap"},active_tab:{type:"String"},pagelets_to_update:{type:"StringSet"}});}),null);
__d('EventPermalinkActions',['XEventPermalinkAssociateController','AsyncRequest','AsyncResponse','XEventPermalinkDeclineController','EventPageletController','EventsPermalinkTabBar','XEventPermalinkGoingController','XEventPermalinkRemoveController','XEventPermalinkUnwatchController','XEventPermalinkWatchController','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$EventPermalinkActions1=i;this.$EventPermalinkActions2=j;this.$EventPermalinkActions3=c('emptyFunction');this.$EventPermalinkActions4=c('emptyFunction');}h.prototype.setHandler=function(i){'use strict';this.$EventPermalinkActions3=i;return this;};h.prototype.setErrorHandler=function(i){'use strict';this.$EventPermalinkActions4=i;return this;};h.prototype.join=function(){'use strict';this.$EventPermalinkActions5(c('XEventPermalinkGoingController').getURIBuilder());};h.prototype.associate=function(){'use strict';this.$EventPermalinkActions5(c('XEventPermalinkAssociateController').getURIBuilder());};h.prototype.watch=function(){'use strict';this.$EventPermalinkActions5(c('XEventPermalinkWatchController').getURIBuilder());};h.prototype.unwatch=function(){'use strict';this.$EventPermalinkActions5(c('XEventPermalinkUnwatchController').getURIBuilder());};h.prototype.decline=function(){'use strict';this.$EventPermalinkActions5(c('XEventPermalinkDeclineController').getURIBuilder());};h.prototype.remove=function(){'use strict';this.$EventPermalinkActions5(c('XEventPermalinkRemoveController').getURIBuilder());};h.prototype.$EventPermalinkActions5=function(i){'use strict';var j=i.setInt('event_id',this.$EventPermalinkActions1).setStringToStringMap('acontext',this.$EventPermalinkActions2).setString('active_tab',c('EventsPermalinkTabBar').getCurrentTab()).setStringSet('pagelets_to_update',c('EventPageletController').getPageletNames()).getURI();new (c('AsyncRequest'))().setURI(j).setHandler(this.$EventPermalinkActions3).setErrorHandler(function(k){this.$EventPermalinkActions4(k);c('AsyncResponse').defaultErrorHandler(k);}.bind(this)).send();};f.exports=h;}),null);
__d('EventButtonJSHandlerController',['cx','CSS','Event','EventPermalinkActions','EventUIActions'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={addAsyncButtonBehavior:function j(k){c('Event').listen(k,'click',function(){c('CSS').addClass(k,"_37ft");});},addAsyncFlyoutItemBehavior:function j(k,l){c('Event').listen(k,'click',function(){c('CSS').addClass(l,"_37ft");});},setActionButton:function j(k,l,m,n){var o=new (c('EventPermalinkActions'))(m,n).setHandler(function(){c('CSS').addClass(k,"_37ft");}).setErrorHandler(function(){c('CSS').addClass(k,"_37ft");});this.addAsyncButtonBehavior(k);c('Event').listen(k,'click',function(){switch(l){case c('EventUIActions').JOIN:o.join();break;case c('EventUIActions').MAYBE:o.associate();break;case c('EventUIActions').WATCH:o.watch();break;case c('EventUIActions').UNWATCH:o.unwatch();break;case c('EventUIActions').DECLINE:o.decline();break;case c('EventUIActions').REMOVE:o.remove();break;default:c('CSS').addClass(k,"_37ft");break;}});}};f.exports=i;}),null);
__d('EventConnectionStatusMenuController',['csx','cx','CSS','DOMQuery','EventPermalinkActions','EventUIActions','Focus','MenuSelectableItem'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=false;function k(l,m){'use strict';if(!m.useJSClickHandler)return;if(j){var n=c('DOMQuery').scry(l,"._p");if(n.length>0)c('Focus').set(n[0]);}j=false;m.menu.subscribe('itemclick',function(o,p){var q=p.item;if(q instanceof c('MenuSelectableItem')&&q.isSelected())return;c('CSS').addClass(l,"_37ft");var r=new (c('EventPermalinkActions'))(m.eventID,m.actionContext);r.setHandler(function(){j=true;});switch(q.getValue()){case c('EventUIActions').JOIN:r.join();break;case c('EventUIActions').MAYBE:r.associate();break;case c('EventUIActions').WATCH:r.watch();break;case c('EventUIActions').UNWATCH:r.unwatch();break;case c('EventUIActions').DECLINE:r.decline();break;case c('EventUIActions').REMOVE:r.remove();break;}});}f.exports=k;}),null);
__d('PagesAboutSectionLogger',['Event','PagesEventObserver','Run'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={registerLogEvent:function i(j,k,l){var m=c('Event').listen(j,'click',function(){return c('PagesEventObserver').notify(k,l);});c('Run').onLeave(function(){m.remove();});}};f.exports=h;}),null);
__d('ReactionLogging',['DataStore','Event','MarauderLogger'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='reaction_logging';function i(k,l,m){c('DataStore').set(k,h,l);if(m)c('Event').listen(k,'click',function(){j(k);});}function j(k){var l=c('DataStore').get(k,h);if(!l||!l.logging_data)return;l=l.logging_data;c('MarauderLogger').log('reaction_unit_interaction','guide_cards_null_state',l);}f.exports={startLogTracking:i};}),null);
__d('FBReactionComponentInfoRow',['CSS','Event','Run'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports={registerHoverTriggeredAction:function h(i,j){var k=c('Event').listen(i,'mouseenter',function(){return c('CSS').show(j);}),l=c('Event').listen(i,'mouseleave',function(){return c('CSS').hide(j);});c('Run').onLeave(function(){k.remove();l.remove();});}};}),null);