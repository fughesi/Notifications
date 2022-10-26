import { Suspense } from "react";

import Notifications from "./pages/_pagesEXPORT.js";
// import { Notifications } from "./pages/_pagesEXPORT";
// import { NotificationPage } from "./pages/NotificationPage/NotificationPage";

function App() {
  return (
    <main className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Notifications />
      </Suspense>
    </main>
  );
}

export default App;
