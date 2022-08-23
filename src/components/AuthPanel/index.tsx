import { Button, Grid, Input, InputProps, Paper, Typography } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

export const AuthInput: FunctionComponent<InputProps> = (props) => (
    <Grid item>
        <Input fullWidth {...props} />
    </Grid>
)

interface AuthPanelProps {
    title: string;
    buttonTitle: string;
}

export const AuthPanel: FunctionComponent<PropsWithChildren<AuthPanelProps>> = ({ title, buttonTitle, children }) => (
    <Paper elevation={3} sx={{ maxWidth: '400px', px: 6, py: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
            {title}
        </Typography>
        <Grid container rowSpacing={2} direction="column">
            {children}
        </Grid>
        <Button variant='contained' sx={{ mt: 3 }}>{buttonTitle}</Button>
    </Paper >
)
