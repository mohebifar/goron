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

  render() {
    const {connection, ...other} = this.props;
    const actionsButtonIcon = <IconButton><MoreIcon /></IconButton>;

    const menu =
      <IconMenu iconButtonElement={actionsButtonIcon}>
        <MenuItem primaryText="Edit"/>
        <MenuItem primaryText="Delete"/>
      </IconMenu>;

    return <ListItem {...other} primaryText={connection.name} rightIconButton={menu}
                                secondaryText={connection.host + ':' + connection.port}></ListItem>;
  }
}

const themeManager = new mui.Styles.ThemeManager();

export default Connections;