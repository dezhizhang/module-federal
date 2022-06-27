import React from "react";
const RemoteMewList = React.lazy(() =>import('remoteAppName/NewList'))
function App() {
  return (
    <div>
      app
      <RemoteMewList />
    </div>
  );
}

export default App;
