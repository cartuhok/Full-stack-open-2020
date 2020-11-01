import React from 'react'
import Header from './Header'
import Content from './Content'

const Courses = ({courses}) => (
    courses.map(course => {
        return (
            <div key={course.id}>
                <Header name={course.name} />
                <Content course={course} />
            </div>
        )
    })
)

export default Courses