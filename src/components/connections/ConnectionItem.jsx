import React, { Component, PropTypes } from 'react';
import mui, { ListItem, IconMenu, IconButton } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item.js';
import MoreIcon from 'material-ui/lib/svg-icons/navigation/more-vert.js';

class Connections extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  static propTypes = {
    connection: PropTypes.object.isRequired,
    onClick: PropTypes.func
  };

  getChildContext() {
    return {
      muiTheme: themeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    this.loadConnections();
  }

  renderMenu(connection) {
    const actionsButtonIcon = <IconButton><MoreIcon /></IconButton>;
    return <IconMenu iconButtonElement={actionsButtonIcon}>
      <MenuItem primaryText="Edit"/>
      <MenuItem primaryText="Delete"/>
    </IconMenu>;
  }

  loadConnections() {
    store.dispatch(loadConnections());
  }

  handleNewConnection() {
    ipc.send('window', 'new-connection');
  }

  render() {
    return (<div>
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <ToolbarTitle text="Goron"/>
          <FontIcon onClick={this.loadConnections()} className="zmdi zmdi-refresh"/>
          <IconButton linkButton={true}>
          </IconButton>
        </ToolbarGroup>

        <ToolbarGroup key={1} float="right">
          <ToolbarSeparator/>
          <RaisedButton onClick={this.handleNewConnection} style={styles.newConnectionButton} linkButton={true}
                        label="New Connection" secondary={true}>
            <FontIcon style={styles.iconInButton} className="zmdi zmdi-plus"/>
          </RaisedButton>
        </ToolbarGroup>
      </Toolbar>

      <List>
        {
          this.props.connections.length ?
            this.props.connections.map((connection) => this.renderItem(connection))
            :
            <div className="wrapper">There is no connection :(</div>
        }
      </List>
    </div>);
  }
}

const themeManager = new mui.Styles.ThemeManager();

const styles = {
  wrapper: {
    padding: 15
  },
  iconInButton: {
    color: '#000000',
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