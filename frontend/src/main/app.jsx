
require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <div className='container'>
        <Todo />
        <About />
    </div>
)