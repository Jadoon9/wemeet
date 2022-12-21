import React from "react";

const DataTable = ({ thead1, thead2, thead3, thead4, thead5 }) => {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <table
                id="datatable-buttons"
                class="table table-striped table-bordered dt-responsive nowrap"
                // style="border-collapse: collapse; border-spacing: 0; width: 100%"
              >
                <thead>
                  <tr>
                    <th>{thead1}</th>
                    <th>{thead2}</th>
                    <th>{thead3}</th>
                    <th>{thead4}</th>
                    <th>{thead5}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Gloria Little</td>
                    <td>Systems Administrator</td>
                    <td>New York</td>
                    <td>59</td>
                    <td>2009/04/10</td>
                    <td>$237,500</td>
                  </tr>

                  <tr>
                    <td>Michael Bruce</td>
                    <td>Javascript Developer</td>
                    <td>Singapore</td>
                    <td>29</td>
                    <td>2011/06/27</td>
                    <td>$183,000</td>
                  </tr>
                  <tr>
                    <td>Donna Snider</td>
                    <td>Customer Support</td>
                    <td>New York</td>
                    <td>27</td>
                    <td>2011/01/25</td>
                    <td>$112,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
