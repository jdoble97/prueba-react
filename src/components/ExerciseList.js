import React from 'react'
import Card from '../components/Card'

const ExerciseList = (props) => (
    <div>
        {props.data.map(((exercise, index) => {
            return (
                <Card
                    key={index}
                    title={exercise.title}
                    description={exercise.description}
                    img=''
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                />
            )
        }))}
    </div>
)
export default ExerciseList