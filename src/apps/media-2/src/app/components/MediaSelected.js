import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

import { Card, CardContent, CardFooter } from "@zesty-io/core/Card";
import { Button } from "@zesty-io/core/Button";
import cx from "classnames";
import styles from "./MediaSelected.less";

export function MediaSelected() {
  return (
    <>
      <div className={styles.LoadSelected}>
        <Button kind="save">
          <span>Load Selected</span>
        </Button>
      </div>
      <aside className={styles.MediaSelected}>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent className={styles.CardContent}>
            <img src="https://placekitten.com/200/286" alt="cat" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>

        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
        <Card className={cx(styles.Card, styles.CardTop)}>
          <CardContent
            className={cx(styles.CardContent, styles.CardContentTop)}
          >
            <img src="http://www.fillmurray.com/300/200" alt="FillMurray" />
            <button className={styles.Check}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </CardContent>
        </Card>
      </aside>
    </>
  );
}
