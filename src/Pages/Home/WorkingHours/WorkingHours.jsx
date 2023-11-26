import React from 'react';

const WorkingHours = () => {
    return (
        <section className="py-8 ct-table content-section division">
            <div className="container">
                <div className="row d-flex align-items-center">


                    {/* -- TEXT -- */}
                    <div className="col-lg-6">
                        <div className="left-column wow fadeInRight">

                            {/* -- Section ID -- */}
                            <span className="section-id">Time Schedule</span>

                            {/* -- Title -- */}
                            <h2 className="h2-md">Working Hours</h2>

                            {/* -- Text -- */}
                            <p className="mb-0">Nemo ipsam egestas volute turpis varius ipsum egestas purus diam ligula
                                sapien ultrice sapien tempor aliquam tortor ipsum and augue turpis quaerat aliquet
                                congue and molestie magna in congue undo aliquet congue ultrices quaerat purus justo
                            </p>

                        </div>
                    </div>


                    {/* -- TABLE -- */}
                    <div className="col-lg-6">
                        <div className="txt-table right-column wow fadeInLeft">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Mon – Wed</td>
                                        <td> - </td>
                                        <td className="text-end">10:00 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td> - </td>
                                        <td className="text-end">10:00 AM - 7:30 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td> - </td>
                                        <td className="text-end">10:00 AM - 9:00 PM</td>
                                    </tr>
                                    <tr className="last-tr">
                                        <td>Sun - Sun</td>
                                        <td>-</td>
                                        <td className="text-end">10:00 AM - 5:00 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>	
                    {/* -- END TABLE -- */}


                </div>    
                {/* -- End row -- */}
            </div>	   
            {/* -- End container -- */}
        </section>
    );
};

export default WorkingHours;