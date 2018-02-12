const messages = body;

const promises = messages.map(message => dpd.sms.post(message));

$addCallback();

Promise.all(promises)
  .then(() => {
    setResult({ success: true });
    $finishCallback();
  })
  .catch(cancel);
