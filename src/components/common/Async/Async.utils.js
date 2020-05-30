/* tslint:disable */
import React from "react";
import {
  getIsLoading,
  getIsFetching,
  getHasError,
  getHasData,
} from "utils/react-query.utils";

const isFunction = (fnToCheck) => {
  return fnToCheck && {}.toString.call(fnToCheck) === "[object Function]";
};

// interface IGetHookVals {
//   queries: object;
//   mutations: object;
// }

export const getHookVals = ({ queries, mutations }) => {
  const queryVals = Object.values(queries);
  const mutationVals = Object.values(mutations);
  const hookVals = [...queryVals, ...mutationVals];

  return { hookVals, queryVals, mutationVals };
};

// interface IGetComponentStatus {
//   isLoading?: boolean | (() => boolean);
//   isFetching?: boolean | (() => boolean);
//   hasError?: boolean | (() => boolean);
//   hasData?: boolean | (() => boolean);
//   hookVals: object;
// }

export const getComponentIsLoading = ({ isLoading, hookVals }) => {
  const fnResult = isFunction(isLoading) && isLoading();
  const hooksResult = getIsLoading(hookVals);

  return isLoading || fnResult || hooksResult;
};
export const getComponentIsFetching = ({ isFetching, hookVals }) => {
  const fnResult = isFunction(isFetching) && isFetching();
  const hooksResult = getIsFetching(hookVals);

  return isFetching || fnResult || hooksResult;
};
export const getComponentHasError = ({ hasError, hookVals }) => {
  const fnResult = isFunction(hasError) && hasError();
  const hooksResult = getHasError(hookVals);

  return hasError || fnResult || hooksResult;
};

export const getComponentHasData = ({ hasData, hookVals }) => {
  const fnResult = isFunction(hasData) && hasData();
  const hooksResult = getHasData(hookVals);

  return hasData || fnResult || hooksResult;
};

export const getComponent = (
  injectedComponent,
  defaultComponent,
  { props } = {}
) => {
  let component = defaultComponent;

  if (injectedComponent) {
    component = isFunction(injectedComponent)
      ? injectedComponent({ ...props, defaultComponent })
      : injectedComponent;
  }

  return component;
};

export const render = ({ children, queries, mutations, hookVals }) => {
  if (typeof children !== "function") {
    throw Error("Async Component requires children to be a function");
  }

  if (hookVals.length === 1) return children(hookVals[0]);
  return children({ queries, mutations });
};
