import dynamic from "next/dynamic";
import "../styles.css";

import { Theme } from "../components/theme";
import { EditProvider, setEditing, useEditState } from "../utils/editState";

// InnerApp that handles rendering edit mode or not
function InnerApp({ Component, pageProps }) {
  const { edit } = useEditState();
  if (true) {
    // Dynamically load Tina only when in edit mode so it does not affect production
    // see https://nextjs.org/docs/advanced-features/dynamic-import#basic-usage
    const TinaWrapper = dynamic(() => import("../components/tina-wrapper"));
    return (
      <>
        <TinaWrapper {...pageProps}>
          {(props) => <Component {...props} />}
        </TinaWrapper>
      </>
    );
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

// Our app is wrapped with edit provider
function App(props) {
  return (
    <EditProvider>
      {/* TinaProvider is needed until the theme is moved to tina cloud */}
      {/* <TinaProvider cms={new TinaCMS({ enabled: false })}> */}
      <InnerApp {...props} />
      {/* </TinaProvider> */}
    </EditProvider>
  );
}

export default App;
