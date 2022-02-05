// import React from 'react';
import "./WidgetLarge.css"

const WidgetLarge = () => {
    const Button = ({type}) => {
        return <button className={"widget-lg-btn "+type}>{type}</button>
    }
    return (
        <>
            <div className="widget-large">
                <h3 className="widget-lg-title">Latest Transactions</h3>
                <table className="wiget-lg-table">
                    <tr className="widget-lg-tr">
                        <th className="widget-lg-th">Customer</th>
                        <th className="widget-lg-th">Date</th>
                        <th className="widget-lg-th">Amount</th>
                        <th className="widget-lg-th">Status</th>
                    </tr>

                    <tr className="widget-lg-tr">
                        <td className="widget-lg-user">
                            <img src="/img/user3.jpg" alt="" className="widget-lg-img" />
                            <span className="widget-lg-name">Susan Carols</span>
                        </td>

                        <td className="widget-lg-date">25 Jun 2021</td>
                        <td className="widget-lg-amount">$120</td>
                        <td className="widget-lg-status"> <Button type="Approved" />   </td>
                    </tr>
                    <tr className="widget-lg-tr">
                        <td className="widget-lg-user">
                            <img src="/img/user2.jpg" alt="" className="widget-lg-img" />
                            <span className="widget-lg-name">Susan Carols</span>
                        </td>

                        <td className="widget-lg-date">25 Jun 2021</td>
                        <td className="widget-lg-amount">$120</td>
                        <td className="widget-lg-status"> <Button type="Declined" />   </td>
                    </tr>
                    <tr className="widget-lg-tr">
                        <td className="widget-lg-user">
                            <img src="/img/user4.jpg" alt="" className="widget-lg-img" />
                            <span className="widget-lg-name">Susan Carols</span>
                        </td>

                        <td className="widget-lg-date">25 Jun 2021</td>
                        <td className="widget-lg-amount">$120</td>
                        <td className="widget-lg-status"> <Button type="Pending" />   </td>
                    </tr>
                    <tr className="widget-lg-tr">
                        <td className="widget-lg-user">
                            <img src="/img/user5.jpg" alt="" className="widget-lg-img" />
                            <span className="widget-lg-name">Susan Carols</span>
                        </td>

                        <td className="widget-lg-date">25 Jun 2021</td>
                        <td className="widget-lg-amount">$120</td>
                        <td className="widget-lg-status"> <Button type="Approved" />   </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default WidgetLarge;