import React from 'react'
import { Card, Feed} from "semantic-ui-react";

const RecentActivity = () => {
    return (
      <Card style={{ position: "fixed", maxWidth: "275px", boxShadow: 'none', border: 'solid .5px darkgrey' }}>
        <Card.Content>
          <Card.Header>Recent Activity</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image="/assets/user.png" />
              <Feed.Content>
                <Feed.Date content="1 day ago" />
                <Feed.Summary>
                  You added <a>Jenny Hess's</a> recipe <a>New York Lasagna</a>{" "}
                  to your <a>favorites</a>.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/assets/user.png" />
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You made <a>Amazing Cookies</a>.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/assets/user.png" />
              <Feed.Content>
                <Feed.Date content="4 days ago" />
                <Feed.Summary>
                  You Commented on <a>Elliot Baker's</a>{" "}
                  <a>Hamburger Delight</a>.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    );
}

export default RecentActivity
