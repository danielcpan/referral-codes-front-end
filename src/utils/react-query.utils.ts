const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const getIsLoading = (hook) => {
  if (Array.isArray(hook)) {
    return hook.some((el) => el.status === "loading");
  }

  return hook.status === "loading";
};

export const getIsFetching = (hook) => {
  if (Array.isArray(hook)) {
    return hook.some((el) => el.isFetching);
  }

  return hook.isFetching;
};

export const getHasError = (hook) => {
  if (Array.isArray(hook)) {
    return hook.some((el) => el.error);
  }

  return !!hook.error;
};

export const getHasData = (hook) => {
  if (Array.isArray(hook)) {
    return hook.every((el) => el.data);
  }

  return !!hook.data;
};

export const getLoadingHooks = (hook) => {
  const hooks = Object.entries(hook).reduce((acc, [key, val]) => {
    if (val.status === "loading") acc[key] = hook[key];
    return acc;
  }, {});

  return !isObjEmpty(hooks) ? hooks : null;
};

export const getFetchingHooks = (hook) => {
  const hooks = Object.entries(hook).reduce((acc, [key, val]) => {
    if (val.isFetching) acc[key] = hook[key];
    return acc;
  }, {});

  return !isObjEmpty(hooks) ? hooks : null;
};

export const getErrorHooks = (hook) => {
  const hooks = Object.entries(hook).reduce((acc, [key, val]) => {
    if (!!val.error) acc[key] = hook[key];
    return acc;
  }, {});

  return !isObjEmpty(hooks) ? hooks : null;
};

export const getErrors = (hook) => {
  if (Array.isArray(hook)) {
    return hook.reduce((acc, el) => {
      if (!!el.error) acc.push(el.error);
      return acc;
    }, []);
  }

  return hook.error;
};

export const getNoDataHooks = (hook) => {
  const hooks = Object.entries(hook).reduce((acc, [key, val]) => {
    if (!!val.data) acc[key] = hook[key];
    return acc;
  }, {});

  return !isObjEmpty(hooks) ? hooks : null;
};

export default {
  getIsLoading,
  getIsFetching,
  getHasError,
  getHasData,
  getErrors,
};
