import React, { useState } from "react";

import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";
import { ConfirmDialog } from "@zesty-io/core/ConfirmDialog";
import { Button } from "@zesty-io/core/Button";

import { notify } from "shell/store/notifications";
import { deleteModel } from "../../../../../store/schemaModels";

import styles from "./Delete.less";
export default function Delete(props) {
  return (
    <CollapsibleCard
      className={styles.Delete}
      header={Header(props)}
      footer={Footer(props)}
    >
      <p>
        Deleting a model is a permanent action that can not be undone. By doing
        so all content items created from this model will be deleted along with
        it. Ensure you want to do this action.
      </p>
    </CollapsibleCard>
  );
}

function Header() {
  return (
    <React.Fragment>
      <i className="fas fa-trash"></i>&nbsp;Delete Model
    </React.Fragment>
  );
}

function Footer(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Button kind="warn" onClick={() => setIsOpen(true)}>
        <i className="far fa-trash-alt" />
        Delete Model
      </Button>

      <ConfirmDialog
        isOpen={isOpen}
        prompt={`Are you sure you want to delete the model: ${props.model.label}?`}
      >
        <Button
          id="deleteConfirmButton"
          kind="warn"
          onClick={() => {
            props
              .dispatch(deleteModel(props.model.ZUID))
              .then(() => {
                setIsOpen(false);
              })
              .catch(err => {
                console.error(err);
                setIsOpen(false);
                notify({
                  kind: "warn",
                  message:
                    err.message ||
                    `Failed to delete model: ${props.model.label}`
                });
              });
          }}
        >
          Delete
        </Button>
        <Button
          id="deleteCancelButton"
          kind="cancel"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
      </ConfirmDialog>
    </React.Fragment>
  );
}