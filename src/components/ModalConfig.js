import React from "react";
import faker from "faker/locale/ko";
import "../style/style.css";

faker.seed(100);

const spanStyle = {
  position: "relative",
  top: "100px",
};

function ModalConfig() {
  // const infoArr = ["Cloud Name", "User", "Service", "Resource", "Activity", "Reason", "Raw Event"];
  const infoDetail = [
    "Cloud Name / IAMGROUND_CLOUD",
    "User / User1: arn:aws:iam::284264230655:user/User1",
    "Service / S3: arn:aws:s3:::Iamground",
    "Activity / CreateBucket",
    "Reason / dangerous Access",
    "Raw Event /" + faker.datatype.json(),
  ];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ padding: "5px", fontSize: "20px" }}>
        <span style={{ display: "inline-block", width: "150px", fontWeight: "bold" }}>클라우드 이름</span> | IAMGROUND
      </div>
      <div style={{ padding: "5px", fontSize: "20px" }}>
        <span style={{ display: "inline-block", width: "150px", fontWeight: "bold" }}>리소스 이름</span> | Root (arn:aws:iam::284264230655:root)
      </div>
      <div style={{ padding: "5px", fontSize: "20px" }}>
        <span style={{ display: "inline-block", width: "150px", fontWeight: "bold" }}>수정 추천 이유</span> | Root 사용
      </div>
      <div style={{ padding: "5px", fontSize: "20px" }}>
        <span style={{ display: "inline-block", width: "150px", fontWeight: "bold" }}>설명</span> | AWS 계정 Root 사용자가 30일 이내에 사용되었습니다.
      </div>
      <div style={{ padding: "5px", fontSize: "20px" }}>
        <span style={{ display: "inline-block", width: "150px", fontWeight: "bold" }}>현재 상태</span> | Root 사용자의 password이(가) 0일 이내에 사용되었습니다.
      </div>
      <div style={{ padding: "5px", fontSize: "20px" }}>
        <span style={{ display: "inline-block", width: "150px", fontWeight: "bold" }}>점검 방법</span> | AWS Console
        <div style={{ paddingLeft: "167px" }}>
          <div>1) AWS 콘솔에 접속한다.</div>
          <div>2) ‘서비스’를 클릭한다.</div>
          <div>3) ‘IAM’을 클릭한다.</div>
          <div>4) ‘자격 증명 보고서’를 클릭한다.</div>
          <div>5) ‘보고서 다운로드’를 클릭하여, .xls 파일형식의 보고서를 확인하다. 해당 보고서는 root 계정과 모든 IAM 유저들의 자격증명을 포함하고 있다.</div>
          <div>- 보고서의 root_account 계정의 password_last_used가 30일 이내의 날짜인지 확인한다.</div>
          <div>- 보고서의 root_account 계정의 access_key_1_active가 TRUE라면, access_key_1_last_used_date가 30일보다 오래됐는지 확인한다.</div>
          <div>- 보고서의 root_account 계정의 access_key_2_active가 TRUE라면, access_key_2_last_used_date가 30일보다 오래됐는지 확인한다.</div>
        </div>
        <div style={{ padding: "5px", fontSize: "20px" }}>
          <span style={{ display: "inline-block", width: "150px", fontWeight: "bold" }}>조치 방법</span> | AWS Console
          <div style={{ paddingLeft: "167px" }}>
            <div>1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.</div>
            <div>2) ‘서비스’를 클릭한다.</div>
            <div>3) ‘IAM’을 클릭한다.</div>
            <div>4) 좌측 ‘사용자’를 클릭한다.</div>
            <div>5) 사용자 세부 정보 설정란에 이름을 입력 항 후 AWS 액세스 유형을 선택합니다. 그리고 비밀번호 재설정 필요를 체크하고 다음:권한버튼을 클릭하시오.</div>
            <div>
              6) 권한 설정 페이지에서 기존 정책 직접 연결 옵션을 클릭하시오. 그 다음 EC2 인스턴스에 대한 액세스가 필요한 경우 AmazonEC2FullAccess정책을 선택하시오. 그 다음 다음:태그 버튼을 클릭하시오.{" "}
            </div>
            <div>7) 태그 값이 필요한 경우 태그를 추가하시오. 그 다음 다음:검토를 클릭하시오</div>
            <div>8) 마지막으료 사용자 만들기 버튼을 클릭하여 계정을 생성하시오</div>
            <div>9) .CVS 다운로드 버튼을 클릭하여 계정 정보를 저장하시오. 해당 파일을 다운로드 했다면, 다시 IAM 사용자 페이지로 이동합니다.</div>
            <div>10) 새로 생성한 해당 계정의 이름을 클릭하여 요약 페이지로 이동하시오.</div>
            <div>11) 해당 페이지에서 보안 자격 증명을 클릭하시오.</div>
            <div>12) 해당 탭에서 로그인 자격 증명의 할당된 MFA 디바이스의 할당되지 않음 옆 관리 버튼을 클릭하시오.</div>
            <div>13) MFA 디바이스 관리 창에서 추가할 MFA 디바이스를 체크 하시고 계속 버튼을 클릭하시오.(현재 문서에서는 가상 MFA Google Authenticator를 이용하겠습니다.) </div>
            <div>14) 호환 되는 모바일 디바이스에 Google Authenticator를 설치한 후 해당 앱에서 QR 코드를 스캔하시오. 그 다음 MFA 코드 1,2를 채우시오.</div>
            <div>15) MFA할당을 클릭하시오.</div>
          </div>
        </div>
        <div style={{ padding: "5px", fontSize: "20px" }}>
          <span style={{ display: "inline-block", width: "150px", fontWeight: "bold" }}>참조</span> | (일상적인 작업에는 루트 액세스 키를 사용하지 않는 것이 좋습니다. AWS에 로그인하고 대신 IAM
          사용자를 생성해야 합니다.)
          <div style={{ paddingLeft: "167px" }}>
            <div style={{ fontWeight: "bold" }}> https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf</div>
            <div>(CIS Bench mark 1.1 Avoid the use of the 'root' account)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConfig;
