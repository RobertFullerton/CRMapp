import  React from 'react';
import { Table } from 'react-bootstrap';

// Will need to import the Date from the database

const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


export const ClientData = () => {
    return (
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
                <tr>
                    <td>1</td>
                    <td>{date}</td>
                    <td><a href="#!">Me</a></td>
                    <td>CRM Manager</td>
                    <td>1</td>
                    <td>$20000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{date}</td>
                    <td><a href="#!">You</a></td>
                    <td>Rock The Cane</td>
                    <td>2</td>
                    <td>$20000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{date}</td>
                    <td><a href="#!">Them</a></td>
                    <td>Toy Swap</td>
                    <td>3</td>
                    <td>$20000</td>
                </tr>
            </tbody>
        </Table>
    )
};
