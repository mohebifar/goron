import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import mui, { List, ListItem, IconMenu, IconButton } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item.js';
import MoreIcon from 'material-ui/lib/svg-icons/navigation/more-vert.js';
import connectionRepository from './../repository/connections';
import { connect } from 'react-redux';
import store from './../store.js';
import { loadConnections } from './../actions/list-connections.js';

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
    store.dispatch(loadConnections());
  }

  renderMenu(connection) {
    return <IconMenu iconButtonElement={actionsButtonIcon}>
      <MenuItem primaryText="Edit"/>
      <MenuItem primaryText="Delete"/>
    </IconMenu>;
  }

  renderItem(connection) {
    const iconMenu = this.renderMenu(connection);

    return <ListItem primaryText={connection.name} rightIconButton={iconMenu}
                     secondaryText={connection.host + ':' + connection.port}></ListItem>;
  }

  render() {
    const actionsButtonIcon = <IconButton><MoreIcon /></IconButton>;

    return (<div>
      <List>
        {
          this.props.connections.map((connection) => this.renderItem(connection))
        }
      </List>

    </div>);
  }
}

const themeManager = new mui.Styles.ThemeManager();

const styles = {};

function props(state) {
  return {
    connections: state.connectionsList
  };
}

export default Connections;