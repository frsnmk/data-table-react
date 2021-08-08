import React from 'react'
// import PropTypes from 'prop-types'

export const DataTable = ({ datas }) => {
    const headers = datas[0] && Object.keys(datas[0])
    return (
        <table cellPadding={2} cellSpacing={10}>
            <thead>
                <tr>{datas[0] && headers.map(field =>(
                    <th>{field}</th>
                ))}</tr>
            </thead>
            <tbody>
                { datas.map(data => (
                    <tr>{headers.map(header => <td>{JSON.stringify(data[header])}</td>)}</tr>
                ))}
            </tbody>
        </table>
    )
}

// DataTable.PropTypes = {
//     data: PropTypes.arrayOf(Object).isRequired
// }