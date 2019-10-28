import * as React from "react";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
  Grid,
  LinearProgress,
  Collapse
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import TopCard from "./TopCard";
import DetailsCard from "./DetailsCard";

import flockIcon from "../../images/icons/flock.svg";
import explorerIcon from "../../images/icons/explorer.svg";
import payIcon from "../../images/icons/pay.png";
import onDemandIcon from "../../images/icons/on-demand.png";
import customerSupportIcon from "../../images/icons/cust-support.png";
import meritocraticIcon from "../../images/icons/meritocratic.png";
import transparencyIcon from "../../images/icons/transparency.png";
import contributorSupportIcon from "../../images/icons/contrib-support.png";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {}

enum Selection {
  None,
  Hire,
  Join
}

const LearnMore: React.FC<Props> = ({ classes }) => {
  const [selection, setSelection] = React.useState(Selection.None);

  const TopCardHighlight = withStyles({
    root: {
      height: "5px",
      marginTop: "5px",
      borderRadius: 250
    },
    bar: {
      backgroundColor: "#4bd2c6"
    }
  })(LinearProgress);

  return (
    <>
      <Grid
        container
        direction={"row"}
        justify={"center"}
        alignItems={"flex-start"}
      >
        <Grid item xs={5} className={classes.topCard}>
          <TopCard
            icon={flockIcon}
            title={"Hire dOrg"}
            description={
              "We can develop anything from quick prototypes to fully polished products."
            }
            onSelect={() =>
              setSelection(
                selection === Selection.Hire ? Selection.None : Selection.Hire
              )
            }
          />
          {selection === Selection.Hire ? (
            <TopCardHighlight variant={"determinate"} value={100} />
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={5} className={classes.topCard}>
          <TopCard
            icon={explorerIcon}
            title={"Join dOrg"}
            description={
              "Work with a talented, ever growing community of developers from around the world."
            }
            onSelect={() =>
              setSelection(
                selection === Selection.Join ? Selection.None : Selection.Join
              )
            }
          />
          {selection === Selection.Join ? (
            <TopCardHighlight variant={"determinate"} value={100} />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Collapse
        in={selection !== Selection.None}
        className={
          selection !== Selection.None ? classes.collapse : classes.noCollapse
        }
      >
        <SwipeableViews axis={"x"} index={selection - 1} disabled={true}>
          <DetailsCard
            title={"Don't outsource, DAOsource."}
            panels={[
              {
                icon: payIcon,
                title: "Pay for Results",
                description:
                  "Fixed payments are released at pre-set milestones upon your approval."
              },
              {
                icon: onDemandIcon,
                title: "On-Demand Expertise",
                description:
                  "Get matched with a team optimized for your project’s requirements."
              },
              {
                icon: customerSupportIcon,
                title: "Customer Support",
                description:
                  "Built-in feedback processes help ensure you get what you need."
              }
            ]}
            link={"https://dorgtech.typeform.com/to/Q1LOP1"}
          />
          <DetailsCard
            title={"Ready. Set. DAO."}
            panels={[
              {
                icon: meritocraticIcon,
                title: "Meritocratic by Design",
                description:
                  "Earn ownership and governance rights in proportion to your contributions."
              },
              {
                icon: transparencyIcon,
                title: "Radical Transparency",
                description:
                  "Know exactly what your peers earn. No hidden hierarchies, just people."
              },
              {
                icon: contributorSupportIcon,
                title: "Contributor Support",
                description:
                  "Focus on work you care about, not the administrative tasks."
              }
            ]}
            link={"https://dorgtech.typeform.com/to/a1rMob"}
          />
        </SwipeableViews>
      </Collapse>
    </>
  );
};

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    topCard: {
      minWidth: "380px",
      maxWidth: "420px",
      margin: "20px"
    },
    collapse: {
      width: "100%"
    },
    noCollapse: {
      width: "0px"
    }
  });

export default withStyles(styles)(LearnMore);
