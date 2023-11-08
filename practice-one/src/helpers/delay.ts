async function delay<T>(promise: Promise<T>): Promise<T> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return promise;
}

export default delay;
