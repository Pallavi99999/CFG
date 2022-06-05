import React from "react";
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
} from "reactstrap";
const CustomTable = ({ header, rows, theme }) => {
  return (
    <Table
      className={`align-items-center table-${theme} table-flush`}
      responsive
    >
      <thead className={`thead-${theme}`}>
        <tr>
          {header.map((item, index) => (
            <th scope="col">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(
          ({ id, name, address, aadhaar, parent, date, status, progress }) => (
            <tr>
              <td>
                <Media className="align-items-center">
                  <Media>
                    <span className="mb-0 text-sm">{id}</span>
                  </Media>
                </Media>
              </td>
              <td>{name}</td>
              {/* <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-warning" />
                  {status}
                </Badge>
              </td> */}
              <td>{address}</td>
              <td>{aadhaar}</td>
              <td>{parent}</td>
              <td>{date}</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{progress}%</span>
                  <div>
                    <Progress
                      max="100"
                      value={progress}
                      barClassName="bg-success"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default CustomTable;