import React, { Component } from 'react'
import styles from './GlobalSidebar.less'
import cx from 'classnames'

import GlobalAccount from '../global-account'
import GlobalAccountMenu from '../global-account-menu'
import GlobalMenu from '../global-menu'
import GlobalActions from '../global-actions'

import CodeEditorMenu from '../../../apps/code-editor/CodeEditorMenu'
import ContentEditorMenu from '../../../apps/content-editor/ContentEditorMenu'
import MediaMenu from '../../../apps/media/MediaMenu'

export default class GlobalSidebar extends Component {
  componentWillMount() {
    console.log('GlobalSidebar:componentWillMount', this)
  }
  render() {
    return (
      <aside className={styles.GlobalSidebar}>
        <div className={styles.topMenu}>
          <GlobalAccount dispatch={this.props.dispatch} />
          <GlobalMenu dispatch={this.props.dispatch} products={this.props.site.settings.products} />
          <GlobalActions />
        </div>
        <div className={cx(styles.subMenu, this.props.ui.globalSubMenu.location)}>
          <CodeEditorMenu className={cx(styles.appMenu, (this.props.ui.globalSubMenu.location === 'code' ? styles.show : styles.hide))} />
          <ContentEditorMenu className={cx(styles.appMenu, (this.props.ui.globalSubMenu.location === 'content' ? styles.show : styles.hide))} />
          <MediaMenu className={cx(styles.appMenu, (this.props.ui.globalSubMenu.location === 'media' ? styles.show : styles.hide))} />
        </div>
        <GlobalAccountMenu dispatch={this.props.dispatch} accountsMenuVisible={this.props.accountsMenuVisible} />
      </aside>
    )
  }
}
