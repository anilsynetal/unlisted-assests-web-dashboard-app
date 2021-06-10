import React from 'react';
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
//import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableArrow from "./table_arrow.svg"
import "./myholdingstableheader.css" 

export default function OngoingransactionTableHeader(props){
const {valueToOrderBy,orderDirection,handleRequestSort}=props
const createSortHandler =(property)=>(event)=>{
  handleRequestSort(event,property)
}
const TableArrowfunction =()=>{
  return(<div className="tableArrow"> <img src={TableArrow}  /> </div>)
}
  return(
    <TableHead>
      <TableRow>
        <TableCell key="company" >
          <TableSortLabel
          IconComponent={TableArrowfunction}
          active={valueToOrderBy === "company"}
          direction={valueToOrderBy === "company" ? orderDirection : 'asc'}
         onClick={createSortHandler("company")}
          
          
          >
            Company Name
          </TableSortLabel>
        </TableCell>

        <TableCell key="verified">
            <TableSortLabel
              
              IconComponent={TableArrowfunction}
              active={valueToOrderBy === "verified"}
              direction={valueToOrderBy === "verified" ? orderDirection : 'asc'}
              onClick={createSortHandler("verified")}
            >
                      Transaction ID
            </TableSortLabel>
          </TableCell>

          <TableCell key="date">
              <TableSortLabel
                IconComponent={TableArrowfunction}
                active={valueToOrderBy === "date"}
                direction={valueToOrderBy === "date" ? orderDirection : 'asc'}
                onClick={createSortHandler("date")}
              >
                        Action
              </TableSortLabel>
          </TableCell>

          

          <TableCell key="availableforsell">
            <TableSortLabel
              IconComponent={TableArrowfunction}
              active={valueToOrderBy === "availableforsell"}
              direction={valueToOrderBy === "availableforsell" ? orderDirection : 'asc'}
              onClick={createSortHandler("availableforsell")}
            >
                      Total Shares<br/>under Negotiation
            </TableSortLabel>
          </TableCell>

          <TableCell key="action">
              <TableSortLabel
                  IconComponent={TableArrowfunction}
                  active={valueToOrderBy === "action"}
                  direction={valueToOrderBy === "action" ? orderDirection : 'asc'}
                  onClick={createSortHandler("action")}
              >
                    Approx Amount<br/>under Consideration
               </TableSortLabel>
          </TableCell>

          <TableCell key="action">
              <TableSortLabel
                  IconComponent={TableArrowfunction}
                  active={valueToOrderBy === "action"}
                  direction={valueToOrderBy === "action" ? orderDirection : 'asc'}
                  onClick={createSortHandler("action")}
              >
                    Date & Time
               </TableSortLabel>
          </TableCell>

          <TableCell key="action">
              <TableSortLabel
                  IconComponent={TableArrowfunction}
                  active={valueToOrderBy === "action"}
                  direction={valueToOrderBy === "action" ? orderDirection : 'asc'}
                  onClick={createSortHandler("action")}
              >
                    Status
               </TableSortLabel>
          </TableCell>

        
      </TableRow>

    </TableHead>
  )
}