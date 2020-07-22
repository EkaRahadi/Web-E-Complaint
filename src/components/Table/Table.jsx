import React , { Component }from 'react';
import MaterialTable from 'material-table';
import lodash from 'lodash';
import './Table.css';
 
class TableComp extends Component {

    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
        data: []
      }
    }

   async componentDidMount() {
      if (this.state.isLoading) {
        await fetch('https://api.elbaayu.xyz/api-mobile/complaint/', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(async response => {
          if (response.success === true) {
            const dataKeluhan = []
            await response.data.map( (item, index) => {
              dataKeluhan.push({
                no: index+1,
                keluhan: lodash.upperFirst(lodash.trim(item.keluhan, [',', '.'])),
                kategori: item.kategori.kategori,
                status: item.status.status
              })
            })

            this.setState({
              ...this.state,
              isLoading: false,
              data: dataKeluhan
            })
          }
          else {
            this.setState({
              ...this.state,
              isLoading: false
            })
          }
        })
      }
    }

    column = [
              { title: 'No', field: 'no' },
              { title: 'Keluhan', field: 'keluhan' },
              { title: 'Kategori', field: 'kategori'},
              { title: 'Status', field: 'status',}
            ]

    render() {
        return(
        <MaterialTable
          title="Keluhan"
          isLoading={this.state.isLoading}
          columns={this.column}
          data={this.state.data}        
          options={{
            search: true
          }}
        />
        );
    }
}

export default TableComp;