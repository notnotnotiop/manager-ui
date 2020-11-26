import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal, ModalContent, ModalFooter } from "@zesty-io/core/Modal";
import { Button } from "@zesty-io/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import { deleteMediaGroup } from "shell/store/media";
import styles from "./MediaDeleteGroupModal.less";

export function MediaDeleteGroupModal(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Modal
      className={styles.Modal}
      type="global"
      // set to true for testing
      open={true}
      onClose={() => props.onClose()}
    >
      <ModalContent>Are you sure you want to delete group?</ModalContent>
      <ModalFooter className={styles.ModalFooter}>
        <Button
          kind="save"
          onClick={() =>
            dispatch(deleteMediaGroup(props.currentGroup)).then(() => {
              props.onClose();
              if (props.currentGroup.group_id === props.currentGroup.bin_id) {
                history.push(`/dam/bin/${props.currentGroup.bin_id}`);
              } else {
                history.push(`/dam/group/${props.currentGroup.group_id}`);
              }
            })
          }
        >
          <span>Yes</span>
        </Button>
        <Button kind="warn" onClick={() => props.onClose()}>
          <FontAwesomeIcon icon={faExclamationCircle} />
          <span>No</span>
        </Button>
      </ModalFooter>
    </Modal>
  );
}