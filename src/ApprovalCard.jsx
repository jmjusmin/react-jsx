import React from "react";
import { Button, Card } from "semantic-ui-react";

function ApprovalCard(props) {
  return (
    <Card>
      <Card.Content>{props.children}</Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ApprovalCard;
