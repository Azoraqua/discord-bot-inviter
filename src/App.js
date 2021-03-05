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

const DISCORD_AUTH_URL = "https://discord.com/oauth2/authorize?client_id={CLIENT_ID}&scope=bot&permissions={PERMISSIONS}";

function App() {
    const {enqueueSnackbar} = useSnackbar();

    const PERMISSIONS = [
        {id: 'p_administrator', name: 'Administrator', permission: 0x8}
    ];

    function internalize(name) {
        return name.toLowerCase().replace(' ', '_');
    }

    function calculatePermissions() {
        return 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const clientId = document.getElementById('client_id');
        const permissions = calculatePermissions();

        if (clientId.value === '') {
            enqueueSnackbar('Client ID is invalid.', {variant: 'error'});
            return;
        }

        window.location.href = DISCORD_AUTH_URL.replace('{CLIENT_ID}', clientId.value).replace('{PERMISSIONS}', permissions.toString());
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

                        <fieldset style={{textAlign: "center", marginTop: '20px'}}>
                            <legend>Permissions</legend>

                            <FormGroup style={{ textAlign: 'center', marginLeft: '50%', transform: 'translateX(-70%)' }}>
                                {PERMISSIONS.map(p => (
                                    <FormControlLabel
                                        key={`${p.id}`}
                                        control={<Checkbox id={`${internalize(p.id)}`} name={`${internalize(p.id)}`}
                                                           data-permission={`${p.permission}`}/>}
                                        label={`${p.name}`}
                                    />
                                ))}
                            </FormGroup>
                        </fieldset>

                        <FormGroup style={{marginTop: '30px'}}>
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
