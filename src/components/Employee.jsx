// imports
import React, { useState } from 'react';
import useSortableData from "./Sort";

const Employee = (props) => {
    const [value, setValue] = useState('');
    const { employees, sort } = useSortableData(props.employees);

    return (
        <>
            <input
                type='text'
                autoComplete='off'
                placeholder='Search'
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        {/* first name */}
                        <th>
                            <button
                                type='button'
                                onClick={() => sort('first_name')}
                            >First Name</button>
                        </th>
                        {/* last name */}
                        <th>
                            <button
                                type='button'
                                onClick={() => sort('last_name')}
                            >Last Name</button>
                        </th>
                        {/* title name */}
                        <th>
                            <button
                                type='button'
                                onClick={() => sort('title')}
                            >Title</button>
                        </th>
                        {/* email */}
                        <th>
                            <button
                                type='button'
                                onClick={() => sort('email')}
                            >Email</button>
                        </th>
                        {/* phone */}
                        <th>
                            <button
                                type='button'
                                onClick={() => sort('phone')}
                            >Phone Number</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees
                            .filter(item => {
                                if (!value) return true;
                                if (item.title.toLowerCase().includes(value.toLowerCase())
                                    || item.first_name.toLowerCase().includes(value.toLowerCase())
                                    || item.last_name.toLowerCase().includes(value.toLowerCase())
                                    || item.email.toLowerCase().includes(value.toLowerCase())
                                    || item.phone.toLowerCase().includes(value.toLowerCase())
                                ) {
                                    return true;
                                }
                                return false;
                            })
                            .map((emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.first_name}</td>
                                    <td>{emp.last_name}</td>
                                    <td>{emp.title}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Employee;