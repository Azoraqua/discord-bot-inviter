import "./App.css";

import React from 'react';
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {SnackbarProvider, useSnackbar} from "notistack";
import Badge from "@material-ui/core/Badge";
import ErrorIcon from '@material-ui/icons/Error';

const DISCORD_AUTH_URL = "https://discord.com/oauth2/authorize?client_id={CLIENT_ID}&scope=bot&permissions={PERMISSIONS}";

function App() {
    const {enqueueSnackbar} = useSnackbar();

    const PERMISSIONS = {
        general: [
            {id: 'p_administrator', name: 'Administrator', permission: 0x8, tfa: true, critical: true},
            {id: 'p_audit_log', name: 'View Audit Log', permission: 0x80},
            {id: 'p_server_insights', name: 'View Server Insights', permission: 0x80000},
            {id: 'p_manage_server', name: 'Manage Server', permission: 0x20, tfa: true},
            {id: 'p_manage_roles', name: 'Manage Roles', permission: 0x10000000, tfa: true},
            {id: 'p_manage_channels', name: 'Manage Channels', permission: 0x10, tfa: true},
            {id: 'p_kick_members', name: 'Kick Members', permission: 0x2, tfa: true},
            {id: 'p_ban_members', name: 'Ban Members', permission: 0x4, tfa: true},
            {id: 'p_invite', name: 'Create Invite', permission: 0x1},
            {id: 'p_nickname', name: 'Change Nickname', permission: 0x4000000},
            {id: 'p_manage_nicknames', name: 'Manage Nicknames', permission: 0x8000000},
            {id: 'p_manage_emojis', name: 'Manage Emojis', permission: 0x40000000},
            {id: 'p_manage_webhooks', name: 'Manage Webhooks', permission: 0x20000000, tfa: true},
        ],

        text: [
            {id: 'p_view', name: 'View Channel', permission: 0x400},
            {id: 'p_read_message', name: 'Read Messages', permission: 0x400},
            {id: 'p_send_message', name: 'Send Messages', permission: 0x800},
            {id: 'p_send_tts_message', name: 'Send TTS Messages', permission: 0x1000},
            {id: 'p_manage_messages', name: 'Manage Messages', permission: 0x2000, tfa: true},
            {id: 'p_embed_links', name: 'Embed Links', permission: 0x4000},
            {id: 'p_attach_files', name: 'Attach Files', permission: 0x8000},
            {id: 'p_message_history', name: 'Read Message History', permission: 0x10000},
            {id: 'p_mention_all', name: 'Mention @everyone, @here and All Roles', permission: 0x20000},
            {id: 'p_external_emojis', name: 'Use External Emojis', permission: 0x40000},
            {id: 'p_add_reactions', name: 'Add Reactions', permission: 0x40},
        ],

        voice: [
            {id: 'p_connect', name: 'Connect', permission: 0x100000},
            {id: 'p_speak', name: 'Speak', permission: 0x200000},
            {id: 'p_video', name: 'Video', permission: 0x200},
            {id: 'p_mute', name: 'Mute Members', permission: 0x400000},
            {id: 'p_deafen', name: 'Deafen Members', permission: 0x800000},
            {id: 'p_move', name: 'Move Members', permission: 0x1000000},
            {id: 'p_voice_activity', name: 'Use Voice Activity', permission: 0x2000000},
            {id: 'p_priority_speaker', name: 'Priority Speaker', permission: 0x100},
        ]
    };
    const RECOMMENDED_PERMISSIONS = {
        general: [
            {id: 'p_manage_channels', name: 'Manage Channels', permission: 0x10, tfa: true},
            {id: 'p_kick_members', name: 'Kick Members', permission: 0x2, tfa: true},
            {id: 'p_ban_members', name: 'Ban Members', permission: 0x4, tfa: true},
        ],
        text: [
            {id: 'p_view', name: 'View Channel', permission: 0x400},
            {id: 'p_read_message', name: 'Read Messages', permission: 0x400},
            {id: 'p_send_message', name: 'Send Messages', permission: 0x800},
            {id: 'p_manage_messages', name: 'Manage Messages', permission: 0x2000, tfa: true},
            {id: 'p_message_history', name: 'Read Message History', permission: 0x10000},
            {id: 'p_add_reactions', name: 'Add Reactions', permission: 0x40},
        ]
    };

    function internalize(name) {
        return name.toLowerCase().replace(' ', '_');
    }

    function calculatePermissions() {
        return -1;
    }

    function selectRecommended() {
        [...RECOMMENDED_PERMISSIONS['general'], ...RECOMMENDED_PERMISSIONS['text']].forEach(p => {
           document.getElementById(internalize(p.id)).click();
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const clientId = document.getElementById('client_id');

        if (clientId.value === '') {
            enqueueSnackbar('Client ID is invalid.', {variant: 'error'});
            return;
        }

        const permissions = calculatePermissions();

        if (permissions <= 0) {
            enqueueSnackbar('No permissions selected.', {variant: 'error'});
            return;
        }

        // window.location.href = DISCORD_AUTH_URL.replace('{CLIENT_ID}', clientId.value).replace('{PERMISSIONS}', permissions.toString());
    }

    return (
        <>
            <div>
                <header style={{textAlign: "center"}}>
                    <Typography variant={"h5"} color={"secondary"}>Discord Bot Inviter</Typography>
                    <Typography variant={"body1"} style={{color: '#ddd'}}>by <Link href={'https://github.com/Azoraqua'}
                                                                                   color={"primary"}>Azoraqua</Link></Typography>
                </header>

                <main style={{marginTop: '35px'}}>
                    <form noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
                        <fieldset style={{textAlign: "center"}}>
                            <legend>Client ID</legend>

                            <FormGroup>
                                <TextField id="client_id" placeholder={"000000000000000"} color={"secondary"}/>
                            </FormGroup>
                        </fieldset>

                        <fieldset style={{
                            marginTop: '20px',

                        }}>
                            <legend style={{textAlign: 'center'}}>
                                Permissions
                            </legend>

                            <div style={{ textAlign: "center", marginTop: '-40px' }}>
                                <Button color={"secondary"} onClick={e => selectRecommended()}>Recommended</Button>
                            </div>

                            <div style={{ display: 'flex', marginTop: '25px'}}>
                                <FormGroup style={{margin: '0 25px'}}>
                                    <Typography variant={"caption"} color={"secondary"}>General</Typography>

                                    {PERMISSIONS['general'].map(p => (
                                        <FormControlLabel className={p.tfa ? 'tfa' : ''}
                                                          key={`${p.id}`}
                                                          control={<Checkbox id={`${internalize(p.id)}`}
                                                                             name={`${internalize(p.id)}`}
                                                                             data-permission={`${p.permission}`}
                                                                             className={'p-option'}/>}
                                                          label={<Typography variant={"caption"}>{p.name}{p.critical ?
                                                              <Badge style={{color: '#fff', transform: 'scale(0.60)'}}
                                                                     title={'Be careful when granting this permission because it will grant all permissions to the Discord Bot.'}><ErrorIcon/></Badge> : ''}</Typography>}
                                        />
                                    ))}
                                </FormGroup>

                                <FormGroup style={{margin: '0 25px'}}>
                                    <Typography variant={"caption"} color={"secondary"}>Text</Typography>

                                    {PERMISSIONS['text'].map(p => (
                                        <FormControlLabel className={p.tfa ? 'tfa' : ''}
                                                          key={`${p.id}`}
                                                          control={<Checkbox id={`${internalize(p.id)}`}
                                                                             name={`${internalize(p.id)}`}
                                                                             data-permission={`${p.permission}`}
                                                                             className={'p-option'}/>}
                                                          label={<Typography variant={"caption"}>{p.name}</Typography>}
                                        />
                                    ))}
                                </FormGroup>

                                <FormGroup style={{margin: '0 25px'}}>
                                    <Typography variant={"caption"} color={"secondary"}>Voice</Typography>

                                    {PERMISSIONS['voice'].map(p => (
                                        <FormControlLabel className={p.tfa ? 'tfa' : ''}
                                                          key={`${p.id}`}
                                                          control={<Checkbox id={`${internalize(p.id)}`}
                                                                             name={`${internalize(p.id)}`}
                                                                             data-permission={`${p.permission}`}
                                                                             className={'p-option'}/>}
                                                          label={<Typography variant={"caption"}>{p.name}</Typography>}
                                        />
                                    ))}
                                </FormGroup>
                            </div>

                            <hr style={{ backgroundColor: '#444' }} />
                            <ul style={{ listStyle: 'none', marginTop: '10px', marginLeft: '-40px', marginBottom: '0' }}>
                                <li><Typography variant={"caption"} style={{ color: 'orange', fontSize: '24px' }}>&#9632;</Typography> <Typography variant={"caption"}>Requires the owner to have 2FA enabled but only when the server requires it.</Typography></li>
                            </ul>
                        </fieldset>

                        <FormGroup style={{marginTop: '30px', marginBottom: '50px'}}>
                            <Button type={"submit"} color={"secondary"}>Invite</Button>
                        </FormGroup>
                    </form>
                </main>
            </div>
        </>
    );
}

export default function IntegrationNotistack() {
    return (
        <SnackbarProvider maxSnack={3}>
            <App/>
        </SnackbarProvider>
    )
};
