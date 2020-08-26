import React, { Component } from 'react';
import { BudgetConsumer } from '../store';


class ExpenseDisplay extends Component {
    render() {
        return (
            <div className="card mt-5">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>amount</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <BudgetConsumer>
                        {value => {
                            console.log(value)
                            const expensesList = value.expenses.length > 0 ? (
                                value.expenses.map((expense, index) => {
                                    console.log(expense);
                                    return (
                                        <tr key={index}>
                                            <td>{expense.title}</td>
                                            <td>{expense.amount}</td>
                                            <td>{expense.category}</td>
                                        </tr>
                                    )
                                })
                            ) : (
                                    <tr>

                                    </tr>
                                )
                            return <tbody>{expensesList}</tbody>
                        }}
                    </BudgetConsumer>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExpenseDisplay