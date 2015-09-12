import React, {Component, PropTypes} from 'react';
import {AppBar, List, ListItem, DropDownIcon, IconMenu, IconButton} from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item.js'
import RemoveIcon from 'material-ui/lib/svg-icons/action/delete.js'
import EditIcon from 'material-ui/lib/svg-icons/editor/mode-edit.js'
import AddIcon from 'material-ui/lib/svg-icons/content/add-box.js'

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

export default
class Connections extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
  }

  render() {
    return <div>
      <AppBar title="Goron" iconElementLeft={<div></div>} iconElementRight={<IconButton><AddIcon /></IconButton>} />
      <List>
        <ListItem primaryText="New Connection" rightIconButton={
          <div>
          <IconButton tooltip="Delete" touch={true} tooltipPosition="bottom-left">
            <RemoveIcon />
          </IconButton>
          <IconButton tooltip="Edit" touch={true} tooltipPosition="bottom-left">
            <EditIcon />
          </IconButton>
            </div>}
          secondaryText={
            <p>
              <span>127.0.0.1:3771</span>
            </p>
            }/>
      </List>
    </div>
  }
}
