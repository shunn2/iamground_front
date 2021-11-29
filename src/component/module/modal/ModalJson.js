import { ArrowBack } from "@mui/icons-material";
import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function ModalJson() {

  const RecTable = () => {
    return (
      <div style={{}}>
    <table
        border="3"
        borderColor="black"
        cellPadding="5"
        style={{
        textAlign: "center",
        borderCollapse: "collapse",
        cellpadding: "20px",
        width:'100%',
        height:'600px'
        }}
    >
        <tr>
        <td style={{ width: "50%", fontWeight: "bold" }}>정책 이름: iamgroundReadOnly</td>
        <td style={{ width: "50%", fontWeight: "bold" }}>Recommendation</td>
        </tr>
        <tr>
        <td style={{ width: "50%", height: "200px", textAlign: "left" }}>
            <div>{`{`}</div>
            <div style={{ paddingLeft:'16px' }}>"Version": "2012-10-17",</div>
            <div style={{ paddingLeft:'16px' }}>"Statement": [</div>
            <div style={{ paddingLeft:'32px' }}>{`{`}</div>
            <div style={{ paddingLeft:'48px' }}>"Effect": "Allow",</div>
            <div style={{ paddingLeft:'48px' }}>"NotAction": [ </div>
            <div style={{ paddingLeft:'64px' }}>"iam:*", </div>
            <div style={{ paddingLeft:'64px' }}>"organizations:*", </div>
            <div style={{ paddingLeft:'64px' }}>"account:*" </div>
            <div style={{ paddingLeft:'48px' }}>], </div>
            <div style={{ paddingLeft:'48px' }}>"Resource": "*"</div>
            <div style={{ paddingLeft:'32px' }}>{`},`}</div>
            <div style={{ paddingLeft:'32px' }}>{`{`}</div>
            <div style={{ width: "calc(100% - 48px)", display: "inline-block", paddingLeft:'48px' }}>"Effect": "Allow", </div>
            <div style={{ width: "calc(100% - 48px)", display: "inline-block", paddingLeft:'48px' }}>"Action": [</div>
            <div style={{ backgroundColor: "#F8ABA1", width: "calc(100% - 64px)", display: "inline-block", paddingLeft:'64px' }}>"s3:*", </div>
            <div style={{ backgroundColor: "#F8ABA1", width: "calc(100% - 64px)", display: "inline-block", paddingLeft:'64px' }}>"organizations:DescribeOrganization", </div>
            <div style={{ backgroundColor: "#F8ABA1", width: "calc(100% - 64px)", display: "inline-block", paddingLeft:'64px' }}>"account:ListRegions"</div>
            <div style={{ width: "calc(100% - 48px)", display: "inline-block", paddingLeft:'48px' }}>],</div>
            <div style={{ width: "calc(100% - 48px)", display: "inline-block", paddingLeft:'48px' }}>"Resource": "*" </div>
            <div style={{ paddingLeft:'32px' }}>{`}`}</div>
            <div style={{ paddingLeft:'16px' }}>]</div>
            <div>{`}`}</div>
        </td>
        <td rowSpan="2" style={{ width: "50%", height: "500px", textAlign: "left" }}>
          <div style={{position:'absolute', marginLeft:"490px", cursor:"pointer"}}><ContentCopyIcon /></div>
        <div>{`{`}</div>
            <div style={{ paddingLeft:'16px' }}>"Version": "2012-10-17",</div>
            <div style={{ paddingLeft:'16px' }}>"Statement": [</div>
            <div style={{ paddingLeft:'32px' }}>{`{`}</div>
            <div style={{ paddingLeft:'48px' }}>"Effect": "Allow",</div>
            <div style={{ paddingLeft:'48px' }}>"NotAction": [ </div>
            <div style={{ paddingLeft:'64px' }}>"iam:*", </div>
            <div style={{ paddingLeft:'64px' }}>"organizations:*", </div>
            <div style={{ paddingLeft:'64px' }}>"account:*" </div>
            <div style={{ paddingLeft:'48px' }}>], </div>
            <div style={{ paddingLeft:'48px' }}>"Resource": "*"</div>
            <div style={{ paddingLeft:'32px' }}>{`},`}</div>
            <div style={{ paddingLeft:'32px' }}>{`{`}</div>
            <div style={{ width: "calc(100% - 48px)", display: "inline-block", paddingLeft:'48px' }}>"Effect": "Allow", </div>
            <div style={{ width: "calc(100% - 48px)", display: "inline-block", paddingLeft:'48px' }}>"Action": [</div>
            <div style={{ backgroundColor: "#BBE1B0", width: "calc(100% - 64px)", display: "inline-block", paddingLeft:'64px' }}>"s3:ListAllMyBuckets",</div>
            <div style={{ backgroundColor: "#BBE1B0", width: "calc(100% - 64px)", display: "inline-block", paddingLeft:'64px' }}>"s3:GetAccelerateConfiguration",</div>
            <div style={{ backgroundColor: "#BBE1B0", width: "calc(100% - 64px)", display: "inline-block", paddingLeft:'64px' }}>"s3:GetAccessPoint",</div>
            <div style={{ backgroundColor: "#BBE1B0", width: "calc(100% - 64px)", display: "inline-block", paddingLeft:'64px' }}>"s3:GetAccessPointPolicy",</div>
            <div style={{ backgroundColor: "#BBE1B0", width: "calc(100% - 64px)", display: "inline-block", paddingLeft:'64px' }}>"s3:GetAccessPointPolicyStatus",</div>
            <div style={{ width: "calc(100% - 48px)", display: "inline-block", paddingLeft:'48px' }}>],</div>
            <div style={{ width: "calc(100% - 48px)", display: "inline-block", paddingLeft:'48px' }}>"Resource": "*" </div>
            <div style={{ paddingLeft:'32px' }}>{`}`}</div>
            <div style={{ paddingLeft:'16px' }}>]</div>
            <div>{`}`}</div>
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: "left" }}>
            <div style={{ backgroundColor: "#F8ABA1", width: "100%", display: "inline-block" }}>"s3:*", </div>
            <div style={{ backgroundColor: "#F8ABA1", width: "100%", display: "inline-block" }}>"organizations:DescribeOrganization", </div>
            <div style={{ backgroundColor: "#F8ABA1", width: "100%", display: "inline-block" }}>"account:ListRegions"</div>
        </td>
        </tr>
    </table>
    </div>      
    );
  };

  return (
    <div style={{display:'flex', }}>
      <div style={{width:'120px', marginTop:"90px", border:'3px solid black', marginRight: '10px'}}>
        <div style={{borderBottom:"3px solid black", padding:'5px 10px', display:'flex', justifyContent:'space-between', alignItems:"center"}}>
          <div style={{fontSize:"14px", fontWeight:'bold'}}>권고사항</div>
          <div style={{width:"20px", height:"20px", border:'1px solid black', display:"flex", alignItems:'center', justifyContent:'center'}}>
            <ArrowBack style={{fontSize:"16px"}}/>
          </div>
        </div>
        <div>
          <div style={{fontSize:"13px", borderBottom:"3px solid black", padding:'5px 10px', backgroundColor:"#D3D3D3"}}>권고사항 1</div>
          <div style={{fontSize:"13px", borderBottom:"3px solid black", padding:'5px 10px'}}>권고사항 2</div>
          <div style={{fontSize:"13px", borderBottom:"3px solid black", padding:'5px 10px'}}>권고사항 3</div>
          <div style={{fontSize:"13px", borderBottom:"3px solid black", padding:'5px 10px'}}>권고사항 4</div>
          <div style={{fontSize:"13px", borderBottom:"3px solid black", padding:'5px 10px'}}>권고사항 5</div>
          <div style={{fontSize:"13px", borderBottom:"3px solid black", padding:'5px 10px'}}>권고사항 6</div>
          <div style={{fontSize:"13px", borderBottom:"3px solid black", padding:'5px 10px'}}>권고사항 7</div>
        </div>
      </div>
      <div style={{width:'calc(100% - 150px)'}}>
        <div style={{height:'90px'}}>
          <div style={{ fontWeight: "bold", marginBottom:'4px' }}>권고 사항 | 과도한 권한 IAM USER 수정</div>
          <div style={{ fontWeight: "bold", marginBottom:'4px' }}>추천 이유 | ssh-user 사용자에 연결된 iamgroundReadOnly 정책에서 90일간 미사용 서비스/권한/리소스가 존재합니다.</div>
          <div style={{ fontWeight: "bold", marginBottom:'16px' }}>현재 상태 | ssh-user 사용자는 IAM GROUP Developers 하위 PowerUserAccess 관리형 정책에 연결되어 있습니다.</div>
        </div>
        <RecTable />
      </div>
  </div>

  );
}

export default ModalJson;
