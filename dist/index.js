"use strict"; var e;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e[e.Debug=20]="Debug",e[e.Info=30]="Info",e[e.Warn=40]="Warn",e[e.Error=50]="Error"}(e||(e={}));const r=(r,o)=>{r.level=o;const s=JSON.stringify(r);switch(o){case e.Error:console.error(s);break;case e.Warn:console.warn(s);break;case e.Info:console.log(s);break;case e.Debug:console.debug(s);break;default:console.log(s)}},o=e=>"object"==typeof e?e:{message:e};exports.default=class{constructor(e){this.name=e}debug(s){r(o({message:s,name:this.name}),e.Debug)}info(s){r(o({message:s,name:this.name}),e.Info)}warn(s){r(o({message:s,name:this.name}),e.Warn)}error(s){const a=o(s);s.error&&(a.error=s.error.stack),a.reason=s.reason,r(a,e.Error)}};
