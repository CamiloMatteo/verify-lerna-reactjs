import React from "react";
// import "../multibrowser/jquery-1.12.4";
// import "../multibrowser/jquery.blockUI.js";
// import "../multibrowser/jsbn.js";
// import "../multibrowser/jsbn2.js";
// import "../multibrowser/json2.js";
// import "../multibrowser/rsa.js";
// import "../multibrowser/rsa2.js";
// import "../multibrowser/base64.js";
// import "../multibrowser/yahoo-min.js";
// import "../multibrowser/core.js";
// import "../multibrowser/md5.js";
// import "../multibrowser/sha1.js";
// import "../multibrowser/sha256.js";
// import "../multibrowser/ripemd160.js";
// import "../multibrowser/x64-core.js";
// import "../multibrowser/sha512.js";
// import "../multibrowser/rsapem-1.1.min.js";
// import "../multibrowser/rsasign-1.2.min.js";
// import "../multibrowser/asn1hex-1.1.min.js";
// import "../multibrowser/x509-1.1.min.js";
// import "../multibrowser/crypto-1.1.min.js";
// import "../multibrowser/plugin_autentia.js";

const TrxCentral = (props) => {
  switch (props.data) {
    case props.options[1]:
      console.log(props.options[1]);
      break;
    case props.options[2]:
      console.log(props.options[2]);
      break;
    case props.options[3]:
      console.log(props.options[3]);
      break;
    default:
      if (props.data.dni.trim().length) {
        let trxName = "../AUTENTIAHOME/Verifica";
        Verification(props, trxName);
      } else {
        alert("DNI IS EMPTY!")
      }
      break;
  };

  return (
    <h1>sda</h1>
  );
};

const Verification = (props, trxName) => {
  let dni = props.dni;

  let input = {
    Rut: dni,
    Pais: "CHILE",
  };

  let output = ["erc", "ercDesc", "NroAudit"];

  callTransaction(trxName, input, output, function (response) {
    var erc = response.ParamsGet.erc;
    var nroAudit = response.ParamsGet.NroAudit;
    erc === 0 ? alert(nroAudit) : console.log(response);
  });
};

const callTransaction = (trxName, input, output, callback) => {
  // let autentia = new plgAutentiaJS();
  // let token = (new Date()).getTime();

  // autentia.Transaccion2(trxName, input, output, true, token, function (response) {
  //   callback(response);
  // });
}



export default TrxCentral;