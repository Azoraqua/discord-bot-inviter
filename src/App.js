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
            {id: 'p_manage_nicknames', name: 'Manage Nicknames', permission: 0x8000000},
            {id: 'p_manage_emojis', name: 'Manage Emojis', permission: 0x40000000},
            {id: 'p_manage_webhooks', name: 'Manage Webhooks', permission: 0x20000000, tfa: true},
        ],

        text: [
            {id: 'p_manage_messages', name: 'Manage Messages', permission: 0x2000, tfa: true},
        ],

        voice: []
    };

    function internalize(name) {
        return name.toLowerCase().replace(' ', '_');
    }

    function calculatePermissions() {
        let permissions = 0;
        const options = [...document.querySelectorAll('.p-option')];

        options.forEach(o => {
            const c = o.children[0].children[0];
            const permission = PERMISSIONS.flat().find(p => p.id === c.id);

            permissions |= permission.permission;
        });

        return permissions;
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
                            textAlign: "center",
                            marginTop: '20px',
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <legend>Permissions</legend>

                            <FormGroup style={{margin: '0 25px'}}>
                                <Typography variant={"caption"} color={"secondary"}>General</Typography>

                                {PERMISSIONS['general'].map(p => (
                                    <FormControlLabel className={p.tfa ? 'tfa' : ''}
                                                      key={`${p.id}`}
                                                      control={<Checkbox id={`${internalize(p.id)}`}
                                                                         name={`${internalize(p.id)}`}
                                                                         data-permission={`${p.permission}`}
                                                                         className={'p-option'}/>}
                                                      label={<Typography variant={"caption"}>{p.name}{p.critical ? <Badge style={{ color: '#fff', transform: 'scale(0.60)'}} title={'Be careful when granting this permission because it will grant all permissions to the Discord Bot.'}><ErrorIcon /></Badge> : ''}</Typography>}
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
