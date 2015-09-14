import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import { TextField, Tabs, Tab, RaisedButton, Checkbox } from 'material-ui';
import { connectReduxForm } from 'redux-form';
import mui from 'material-ui';

@Radium
@connectReduxForm({
  form: 'contact',
  fields: ['name', 'host', 'port', 'adminDatabase', 'username', 'password']
}) class Connections extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  getChildContext() {
    return {
      muiTheme: themeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
  }

  saveConnection(connection) {
    console.log(connection);
  }

  render() {
    const { fields: {name, host, port, adminDatabase, username, password}, handleSubmit } = this.props;

    return (<div>
      <Tabs>
        <Tab label="Connection">
          <div style={styles.wrapper}>
            <div style={styles.formGroup}>
              <TextField
                style={styles.input}
                hintText="New Connection"
                {...name}
                floatingLabelText="The connection name"/>
            </div>

            <div style={styles.formGroup}>
              <TextField
                style={styles.input}
                hintText="eg. 127.0.0.1"
                {...host}
                floatingLabelText="Host"/>
            </div>

            <div style={styles.formGroup}>
              <TextField
                style={styles.input}
                hintText="eg. 27017"
                {...port}
                floatingLabelText="Port"/>
            </div>
          </div>
        </Tab>

        <Tab label="Authentication">
          <div style={styles.wrapper}>
            <div style={styles.formGroup}>
              <Checkbox
                label="Perform Authentication"/>
            </div>

            <div style={styles.formGroup}>
              <TextField
                style={styles.input}
                hintText="The admin database is unique in MongoDB."
                {...adminDatabase}
                floatingLabelText="Database"/>
            </div>

            <div style={styles.formGroup}>
              <TextField
                style={styles.input}
                {...username}
                floatingLabelText="Username"/>
            </div>

            <div style={styles.formGroup}>
              <TextField
                style={styles.input}
                {...password}
                floatingLabelText="Password"/>
            </div>
          </div>
        </Tab>
      </Tabs>

      <div style={styles.buttonsContainer}>
        <RaisedButton style={styles.button} label="Test" secondary={true}/>
        <RaisedButton style={styles.button} label="Create" primary={true} onClick={handleSubmit(this.saveConnection)}/>
      </div>
    </div>);
  }
}

const themeManager = new mui.Styles.ThemeManager();

const styles = {
  wrapper: {
    padding: 15
  },
  formGroup: {
    marginBottom: 10
  },
  input: {
    width: '100%'
  },
  buttonsContainer: {
    background: '#EEE',
    padding: 15,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0
  },
  button: {
    marginRight: 15
  }
};

export default Connections;