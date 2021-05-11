const separateMsgStr = (str) => {
  const index = str.indexOf(":");
  if (index == -1) {
    throw new Error(`Message Classify failed: ${str}`);
  }
  return [str.substring(0, index), str.substring(index + 1)];
};

const refineMsg = (type, msg) => {
  switch (type) {
    case "connection":
      return `notice:${msg}님이 입장하셨습니다.`;
    case "disconnection":
      return `notice:${msg}님이 퇴장하셨습니다.`;
    default:
      return `${type}:${msg}`;
  }
};

module.exports = {
  separateMsgStr,
  refineMsg,
};
