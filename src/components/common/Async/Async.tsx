import React from "react";
import {
  Loading as DefaultLoading,
  ServerError as DefaultServerError,
} from "components/common";
import {
  getHookVals,
  getComponentIsLoading,
  getComponentIsFetching,
  getComponentHasError,
  getComponentHasData,
  render,
} from "./Async.utils";

interface IAsyncDefaultComponents {
  Loading: React.ReactNode;
  Fetching: React.ReactNode;
  Error: React.ReactNode;
  NoData: React.ReactNode;
}

interface IAsync {
  queries: object;
  mutations: object;
  isLoading: boolean | (() => boolean);
  isFetching: boolean | (() => boolean);
  hasError: boolean | (() => boolean);
  hasData: boolean | (() => boolean);
  showFetching: boolean;
  components: IAsyncDefaultComponents;
  manual: boolean;
  children: React.ReactChildren;
}

// Flexible Async HOC to abstract loading, error, and no data states.
// Can explicitly define states or automatically compute them based
// their hook values (use React-Query).
// Good alternative to React Suspense until it is released officially.
const Async: React.FC<IAsync> = ({
  queries = {}, // gets
  mutations = {}, // post, puts, patch, etc
  isLoading = false,
  isFetching = false, // Useful as background fetch indicator
  hasError = false,
  hasData = false,
  showFetching = false, // Disable fetching indicator when not needed
  // Injectable custom components for complex logic. Returns useful props
  // to alleviate checking for which hooks are causing that state
  components: {
    Loading = DefaultLoading,
    Fetching = DefaultLoading,
    Error = DefaultServerError,
    NoData = <div>No Data!</div>,
  } = {},
  manual = false, // Useful for disabling automatically computed states
  children, // supports passing props
}) => {
  const { queryVals, hookVals } = getHookVals({ queries, mutations });

  if (manual) render({ children, queries, mutations, hookVals });

  if (getComponentIsLoading({ hookVals, isLoading })) return Loading;

  if (showFetching && getComponentIsFetching({ hookVals, isFetching }))
    return Fetching;

  if (getComponentHasError({ hookVals, hasError })) return Error;

  if (!getComponentHasData({ hookVals: queryVals, hasData })) return NoData;

  return render({ children, queries, mutations, hookVals });
};

export default Async;
