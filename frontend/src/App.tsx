import NavBar from "components/NavBar";
import Footer from "components/Footer";
import "./App.css"
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='text-primary py-3'>Dashboard de vendas</h1>
        <div className="row px-3">
          <div className="col-md-6">
            <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
            <BarChart />
          </div>
          <div className="col-md-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart />
          </div>
          <div className='py-3'>
            <h2 className="text-primary">Todas Vendas</h2>
          </div>
          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;