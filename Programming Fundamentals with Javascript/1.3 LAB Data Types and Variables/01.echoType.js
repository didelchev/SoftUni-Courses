function echoType(param) {
  let dataType = typeof param;
  console.log(typeof param);
  if (dataType === "string" || dataType === "number") {
    console.log(param);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}

echoType("Hello, JavaScript!");
