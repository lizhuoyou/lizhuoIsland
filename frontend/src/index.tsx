import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { history, store, AppState, PWThunkDispatch } from "./store";
import Mainpage from "./components/mainpage";
import NotFoundPageMobile from "./components/common/notFoundPageMobile";
import NotFoundPage from "./components/common/notFoundPage";

const futureTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "Tw Cen MT",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

interface Props
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}

const RawApp = (props: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const breakpoint = 720; // assumed mobile screen size

  React.useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    const cursor = document.querySelector<HTMLElement>(".cursor");
    const cursorDot = document.querySelector<HTMLElement>(".cursor-dot");
    const buttons = document.querySelectorAll<HTMLElement>("Button");
    window.addEventListener("mousemove", (e) => {
      if (cursor) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      }
      if (cursorDot) {
        cursorDot.style.left = e.pageX + "px";
        cursorDot.style.top = e.pageY + "px";
      }
    });
    if (buttons) {
      buttons.forEach((b) => {
        b.addEventListener("mouseleave", () => {
          if (cursor) {
            cursor.classList.remove("cursor-grow");
          }
        });
        b.addEventListener("mouseover", () => {
          if (cursor) {
            cursor.classList.add("cursor-grow");
          }
        });
      });
    }
    document.querySelectorAll<HTMLElement>("a").forEach((a) => {
      a.addEventListener("mouseleave", () => {
        if (cursor) {
          cursor.classList.remove("cursor-grow");
        }
      });
      a.addEventListener("mouseover", () => {
        if (cursor) {
          cursor.classList.add("cursor-grow");
        }
      });
    });
    document.addEventListener("mouseenter", (e) => {
      if (cursor) {
        cursor.style.opacity = "1";
      }
      if (cursorDot) {
        cursorDot.style.opacity = "1";
      }
    });
    document.addEventListener("mouseleave", (e) => {
      if (cursor) {
        cursor.style.opacity = "0";
      }
      if (cursorDot) {
        cursorDot.style.opacity = "0";
      }
    });
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const notfoundpage =
    windowWidth < breakpoint ? <NotFoundPageMobile /> : <NotFoundPage />;

  return (
    <MuiThemeProvider theme={futureTheme}>
      <div className="root">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="*" render={() => notfoundpage} />
          </Switch>
        </Router>
      </div>
      <div className="cursor" />
      <div className="cursor-dot" />
    </MuiThemeProvider>
  );
};

const mapStateToProps = (state: AppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: PWThunkDispatch) => {
  return {};
};

const App = connect(mapStateToProps, mapDispatchToProps)(RawApp);

ReactDOM.render(
  <Provider store={store as any}>
    <App />
  </Provider>,
  document.getElementById("root")
);
