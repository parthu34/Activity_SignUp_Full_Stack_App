import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/activityCandidate";
import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import ActivityCandidateForm from "./ActivityCandidateForm";
import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";


const styles = theme => ({
    root:{
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper :{
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const ActivityCandidates = ({classes,...props}) => {

    const [currentId,setCurrentId] = useState(0)

    useEffect(()=> {
        props.fetchAllActivityCandidates()
    },[])

    // Delete record
    // const onDelete = id => {
    //     if(window.confirm('Do you want to delete this record?'))
    //         props.deleteActivityCandidate(id,()=>{window.alert("Record is Deleted!")})
    // }

    return ( 
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <ActivityCandidateForm {...({currentId,setCurrentId})} />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>First Name:</TableCell>
                                    <TableCell>Last Name:</TableCell>
                                    <TableCell>Email Address:</TableCell>
                                    <TableCell></TableCell>
                                    {/* <TableCell>Starting Date:</TableCell>
                                    <TableCell>Number of years of experience with this activity:</TableCell>
                                    <TableCell>Activity Name:</TableCell>
                                    <TableCell>Comments:</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.activityCandidateList.map((record,index)=>{
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.firstName}</TableCell>
                                            <TableCell>{record.lastName}</TableCell>
                                            <TableCell>{record.email}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                    onClick={()=>{setCurrentId(record.id)}} /></Button>
                                                    {/* <Button><DeleteIcon color="secondary"
                                                    onClick={()=> onDelete(record.id)} /></Button> */}
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
     );
}
 
const mapStateToProps = state => ({
    activityCandidateList:state.activityCandidate.list
})

const mapActioToProps = {
    fetchAllActivityCandidates: actions.fetchAll,
    // deleteActivityCandidate: actions.Delete
}

export default connect(mapStateToProps,mapActioToProps)(withStyles(styles) (ActivityCandidates));