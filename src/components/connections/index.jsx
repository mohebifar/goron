import ipc from 'ipc';
import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import mui, { List, IconButton, RaisedButton, ToolbarSeparator, Toolbar, ToolbarGroup, ToolbarTitle, FontIcon } from 'material-ui';
import ConnectionItem from './ConnectionItem.jsx';
import connectionRepository from './../../repository/connections';
import { connect } from 'react-redux';
import store from './../../store.js';
import { loadConnections } from './../../actions/list-connections.js';
import { selectConnection } from './../../actions/select-connection.js';

@Radium
@connect(props) class Connections extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  static propTypes = {};

  getChildContext() {
    return {
      muiTheme: themeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    this.loadConnections();
  }

  loadConnections() {
    store.dispatch(loadConnections());
  }

  handleNewConnectionClick() {
    ipc.send('open-window', 'new-connection');
  }

  handleConnectionClick(connection) {
    store.dispatch(selectConnection(connection));
  }

  render() {
    return (<div>
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <ToolbarTitle text="Goron"/>
          <FontIcon onClick={this.loadConnections.bind(this)} className="zmdi zmdi-refresh"/>
          <IconButton linkButton={true}>
          </IconButton>
        </ToolbarGroup>

        <ToolbarGroup key={1} float="right">
          <ToolbarSeparator/>
          <RaisedButton onClick={this.handleNewConnectionClick.bind(this)} style={styles.newConnectionButton}
                        linkButton={true}
                        label="New Connection" secondary={true}>
            <FontIcon style={styles.iconInButton} className="zmdi zmdi-plus"/>
          </RaisedButton>
        </ToolbarGroup>
      </Toolbar>

      <List>
        {
          this.props.connections.length ?
            this.props.connections.map(connection => <ConnectionItem
              onClick={this.handleConnectionClick.bind(this, connection)}
              connection={connection}/>)
            :
            <div className="wrapper">There is no connection :(</div>
        }
      </List>
    </div>);
  }
}

const themeManager = new mui.Styles.ThemeManager();

const styles = {
  iconInButton: {
    color: '#fff',
    verticalAlign: 'middle',
    float: 'left',
    paddingLeft: 12,
    lineHeight: "36px"
  },
  newConnectionButton: {
    marginRight: 0
  }
};

function props(state) {
  return {
    connections: state.connectionsList
  };
}

export default Connections;