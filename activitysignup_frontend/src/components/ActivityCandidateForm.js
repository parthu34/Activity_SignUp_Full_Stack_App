import { Button, Grid,TextField, withStyles} from "@material-ui/core";
import React,{useEffect, useState} from "react";
import useForm from "./useForm";
import * as actions from "../actions/activityCandidate";
import { connect } from "react-redux";

const styles = theme => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        minWidth: 220,
        }
    },
    smMargin:{
        margin: theme.spacing(1)
    }
})


const initialFieldValues = {
    firstName: '',
    lastName: '',
    email:'',
    startDate:'',
    activity:'',
    experienceYears:'',
    comments:''
}

const ActivityCandidateForm = ({classes, ...props}) => {

    const validate = (fieldValues = values) =>{
        let temp = {...errors}
        if('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName!=""?"":"This fiels is required!"
        if('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName!=""?"":"This fiels is required!"
        if('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" :"Please enter valid email!"
        setErrors({
            ...temp
        })
    if(fieldValues == values)
        return Object.values(temp).every(x=> x=="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFieldValues,validate, props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()
        if(validate())
        {
            if(props.currentId==0)
                props.createActivityCandidate(values,()=>{window.alert("New Record Created!")})
            else
                props.updateActivityCandidate(props.currentId, values, () => {window.alert("Record Updated!")})
        }

        resetForm()
    }

    useEffect(()=> {
        if(props.currentId != 0){
        setValues({
            ...props.activityCandidateList.find(x => x.id==props.currentId)
        })
        setErrors({})
    }
    },[props.currentId])

    return(
    <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
                <p><b>Activity Signup Form</b></p>
                <TextField 
                name="firstName"
                variant="outlined"
                label="First Name"
                value={values.firstName}
                onChange={handleInputChange}
                {...(errors.firstName && {error:true, helperText:errors.firstName})}
                />
                <TextField
                name="lastName"
                variant="outlined"
                label="Last Name"
                value={values.lastName}
                onChange={handleInputChange}
                {...(errors.lastName && {error:true, helperText:errors.lastName})}
                />
                <TextField 
                name="email"
                variant="outlined"
                label="Email Address"
                value={values.email}
                onChange={handleInputChange}
                {...(errors.email && {error:true, helperText:errors.email})}

                />
                <TextField 
                name="startDate"
                type="date"
                variant="outlined"
                value={values.startDate}
                onChange={handleInputChange}
                />
                <TextField 
                name="activity"
                variant="outlined"
                label="Name of activity"
                value={values.activity}
                onChange={handleInputChange}
                />
                <TextField 
                name="experienceYears"
                variant="outlined"
                type="number"
                label="Activity experience years"
                value={values.experienceYears}
                onChange={handleInputChange}
                />
                <TextField 
                name="comments"
                variant="outlined"
                label="Comments"
                value={values.comments}
                onChange={handleInputChange}
                />
                <div>
                    <Button 
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.smMargin}
                    >Submit</Button>
                    <Button 
                    variant="contained"
                    className={classes.smMargin}
                    onClick={resetForm}
                    >Reset</Button>
                </div>
            </Grid>
        </Grid>
    </form>
    );
}

const mapStateToProps = state => ({
    activityCandidateList:state.activityCandidate.list
})

const mapActioToProps = {
    createActivityCandidate : actions.create,
    updateActivityCandidate : actions.update

}

export default connect(mapStateToProps,mapActioToProps)(withStyles(styles) (ActivityCandidateForm));