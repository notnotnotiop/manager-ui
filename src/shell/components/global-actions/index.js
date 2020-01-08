import React, { Component } from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEye } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.less";

export default class GlobalActions extends Component {
  componentWillMount() {
    console.log("GlobalActions:componentWillMount");
  }
  render() {
    return (
      <div className={styles.GlobalActions}>
        <span className={styles.action}>
          {/* <i
            className={cx(styles.preview, "fa fa-map")}
            aria-hidden="true"
            title="Visual Sitemap"
          /> */}

          <FontAwesomeIcon icon={faMap} title="Visual Sitemap" />
        </span>
        <span className={styles.action}>
          {/* <i
            className={cx(styles.preview, "fa fa-eye")}
            aria-hidden="true"
            title="Live Preview"
          /> */}
          <FontAwesomeIcon icon={faEye} title="Live Preview" />
        </span>
        {/* <span className={styles.action}>
          <i
            className={cx(styles.chat, "fa fa-comments-o")}
            aria-hidden="true"
            title="Chat"
          >
            <span className={styles.notificationCount}>3</span>
          </i>
        </span> */}
      </div>
    );
  }
}
