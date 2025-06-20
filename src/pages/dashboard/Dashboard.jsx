import Bread from "../../components/bread/Bread";

//Page que é acessada por ADMINISTRADORES, nela é renderizada um dashboard de powerBI por meio do iframe.
const Dashboard = () => {
  const iFrame = "https://app.powerbi.com/groups/me/reports/581a9a64-4dab-46eb-ac5d-b20dbda9a1e4/a1bcfa340e83bd87b5b0?experience=power-bi";


  return (
    <div className="container d-flex justify-content-center min-vh-100 user-select-none">
      <div className="w-100">
        <div>
          <Bread current={"DASHBOARD"} />
        </div>
        <div>
          <iframe
            className="shadow"
            title="Power BI Dashboard"
            width="100%"
            height="800"
            src={iFrame}
            frameBorder="0"
            allowFullScreen
            loading="eager"
            //sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
