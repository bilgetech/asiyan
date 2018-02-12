dpd.sms
  .get({})
  .then((messages) => {
    setResult(messages);
  })
  .catch(cancel);
