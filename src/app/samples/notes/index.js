/*
================================================================================
********************************************************************************
--------------------------------------------------------------------------------

  Default App.js component

      function App() {
          return (
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>OBBERS coming soon!</p>
                      <a
                          className="App-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Learn More
                      </a>
                  </header>
              </div>
          );
      }

--------------------------------------------------------------------------------

  HowTo Navigate to Routes (React Router 5) ?
  Use property 'to':

      to="/shop"

  Tip: Instead of Wrapping a Button inside a Link tag, just use the 'as' property

      <Button as={Link} to="/shop" />

      The above is equivalent to:

      <Link>
          <Button to="/shop" />
      </Link>

  Also use 'history':

     <Button onClick={() => history.push("/some_page")}>Go to Some Page</Button>

     if using the above, pull off the history prop by destructuring the props obj
     const HomePage = ({ history }) => { ... }

     The 'history' object only becomes available when a component has a path
     or has been added after a few Route components, however using a High Order
     Component would allow any component to have access to the 'history' prop

  HOC

     To make any component have access to the 'history' object as a prop, we
     need to make that component to be a High Order Component, a HOC that has
     access to 'history'... how?

     At the top of the component file import:
     import { withRouter } from "react-router-dom";

     At the botton of the component file export like this:
     export default withRouter(MyComponentName);

     HOC: basically is a function that has extra functionality, at the export
     line, you call that function and pass your component, then it will return
     your component with some extra functionality, thats what it returns and
     exports at the end of your file. Your component now has super powers!

--------------------------------------------------------------------------------

  React <Switch />

     To avoid errors about multiple state calls, this happens when having
     multiple Route and mostly when adding Redirect.
     Switch provides our routes with exclusivity.

     const Settings = () => {
        return (
            <Grid>
                <Grid.Column width={16}>
                    <Switch>
                        <Redirect exact from="/settings" to="/settings/basic" />
                        <Route path="/settings/basic" component={BasicPage} />
                        <Route path="/settings/about" component={AboutPage} />
                        <Route path="/settings/account" component={AccountPage} />
                    </Switch>
                </Grid.Column>
            </Grid>
        )
     }

--------------------------------------------------------------------------------

  Grid Examples (16 Columns, as opposed to 12 in Bootstrap)

      <Grid>
          <Grid.Column width={10}>
              <h2>Left Column</h2>
          </Grid.Column>
          <Grid.Column width={6}>
              <h2>Right Column</h2>
          </Grid.Column>
      </Grid>

--------------------------------------------------------------------------------

  Test Style Object

      const testStyle = {
          backgroundColor: "#00fff5",
          width: "500px",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
      };

--------------------------------------------------------------------------------
********************************************************************************
================================================================================
*/
