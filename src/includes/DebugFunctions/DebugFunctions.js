const debugEnabled = 1;
const debugLog = (debugMessage) => {
    return (debugEnabled ? console.log(debugMessage) : '');
}

export default debugLog;