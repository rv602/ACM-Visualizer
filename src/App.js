import data from './json/dummyData.json';
import './App.css';
import Cards from './components/Cards';
// import { Navbar } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Dropdown from './components/Dropdown';

function App() {

  // console.clear();
  console.log(data);

  return (
    <>
      <div className="App">
        {/* <NavigationBar /> */}
        <div className="dropdown">
          <Dropdown states={['maha', 'guju']} />
          <Dropdown financialYearWiseApproval={[]} />
          <Dropdown sector={[]} />
        </div>
      </div>
      <div className="projects">
        {/* {data.map((project, index) => {
          return (
            <div className="project" key={index}>
              <Cards srNo={project.srNo} state={project.State} projectTitle={project.projectTitle} financialYear={project.financialYear} projectCategory={project.projectCategory} sector={project.sector} projectStatus={project.projectStatus} pacAmt={project.pacAmt} yrApprovedAmt={project.yrApprovedAmt} fundReleasedToActivity={project.fundReleasedToActivity} />
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export default App;
