import React, {Component, PropTypes} from 'react';
import {AppBar, Dialog} from 'material-ui';

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
ThemeManager.setPalette({
  primary1Color: Colors.blueGrey500,
  accent1Color: Colors.deepOrange500
});

export default class Connections extends Component {

  static childContextTypes = {muiTheme: PropTypes.object}

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      primary1Color: Colors.blueGrey500,
      accent1Color: Colors.deepOrange500
    });
  }

  render() {
    var standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onClick: this._onDialogSubmit, ref: 'submit' }
    ];

    return <div>
      <AppBar title='Pac' style={{position: 'fixed', top: 0}} />
    </div>
  }
}
