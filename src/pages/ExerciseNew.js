import React from 'react'
import Card from '../components/Card'
import ExercisesForm from '../components/ExercisesForm'

const ExerciseNew = ({form, onChange, onSubmit}) => (
        <div className="row">
            <div className="col-sm">
                <Card {...form}></Card>
            </div>
            <div className="col-sm">
                <ExercisesForm onChange={onChange}
                    form={form}
                    onSubmit={onSubmit}
                ></ExercisesForm>
            </div>
        </div>

)
export default ExerciseNew