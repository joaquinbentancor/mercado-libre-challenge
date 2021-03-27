export const useServerSideData = () => {
  const getData = <T>() => {
    return (typeof window !== "undefined" ? window.__INITIAL_DATA__ : {}) as T;
  };

  return { getData };
};
