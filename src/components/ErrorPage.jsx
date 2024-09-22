import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorPage;
