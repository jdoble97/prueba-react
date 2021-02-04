import React from 'react'
import Card from '../components/Card'

function ExerciseList(props) {
    return (
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
}
export default ExerciseList