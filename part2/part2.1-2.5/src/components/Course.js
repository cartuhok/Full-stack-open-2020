import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({courses}) => (
    courses.map(course => {
        return (
            <div key={course.id}>
                <Header name={course.name} />
                <Content courses={course} />
            </div>
        )
    })
)

export default Course