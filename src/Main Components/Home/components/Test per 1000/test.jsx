import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import Axios from 'axios';
import {Paper} from '@material-ui/core'
import styles from '../State Wise Daily/daily.module.css'

class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             data:[],
             state:[],
             chartData:props.chartData
        }
    }
    
    componentDidMount() {
        Axios.get('https://api.covid19india.org/data.json')
        .then(response => {
            console.log(response)
            this.setState({posts:response.data.statewise})
        })
        .catch(error => {
            console.log(error)
        })

        Axios.get('https://api.covid19india.org/state_test_data.json')
        .then(response => {
            console.log(response)
            this.setState({data:response.data.states_tested_data})
            var tested=response.data.states_tested_data
            // console.log(tested.state)
            const stdata=this.state.posts
            console.log(stdata)
        var index=0,index1=0
        for(var i=0;i<stdata.length;i++)
        {
            var count=0;
            for(var j=0;j<tested.length;j++)
            {
                if(tested[j].state===stdata[i].state)
                {
                    if(tested[j].totaltested!=='' && tested[j].testsperthousand!=='' && tested[j].testpositivityrate!=='')
                    {
                        index1=j
                        continue
                    }
                    if(tested[j].totaltested==='' || tested[j].testsperthousand==='' || tested[j].testpositivityrate===''){
                        count++;
                        index=j;
                        break;
                    }
                    
                }
            }
            if(count===1)
            {
                        stdata[i].totaltested=tested[index-1].totaltested
                        
                        stdata[i].testsperthousand=tested[index-1].testsperthousand
                        
                        stdata[i].testpositivityrate=tested[index-1].testpositivityrate
                        
                        
            }
            if(count===0)
            {
                stdata[i].totaltested=tested[index1].totaltested
                        
                stdata[i].testsperthousand=tested[index1].testsperthousand
                
                stdata[i].testpositivityrate=tested[index1].testpositivityrate
                
            }
        }
        this.setState({posts:stdata})
        // console.log(stdata)
        var states=[]
        var info1=[]
        var info2=[]
        var info3=[]
        for(let i=1;i<stdata.length;i++)
        {
         
            states[i-1]=stdata[i].state
            info1[i-1]=stdata[i].totaltested
            // console.log(stdata[i].state)
            info2[i-1]=stdata[i].testsperthousand
            // console.log(info2[i-1])
            info3[i-1]=stdata[i].testpositivityrate
            // console.log(info3[i-1])
            info3[i-1].replace('%','')
            info3[i-1]=parseInt(info3[i-1])
            //console.log(info3[i-1])
          
        }
        this.setState({
            chartData:{
                labels: states,
              datasets:[
                {
                  label:'No. of Tests Per 1000',
                  data: info2,
                  backgroundColor:[
                    
                    'rgba(255,3,0,1)',
                    'rgba(219,3,0,1)',
                    'rgba(152,3,0,1)',
                    'rgba(255,3,0,0.7)',
                    'rgba(101,191,217,1)',
                    'rgba(101,191,217,0.59)',
                    'rgba(101,79,161,0.98)',
                    'rgba(208,79,197,0.98)',
                    'rgba(208,79,197,0.65)',
                    'rgba(43,144,197,1)',
                    'rgba(43,144,197,0.56)',
                    'rgba(0,255,255,0.56)',
                    'rgba(0,208,255,1)',
                    'rgba(0,251,14,1)',
                    'rgba(30, 130, 76, 1)',
                    'rgba(41, 241, 195, 1)',
                    'rgba(212,101,212,1)',
                    'rgba(101,101,212,1)',
                    'rgba(234,101,212,1)',
                    'rgba(98,101,212,1)',
                    'rgba(89,101,212,1)',
                    'rgba(190,101,212,1)',
                    'rgba(199,101,212,1)',
                    'rgba(191, 85, 236, 1)',
                    'rgba(102, 51, 153, 1)',
                    'rgba(140, 20, 252, 1)',
                    'rgba(150,101,160,1)',
                    'rgba(0,251,14,0.45)',
                    'rgba(90,200,120,1)',
                    'rgba(90,200,120,1)',
                    'rgba(150,101,160,1)',
                    'rgba(34, 49, 63, 1)',
                    'rgba(150,101,160,1)',
                    'rgba(90,200,120,1)',
                    'rgba(90,200,120,1)',
                    'rgba(247, 202, 24, 1)',
                    'rgba(238, 238, 0, 1)',
    
                  ]
                }
              ]
            }
          })
        })
        .catch(error => {
            console.log(error)
        })
    }
    static defaultProps = {
        displayTitle:true,
        // displayLegend: true,
        legendPosition:'bottom',
        location:'City'
      }
    render() {
        return (
            <div>
                <Paper elevation={24} className={styles.paper}>
                    <Bar
                    data={this.state.chartData}
                    options={{
                    title:{
                    display:this.props.displayTitle,
                    text:'State-Wise No. of Tests Per 1000', 
                    fontSize:15
                    },
                    legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:true
                            }   
                        }]
                    },
                    }}
                    />
                </Paper>
            </div>
        )
    }
}

export default Test
