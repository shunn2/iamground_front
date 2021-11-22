import React from "react";
import faker from "faker/locale/ko";
import "../style/style.css";

faker.seed(100);

const spanStyle = {
  position: "relative",
  top: "100px",
};

function ModalInfo() {
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
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <div style={{ padding: "5px", fontSize: "20px" }}>
          <span style={{ display: "inline-block", width: "160px" }}>클라우드 이름</span> | IAMGROUND
        </div>
        <div style={{ padding: "5px", fontSize: "20px" }}>
          <span style={{ display: "inline-block", width: "160px" }}>주체 정보</span> | User1 (arn:aws:iam::284264230655:user/User1) / (192.16.2.48)
        </div>
        <div style={{ padding: "5px", fontSize: "20px" }}>
          <span style={{ display: "inline-block", width: "160px" }}>서비스</span> | IAM
        </div>
        <div style={{ padding: "5px", fontSize: "20px" }}>
          <span style={{ display: "inline-block", width: "160px" }}>리소스 정보</span> | iamgroundReadOnly
        </div>
        <div style={{ padding: "5px", fontSize: "20px" }}>
          <span style={{ display: "inline-block", width: "160px" }}>활동 정보</span> | CreatePolicy
        </div>
        <div style={{ padding: "5px", fontSize: "20px" }}>
          <span style={{ display: "inline-block", width: "160px" }}>위험 이유</span> | 정책에 * 포함
        </div>
        <div style={{ padding: "5px", fontSize: "20px", whiteSpace: "pre" }}>
          <span style={{ display: "inline-block", width: "160px" }}>원본 이벤트</span> |
          <div style={{ paddingLeft: "175px" }}>
            {JSON.stringify(
              {
                version: "0",
                id: "ce5645a3-2791-73ef-9db9-73c889bbe0e9",
                "detail-type": "AWS API Call via CloudTrail",
                source: "aws.iam",
                account: "962110289919",
                time: "2021-10-09T15:32:13Z",
                region: "us-east-1",
                resources: [],
                detail: {
                  eventVersion: "1.08",
                  userIdentity: {
                    type: "Root",
                    principalId: "962110289919",
                    arn: "arn:aws:iam::962110289919:root",
                    accountId: "962110289919",
                    accessKeyId: "ASIA6AAR5677ZZ2VY24L",
                    sessionContext: {
                      sessionIssuer: {},
                      webIdFederationData: {},
                      attributes: {
                        creationDate: "2021-10-09T11:54:21Z",
                        mfaAuthenticated: "false",
                      },
                    },
                  },
                },
              },
              //     eventTime: "2021-10-09T15:32:13Z",
              //     eventSource: "iam.amazonaws.com",
              //     eventName: "CreatePolicy",
              //     awsRegion: "us-east-1",
              //     sourceIPAddress: "221.149.235.161",
              //     userAgent: "console.amazonaws.com",
              //     requestParameters: {
              //       policyName: "trailTest",
              //       policyDocument:
              //         "{\n    'Version': '2012-10-17',\n    'Statement': [\n        {\n            'Sid': 'VisualEditor0',\n            'Effect': 'Allow',\n            'Action': 'cloudtrail:',\n            'Resource': ''\n        }\n    ]\n}",
              //       description: "trail ALL",
              //       tags: [],
              //     },
              //     responseElements: {
              //       policy: {
              //         policyName: "trailTest",
              //         policyId: "ANPA6AAR5677WZIUJRAYD",
              //         arn: "arn:aws:iam::962110289919:policy/trailTest",
              //         path: "/",
              //         defaultVersionId: "v1",
              //         attachmentCount: 0,
              //         permissionsBoundaryUsageCount: 0,
              //         isAttachable: true,
              //         createDate: "Oct 9, 2021 3:32:13 PM",
              //         updateDate: "Oct 9, 2021 3:32:13 PM",
              //         tags: [],
              //       },
              //     },
              //     requestID: "aaf7a930-75b8-4ffe-9c9d-ec565090c403",
              //     eventID: "c163e542-af25-4cbd-b56a-b2e5d0bb437a",
              //     readOnly: false,
              //     eventType: "AwsApiCall",
              //     managementEvent: true,
              //     recipientAccountId: "962110289919",
              //     eventCategory: "Management",
              //     sessionCredentialFromConsole: true,
              //   },
              // },
              null,
              4
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInfo;
