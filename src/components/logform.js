import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from "@material-ui/core/Fab";

const style = {
  root: {
    paddingTop: 150
  },
  item: {
    width: 400,
    padding: 5
  },
  Paper: {
    height: 40
  },
  input: {
    height: 40,
    marginLeft: 8,
    felx: 1
  }
};

class LogForm extends Component {
  _toRegForm() {}

  render() {
    return (
      <Grid
        container
        style={style.root}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item style={style.item}>
          <Typography variant="display1">
            Rellena el formulario para registrarte
          </Typography>
        </Grid>

        <Grid item style={style.item}>
          <Paper style={style.Paper} elevation={1}>
            <InputBase
              style={style.input}
              fullWidth={true}
              placeholder="example@email.com"
              required={true}
            />
          </Paper>
        </Grid>

        <Grid item style={style.item}>
          <Paper style={style.Paper} elevation={1}>
            <InputBase
              style={style.input}
              fullWidth={true}
              placeholder="Contraseña"
              required={true}
            />
          </Paper>
        </Grid>

        <Grid item style={style.item}>
          <Paper style={style.Paper} elevation={1}>
            <InputBase
              style={style.input}
              fullWidth={true}
              placeholder="Confirmar Contraseña"
            />
          </Paper>
        </Grid>

        <Grid item style={style.item}>
          <FormControlLabel
            control={<Checkbox />}
            label="No soy ciudadano de los Estados Unidos. No resido en Estados Unidos"
          />
        </Grid>

        <Grid item style={style.item}>
          <Grid container justify="center">
            <Fab variant="extended" color="primary">
              <Typography color="inherit" variant="body1">
                Regístrate
              </Typography>
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default LogForm;
