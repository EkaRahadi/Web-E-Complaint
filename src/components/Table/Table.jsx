import React , { Component }from 'react';
import DataTable from 'react-data-table-component';
// import TextField from '@material-ui/core/TextField';
// import Icon1 from '@material-ui/icons/ReplyAll';
// import Icon2 from '@material-ui/icons/Markunread';
// import Icon3 from '@material-ui/icons/CloudDownload';
 
const data = [{ no: 1, keluhan: 'Ruang kelas kotor', kategori: 'Sarana Prasarana', status: 'Sudah Ditanggapi' }];
const columns = [
  {
    name: 'NO',
    selector: 'no',
    sortable: true,
    width: '5%',
    wrap: true,
    center: true
  },
  {
    name: 'KELUHAN',
    selector: 'keluhan',
    sortable: true,
    wrap: true,
    center: true
  },
  {
    name: 'KATEGORI',
    selector: 'kategori',
    sortable: true,
    width: '15%',
    wrap: true,
    center: true
  },
  {
    name: 'STATUS',
    selector: 'status',
    sortable: true,
    width: '10%',
    wrap: true,
    center: true
  },
];

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
            await response.data.map(item => {
              dataKeluhan.push({
                no: item.id,
                keluhan: item.keluhan,
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

    render() {
        return(
            <DataTable
            title="Daftar Keluhan"
            columns={columns}
            data={this.state.data}
            defaultSortField="no"
            // expandableRows={expandableRows}
            // expandOnRowClicked={expandOnRowClick}
            pagination={true}
            highlightOnHover={true}
            striped={false}
            progressPending={this.state.isLoading}
            noHeader={true}
            subHeader={false}
            // subHeaderComponent={
            //   (
            //     <div style={{ display: 'flex', alignItems: 'center' }}>
            //       <TextField id="outlined-basic" label="Search" variant="outlined" size="small" style={{ margin: '5px' }} />
            //       <Icon1 style={{ margin: '5px' }} color="action" />
            //       <Icon2 style={{ margin: '5px' }} color="action" />
            //       <Icon3 style={{ margin: '5px' }} color="action" />
            //     </div>
            //   )
            // }
            subHeaderAlign={'center'}
            fixedHeader={false}
            fixedHeaderScrollHeight="300px"
            direction={'auto'}
          />
        );
    }
}

export default TableComp;