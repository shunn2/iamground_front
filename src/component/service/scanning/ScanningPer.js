import React, { useEffect, useState } from "react";
import TableMaterial from "../../module/TableMaterial";
import axios from "axios";

function ScanningPer({ report_id }) {
  const [tableData, setTableData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://54.180.115.206:8000/mock/scan/report/permission?report_id=${report_id}`);
    setTableData(response.data.permissionList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div style={{ paddingTop: "50px" }}>
        <TableMaterial
          columns={[
            { title: "Resource", field: "resource" },
            { title: "arn", field: "arn" },
            { title: "Reason", field: "reason" },
            { title: "Recommendation", field: "recommendation", align: "center" },
            { title: "Marking", field: "marking", align: "center" },
          ]}
          cdata={tableData
            .sort((x, y) => x.mark - y.mark)
            .map((v, i) => {
              return {
                resource: v.resourceName,
                arn: v.resourceArn,
                reason: v.reasonDetail,
                recommendation: <button>자세히 보기</button>,
                marking: v.mark ? <input type="checkbox" defaultChecked="true" /> : <input type="checkbox" />,
              };
            })}
          title="Permissions"
          type="scanningper"
        />
      </div>
    </>
  );
}

export default ScanningPer;
