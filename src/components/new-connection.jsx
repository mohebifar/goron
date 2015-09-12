import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import {TextField, Tabs, Tab, RaisedButton, IconButton} from 'material-ui';
import {connectReduxForm} from 'redux-form';
import mui from 'material-ui';

@Radium
@connectReduxForm({
  form: 'contact',
  fields: ['name', 'host', 'port']
})
export default
class Connections extends Component {
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
    const { fields: {name, host, port}, handleSubmit } = this.props;

    return (<Tabs>
      <Tab label="Connection">
        <div style={styles.wrapper}>
          <div style={styles.formGroup}>
            <TextField
              style={styles.input}
              hintText="New Connection"
          {...name}
              floatingLabelText="The connection name" />
          </div>

          <div style={styles.formGroup}>
            <TextField
              style={styles.input}
              hintText="eg. 127.0.0.1"
          {...host}
              floatingLabelText="Host" />
          </div>

          <div style={styles.formGroup}>
            <TextField
              style={styles.input}
              hintText="eg. 27017"
          {...port}
              floatingLabelText="Port" />
          </div>
          <RaisedButton label="Create" primary={true} onClick={handleSubmit(this.saveConnection)} />
        </div>
      </Tab>

      <Tab label="Authentication">
        <div style={styles.wrapper}>
          <RaisedButton label="Create" primary={true} onClick={handleSubmit(this.saveConnection)} />
        </div>
      </Tab>
    </Tabs>);
  }
}

const themeManager = new mui.Styles.ThemeManager();

const styles = {
  wrapper: {
    padding: '0 15px'
  },
  formGroup: {
    marginBottom: 10
  },
  input: {
    width: '100%'
  }
};
