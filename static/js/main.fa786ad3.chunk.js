(this["webpackJsonpdiscord-bot-inviter"]=this["webpackJsonpdiscord-bot-inviter"]||[]).push([[0],{65:function(e,i,n){},76:function(e,i,n){"use strict";n.r(i);n(0);var a=n(10),s=n.n(a),t=n(46),r=(n(65),n(122)),c=n(118),o=n(120),m=n(124),d=n(119),p=n(54),l=n(117),j=n(45),b=n(121),_=n(51),g=n.n(_),x=n(5);function h(){var e=Object(j.b)().enqueueSnackbar,i={general:[{id:"p_administrator",name:"Administrator",permission:8,tfa:!0,critical:!0},{id:"p_audit_log",name:"View Audit Log",permission:128},{id:"p_server_insights",name:"View Server Insights",permission:524288},{id:"p_manage_server",name:"Manage Server",permission:32,tfa:!0},{id:"p_manage_roles",name:"Manage Roles",permission:268435456,tfa:!0},{id:"p_manage_channels",name:"Manage Channels",permission:16,tfa:!0},{id:"p_kick_members",name:"Kick Members",permission:2,tfa:!0},{id:"p_ban_members",name:"Ban Members",permission:4,tfa:!0},{id:"p_invite",name:"Create Invite",permission:1},{id:"p_nickname",name:"Change Nickname",permission:67108864},{id:"p_manage_nicknames",name:"Manage Nicknames",permission:134217728},{id:"p_manage_emojis",name:"Manage Emojis",permission:1073741824},{id:"p_manage_webhooks",name:"Manage Webhooks",permission:536870912,tfa:!0}],text:[{id:"p_view",name:"View Channel",permission:1024},{id:"p_read_message",name:"Read Messages",permission:1024},{id:"p_send_message",name:"Send Messages",permission:2048},{id:"p_send_tts_message",name:"Send TTS Messages",permission:4096},{id:"p_manage_messages",name:"Manage Messages",permission:8192,tfa:!0},{id:"p_embed_links",name:"Embed Links",permission:16384},{id:"p_attach_files",name:"Attach Files",permission:32768},{id:"p_message_history",name:"Read Message History",permission:65536},{id:"p_mention_all",name:"Mention @everyone, @here and All Roles",permission:131072},{id:"p_external_emojis",name:"Use External Emojis",permission:262144},{id:"p_add_reactions",name:"Add Reactions",permission:64}],voice:[{id:"p_connect",name:"Connect",permission:1048576},{id:"p_speak",name:"Speak",permission:2097152},{id:"p_video",name:"Video",permission:512},{id:"p_mute",name:"Mute Members",permission:4194304},{id:"p_deafen",name:"Deafen Members",permission:8388608},{id:"p_move",name:"Move Members",permission:16777216},{id:"p_voice_activity",name:"Use Voice Activity",permission:33554432},{id:"p_priority_speaker",name:"Priority Speaker",permission:256}]},n=[{id:"p_manage_channels",name:"Manage Channels",permission:16,tfa:!0},{id:"p_kick_members",name:"Kick Members",permission:2,tfa:!0},{id:"p_ban_members",name:"Ban Members",permission:4,tfa:!0}],a=[{id:"p_view",name:"View Channel",permission:1024},{id:"p_read_message",name:"Read Messages",permission:1024},{id:"p_send_message",name:"Send Messages",permission:2048},{id:"p_manage_messages",name:"Manage Messages",permission:8192,tfa:!0},{id:"p_message_history",name:"Read Message History",permission:65536},{id:"p_add_reactions",name:"Add Reactions",permission:64}];function s(e){return e.toLowerCase().replace(" ","_")}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("header",{style:{textAlign:"center"},children:[Object(x.jsx)(p.a,{variant:"h5",color:"secondary",children:"Discord Bot Inviter"}),Object(x.jsxs)(p.a,{variant:"body1",style:{color:"#ddd"},children:["by ",Object(x.jsx)(l.a,{href:"https://github.com/Azoraqua",color:"primary",children:"Azoraqua"})]})]}),Object(x.jsx)("main",{style:{marginTop:"35px"},children:Object(x.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(i){return function(i){i.preventDefault(),""!==document.getElementById("client_id").value?e("No permissions selected.",{variant:"error"}):e("Client ID is invalid.",{variant:"error"})}(i)},children:[Object(x.jsxs)("fieldset",{style:{textAlign:"center"},children:[Object(x.jsx)("legend",{children:"Client ID"}),Object(x.jsx)(c.a,{children:Object(x.jsx)(r.a,{id:"client_id",placeholder:"000000000000000",color:"secondary"})})]}),Object(x.jsxs)("fieldset",{style:{marginTop:"20px"},children:[Object(x.jsx)("legend",{style:{textAlign:"center"},children:"Permissions"}),Object(x.jsx)("div",{style:{textAlign:"center",marginTop:"-40px"},children:Object(x.jsx)(d.a,{color:"secondary",onClick:function(e){[].concat(Object(t.a)(n),Object(t.a)(a)).forEach((function(e){document.getElementById(s(e.id)).click()}))},children:"Recommended"})}),Object(x.jsxs)("div",{style:{display:"flex",marginTop:"25px"},children:[Object(x.jsxs)(c.a,{style:{margin:"0 25px"},children:[Object(x.jsx)(p.a,{variant:"caption",color:"secondary",children:"General"}),i.general.map((function(e){return Object(x.jsx)(o.a,{className:e.tfa?"tfa":"",control:Object(x.jsx)(m.a,{id:"".concat(s(e.id)),name:"".concat(s(e.id)),"data-permission":"".concat(e.permission),className:"p-option"}),label:Object(x.jsxs)(p.a,{variant:"caption",children:[e.name,e.critical?Object(x.jsx)(b.a,{style:{color:"#fff",transform:"scale(0.60)"},title:"Be careful when granting this permission because it will grant all permissions to the Discord Bot.",children:Object(x.jsx)(g.a,{})}):""]})},"".concat(e.id))}))]}),Object(x.jsxs)(c.a,{style:{margin:"0 25px"},children:[Object(x.jsx)(p.a,{variant:"caption",color:"secondary",children:"Text"}),i.text.map((function(e){return Object(x.jsx)(o.a,{className:e.tfa?"tfa":"",control:Object(x.jsx)(m.a,{id:"".concat(s(e.id)),name:"".concat(s(e.id)),"data-permission":"".concat(e.permission),className:"p-option"}),label:Object(x.jsx)(p.a,{variant:"caption",children:e.name})},"".concat(e.id))}))]}),Object(x.jsxs)(c.a,{style:{margin:"0 25px"},children:[Object(x.jsx)(p.a,{variant:"caption",color:"secondary",children:"Voice"}),i.voice.map((function(e){return Object(x.jsx)(o.a,{className:e.tfa?"tfa":"",control:Object(x.jsx)(m.a,{id:"".concat(s(e.id)),name:"".concat(s(e.id)),"data-permission":"".concat(e.permission),className:"p-option"}),label:Object(x.jsx)(p.a,{variant:"caption",children:e.name})},"".concat(e.id))}))]})]})]}),Object(x.jsx)(c.a,{style:{marginTop:"30px",marginBottom:"50px"},children:Object(x.jsx)(d.a,{type:"submit",color:"secondary",children:"Invite"})})]})})]})})}function f(){return Object(x.jsx)(j.a,{maxSnack:3,children:Object(x.jsx)(h,{})})}s.a.render(Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(f,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.fa786ad3.chunk.js.map