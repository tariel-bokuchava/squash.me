const debugEnabled = 1;
const debugLog = (debugMessage) => (
 debugEnabled ? console.log(debugMessage) : ''
);

export default debugLog;
