import  React from 'react';
import { Table } from 'react-bootstrap';

// Will need to import the Date from the database

const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


export const ClientData = ({client}) => {
    return (
        // need to convert table to reactstrap grid
        <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date:</th>
                    <th>Client</th>
                    <th>Project Name:</th>
                    <th>Invoice Number:</th>
                    <th>Invoice Amount:</th>
                </tr>
            </thead>
            <tbody>
                {client.length ? client.map(row =>
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{date}</td>
                            <td><a href="#!">{row.client}</a></td>
                            <td>{row.project}</td>
                            <td>{row.invoice}</td>
                            <td>{row.price}</td>
                        </tr>
                ) :
                    <tr>
                        <td colSpan="12" className="text-center">Click the "+" to add clients</td>
                            
                    </tr>
                }
                
            </tbody>
        </Table>
    )
};
