import React, { Fragment, useEffect, useState } from 'react';
// import './App.css';
import { Progress } from 'antd';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import PieChart from './components/PieChart/PieChart';
import Diagram from './components/Diagram/Diagram';
import TableComp from './components/Table/Table';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import NoMatch from './pages/NoMatch/NoMatch';

const App = () => {
  let location = useLocation();

  // State
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [
        {
            label: 'Sebaran Keluhan',
            data: [],
            backgroundColor: [
                'rgb(255,61,103)',
                'rgb(54,162,235)',
                'rgb(255,205,86)',
                'rgb(75,192,192)',
            ],
        }
    ]
})
  const [loading, setLoading] = useState(true);


  useEffect( () =>{
    console.log(loading);

    let newLabel = []
    let newData = []
    
    const apiRequest = async () => {
      await fetch('https://api.elbaayu.xyz/api-mobile/banyak-complaint/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(async data => {
      await data.data.map(value => {
        return newLabel.push(value.nama)
      })

      await data.data.map(value => {
        return newData.push(value.jumlah)
      })
    })
    }

    apiRequest();
    setDataChart({
      labels: newLabel,
        datasets: [
            {
                label: 'Sebaran Keluhan',
                data: newData,
                backgroundColor: [
                    'rgb(255,61,103)',
                    'rgb(54,162,235)',
                    'rgb(255,205,86)',
                    'rgb(75,192,192)',
                ],
            }
        ]
    })
    setLoading(false);
  }, []);

  if (loading===true) {
    return (
      <div className="loading">
        <Progress percent={100} status="active" showInfo={false} strokeWidth={15}/>
        <p>Please Wait . . .</p>
      </div>
    );
  } else {
    return (
      <Fragment>
        <NavBar/>
        {location.pathname === '/' && <Header name={'Home'}/>}
        {location.pathname === '/keluhan' && <Header name={'Form Keluhan'}/>}
        {location.pathname === '/statistik' && <Header name={'Statistik'}/>}
        {location.pathname === '/diagram' && <Header name={'Diagram Alir'}/>}
        {location.pathname === '/daftar-keluhan' && <Header name={'Daftar Keluhan'}/>}

        {/* Route */}
        <Switch>
          <Route exact path="/">
            <Card/>
          </Route>
          <Route path="/keluhan">
            <Form/>
          </Route>
          <Route path="/statistik">
            <PieChart dataChart={dataChart}/>
          </Route>
          <Route path="/diagram">
            <Diagram/>
          </Route>
          <Route path="/daftar-keluhan">
            <TableComp/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>

        </Switch>

      </Fragment>
  );

  }

}

export default App;
